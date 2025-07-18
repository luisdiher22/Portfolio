"""
Portfolio Flask Application

A secure Flask application that serves as a portfolio website,
allowing users to submit SQL queries to interact with a SQLite database.
"""

from flask import Flask, render_template, request, jsonify
import sqlite3
import logging
import os
import re
from typing import Dict, Any, Tuple

# Import configuration
try:
    from config import config
except ImportError:
    # Fallback configuration if config.py doesn't exist
    class Config:
        DATABASE_URL = "portfolio.db"
        MAX_QUERY_LENGTH = 1000
        MAX_RESULTS = 100
        ALLOWED_SQL_OPERATIONS = {
            "SELECT",
            "WITH",
            "FROM",
            "WHERE",
            "JOIN",
            "INNER JOIN",
            "LEFT JOIN",
            "RIGHT JOIN",
            "FULL JOIN",
            "GROUP BY",
            "ORDER BY",
            "HAVING",
            "LIMIT",
            "OFFSET",
            "UNION",
            "INTERSECT",
            "EXCEPT",
        }
        BLOCKED_SQL_OPERATIONS = {
            "DROP",
            "DELETE",
            "UPDATE",
            "INSERT",
            "ALTER",
            "CREATE",
            "TRUNCATE",
            "REPLACE",
            "MERGE",
            "EXEC",
            "EXECUTE",
        }
        DEBUG = True
        HOST = "0.0.0.0"
        PORT = 5000

    config = {"default": Config}

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# Load configuration
env = os.environ.get("FLASK_ENV", "default")
app_config = config.get(env, config["default"])

# Constants from configuration
DB_PATH = getattr(app_config, "DATABASE_URL", "portfolio.db")
ALLOWED_KEYWORDS = getattr(
    app_config,
    "ALLOWED_SQL_OPERATIONS",
    {
        "SELECT",
        "FROM",
        "WHERE",
        "ORDER BY",
        "GROUP BY",
        "HAVING",
        "LIMIT",
        "OFFSET",
        "JOIN",
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "COUNT",
        "SUM",
        "AVG",
        "MIN",
        "MAX",
        "DISTINCT",
    },
)
BLOCKED_KEYWORDS = getattr(
    app_config,
    "BLOCKED_SQL_OPERATIONS",
    {
        "DROP",
        "DELETE",
        "UPDATE",
        "INSERT",
        "ALTER",
        "CREATE",
        "TRUNCATE",
        "REPLACE",
        "MERGE",
        "EXEC",
        "EXECUTE",
        "UNION",
        "OR",
        "--",
        "/*",
        "*/",
    },
)
ALLOWED_TABLES = {"projects", "skills", "education", "experience", "clients"}
MAX_QUERY_LENGTH = getattr(app_config, "MAX_QUERY_LENGTH", 1000)


def validate_sql_query(query: str) -> Tuple[bool, str]:
    """
    Validate SQL query for security and allowed operations.

    Args:
        query (str): The SQL query to validate

    Returns:
        Tuple[bool, str]: (is_valid, error_message)
    """
    if not query or not query.strip():
        return False, "Query cannot be empty"

    if len(query) > MAX_QUERY_LENGTH:
        return (
            False,
            f"Query too long. Maximum {MAX_QUERY_LENGTH} " f"characters allowed",
        )

    # Convert to uppercase for keyword checking
    query_upper = query.upper()

    # Block dangerous keywords (with word boundaries)
    for keyword in BLOCKED_KEYWORDS:
        # Use word boundaries to match whole words
        pattern = r"\b" + re.escape(keyword) + r"\b"
        if re.search(pattern, query_upper):
            return False, f"Operation '{keyword}' is not allowed"

    # Additional SQL injection patterns
    injection_patterns = [
        r"'.*'.*=.*'.*'",  # 'x'='x' patterns
        r"1\s*=\s*1",  # 1=1 patterns
        r"0\s*=\s*0",  # 0=0 patterns
        r"true\s*=\s*true",  # true=true patterns
    ]

    for pattern in injection_patterns:
        if re.search(pattern, query_upper):
            return False, "Suspicious SQL pattern detected"

    # Ensure query starts with SELECT
    if not query_upper.strip().startswith("SELECT"):
        return False, "Only SELECT queries are allowed"

    # Check for semicolon (prevent multiple statements)
    if query.count(";") > 1 or (
        query.count(";") == 1 and not query.strip().endswith(";")
    ):
        return False, "Multiple statements are not allowed"

    # Validate table names first
    table_found = False
    for table in ALLOWED_TABLES:
        if table.upper() in query_upper:
            table_found = True
            break

    if not table_found:
        return (
            False,
            f"Query must reference at least one allowed table: "
            f"{', '.join(ALLOWED_TABLES)}",
        )

    # Check for multiple table references that could indicate UNION attacks
    table_count = sum(1 for table in ALLOWED_TABLES if table.upper() in query_upper)
    if table_count > 1 and ("UNION" in query_upper or "JOIN" not in query_upper):
        # Allow JOINs but be suspicious of multiple tables without explicit JOINs
        return False, "Multiple table references detected without explicit JOIN"

    return True, ""


@app.route("/")
def index() -> str:
    """
    Render the main portfolio page.

    Returns:
        str: Rendered HTML template
    """
    return render_template("index.html")


@app.route("/query", methods=["POST"])
def query() -> Dict[str, Any]:
    """
    Execute a validated SQL query and return results.

    Returns:
        Dict[str, Any]: JSON response with query results or error
    """
    try:
        # Check content type
        if not request.is_json:
            return jsonify({"error": "Content-Type must be application/json"}), 400

        # Get JSON data
        json_data = request.get_json()
        if not json_data:
            return jsonify({"error": "No JSON data provided"}), 400

        sql = json_data.get("query", "").strip()

        # Validate the query
        is_valid, error_message = validate_sql_query(sql)
        if not is_valid:
            logger.warning(f"Invalid query attempted: {sql[:100]}...")
            return jsonify({"error": error_message}), 400

        # Execute query safely
        with sqlite3.connect(DB_PATH) as conn:
            conn.row_factory = sqlite3.Row  # Enable column access by name
            cursor = conn.cursor()

            # Set query timeout and limits
            cursor.execute("PRAGMA query_timeout = 5000")  # 5 seconds
            cursor.execute(sql)

            # Get column names
            columns = (
                [desc[0] for desc in cursor.description] if cursor.description else []
            )

            # Fetch results with limit
            rows = cursor.fetchmany(1000)  # Limit to 1000 rows

            # Convert Row objects to regular tuples for JSON serialization
            result_rows = [tuple(row) for row in rows]

            logger.info(
                f"Query executed successfully. Returned " f"{len(result_rows)} rows"
            )

            return jsonify(
                {"columns": columns, "rows": result_rows, "row_count": len(result_rows)}
            )

    except sqlite3.Error as e:
        logger.error(f"Database error: {str(e)}")
        return jsonify({"error": "Database query failed"}), 500
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500


@app.route("/health", methods=["GET"])
def health_check() -> Dict[str, str]:
    """
    Health check endpoint for deployment monitoring.

    Returns:
        Dict[str, str]: JSON response indicating service health
    """
    return jsonify({"status": "healthy", "message": "Portfolio app is running"})


@app.route("/projects", methods=["GET"])
def projects() -> Dict[str, Any]:
    """
    Get all projects from the database.

    Returns:
        Dict[str, Any]: JSON response with projects data or error
    """
    try:
        with sqlite3.connect(DB_PATH) as conn:
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM projects LIMIT 100")

            # Convert rows to list of dictionaries
            projects_list = [dict(row) for row in cursor.fetchall()]

            return jsonify({"projects": projects_list})

    except sqlite3.Error as e:
        logger.error(f"Database error in projects endpoint: {str(e)}")
        return jsonify({"error": "Failed to fetch projects"}), 500
    except Exception as e:
        logger.error(f"Unexpected error in projects endpoint: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500


@app.errorhandler(404)
def not_found(error) -> Tuple[Dict[str, str], int]:
    """Handle 404 errors."""
    return jsonify({"error": "Endpoint not found"}), 404


@app.errorhandler(405)
def method_not_allowed(error) -> Tuple[Dict[str, str], int]:
    """Handle 405 errors."""
    return jsonify({"error": "Method not allowed"}), 405


if __name__ == "__main__":
    # Get configuration values
    debug = getattr(app_config, "DEBUG", False)
    host = getattr(app_config, "HOST", "127.0.0.1")
    port = getattr(app_config, "PORT", 5000)

    # Override with environment variables if present
    debug = os.environ.get("FLASK_DEBUG", str(debug)).lower() == "true"
    host = os.environ.get("HOST", host)
    port = int(os.environ.get("PORT", port))

    app.run(debug=debug, host=host, port=port)

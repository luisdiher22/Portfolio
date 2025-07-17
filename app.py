from flask import Flask, render_template,request,jsonify
import sqlite3

# This is a simple Flask application that serves as a portfolio website.
# It allows users to submit SQL queries to interact with a SQLite database
app = Flask(__name__)

# Define the path to the SQLite database file
# This database will store portfolio projects.
DB_PATH = 'portfolio.db'

# When someone accesses the root URL, render the index.html template
# This template should contain a form to submit SQL queries and display results.
@app.route('/')
def index():
    return render_template('index.html')


# When a POST request is made to the '/query' endpoint, execute the SQL query provided in the form data
# and return the results as JSON.
@app.route('/query', methods=['POST'])
def query():
    print("Query endpoint hit!")  # <--- prueba si llega el POST
    sql = request.form.get('query')
    print("SQL received:", sql)
    try:
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute(sql)
            columns = [desc[0] for desc in cursor.description] if cursor.description else []
            rows = cursor.fetchall()
            return jsonify({
                'columns': columns,
                'rows': rows
            })
    except Exception as e:
            return jsonify({
                'error': str(e)
            })

# When a GET request is made to the '/projects' endpoint, fetch all projects from the database
# and return them as JSON.
@app.route('/projects', methods=['GET'])
def projects():
    try:
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM projects")
            columns = [desc[0] for desc in cursor.description]
            rows = cursor.fetchall()
            return jsonify({
                'columns': columns,
                'rows': rows
            })
    except Exception as e:
        return jsonify({
            'error': str(e)
        })

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)

"""
Test suite for Portfolio Flask Application

Run tests with: python -m pytest tests.py -v
"""

import unittest
import json
import sqlite3
import os
from app import app, validate_sql_query, DB_PATH


class PortfolioTestCase(unittest.TestCase):
    """Test cases for Portfolio application"""
    
    def setUp(self):
        """Set up test fixtures"""
        self.app = app.test_client()
        self.app.testing = True
        
        # Ensure database exists
        if not os.path.exists(DB_PATH):
            self.fail(f"Database {DB_PATH} not found. Please ensure it exists.")
    
    def test_home_page_loads(self):
        """Test that home page loads successfully"""
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Portfolio', response.data)
    
    def test_valid_sql_query(self):
        """Test valid SQL query validation"""
        valid_queries = [
            "SELECT * FROM projects",
            "SELECT name, description FROM projects WHERE id = 1",
            "SELECT COUNT(*) FROM skills",
            "SELECT p.name, s.name FROM projects p JOIN skills s ON p.id = s.id"
        ]
        
        for query in valid_queries:
            with self.subTest(query=query):
                is_valid, message = validate_sql_query(query)
                self.assertTrue(is_valid, f"Query should be valid: {query}. Error: {message}")
    
    def test_invalid_sql_query(self):
        """Test invalid SQL query validation"""
        invalid_queries = [
            "",  # Empty query
            "DROP TABLE projects",  # Dangerous operation
            "DELETE FROM projects",  # Dangerous operation
            "UPDATE projects SET name = 'test'",  # Dangerous operation
            "INSERT INTO projects VALUES (1, 'test', 'test')",  # Dangerous operation
            "CREATE TABLE test (id INT)",  # Dangerous operation
            "SELECT * FROM projects; DROP TABLE projects;",  # Multiple statements
            "x" * 1001,  # Too long
            "SHOW TABLES",  # Not SELECT
        ]
        
        for query in invalid_queries:
            with self.subTest(query=query[:50] + "..." if len(query) > 50 else query):
                is_valid, message = validate_sql_query(query)
                self.assertFalse(is_valid, f"Query should be invalid: {query[:50]}")
                self.assertIsInstance(message, str)
                self.assertGreater(len(message), 0)
    
    def test_query_endpoint_valid(self):
        """Test query endpoint with valid SQL"""
        response = self.app.post('/query', 
                                data=json.dumps({'query': 'SELECT * FROM projects LIMIT 1'}),
                                content_type='application/json')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertIn('columns', data)
        self.assertIn('rows', data)
        self.assertIsInstance(data['columns'], list)
        self.assertIsInstance(data['rows'], list)
    
    def test_query_endpoint_invalid(self):
        """Test query endpoint with invalid SQL"""
        response = self.app.post('/query', 
                                data=json.dumps({'query': 'DROP TABLE projects'}),
                                content_type='application/json')
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertIn('error', data)
    
    def test_query_endpoint_empty(self):
        """Test query endpoint with empty query"""
        response = self.app.post('/query', 
                                data=json.dumps({'query': ''}),
                                content_type='application/json')
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertIn('error', data)
    
    def test_query_endpoint_no_json(self):
        """Test query endpoint without JSON content type"""
        response = self.app.post('/query', data='invalid data')
        self.assertEqual(response.status_code, 400)
        data = json.loads(response.data)
        self.assertIn('error', data)
    
    def test_projects_endpoint(self):
        """Test projects endpoint"""
        response = self.app.get('/projects')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data)
        self.assertIn('projects', data)
        self.assertIsInstance(data['projects'], list)
    
    def test_404_handler(self):
        """Test 404 error handler"""
        response = self.app.get('/nonexistent')
        self.assertEqual(response.status_code, 404)
        data = json.loads(response.data)
        self.assertIn('error', data)
    
    def test_405_handler(self):
        """Test 405 error handler"""
        response = self.app.post('/')  # GET only endpoint
        self.assertEqual(response.status_code, 405)
        data = json.loads(response.data)
        self.assertIn('error', data)
    
    def test_database_connection(self):
        """Test database connection and basic structure"""
        try:
            conn = sqlite3.connect(DB_PATH)
            cursor = conn.cursor()
            
            # Test that main tables exist
            tables = ['projects', 'skills', 'education', 'experience', 'clients']
            for table in tables:
                cursor.execute(f"SELECT name FROM sqlite_master WHERE type='table' AND name='{table}'")
                result = cursor.fetchone()
                self.assertIsNotNone(result, f"Table {table} should exist")
            
            # Test that we can query each table
            for table in tables:
                cursor.execute(f"SELECT COUNT(*) FROM {table}")
                count = cursor.fetchone()[0]
                self.assertIsInstance(count, int)
                self.assertGreaterEqual(count, 0)
            
            conn.close()
        except sqlite3.Error as e:
            self.fail(f"Database connection failed: {e}")
    
    def test_sql_injection_prevention(self):
        """Test SQL injection prevention"""
        injection_attempts = [
            "SELECT * FROM projects WHERE id = 1; DROP TABLE projects; --",
            "SELECT * FROM projects WHERE name = 'test' OR '1'='1'",
            "SELECT * FROM projects WHERE id = 1 UNION SELECT * FROM sqlite_master",
            "SELECT * FROM projects WHERE id = 1; INSERT INTO projects VALUES (999, 'hack', 'hack')",
        ]
        
        for injection in injection_attempts:
            with self.subTest(injection=injection):
                is_valid, message = validate_sql_query(injection)
                self.assertFalse(is_valid, f"SQL injection should be blocked: {injection}")


class SecurityTestCase(unittest.TestCase):
    """Security-focused test cases"""
    
    def test_content_type_validation(self):
        """Test that only JSON content type is accepted"""
        app_client = app.test_client()
        
        # Test with wrong content type
        response = app_client.post('/query', 
                                 data='query=SELECT * FROM projects',
                                 content_type='application/x-www-form-urlencoded')
        self.assertEqual(response.status_code, 400)
    
    def test_query_length_limit(self):
        """Test query length limitation"""
        long_query = "SELECT * FROM projects WHERE " + "name = 'test' AND " * 100 + "id = 1"
        is_valid, message = validate_sql_query(long_query)
        self.assertFalse(is_valid)
        self.assertIn("too long", message.lower())
    
    def test_multiple_statements_blocked(self):
        """Test that multiple SQL statements are blocked"""
        multi_statement = "SELECT * FROM projects; SELECT * FROM skills;"
        is_valid, message = validate_sql_query(multi_statement)
        self.assertFalse(is_valid)


if __name__ == '__main__':
    # Run tests
    unittest.main(verbosity=2)

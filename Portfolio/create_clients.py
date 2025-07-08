import sqlite3

# Create a new SQLite database 
conn = sqlite3.connect('portfolio.db')

# Create a cursor object to execute SQL commands

cursor = conn.cursor()

# Create a table for storing portfolio data

cursor.execute('''
CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    email TEXT,
    phone TEXT 
)
''')



# Commit the changes and close the connection

conn.commit()
conn.close()

# Print a message indicating that the database has been created

print("Database 'portfolio.db' created with table 'clients'.")

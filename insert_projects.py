import sqlite3


# Connect to the SQLite database

conn = sqlite3.connect('portfolio.db')

# Create a cursor object to execute SQL commands

cursor = conn.cursor()

# Insert multiple projects into the portfolio table

projects = [
    ('Project 1', 'Description of Project 1',' '),
    ('Project 2', 'Description of Project 2',' '),
    ('Project 3', 'Description of Project 3',' '),
    ('Project 4', 'Description of Project 4',' '),
    ('Project 5', 'Description of Project 5',' ')
]

# Execute the insert command for each project

cursor.executemany('INSERT INTO projects (name, description, repo_url) VALUES (?, ?, ?)', projects)

# Commit the changes to the database

conn.commit()
# Close the connection to the database
conn.close()
# Print a message indicating that the projects have been inserted
print("Projects inserted into the 'projects' table in 'portfolio.db'.")

# Note: The repo_url is left empty as per the original request.

# If you want to add actual URLs, you can modify the 'projects' list accordingly.
# Example of adding a project with a URL
# projects.append(('Project 6', 'Description of Project 6', '


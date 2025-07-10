import sqlite3

conn = sqlite3.connect("portfolio.db")
cursor = conn.cursor()

skills = [
    ("HTML", "Web Development"),
    ("CSS", "Web Development"),
    ("JavaScript", "Web Development"),
    ("Bootstrap", "Web Development"),
    ("SQL", "Database Management"),
    ("Database Design", "Database Management"),
    ("Data Querying", "Database Management"),
    ("Data Collection", "Data Analysis"),
    ("Data Interpretation", "Data Analysis"),
    ("Reporting", "Data Analysis"),
    ("Excel", "Data Analysis"),
    ("Data Visualization", "Data Analysis"),
    ("Scrum", "Agile Methodologies"),
    ("Sprint Planning", "Agile Methodologies"),
    ("Backlog Management", "Agile Methodologies"),
    ("Jira", "Agile Methodologies")
]

cursor.executemany("INSERT INTO skills (name, category) VALUES (?, ?)", skills)

conn.commit()
conn.close()

print("Skills insertadas con éxito.")

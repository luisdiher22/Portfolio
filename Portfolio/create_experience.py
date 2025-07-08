import sqlite3

conn = sqlite3.connect('portfolio.db')

cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS experience (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    job_title TEXT NOT NULL,
    company TEXT NOT NULL,
    start_year INTEGER,
    end_year INTEGER,
    description TEXT
)
''')

conn.commit()
conn.close()
print(" created  table 'experience'.")
import sqlite3

conn = sqlite3.connect("portfolio.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS education (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    degree TEXT NOT NULL,
    institution TEXT NOT NULL,
    start_year INTEGER,
    end_year INTEGER
)
""")

conn.commit()
conn.close()

print("Tabla 'education' creada con éxito.")

import sqlite3

conn = sqlite3.connect("portfolio.db")
cursor = conn.cursor()

education_entries = [
    (
        "Bachelor's in Physical Education",
        "Universidad Autónoma de Centroamérica",
        2018,
        2021
    ),
    (
        "Bachelor's in Business Informatics",
        "Universidad de Costa Rica",
        2021,
        2025
    )
]

cursor.executemany("""
INSERT INTO education (degree, institution, start_year, end_year)
VALUES (?, ?, ?, ?)
""", education_entries)

conn.commit()
conn.close()

print("Datos de educación insertados con éxito.")

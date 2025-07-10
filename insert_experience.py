import sqlite3

conn = sqlite3.connect("portfolio.db")
cursor = conn.cursor()

experiences = [
    (
        "Receptionist",
        "Big Sky Resort",
        2019,
        2020,
        "Managed calls, emails, scheduling and administrative tasks such as filing and document handling."
    ),
    (
        "Selling Partner Support",
        "Amazon",
        2020,
        2021,
        "Supported Amazon sellers with account setup, troubleshooting, and improving performance metrics."
    ),
    (
        "Rental Operations Supervisor",
        "Angel Fire Resort",
        2021,
        2024,
        "Oversaw ski/snowboard rental operations, inventory, and trained rental staff in customer service and safety."
    )
]

cursor.executemany("""
INSERT INTO experience (job_title, company, start_year, end_year, description)
VALUES (?, ?, ?, ?, ?)
""", experiences)

conn.commit()
conn.close()

print("Experiencias insertadas con éxito.")
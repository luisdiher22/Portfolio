import sqlite3

# Conexión a la base de datos
conn = sqlite3.connect("portfolio.db")
cursor = conn.cursor()

# Asegurar que la tabla exista
cursor.execute('''
CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    email TEXT,
    phone TEXT 
)
''')

# Datos de ejemplo (16 clientes)
clients = [
    ("Ana Martínez", 28, "ana@example.com", "8888-1234"),
    ("Luis Ramírez", 34, "luisr@example.com", "8888-5678"),
    ("Carlos Gómez", 22, "carlosg@example.com", "8888-9012"),
    ("María López", 40, "marial@example.com", "8888-3456"),
    ("Diego Hernández", 31, "diego.h@example.com", "8888-7890"),
    ("Camila Rivera", 19, "camilar@example.com", "8888-2345"),
    ("Sofía Rojas", 27, "sofiar@example.com", "8888-1111"),
    ("Javier Navarro", 45, "jnavarro@example.com", "8888-2222"),
    ("Laura Jiménez", 36, "ljimenez@example.com", "8888-3333"),
    ("Marco Solís", 23, "marcos@example.com", "8888-4444"),
    ("Andrea Salas", 29, "asalas@example.com", "8888-5555"),
    ("Roberto Chaves", 38, "rchaves@example.com", "8888-6666"),
    ("Daniela Vargas", 24, "dvargas@example.com", "8888-7777"),
    ("Esteban Mora", 32, "esteban@example.com", "8888-8888"),
    ("Natalia Pérez", 21, "nperez@example.com", "8888-9999"),
    ("Héctor Soto", 50, "hsoto@example.com", "8888-0000")
]

# Inserción
cursor.executemany(
    "INSERT INTO clients (name, age, email, phone) VALUES (?, ?, ?, ?)",
    clients
)

# Guardar y cerrar
conn.commit()
conn.close()

print("16 clientes insertados exitosamente en la tabla 'clients'.")

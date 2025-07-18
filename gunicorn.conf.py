# Gunicorn Configuration File
import os

# Server socket - Use PORT from environment if available
port = os.environ.get("PORT", "5000")
bind = f"0.0.0.0:{port}"

# Worker processes
workers = 2
worker_class = "sync"
worker_connections = 1000
timeout = 30
keepalive = 2

# Logging
accesslog = "-"
errorlog = "-"
loglevel = "info"

# Process naming
proc_name = "portfolio_app"

# Server mechanics
daemon = False
pidfile = None
user = None
group = None
tmp_upload_dir = None

# SSL (if needed)
keyfile = None
certfile = None

# Application
module = "app:app"

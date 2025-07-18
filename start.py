#!/usr/bin/env python3
"""
Production startup script for Railway deployment
Tries gunicorn first, falls back to Flask dev server if needed
"""
import os
import sys
import subprocess

def main():
    port = os.environ.get("PORT", "5000")
    host = "0.0.0.0"
    
    # Try gunicorn first
    try:
        print("Attempting to start with gunicorn...")
        cmd = [
            "python3", "-m", "gunicorn",
            "--bind", f"{host}:{port}",
            "--workers", "1",
            "--timeout", "60",
            "--preload",
            "app:app"
        ]
        print(f"Running: {' '.join(cmd)}")
        subprocess.run(cmd, check=True)
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print(f"Gunicorn failed: {e}")
        print("Falling back to Flask development server...")
        
        # Import and run Flask app directly
        try:
            import app
            print(f"Starting Flask app on {host}:{port}")
            app.app.run(
                host=host,
                port=int(port),
                debug=False,
                threaded=True
            )
        except Exception as e:
            print(f"Flask startup failed: {e}")
            sys.exit(1)

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
Simple Flask server startup for Railway deployment
Direct Flask execution without gunicorn dependencies
"""
import os
import sys

def main():
    # Import the Flask app
    try:
        import app
        print("Flask app imported successfully")
    except Exception as e:
        print(f"Failed to import app: {e}")
        sys.exit(1)
    
    # Get configuration
    port = int(os.environ.get("PORT", "5000"))
    host = os.environ.get("HOST", "0.0.0.0")
    debug = os.environ.get("FLASK_DEBUG", "false").lower() == "true"
    
    print(f"Starting Flask server on {host}:{port}")
    print(f"Debug mode: {debug}")
    
    # Start the Flask app
    try:
        app.app.run(
            host=host,
            port=port,
            debug=debug,
            threaded=True,
            use_reloader=False  # Disable reloader in production
        )
    except Exception as e:
        print(f"Failed to start Flask app: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()

#!/bin/bash
# Railway deployment startup script
# Tries different Python commands to find the right one

echo "=== Railway Deployment Startup ==="
echo "Checking available Python commands..."

# Check which Python commands are available
if command -v python3 &> /dev/null; then
    echo "✅ python3 found"
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    echo "✅ python found"
    PYTHON_CMD="python"
else
    echo "❌ No Python interpreter found!"
    exit 1
fi

echo "Using Python command: $PYTHON_CMD"
echo "Python version:"
$PYTHON_CMD --version

echo "Starting Flask application..."
exec $PYTHON_CMD simple_start.py

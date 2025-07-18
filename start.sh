#!/bin/bash
# Railway deployment startup script
# Comprehensive Python detection and debugging

echo "=== Railway Deployment Debug ==="
echo "Container info:"
echo "OS: $(uname -a)"
echo "Shell: $SHELL"
echo "PATH: $PATH"
echo "PWD: $(pwd)"
echo "User: $(whoami)"
echo "================================="

echo "Checking for Python interpreters in common locations..."

# Check common Python locations
PYTHON_LOCATIONS=(
    "/usr/bin/python3"
    "/usr/bin/python"
    "/usr/local/bin/python3"
    "/usr/local/bin/python"
    "/opt/python/bin/python3"
    "/opt/python/bin/python"
    "python3"
    "python"
)

PYTHON_CMD=""
for cmd in "${PYTHON_LOCATIONS[@]}"; do
    echo "Checking: $cmd"
    if command -v "$cmd" &> /dev/null; then
        echo "✅ Found: $cmd"
        PYTHON_CMD="$cmd"
        break
    else
        echo "❌ Not found: $cmd"
    fi
done

if [ -z "$PYTHON_CMD" ]; then
    echo "=== DETAILED SYSTEM INFO ==="
    echo "Available commands:"
    ls -la /usr/bin/ | grep python || echo "No python in /usr/bin/"
    ls -la /usr/local/bin/ | grep python || echo "No python in /usr/local/bin/"
    echo "Which commands are available:"
    which python3 || echo "python3 not in which"
    which python || echo "python not in which"
    whereis python || echo "python not found by whereis"
    echo "Environment variables:"
    env | grep -i python || echo "No python env vars"
    echo "============================="
    echo "❌ No Python interpreter found anywhere!"
    echo "This suggests the container doesn't have Python installed."
    echo "Trying to start anyway with direct module execution..."
    
    # Last resort - try running with exec anyway
    exec python3 simple_start.py || exec python simple_start.py || {
        echo "❌ All Python execution attempts failed"
        echo "Container environment appears to be missing Python entirely"
        exit 1
    }
else
    echo "✅ Using Python command: $PYTHON_CMD"
    echo "Python version:"
    $PYTHON_CMD --version
    
    echo "Python location details:"
    which $PYTHON_CMD
    ls -la $(which $PYTHON_CMD) || echo "Could not get details"
    
    echo "Starting Flask application..."
    exec $PYTHON_CMD simple_start.py
fi

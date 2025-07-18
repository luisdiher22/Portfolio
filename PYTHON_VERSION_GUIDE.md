# Python Version Compatibility Guide

## Overview
This project has been updated to support Python 3.9+ with flexible dependency version ranges for better compatibility across different environments.

## Supported Python Versions
- **Python 3.9+**: Fully supported
- **Python 3.8**: No longer supported (Flask 3.1.1 requires Python 3.9+)
- **Recommended**: Python 3.11+ for best performance

## Dependencies
The project uses flexible version ranges to ensure compatibility:

### Core Dependencies
- **Flask**: >= 2.3.3, < 4.0.0
- **Werkzeug**: >= 2.3.8 (auto-resolved with Flask)
- **Gunicorn**: >= 22.0.0, < 24.0.0
- **Python-dotenv**: >= 1.0.0, < 2.0.0

### Development Dependencies
- **pytest**: >= 7.4.0, < 8.0.0
- **flake8**: >= 6.0.0
- **black**: >= 23.0.0
- **bandit**: >= 1.7.0
- **safety**: >= 2.0.0

## Installation

### Production
```bash
pip install -r requirements.txt
```

### Development
```bash
pip install -r requirements-dev.txt
```

## Security Updates
All dependencies have been updated to address security vulnerabilities:
- **Flask**: Updated to 3.1.1 (fixes CVE-2025-47278)
- **Werkzeug**: Updated to 3.1.3+ (fixes multiple CVEs)
- **Gunicorn**: Updated to 23.0.0+ (fixes CVE-2024-1135, CVE-2024-6827)

## CI/CD Pipeline
The GitHub Actions pipeline now tests against:
- Python 3.9
- Python 3.10
- Python 3.11
- Python 3.12

## Deployment Platforms
Compatible with all major free hosting platforms:
- **Railway**: Supports Python 3.9+
- **Render**: Supports Python 3.9+
- **Vercel**: Supports Python 3.9+
- **PythonAnywhere**: Supports Python 3.9+
- **Heroku**: Removed (no longer free)

## Runtime Configuration
- **Development**: Python 3.11.10 (runtime.txt)
- **Production**: Uses platform default (3.11+)

## Migration Notes
If upgrading from an older version:
1. Ensure Python 3.9+ is installed
2. Update dependencies: `pip install -r requirements.txt`
3. Run tests: `python -m pytest tests.py -v`
4. Verify security: `safety scan`

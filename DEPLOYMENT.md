# Deployment Guide

## Overview

This Portfolio application is configured for automated deployment using GitHub Actions CI/CD pipeline. The workflow includes testing, security scanning, and build verification.

## Prerequisites

- GitHub repository with Actions enabled
- Free hosting platform account (Railway, Render, or Vercel)
- Python 3.8+ environment

## Local Development

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/luisdiher22/Portfolio.git
   cd Portfolio
   ```

2. Create a virtual environment:
   ```bash
   python -m venv .venv
   .venv\Scripts\activate  # Windows
   source .venv/bin/activate  # Linux/Mac
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file (optional):
   ```
   FLASK_ENV=development
   SECRET_KEY=your-secret-key-here
   DEBUG=True
   ```

5. Run the application:
   ```bash
   python app.py
   ```

## CI/CD Pipeline

### GitHub Actions Workflow

The `.github/workflows/ci-cd.yml` file defines the complete CI/CD pipeline:

1. **Testing Stage**: Runs on Python 3.8, 3.9, 3.10, and 3.11
2. **Security Scanning**: Uses Bandit, Safety, and Trivy
3. **Build Verification**: Ensures the application starts correctly

### GitHub Secrets (Optional)

No secrets are required for the basic CI/CD pipeline. The workflow will run tests and security scans automatically on every push and pull request.

## Deployment Options

### Option 1: Railway (Recommended - Free)

[Railway](https://railway.app/) offers free hosting with GitHub integration:

1. **Setup**:
   - Go to [railway.app](https://railway.app/)
   - Sign up with your GitHub account
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your Portfolio repository

2. **Configuration**:
   - Railway will auto-detect Python and Flask
   - Add environment variables:
     ```
     FLASK_ENV=production
     SECRET_KEY=your-production-secret-key
     DEBUG=False
     ```

3. **Domain**: Railway provides a free subdomain like `yourapp.railway.app`

### Option 2: Render (Free)

[Render](https://render.com/) offers free web services:

1. **Setup**:
   - Go to [render.com](https://render.com/)
   - Sign up with GitHub
   - Click "New" → "Web Service"
   - Connect your GitHub repository

2. **Configuration**:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Environment**: Set `FLASK_ENV=production`

### Option 3: Vercel (Free)

[Vercel](https://vercel.com/) with serverless functions:

1. **Setup**:
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel` in your project directory
   - Follow the prompts

2. **Configuration**: Create `vercel.json`:
   ```json
   {
     "builds": [
       {
         "src": "app.py",
         "use": "@vercel/python"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "app.py"
       }
     ]
   }
   ```

### Option 4: PythonAnywhere (Free Tier)

[PythonAnywhere](https://www.pythonanywhere.com/) offers free Python hosting:

1. **Setup**:
   - Create a free account
   - Upload your files via the Files tab
   - Create a web app in the Web tab
   - Configure WSGI file to point to your app

### Option 5: GitHub Pages + Static Export

For a static version using GitHub Pages:

1. **Convert to static**: Export your data to JSON
2. **Use GitHub Pages**: Enable in repository settings
3. **Custom domain**: Optional custom domain support

## Environment Variables

### Production Environment

Set these environment variables in your production environment:

```
FLASK_ENV=production
SECRET_KEY=your-production-secret-key
DEBUG=False
```

### Development Environment

Create a `.env` file with:

```
FLASK_ENV=development
SECRET_KEY=dev-secret-key
DEBUG=True
```

## Performance Optimization

### Production Recommendations

1. **Web Server**: Use Gunicorn (included in requirements.txt)
2. **Database**: Consider PostgreSQL for production
3. **Caching**: Implement Redis for session storage
4. **CDN**: Use CloudFlare for static assets

### Monitoring

The application includes:
- Custom analytics system
- Performance monitoring
- Error tracking
- Health check endpoints

## Security Considerations

### Implemented Security Features

- SQL injection prevention
- Input validation
- CSRF protection
- Security headers
- Environment variable configuration

### Security Scanning

The CI/CD pipeline includes:
- **Bandit**: Python security linter
- **Safety**: Dependency vulnerability scanner
- **Trivy**: Container security scanner

## Troubleshooting

### Common Issues

1. **Import Error for dotenv**:
   ```bash
   pip install python-dotenv
   ```

2. **Railway/Render Deployment Fails**:
   - Check if runtime.txt specifies correct Python version
   - Verify all dependencies are in requirements.txt
   - Check build logs for specific errors
   - Ensure gunicorn is in requirements.txt

3. **Database Issues**:
   - Run database initialization scripts
   - Check file permissions for SQLite

### Debug Mode

Enable debug mode for development:

```python
# In app.py
app.debug = True
```

Or set environment variable:
```
DEBUG=True
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `python -m pytest`
5. Submit a pull request

## Support

For issues and questions:
- Create an issue using the GitHub issue templates
- Check the troubleshooting section
- Review the CI/CD workflow logs for deployment issues

## License

This project is licensed under the MIT License - see the LICENSE file for details.

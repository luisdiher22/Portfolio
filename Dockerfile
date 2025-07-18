# Simple Dockerfile for Railway deployment
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy requirements first for better caching
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application files
COPY . .

# Expose the port (Railway will set PORT env var)
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD python -c "import requests; requests.get('http://localhost:'+str(__import__('os').environ.get('PORT', '5000'))+'/health', timeout=5)" || exit 1

# Start the application
CMD ["python3", "simple_start.py"]

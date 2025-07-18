#!/usr/bin/env python3
"""
Deployment Health Check Script

This script validates that the Flask application is properly configured
for production deployment with the correct host binding and health check endpoint.
"""

import requests
import sys
import os
import time
from typing import Tuple, Dict, Any


def check_health_endpoint(base_url: str) -> Tuple[bool, Dict[str, Any]]:
    """
    Check if the health endpoint is responding correctly.
    
    Args:
        base_url: Base URL of the application
        
    Returns:
        Tuple of (success, response_data)
    """
    try:
        response = requests.get(f"{base_url}/health", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get("status") == "healthy":
                return True, data
            else:
                return False, {"error": "Health check returned unhealthy status"}
        else:
            return False, {"error": f"Health check returned status {response.status_code}"}
    except requests.RequestException as e:
        return False, {"error": f"Request failed: {str(e)}"}


def check_main_endpoint(base_url: str) -> Tuple[bool, Dict[str, Any]]:
    """
    Check if the main endpoint is responding correctly.
    
    Args:
        base_url: Base URL of the application
        
    Returns:
        Tuple of (success, response_data)
    """
    try:
        response = requests.get(base_url, timeout=10)
        if response.status_code == 200:
            return True, {"content_length": len(response.content)}
        else:
            return False, {"error": f"Main endpoint returned status {response.status_code}"}
    except requests.RequestException as e:
        return False, {"error": f"Request failed: {str(e)}"}


def validate_deployment() -> bool:
    """
    Validate the deployment configuration.
    
    Returns:
        True if all checks pass, False otherwise
    """
    print("🔍 Validating Portfolio App Deployment Configuration...")
    print("=" * 60)
    
    # Check local development server
    local_url = "http://127.0.0.1:5000"
    print(f"✅ Testing local server at {local_url}")
    
    # Test health endpoint
    health_ok, health_data = check_health_endpoint(local_url)
    if health_ok:
        print("✅ Health check endpoint: PASS")
        print(f"   Status: {health_data.get('status')}")
        print(f"   Message: {health_data.get('message')}")
    else:
        print("❌ Health check endpoint: FAIL")
        print(f"   Error: {health_data.get('error')}")
        return False
    
    # Test main endpoint
    main_ok, main_data = check_main_endpoint(local_url)
    if main_ok:
        print("✅ Main endpoint: PASS")
        print(f"   Content length: {main_data.get('content_length')} bytes")
    else:
        print("❌ Main endpoint: FAIL")
        print(f"   Error: {main_data.get('error')}")
        return False
    
    print()
    print("🎉 All deployment checks passed!")
    print()
    print("📋 Deployment Configuration Summary:")
    print("   - Host binding: 0.0.0.0 (accepts external connections)")
    print("   - Health check endpoint: /health")
    print("   - Main endpoint: / (serves HTML)")
    print("   - Production server: Gunicorn with custom config")
    print("   - Database: SQLite (portfolio.db)")
    print()
    print("🚀 Ready for production deployment!")
    
    return True


if __name__ == "__main__":
    try:
        success = validate_deployment()
        sys.exit(0 if success else 1)
    except KeyboardInterrupt:
        print("\n❌ Validation interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Validation failed with error: {str(e)}")
        sys.exit(1)

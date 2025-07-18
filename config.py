# Portfolio Configuration

import os
from typing import Dict, Any

class Config:
    """Base configuration class"""
    
    # Security
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    
    # Database
    DATABASE_URL = os.environ.get('DATABASE_URL') or 'portfolio.db'
    
    # Flask settings
    DEBUG = os.environ.get('FLASK_DEBUG', 'False').lower() == 'true'
    PORT = int(os.environ.get('PORT', 5000))
    HOST = os.environ.get('HOST', '127.0.0.1')
    
    # SQL Query limits
    MAX_QUERY_LENGTH = int(os.environ.get('MAX_QUERY_LENGTH', 1000))
    MAX_RESULTS = int(os.environ.get('MAX_RESULTS', 100))
    
    # Logging
    LOG_LEVEL = os.environ.get('LOG_LEVEL', 'INFO')
    LOG_FILE = os.environ.get('LOG_FILE', 'portfolio.log')
    
    # Allowed SQL operations
    ALLOWED_SQL_OPERATIONS = {
        'SELECT', 'WITH', 'FROM', 'WHERE', 'JOIN', 'INNER JOIN', 
        'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN', 'GROUP BY', 'ORDER BY',
        'HAVING', 'LIMIT', 'OFFSET', 'UNION', 'INTERSECT', 'EXCEPT'
    }
    
    # Blocked SQL operations (security)
    BLOCKED_SQL_OPERATIONS = {
        'DROP', 'DELETE', 'UPDATE', 'INSERT', 'ALTER', 'CREATE',
        'TRUNCATE', 'REPLACE', 'MERGE', 'EXEC', 'EXECUTE'
    }
    
    @classmethod
    def get_config(cls) -> Dict[str, Any]:
        """Get configuration as dictionary"""
        return {
            'SECRET_KEY': cls.SECRET_KEY,
            'DATABASE_URL': cls.DATABASE_URL,
            'DEBUG': cls.DEBUG,
            'PORT': cls.PORT,
            'HOST': cls.HOST,
            'MAX_QUERY_LENGTH': cls.MAX_QUERY_LENGTH,
            'MAX_RESULTS': cls.MAX_RESULTS,
            'LOG_LEVEL': cls.LOG_LEVEL,
            'LOG_FILE': cls.LOG_FILE,
            'ALLOWED_SQL_OPERATIONS': cls.ALLOWED_SQL_OPERATIONS,
            'BLOCKED_SQL_OPERATIONS': cls.BLOCKED_SQL_OPERATIONS
        }

class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True
    LOG_LEVEL = 'DEBUG'

class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False
    LOG_LEVEL = 'WARNING'
    HOST = '0.0.0.0'

# Configuration selector
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}

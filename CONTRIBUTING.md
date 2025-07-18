# Guía de Contribución

¡Gracias por considerar contribuir a este proyecto! Esta guía te ayudará a entender cómo participar en el desarrollo.

## 🚀 Formas de Contribuir

### 🐛 Reportar Bugs
- Usar el sistema de Issues de GitHub
- Incluir pasos para reproducir el problema
- Proporcionar información del entorno (navegador, OS, etc.)
- Adjuntar capturas de pantalla si es posible

### 💡 Proponer Nuevas Funcionalidades
- Crear un Issue describiendo la funcionalidad
- Explicar el caso de uso y beneficios
- Discutir la implementación antes de empezar a codificar

### 📝 Mejorar Documentación
- Corregir errores de documentación
- Añadir ejemplos adicionales
- Mejorar las explicaciones existentes
- Traducir contenido a otros idiomas

### 🔧 Contribuir Código
- Seguir las convenciones de código del proyecto
- Escribir tests para nuevas funcionalidades
- Actualizar documentación si es necesario

## 🛠️ Proceso de Desarrollo

### 1. Configuración del Entorno
```bash
# Clonar el repositorio
git clone https://github.com/luisdiher22/Portfolio.git
cd Portfolio

# Crear entorno virtual
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# .venv\Scripts\activate     # Windows

# Instalar dependencias
pip install -r requirements.txt

# Copiar archivo de configuración
cp .env.example .env
```

### 2. Ejecutar Tests
```bash
# Ejecutar todos los tests
python -m pytest tests.py -v

# Ejecutar tests específicos
python -m pytest tests.py::PortfolioTestCase::test_valid_sql_query -v

# Ejecutar con cobertura
python -m pytest tests.py --cov=app --cov-report=html
```

### 3. Ejecutar la Aplicación
```bash
# Modo desarrollo
python app.py

# Con debug habilitado
FLASK_DEBUG=True python app.py
```

## 📋 Estándares de Código

### Python
- **PEP 8**: Seguir las convenciones de estilo de Python
- **Type Hints**: Usar anotaciones de tipo cuando sea posible
- **Docstrings**: Documentar funciones y clases
- **Logging**: Usar el módulo logging para mensajes informativos

### JavaScript
- **ES6+**: Usar sintaxis moderna de JavaScript
- **Documentación**: JSDoc para funciones complejas
- **Sin console.log**: Remover mensajes de debug antes de commit
- **Validación**: Validar entrada del usuario

### CSS
- **Organización**: Mantener estilos organizados por componentes
- **Responsivo**: Asegurar compatibilidad móvil
- **Comentarios**: Documentar secciones complejas
- **Minimizar !important**: Usar solo cuando sea necesario

## 🔄 Flujo de Trabajo Git

### 1. Crear Branch
```bash
# Crear branch desde main
git checkout main
git pull origin main
git checkout -b feature/nueva-funcionalidad

# O para bugs
git checkout -b fix/descripcion-del-bug
```

### 2. Desarrollar
```bash
# Hacer cambios
# Ejecutar tests
python -m pytest tests.py

# Commit frecuente con mensajes descriptivos
git add .
git commit -m "feat: añadir validación de entrada SQL"

# O para fixes
git commit -m "fix: corregir error de validación en queries vacías"
```

### 3. Preparar Pull Request
```bash
# Actualizar con main
git checkout main
git pull origin main
git checkout feature/nueva-funcionalidad
git rebase main

# Push del branch
git push origin feature/nueva-funcionalidad
```

### 4. Crear Pull Request
- Usar el template de PR en GitHub
- Describir claramente los cambios
- Referenciar issues relacionados
- Asegurar que los tests pasen

## 📝 Formato de Commits

Usar [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(scope): descripción breve

Descripción más detallada si es necesario.

Fixes #123
```

### Tipos de Commit:
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan funcionalidad)
- `refactor`: Refactorización de código
- `test`: Añadir o modificar tests
- `chore`: Tareas de mantenimiento

### Ejemplos:
```
feat(sql): añadir validación avanzada de consultas SQL
fix(ui): corregir problema de responsive en móvil
docs(readme): actualizar instrucciones de instalación
test(security): añadir tests para prevención de SQL injection
```

## 🧪 Tests

### Tipos de Tests
- **Unit Tests**: Probar funciones individuales
- **Integration Tests**: Probar interacciones entre componentes
- **Security Tests**: Validar medidas de seguridad
- **End-to-End Tests**: Probar flujos completos de usuario

### Escribir Tests
```python
def test_nueva_funcionalidad(self):
    """Test para nueva funcionalidad"""
    # Arrange
    input_data = "test data"
    expected_result = "expected output"
    
    # Act
    result = my_function(input_data)
    
    # Assert
    self.assertEqual(result, expected_result)
```

### Cobertura de Tests
- Mantener cobertura > 80%
- Probar casos edge
- Incluir tests de seguridad
- Documentar casos de prueba complejos

## 🔒 Seguridad

### Consideraciones
- **SQL Injection**: Validar todas las consultas SQL
- **XSS**: Sanitizar entrada del usuario
- **CSRF**: Implementar tokens cuando sea necesario
- **Rate Limiting**: Considerar límites de velocidad

### Reportar Vulnerabilidades
- Enviar email privado en lugar de crear Issue público
- Proporcionar detalles de reproducción
- Sugerir posibles soluciones

## 📚 Recursos Adicionales

### Documentación
- [Flask Documentation](https://flask.palletsprojects.com/)
- [SQLite Documentation](https://sqlite.org/docs.html)
- [Python Style Guide](https://pep8.org/)

### Herramientas Útiles
- **Linting**: `flake8`, `pylint`
- **Formatting**: `black`, `autopep8`
- **Testing**: `pytest`, `unittest`
- **Security**: `bandit`, `safety`

## 🤝 Código de Conducta

### Comportamiento Esperado
- Ser respetuoso con otros contribuidores
- Proporcionar feedback constructivo
- Aceptar críticas constructivas
- Mantener discusiones centradas en el código

### Comportamiento Inaceptable
- Lenguaje ofensivo o discriminatorio
- Ataques personales
- Acoso de cualquier tipo
- Spam o contenido irrelevante

## 💬 Obtener Ayuda

### Canales de Comunicación
- **GitHub Issues**: Para bugs y features
- **GitHub Discussions**: Para preguntas generales
- **Email**: Para comunicación privada

### Preguntas Frecuentes
- **¿Cómo ejecuto los tests?** Ver sección de Tests
- **¿Cómo configuro el entorno?** Ver sección de Configuración
- **¿Puedo contribuir sin saber Python?** Sí, hay muchas formas de contribuir

---

¡Gracias por tu interés en contribuir! Cada contribución, sin importar su tamaño, es valiosa para el proyecto.

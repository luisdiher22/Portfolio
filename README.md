# 🗃️ Portfolio Interactivo SQL

Un portafolio web interactivo que permite explorar la información profesional mediante consultas SQL, con un sistema de tutorial integrado y soporte multiidioma.

## 🌟 Características

- **💻 Consultas SQL Interactivas**: Interfaz completa para ejecutar consultas SQL en tiempo real
- **🎯 Constructor Visual**: Sistema drag-and-drop para crear consultas SQL sin escribir código
- **🌐 Multiidioma**: Soporte completo para inglés y español
- **📚 Sistema Tutorial**: Guía paso a paso para aprender SQL con ejemplos prácticos
- **🎨 Diseño Pixel Art**: Estética retro moderna con animaciones fluidas
- **📱 Responsive**: Funciona perfectamente en desktop, tablet y móvil
- **🔒 Seguridad**: Validación robusta contra inyecciones SQL

## 🚀 Instalación y Uso

### Requisitos Previos

- Python 3.7 o superior
- pip (gestor de paquetes de Python)

### Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/luisdiher22/Portfolio.git
   cd Portfolio
   ```

2. **Crea un entorno virtual**:
   ```bash
   python -m venv .venv
   ```

3. **Activa el entorno virtual**:
   - Windows: `.venv\Scripts\activate`
   - macOS/Linux: `source .venv/bin/activate`

4. **Instala las dependencias**:
   ```bash
   pip install -r requirements.txt
   ```

5. **Ejecuta la aplicación**:
   ```bash
   python app.py
   ```

6. **Abre tu navegador** y visita `http://localhost:5000`

## 📁 Estructura del Proyecto

```
Portfolio/
├── app.py                 # Aplicación Flask principal
├── config.py             # Configuración centralizada
├── portfolio.db          # Base de datos SQLite
├── requirements.txt      # Dependencias Python
├── runtime.txt          # Versión Python para deploy
├── .env.example         # Variables de entorno ejemplo
├── .gitignore           # Archivos ignorados por Git
├── LICENSE              # Licencia MIT
├── README.md            # Documentación del proyecto
├── static/
│   ├── script.js        # Lógica JavaScript
│   └── styles.css       # Estilos CSS
└── templates/
    └── index.html       # Plantilla HTML principal
```

## 🛠️ Tecnologías Utilizadas

### Backend
- **Flask 2.x**: Framework web ligero de Python
- **SQLite**: Base de datos embebida
- **Python 3.x**: Lenguaje de programación principal

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos con animaciones y responsive design
- **JavaScript**: Interactividad y lógica del cliente

### Funcionalidades
- **Drag & Drop API**: Para el constructor visual
- **Fetch API**: Para consultas asíncronas
- **CSS Grid/Flexbox**: Para layouts responsivos
- **CSS Animations**: Para efectos visuales

## 🎯 Funcionalidades Principales

### 1. Sistema de Consultas SQL
- Interfaz de texto libre para consultas SQL
- Constructor visual drag-and-drop
- Validación en tiempo real
- Prevención de inyecciones SQL
- Resultados en formato tabla

### 2. Sistema Tutorial
- Guía paso a paso para aprender SQL
- Ejemplos prácticos con la base de datos
- Navegación interactiva
- Contenido bilingüe

### 3. Base de Datos
La aplicación incluye tablas con información:
- `projects`: Proyectos realizados
- `skills`: Habilidades técnicas
- `experience`: Experiencia laboral
- `education`: Formación académica
- `clients`: Información de clientes

### 4. Funciones de Seguridad
- Validación de entrada SQL
- Sanitización de consultas
- Límites de resultados
- Bloqueo de operaciones peligrosas (DROP, DELETE, etc.)

## 🌐 Soporte Multiidioma

La aplicación soporta inglés y español:
- Interfaz completamente traducida
- Contenido tutorial en ambos idiomas
- Cambio de idioma dinámico
- Persistencia de preferencias

## 🔧 Configuración Avanzada

### Variables de Entorno
```bash
FLASK_ENV=development    # Modo desarrollo
FLASK_DEBUG=True        # Habilitar debug
PORT=5000              # Puerto del servidor
```

### Personalización
- Modifica `portfolio.db` para cambiar los datos
- Actualiza `static/styles.css` para cambiar el diseño
- Edita `templates/index.html` para modificar la estructura

## 📊 Ejemplos de Consultas

### Consultas Básicas
```sql
-- Ver todos los proyectos
SELECT * FROM projects;

-- Habilidades específicas
SELECT name, level FROM skills WHERE level > 8;

-- Experiencia laboral reciente
SELECT company, job_title, start_year 
FROM experience 
WHERE start_year > 2020;
```

### Consultas Avanzadas
```sql
-- Proyectos con tecnologías específicas
SELECT p.name, p.description 
FROM projects p 
WHERE p.description LIKE '%Python%';

-- Habilidades agrupadas por categoría
SELECT category, COUNT(*) as total 
FROM skills 
GROUP BY category;
```

## 🚀 Despliegue

### Heroku
1. Instala Heroku CLI
2. Crea una nueva aplicación: `heroku create tu-portfolio`
3. Configura Python: `heroku buildpacks:set heroku/python`
4. Despliega: `git push heroku main`

### Railway/Render
1. Conecta tu repositorio
2. Selecciona Python como runtime
3. Configura comando de inicio: `python app.py`

## 🤝 Contribuciones

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📋 Roadmap

### 🔧 Mejoras Técnicas
- [ ] Exportar resultados a CSV/JSON
- [ ] Historial de consultas con persistencia
- [ ] Cache de consultas frecuentes
- [ ] Tests automatizados (unittest/pytest)
- [ ] Integración continua (GitHub Actions)

### 🎨 Funcionalidades
- [ ] Más tipos de gráficos y visualizaciones
- [ ] Sistema de usuarios con autenticación
- [ ] Consultas guardadas y favoritas
- [ ] Modo oscuro/claro
- [ ] Búsqueda avanzada en resultados

### 🔗 Integraciones
- [ ] APIs externas (GitHub, LinkedIn)
- [ ] Webhooks para actualizaciones automáticas
- [ ] Integración con bases de datos externas
- [ ] Exportación a diferentes formatos

### 📱 Móvil
- [ ] App móvil nativa
- [ ] Gestos táctiles mejorados
- [ ] Modo offline básico

## 🐛 Reportar Errores

Si encuentras algún error, por favor:
1. Revisa los issues existentes
2. Crea un nuevo issue con:
   - Descripción del problema
   - Pasos para reproducir
   - Capturas de pantalla si es necesario
   - Información del navegador/sistema

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Luis Diego** - Desarrollador Full Stack
- Portfolio: [luisdiher22.github.io](https://luisdiher22.github.io)
- LinkedIn: [linkedin.com/in/luisdiher22](https://linkedin.com/in/luisdiher22)
- GitHub: [github.com/luisdiher22](https://github.com/luisdiher22)

## 🙏 Agradecimientos

- Inspirado en la nostalgia de los juegos retro
- Gracias a la comunidad de Flask y Python
- Especial reconocimiento a los desarrolladores de SQLite

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

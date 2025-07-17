// Idioma actual (default: inglés)
let currentLang = "en";

const cardTexts = {
  en: {
    Skills: {
      title: "🧠 Skills",
      content: `
        <p>Find this information in the <code>skills</code> table.</p>
        <h4>Available columns:</h4>
        <ul>
          <li><code>id</code> - Unique identifier</li>
          <li><code>name</code> - Skill name</li>
          <li><code>category</code> - Skill category</li>
        </ul>
        <p><strong>Example:</strong> <code>SELECT name FROM skills WHERE category = 'Programming';</code></p>
      `,
    },
    Education: {
      title: "🎓 Education",
      content: `
        <p>Find this information in the <code>education</code> table.</p>
        <h4>Available columns:</h4>
        <ul>
          <li><code>id</code> - Unique identifier</li>
          <li><code>degree</code> - Academic degree</li>
          <li><code>institution</code> - School/University name</li>
          <li><code>start_year</code> - Year started</li>
          <li><code>end_year</code> - Year completed</li>
        </ul>
        <p><strong>Example:</strong> <code>SELECT degree, institution FROM education;</code></p>
      `,
    },
    Experience: {
      title: "� Experience",
      content: `
        <p>Find this information in the <code>experience</code> table.</p>
        <h4>Available columns:</h4>
        <ul>
          <li><code>id</code> - Unique identifier</li>
          <li><code>job_title</code> - Position title</li>
          <li><code>company</code> - Company name</li>
          <li><code>start_year</code> - Year started</li>
          <li><code>end_year</code> - Year ended</li>
          <li><code>description</code> - Job description</li>
        </ul>
        <p><strong>Example:</strong> <code>SELECT job_title, company FROM experience WHERE start_year > 2020;</code></p>
      `,
    },
    Projects: {
      title: "⚡ Projects",
      content: `
        <p>Find this information in the <code>projects</code> table.</p>
        <h4>Available columns:</h4>
        <ul>
          <li><code>id</code> - Unique identifier</li>
          <li><code>name</code> - Project name</li>
          <li><code>description</code> - Project description</li>
          <li><code>repo_url</code> - Repository URL</li>
        </ul>
        <p><strong>Example:</strong> <code>SELECT name, description FROM projects;</code></p>
      `,
    },
    Clients: {
      title: "👥 Clients",
      content: `
        <p>Find this information in the <code>clients</code> table.</p>
        <h4>Available columns:</h4>
        <ul>
          <li><code>id</code> - Unique identifier</li>
          <li><code>name</code> - Client name</li>
          <li><code>age</code> - Client age</li>
          <li><code>email</code> - Email address</li>
          <li><code>phone</code> - Phone number</li>
        </ul>
        <p><strong>Example:</strong> <code>SELECT name, email FROM clients WHERE age > 25;</code></p>
      `,
    },
  },
  es: {
    Skills: {
      title: "🧠 Habilidades",
      content: `
        <p>Puedes consultar la tabla <code>skills</code>.</p>
        <h4>Columnas disponibles:</h4>
        <ul>
          <li><code>id</code> - Identificador único</li>
          <li><code>name</code> - Nombre de la habilidad</li>
          <li><code>category</code> - Categoría de la habilidad</li>
        </ul>
        <p><strong>Ejemplo:</strong> <code>SELECT name FROM skills WHERE category = 'Programming';</code></p>
      `,
    },
    Education: {
      title: "🎓 Educación",
      content: `
        <p>Puedes encontrar esta información en la tabla <code>education</code>.</p>
        <h4>Columnas disponibles:</h4>
        <ul>
          <li><code>id</code> - Identificador único</li>
          <li><code>degree</code> - Título académico</li>
          <li><code>institution</code> - Nombre de la institución</li>
          <li><code>start_year</code> - Año de inicio</li>
          <li><code>end_year</code> - Año de finalización</li>
        </ul>
        <p><strong>Ejemplo:</strong> <code>SELECT degree, institution FROM education;</code></p>
      `,
    },
    Experience: {
      title: "� Experiencia",
      content: `
        <p>Consulta la tabla <code>experience</code>.</p>
        <h4>Columnas disponibles:</h4>
        <ul>
          <li><code>id</code> - Identificador único</li>
          <li><code>job_title</code> - Título del puesto</li>
          <li><code>company</code> - Nombre de la empresa</li>
          <li><code>start_year</code> - Año de inicio</li>
          <li><code>end_year</code> - Año de finalización</li>
          <li><code>description</code> - Descripción del trabajo</li>
        </ul>
        <p><strong>Ejemplo:</strong> <code>SELECT job_title, company FROM experience WHERE start_year > 2020;</code></p>
      `,
    },
    Projects: {
      title: "⚡ Proyectos",
      content: `
        <p>Mira en la tabla <code>projects</code>.</p>
        <h4>Columnas disponibles:</h4>
        <ul>
          <li><code>id</code> - Identificador único</li>
          <li><code>name</code> - Nombre del proyecto</li>
          <li><code>description</code> - Descripción del proyecto</li>
          <li><code>repo_url</code> - URL del repositorio</li>
        </ul>
        <p><strong>Ejemplo:</strong> <code>SELECT name, description FROM projects;</code></p>
      `,
    },
    Clients: {
      title: "👥 Clientes",
      content: `
        <p>Consulta la tabla <code>clients</code>.</p>
        <h4>Columnas disponibles:</h4>
        <ul>
          <li><code>id</code> - Identificador único</li>
          <li><code>name</code> - Nombre del cliente</li>
          <li><code>age</code> - Edad del cliente</li>
          <li><code>email</code> - Dirección de correo</li>
          <li><code>phone</code> - Número de teléfono</li>
        </ul>
        <p><strong>Ejemplo:</strong> <code>SELECT name, email FROM clients WHERE age > 25;</code></p>
      `,
    },
  },
};

const cueData = {
  en: {
    sql: {
      title: "What is SQL?",
      body: "SQL stands for Structured Query Language. It is used to interact with databases: querying, inserting, updating, and deleting information.",
    },
    table: {
      title: "What is a table?",
      body: "A table in a database is like a spreadsheet. It has columns that define fields and rows that contain data.",
    },
    query: {
      title: "What is a query?",
      body: "A query is a request to the database to get information. It's written in SQL and can be as simple as selecting data from a table.",
    },
    structure: {
      title: "What is the structure of a query?",
      body: "The basic structure of a query is:<br><br>SELECT columns FROM table WHERE conditions.<br><br>Example:<br>SELECT name, age FROM users WHERE age > 18;<br><br>This selects names and ages of users older than 18.",
    },
    select: {
      title: "What does SELECT do?",
      body: "The SELECT statement retrieves data from one or more columns. Example: SELECT name FROM clients;",
    },
    asterisk: {
      title: "What does the asterisk (*) mean?",
      body: "The asterisk (*) is a wildcard that means 'all columns'. When you write SELECT * FROM table, you're asking to show all available columns in that table. It's very useful when you want to see all data without specifying each column individually.<br><br>Example: <code>SELECT * FROM clients;</code> will show all columns from the clients table.",
    },
    from: {
      title: "What does FROM do?",
      body: "FROM specifies which table we want to get data from. It's mandatory in any SELECT query because we need to tell the database exactly where to look for the information.<br><br>Structure: <code>SELECT columns FROM table_name</code><br><br>Example: <code>SELECT name FROM clients;</code> gets the 'name' column from the 'clients' table.",
    },
    where: {
      title: "What does WHERE do?",
      body: "The WHERE clause is used to filter results based on specific conditions. Without WHERE, you get all records from the table. With WHERE, you only get those that meet your criteria.<br><br>Example: <code>SELECT * FROM products WHERE price > 100;</code> only shows products that cost more than 100.",
    },
    operators: {
      title: "Comparison operators",
      body: "Comparison operators allow us to create conditions in queries:<br><br><strong>=</strong> (equal to): <code>WHERE age = 25</code><br><strong>&lt;&gt;</strong> or <strong>!=</strong> (not equal to): <code>WHERE status &lt;&gt; 'inactive'</code><br><strong>&gt;</strong> (greater than): <code>WHERE price &gt; 50</code><br><strong>&lt;</strong> (less than): <code>WHERE age &lt; 30</code><br><strong>&gt;=</strong> (greater than or equal): <code>WHERE score &gt;= 8</code><br><strong>&lt;=</strong> (less than or equal): <code>WHERE discount &lt;= 10</code>",
    },
    querypractice1: {
      title: "Practice 1: Simple query",
      body: `Write a query that selects all fields from the 'clients' table.<br><br><button class="reveal-btn" onclick="revealAnswer(this)">Show answer</button><div class="hidden-answer" style="display: none; margin-top: 12px;">Answer: <code>SELECT * FROM clients;</code></div>`
    },
    querypractice2: {
      title: "Practice 2: Filtering",
      body: `Write a query that selects names of clients older than 30.<br><br><button class="reveal-btn" onclick="revealAnswer(this)">Show answer</button><div class="hidden-answer" style="display: none; margin-top: 12px;">Answer: <code>SELECT name FROM clients WHERE age &gt; 30;</code></div>`
    },
  },
  es: {
    sql: {
      title: "¿Qué es SQL?",
      body: "SQL significa Structured Query Language. Es un lenguaje usado para interactuar con bases de datos: consultar, insertar, actualizar y eliminar información.",
    },
    table: {
      title: "¿Qué es una tabla?",
      body: "Una tabla en una base de datos es como una hoja de cálculo. Tiene columnas que definen los campos y filas que contienen los datos.",
    },
    query: {
      title: "¿Qué es una consulta?",
      body: "Una consulta es una petición a la base de datos para obtener información. Se escribe en SQL y puede ser tan simple como seleccionar datos de una tabla.",
    },
    structure: {
      title: "¿Cuál es la estructura de una consulta?",
      body: "La estructura básica de una consulta de búsqueda en SQL es:<br><br>SELECT columnas FROM tabla WHERE condiciones.<br><br>Por ejemplo:<br>SELECT nombre, edad FROM usuarios WHERE edad > 18;<br><br> Esto selecciona los nombres y edades de los usuarios mayores de 18 años.",
    },
    select: {
      title: "¿Qué hace SELECT?",
      body: "La instrucción SELECT se usa para obtener datos de una o más columnas. Por ejemplo: SELECT nombre FROM clientes;",
    },
    asterisk: {
      title: "¿Qué significa el asterisco (*)?",
      body: "El asterisco (*) es un comodín que significa 'todas las columnas'. Cuando escribes SELECT * FROM tabla, estás pidiendo que se muestren todas las columnas disponibles en esa tabla. Es muy útil cuando quieres ver todos los datos sin especificar cada columna individualmente.<br><br>Ejemplo: <code>SELECT * FROM clientes;</code> mostrará todas las columnas de la tabla clientes.",
    },
    from: {
      title: "¿Qué hace FROM?",
      body: "FROM especifica de qué tabla queremos obtener los datos. Es obligatorio en cualquier consulta SELECT porque necesitamos decirle a la base de datos exactamente dónde buscar la información.<br><br>Estructura: <code>SELECT columnas FROM nombre_de_tabla</code><br><br>Ejemplo: <code>SELECT nombre FROM clientes;</code> obtiene la columna 'nombre' de la tabla 'clientes'.",
    },
    where: {
      title: "¿Qué hace WHERE?",
      body: "La cláusula WHERE se usa para filtrar resultados según condiciones específicas. Sin WHERE, obtienes todos los registros de la tabla. Con WHERE, solo obtienes los que cumplen tus criterios.<br><br>Ejemplo: <code>SELECT * FROM productos WHERE precio > 100;</code> solo muestra productos que cuesten más de 100.",
    },
    operators: {
      title: "Operadores de comparación",
      body: "Los operadores de comparación nos permiten crear condiciones en las consultas:<br><br><strong>=</strong> (igual a): <code>WHERE edad = 25</code><br><strong>&lt;&gt;</strong> o <strong>!=</strong> (diferente de): <code>WHERE estado &lt;&gt; 'inactivo'</code><br><strong>&gt;</strong> (mayor que): <code>WHERE precio &gt; 50</code><br><strong>&lt;</strong> (menor que): <code>WHERE edad &lt; 30</code><br><strong>&gt;=</strong> (mayor o igual): <code>WHERE puntuacion &gt;= 8</code><br><strong>&lt;=</strong> (menor o igual): <code>WHERE descuento &lt;= 10</code>",
    },
    querypractice1: {
      title: "Práctica 1: Consulta simple",
      body: `Escribe una consulta que seleccione todos los campos de la tabla 'clientes'.<br><br><button class="reveal-btn" onclick="revealAnswer(this)">Mostrar respuesta</button><div class="hidden-answer" style="display: none; margin-top: 12px;">Respuesta: <code>SELECT * FROM clientes;</code></div>`
    },
    querypractice2: {
      title: "Práctica 2: Filtrado",
      body: `Escribe una consulta que seleccione los nombres de los clientes mayores de 30 años.<br><br><button class="reveal-btn" onclick="revealAnswer(this)">Mostrar respuesta</button><div class="hidden-answer" style="display: none; margin-top: 12px;">Respuesta: <code>SELECT nombre FROM clientes WHERE edad &gt; 30;</code></div>`
    },
  }
  };
// Actualiza las tarjetas al hacer clic según el idioma
const cardDetail = document.getElementById("card-detail");
const cardContent = document.getElementById("card-content");
const overlay = document.getElementById("overlay");

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-key");
    const langData = cardTexts[currentLang][key];

    if (langData) {
      cardContent.innerHTML = `<h2>${langData.title}</h2>${langData.content}`;
      cardDetail.classList.remove("hidden");
      cardDetail.classList.add("show");
      overlay.classList.remove("hidden");
      overlay.classList.add("show");
    }
  });
});

document.getElementById("close-card").addEventListener("click", () => {
  cardDetail.classList.remove("show");
  cardDetail.classList.add("hidden");
  overlay.classList.remove("show");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  cardDetail.classList.remove("show");
  cardDetail.classList.add("hidden");
  overlay.classList.remove("show");
  overlay.classList.add("hidden");
});

const langSwitch = document.getElementById("langSwitch");
const langLabel = document.getElementById("lang-label");

langSwitch.addEventListener("change", () => {
  currentLang = langSwitch.checked ? "es" : "en";
  langLabel.textContent = currentLang.toUpperCase();
  switchLanguage(currentLang);
});

function switchLanguage(lang) {
  document.querySelector(".site-title").textContent =
    lang === "es" ? "Portafolio de Luis Diego" : "Luis Diego's Portfolio";

  document.querySelector(".site-subtitle").innerHTML =
    lang === "es"
      ? "Siempre me ha fascinado SQL y cómo todo en la vida puede interpretarse como una consulta.<br>¡Así que decidí que las personas se diviertan practicando consultas SQL!"
      : "I have always been fond of SQL and how everything in life can be interpreted as a query,<br>so I decided: let's have people dust off their SQL skills by doing some queries! Have fun!";

  const exampleTitle = document.querySelector(".examples-section h3");
  if (exampleTitle) {
    exampleTitle.textContent =
      lang === "es"
        ? "Sistema de cartas:"
        : "Card system:";
  }
  const exampleTexts = document.querySelectorAll(".examples-section p");
if (exampleTexts.length >= 2) {
  exampleTexts[0].textContent = lang === "es"
    ? "Todo lo que está disponible en este portafolio está accesible mediante un sistema de tarjetas."
    : "Everything that is available in this portfolio is available through a card system.";

  exampleTexts[1].textContent = lang === "es"
    ? "Haz clic en las tarjetas abajo para ver más detalles sobre cada sección."
    : "Click on the cards below to see more details about each section.";
}

  const listItems = document.querySelectorAll(".examples-section li");
  if (listItems.length >= 4) {
    listItems[0].textContent =
      lang === "es" ? "Mis proyectos y sus descripciones." : "My projects and their descriptions.";
    listItems[1].textContent =
      lang === "es" ? "Mi experiencia académica y laboral." : "My academic and working experience.";
    listItems[2].textContent =
      lang === "es" ? "Cosas curiosas sobre mí." : "Random stuff about me.";
    listItems[3].textContent =
      lang === "es"
        ? "Y por supuesto, algunos ejercicios para practicar SQL."
        : "And of course, some problems you can solve by using SQL queries.";
  }

  // Update tutorial elements
  const cueTitle = document.querySelector(".sql-help-title");
  if (cueTitle) {
    cueTitle.textContent = lang === "es" ? "¿Qué es SQL?" : "What is SQL?";
  }

  // Update cue level texts
  const cueLevels = document.querySelectorAll(".cue-level");
  const cueLevelTexts = {
    es: [
      "¿Qué es SQL?",
      "¿Qué es una tabla?", 
      "¿Qué es un query?",
      "¿Cuál es la estructura de un query?",
      "¿Qué hace SELECT?",
      "¿Qué significa el asterisco (*)?",
      "¿Qué hace FROM?",
      "¿Y WHERE?",
      "Operadores de comparación (<>, =, >, <)",
      "Práctica 1: Consulta simple",
      "Práctica 2: Filtrado"
    ],
    en: [
      "What is SQL?",
      "What is a table?",
      "What is a query?", 
      "What is the structure of a query?",
      "What does SELECT do?",
      "What does the asterisk (*) mean?",
      "What does FROM do?",
      "What does WHERE do?",
      "Comparison operators (<>, =, >, <)",
      "Practice 1: Simple query",
      "Practice 2: Filtering"
    ]
  };

  cueLevels.forEach((cue, index) => {
    if (cueLevelTexts[lang][index]) {
      cue.textContent = cueLevelTexts[lang][index];
    }
  });

  // Update toggle button text
  const toggleCue = document.getElementById("toggle-cue");
  if (toggleCue) {
    const isCollapsed = document.getElementById("cue-wrapper").classList.contains("collapsed");
    toggleCue.innerHTML = isCollapsed
      ? `<span class="cue-label">${lang === "es" ? "¿No sabes de SQL?" : "Don't know SQL?"}</span> ▲`
      : `<span class="cue-label">${lang === "es" ? "¿No sabes de SQL?" : "Don't know SQL?"}</span> ▼`;
  }

  // Update card titles
  const cardTitles = {
    es: ["Habilidades", "Educación", "Experiencia", "Proyectos", "Clientes"],
    en: ["Skills", "Education", "Experience", "Projects", "Clients"]
  };

  document.querySelectorAll(".card-title").forEach((title, index) => {
    if (cardTitles[lang][index]) {
      title.textContent = cardTitles[lang][index];
    }
  });
  
  // Update new tutorial system
  updateTutorialLanguage();
}

// New Tutorial System
let currentTutorialLevel = 1;
let tutorialOverlay = null;
let tutorialSidebar = null;
let tutorialContentArea = null;

// Initialize new tutorial system
document.addEventListener('DOMContentLoaded', function() {
    // Keep existing functionality
    updateBuilderDisplay();
    setupBuilderControls();
    
    // Initialize new tutorial system
    initializeTutorialSystem();
});

function initializeTutorialSystem() {
    const chibiHelper = document.getElementById('chibi-helper');
    const tutorialOverlay = document.getElementById('tutorial-overlay');
    const closeTutorialBtn = document.getElementById('close-tutorial');
    
    // Chibi click event
    if (chibiHelper) {
        chibiHelper.addEventListener('click', function() {
            openTutorialMode();
        });
    }
    
    // Close tutorial event
    if (closeTutorialBtn) {
        closeTutorialBtn.addEventListener('click', function() {
            closeTutorialMode();
        });
    }
    
    // Tutorial card clicks
    document.querySelectorAll('.tutorial-card').forEach(card => {
        card.addEventListener('click', function() {
            if (this.classList.contains('locked')) return;
            
            const contentKey = this.getAttribute('data-content');
            const level = parseInt(this.getAttribute('data-level'));
            
            loadTutorialContent(contentKey, level);
            setActiveTutorialCard(this);
        });
    });
    
    // Navigation buttons
    document.getElementById('prev-tutorial').addEventListener('click', function() {
        navigateTutorial(-1);
    });
    
    document.getElementById('next-tutorial').addEventListener('click', function() {
        navigateTutorial(1);
    });
}

function openTutorialMode() {
    const tutorialOverlay = document.getElementById('tutorial-overlay');
    const mainContent = document.querySelector('.container');
    const introCard = document.querySelector('.intro-card');
    const cardHand = document.getElementById('card-hand');
    
    // Hide main content with animation
    if (mainContent) {
        mainContent.style.transform = 'scale(0.8) translateY(-100px)';
        mainContent.style.opacity = '0';
        setTimeout(() => {
            mainContent.style.display = 'none';
        }, 600);
    }
    
    if (introCard) {
        introCard.style.transform = 'translateX(-150%) rotate(-15deg)';
        introCard.style.opacity = '0';
    }
    
    if (cardHand) {
        // Animate away while maintaining centering transform
        cardHand.style.transform = 'translateX(-50%) translateY(200px)';
        cardHand.style.opacity = '0';
    }
    
    // Show tutorial overlay
    setTimeout(() => {
        tutorialOverlay.classList.remove('hidden');
        tutorialOverlay.classList.add('show');
    }, 300);
    
    // Update chibi message
    const chibiMessage = document.getElementById('chibi-message');
    if (chibiMessage) {
        chibiMessage.textContent = currentLang === 'es' 
            ? "¡Genial! Vamos a aprender SQL juntos" 
            : "Great! Let's learn SQL together";
    }
}

function closeTutorialMode() {
    const tutorialOverlay = document.getElementById('tutorial-overlay');
    const mainContent = document.querySelector('.container');
    const introCard = document.querySelector('.intro-card');
    const cardHand = document.getElementById('card-hand');
    
    // Hide tutorial overlay
    tutorialOverlay.classList.remove('show');
    tutorialOverlay.classList.add('hidden');
    
    // Restore main content with animation
    setTimeout(() => {
        if (mainContent) {
            mainContent.style.display = 'flex';
            mainContent.style.flexDirection = 'column';
            setTimeout(() => {
                mainContent.style.transform = 'scale(1) translateY(0)';
                mainContent.style.opacity = '1';
            }, 50);
        }
        
        if (introCard) {
            setTimeout(() => {
                introCard.style.transform = 'translateX(0) rotate(0deg)';
                introCard.style.opacity = '1';
            }, 200);
        }
        
        if (cardHand) {
            setTimeout(() => {
                // Reset to original centered position
                cardHand.style.transform = 'translateX(-50%) translateY(0)';
                cardHand.style.opacity = '1';
            }, 400);
        }
    }, 300);
    
    // Reset chibi message
    const chibiMessage = document.getElementById('chibi-message');
    if (chibiMessage) {
        chibiMessage.textContent = currentLang === 'es' 
            ? "¿No tienes idea de qué están hablando? ¡Haz clic en mí!" 
            : "You have no idea what they're talking about? Click me!";
    }
}

function loadTutorialContent(contentKey, level) {
    const tutorialTitle = document.getElementById('tutorial-title');
    const tutorialBody = document.getElementById('tutorial-body');
    const prevBtn = document.getElementById('prev-tutorial');
    const nextBtn = document.getElementById('next-tutorial');
    
    const content = cueData[currentLang][contentKey];
    
    if (content) {
        tutorialTitle.textContent = content.title;
        tutorialBody.innerHTML = content.body;
        
        // Setup reveal buttons for practice sections
        const revealBtn = tutorialBody.querySelector('.reveal-btn');
        if (revealBtn) {
            revealBtn.addEventListener('click', function() {
                const answerDiv = this.nextElementSibling;
                answerDiv.style.display = 'block';
                this.style.display = 'none';
            });
        }
        
        currentTutorialLevel = level;
        
        // Update navigation buttons
        prevBtn.disabled = level === 1;
        
        // Check if next level exists
        const nextLevelCard = document.querySelector(`.tutorial-card[data-level="${level + 1}"]`);
        nextBtn.disabled = !nextLevelCard;
        
        // Update button text based on language
        if (currentLang === 'es') {
            prevBtn.textContent = '← Anterior';
            nextBtn.textContent = 'Siguiente →';
        } else {
            prevBtn.textContent = '← Previous';
            nextBtn.textContent = 'Next →';
        }
    }
}

function setActiveTutorialCard(activeCard) {
    // Remove active class from all cards
    document.querySelectorAll('.tutorial-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active class to selected card
    activeCard.classList.add('active');
}

function navigateTutorial(direction) {
    const newLevel = currentTutorialLevel + direction;
    const targetCard = document.querySelector(`.tutorial-card[data-level="${newLevel}"]`);
    
    // If moving forward, unlock the next level first
    if (direction > 0 && targetCard) {
        targetCard.classList.remove('locked');
    }
    
    if (targetCard) {
        const contentKey = targetCard.getAttribute('data-content');
        loadTutorialContent(contentKey, newLevel);
        setActiveTutorialCard(targetCard);
    }
}

function unlockNextTutorialLevel() {
    const nextLevel = currentTutorialLevel + 1;
    const nextCard = document.querySelector(`.tutorial-card[data-level="${nextLevel}"]`);
    
    if (nextCard) {
        nextCard.classList.remove('locked');
    }
}

// Update tutorial content when language changes
function updateTutorialLanguage() {
    const chibiMessage = document.getElementById('chibi-message');
    const sidebarTitle = document.querySelector('#tutorial-sidebar .sidebar-header h2');
    const prevBtn = document.getElementById('prev-tutorial');
    const nextBtn = document.getElementById('next-tutorial');
    
    if (chibiMessage) {
        chibiMessage.textContent = currentLang === 'es' 
            ? "¿No tienes idea de qué están hablando? ¡Haz clic en mí!" 
            : "You have no idea what they're talking about? Click me!";
    }
    
    if (sidebarTitle) {
        sidebarTitle.textContent = currentLang === 'es' ? "Tutorial SQL" : "SQL Tutorial";
    }
    
    // Update navigation buttons text
    if (prevBtn && nextBtn) {
        if (currentLang === 'es') {
            prevBtn.textContent = '← Anterior';
            nextBtn.textContent = 'Siguiente →';
        } else {
            prevBtn.textContent = '← Previous';
            nextBtn.textContent = 'Next →';
        }
    }
    
    // Update tutorial card titles
    const tutorialCardData = {
        es: {
            sql: "¿Qué es SQL?",
            table: "¿Qué es una tabla?",
            query: "¿Qué es un query?",
            structure: "Estructura de un query",
            select: "¿Qué hace SELECT?",
            asterisk: "El asterisco (*)",
            from: "¿Qué hace FROM?",
            where: "¿Y WHERE?",
            operators: "Operadores de comparación",
            querypractice1: "Práctica 1: Consulta simple",
            querypractice2: "Práctica 2: Filtrado"
        },
        en: {
            sql: "What is SQL?",
            table: "What is a table?",
            query: "What is a query?",
            structure: "Query structure",
            select: "What does SELECT do?",
            asterisk: "The asterisk (*)",
            from: "What does FROM do?",
            where: "What does WHERE do?",
            operators: "Comparison operators",
            querypractice1: "Practice 1: Simple query",
            querypractice2: "Practice 2: Filtering"
        }
    };
    
    document.querySelectorAll('.tutorial-card').forEach(card => {
        const contentKey = card.getAttribute('data-content');
        const titleElement = card.querySelector('.tutorial-card-title');
        if (titleElement && tutorialCardData[currentLang][contentKey]) {
            titleElement.textContent = tutorialCardData[currentLang][contentKey];
        }
    });
}

// Query Builder Functionality
let isBuilderMode = true;
let queryBlocks = [];

// Initialize builder mode
document.addEventListener('DOMContentLoaded', function() {
    updateBuilderDisplay();
    setupBuilderControls();
});

function setupBuilderControls() {
    const useBuilderBtn = document.getElementById('useBuilder');
    const useTextareaBtn = document.getElementById('useTextarea');
    const clearQueryBtn = document.getElementById('clearQuery');
    const queryBox = document.getElementById('queryBox');
    const queryBuilder = document.getElementById('queryBuilder');

    useBuilderBtn.addEventListener('click', function() {
        isBuilderMode = true;
        queryBuilder.style.display = 'block';
        queryBox.style.display = 'none';
        useBuilderBtn.classList.add('active');
        useTextareaBtn.classList.remove('active');
        syncTextareaToBuilder();
    });

    useTextareaBtn.addEventListener('click', function() {
        isBuilderMode = false;
        queryBuilder.style.display = 'none';
        queryBox.style.display = 'block';
        useTextareaBtn.classList.add('active');
        useBuilderBtn.classList.remove('active');
        syncBuilderToTextarea();
    });

    clearQueryBtn.addEventListener('click', function() {
        queryBlocks = [];
        updateBuilderDisplay();
        if (!isBuilderMode) {
            queryBox.value = '';
        }
        
        // Reset to original layout
        resetToOriginalLayout();
    });

    // Set initial state
    useBuilderBtn.classList.add('active');
}

function syncTextareaToBuilder() {
    const query = queryBlocks.map(block => block.value).join(' ');
    document.getElementById('queryBox').value = query;
}

function syncBuilderToTextarea() {
    const textareaValue = document.getElementById('queryBox').value.trim();
    if (textareaValue) {
        // Simple parsing - split by spaces and create blocks
        queryBlocks = textareaValue.split(/\s+/).map(value => ({
            value: value,
            type: getBlockType(value)
        }));
        updateBuilderDisplay();
    }
}

function getBlockType(value) {
    const tables = ['projects', 'skills', 'education', 'experience', 'clients'];
    if (tables.includes(value.toLowerCase())) {
        return 'table';
    }
    return 'default';
}

function updateBuilderDisplay() {
    const queryDisplay = document.getElementById('queryDisplay');
    
    if (queryBlocks.length === 0) {
        queryDisplay.innerHTML = '<span class="placeholder-text">Click blocks below to build your query...</span>';
        queryDisplay.classList.remove('active');
    } else {
        queryDisplay.classList.add('active');
        
        let html = '';
        
        // Add initial drop zone
        html += `<span class="drop-zone" data-insert-index="0"></span>`;
        
        queryBlocks.forEach((block, index) => {
            const blockClass = block.type === 'table' ? 'query-block table-block' : 'query-block';
            
            html += `<span class="${blockClass}" 
                        draggable="true" 
                        data-index="${index}" 
                        ondragstart="handleDragStart(event)" 
                        ondragover="handleDragOver(event)" 
                        ondrop="handleDrop(event)" 
                        ondragend="handleDragEnd(event)"
                        onmousedown="handleMouseDown(event, ${index})">${block.value}<span class="remove-btn" onclick="event.stopPropagation(); removeBlock(${index})">×</span></span>`;
            
            // Add drop zone after each block
            html += `<span class="drop-zone" data-insert-index="${index + 1}"></span>`;
        });
        
        queryDisplay.innerHTML = html;
        
        // Add event listeners to drop zones after creating them
        document.querySelectorAll('.drop-zone').forEach((zone, zoneIndex) => {
            console.log('Adding listeners to drop zone:', zoneIndex, zone);
            
            zone.addEventListener('dragover', function(event) {
                event.preventDefault();
                event.stopPropagation();
                event.dataTransfer.dropEffect = 'copy';
                this.classList.add('drop-zone-active');
                console.log('Drag over drop zone:', zoneIndex);
            });
            
            zone.addEventListener('dragenter', function(event) {
                event.preventDefault();
                event.stopPropagation();
                this.classList.add('drop-zone-active');
                console.log('Drag enter drop zone:', zoneIndex);
            });
            
            zone.addEventListener('dragleave', function(event) {
                this.classList.remove('drop-zone-active');
                console.log('Drag leave drop zone:', zoneIndex);
            });
            
            zone.addEventListener('drop', function(event) {
                event.preventDefault();
                event.stopPropagation();
                
                const insertIndex = parseInt(this.getAttribute('data-insert-index'));
                console.log('DROP EVENT! Index:', insertIndex, 'draggedFromPool:', draggedFromPool, 'draggedIndex:', draggedIndex);
                
                if (draggedFromPool) {
                    // Adding new block from pool
                    queryBlocks.splice(insertIndex, 0, draggedFromPool);
                    console.log('Added block from pool:', draggedFromPool);
                    draggedFromPool = null;
                    updateBuilderDisplay();
                } else if (draggedIndex !== null) {
                    // Moving existing block
                    const draggedBlock = queryBlocks[draggedIndex];
                    queryBlocks.splice(draggedIndex, 1);
                    
                    // Adjust insert index if we removed a block before the insert position
                    const finalIndex = draggedIndex < insertIndex ? insertIndex - 1 : insertIndex;
                    queryBlocks.splice(finalIndex, 0, draggedBlock);
                    console.log('Moved existing block to index:', finalIndex);
                    updateBuilderDisplay();
                }
                
                this.classList.remove('drop-zone-active');
            });
        });
    }
}

function removeBlock(index) {
    queryBlocks.splice(index, 1);
    updateBuilderDisplay();
}

// Handle click vs drag detection
let isDragging = false;
let mouseDownTime = 0;

function handleMouseDown(event, index) {
    isDragging = false;
    mouseDownTime = Date.now();
    
    // If not clicking on remove button, handle block click
    if (!event.target.classList.contains('remove-btn')) {
        setTimeout(() => {
            if (!isDragging && Date.now() - mouseDownTime < 200) {
                // This was a quick click, not a drag - could add click functionality here if needed
            }
        }, 200);
    }
}

// Drag and Drop functionality
let draggedIndex = null;
let draggedFromPool = null;

function handleDragStart(event) {
    isDragging = true;
    draggedIndex = parseInt(event.target.getAttribute('data-index'));
    event.target.style.opacity = '0.5';
    event.dataTransfer.effectAllowed = 'move';
    
    // Show all drop zones during drag
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.style.opacity = '0.3';
        zone.style.backgroundColor = '#1C768F';
    });
}

function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    
    // Add visual feedback
    const targetElement = event.target.closest('.query-block');
    if (targetElement && !targetElement.classList.contains('drag-over')) {
        document.querySelectorAll('.query-block').forEach(block => {
            block.classList.remove('drag-over');
        });
        targetElement.classList.add('drag-over');
    }
}

function handleDrop(event) {
    event.preventDefault();
    const targetElement = event.target.closest('.query-block');
    
    if (targetElement) {
        const targetIndex = parseInt(targetElement.getAttribute('data-index'));
        
        if (draggedIndex !== null && draggedIndex !== targetIndex) {
            // Reordering existing blocks
            const draggedBlock = queryBlocks[draggedIndex];
            queryBlocks.splice(draggedIndex, 1);
            queryBlocks.splice(targetIndex, 0, draggedBlock);
            updateBuilderDisplay();
        } else if (draggedFromPool) {
            // Inserting new block from pool
            queryBlocks.splice(targetIndex, 0, draggedFromPool);
            updateBuilderDisplay();
            draggedFromPool = null;
        }
    }
    
    // Clean up visual feedback
    document.querySelectorAll('.query-block').forEach(block => {
        block.classList.remove('drag-over');
    });
}

function handleDragEnd(event) {
    event.target.style.opacity = '1';
    draggedIndex = null;
    isDragging = false;
    
    // Clean up visual feedback
    document.querySelectorAll('.query-block').forEach(block => {
        block.classList.remove('drag-over');
    });
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.classList.remove('drop-zone-active');
        zone.style.opacity = '0';
        zone.style.backgroundColor = 'transparent';
    });
}

// Add click handlers to SQL blocks
document.addEventListener('DOMContentLoaded', function() {
    // Setup drag and drop for query display area
    const queryDisplay = document.getElementById('queryDisplay');
    
    queryDisplay.addEventListener('dragover', function(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });
    
    queryDisplay.addEventListener('drop', function(event) {
        event.preventDefault();
        // This handles dropping when the display area is empty or between blocks
        if (event.target === queryDisplay || event.target.classList.contains('placeholder-text')) {
            // If dropping on empty area, move to end
            if (draggedIndex !== null) {
                const draggedBlock = queryBlocks[draggedIndex];
                queryBlocks.splice(draggedIndex, 1);
                queryBlocks.push(draggedBlock);
                updateBuilderDisplay();
            } else if (draggedFromPool) {
                // Add new block from pool to end
                queryBlocks.push(draggedFromPool);
                updateBuilderDisplay();
                draggedFromPool = null;
            }
        }
    });

    // Setup drag for SQL blocks in the pool
    document.querySelectorAll('.sql-block:not(.input-block)').forEach(block => {
        // Make blocks draggable
        block.setAttribute('draggable', 'true');
        
        // Add drag start handler
        block.addEventListener('dragstart', function(event) {
            const value = this.getAttribute('data-value');
            const type = this.classList.contains('table-block') ? 'table' : 'default';
            draggedFromPool = { value, type };
            console.log('Started dragging from pool:', draggedFromPool);
            event.dataTransfer.effectAllowed = 'copy';
            event.dataTransfer.setData('text/plain', value); // Add some data
            this.style.opacity = '0.5';
            
            // Show all drop zones during drag from pool
            document.querySelectorAll('.drop-zone').forEach(zone => {
                zone.style.opacity = '0.3';
                zone.style.backgroundColor = '#1C768F';
            });
        });
        
        // Add drag end handler
        block.addEventListener('dragend', function(event) {
            console.log('Drag end from pool');
            this.style.opacity = '1';
            
            // Hide drop zones
            document.querySelectorAll('.drop-zone').forEach(zone => {
                zone.classList.remove('drop-zone-active');
                zone.style.opacity = '0';
                zone.style.backgroundColor = 'transparent';
            });
            
            // Clean up after a short delay to allow drop to complete
            setTimeout(() => {
                if (draggedFromPool) {
                    console.log('Cleaning up draggedFromPool');
                    draggedFromPool = null;
                }
            }, 100);
        });
        
        // Keep original click functionality
        block.addEventListener('click', function() {
            if (this.classList.contains('disabled')) return;
            
            const value = this.getAttribute('data-value');
            const type = this.classList.contains('table-block') ? 'table' : 'default';
            
            queryBlocks.push({ value, type });
            updateBuilderDisplay();
        });
    });
});

function createInputBlock(element, type) {
    const value = prompt(`Enter ${type} value:`);
    if (value !== null && value.trim() !== '') {
        let formattedValue = value.trim();
        if (type === 'text') {
            formattedValue = `'${formattedValue}'`;
        }
        queryBlocks.push({ value: formattedValue, type: 'input' });
        updateBuilderDisplay();
    }
}

// Handle SQL query form submission
document.getElementById("queryForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission
  
  let query;
  if (isBuilderMode) {
    query = queryBlocks.map(block => block.value).join(' ');
  } else {
    query = document.getElementById('queryBox').value;
  }
  
  if (!query.trim()) {
    alert('Please enter a SQL query');
    return;
  }
  
  // Show loading overlay with dim background
  const loadingOverlay = document.getElementById('loadingOverlay');
  loadingOverlay.style.display = 'flex';
  
  // Reset loading bar animation
  const loadingProgress = document.querySelector('.loading-progress');
  loadingProgress.style.animation = 'none';
  loadingProgress.offsetHeight; // Trigger reflow
  loadingProgress.style.animation = 'loadingAnimation 2s ease-in-out forwards, gradientShift 2s ease-in-out infinite';
  
  // Create form data
  const formData = new FormData();
  formData.append('query', query);
  
  // Wait for loading animation (2 seconds) then send request and transform layout
  setTimeout(() => {
    // Send POST request to /query endpoint
    fetch('/query', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Hide loading overlay
      loadingOverlay.style.display = 'none';
      
      // Transform layout: move query builder left, show results card right
      transformToSplitLayout();
      
      // Get results elements
      const resultsDiv = document.getElementById('results');
      const resultsCard = document.getElementById('resultsCard');
      
      if (data.error) {
        resultsDiv.innerHTML = `<div class="error">Error: ${data.error}</div>`;
      } else {
        // Display results in a table
        let html = '<table class="results-table"><thead><tr>';
        
        // Add column headers
        data.columns.forEach(col => {
          html += `<th>${col}</th>`;
        });
        html += '</tr></thead><tbody>';
        
        // Add data rows
        data.rows.forEach(row => {
          html += '<tr>';
          row.forEach(cell => {
            html += `<td>${cell !== null ? cell : 'NULL'}</td>`;
          });
          html += '</tr>';
        });
        html += '</tbody></table>';
        
        if (data.rows.length === 0) {
          html = '<p>Query executed successfully but returned no results.</p>';
        }
        
        resultsDiv.innerHTML = html;
      }
      
      // Show results card with animation
      resultsCard.style.display = 'block';
      setTimeout(() => {
        resultsCard.classList.add('show');
      }, 100);
      
    })
    .catch(error => {
      // Hide loading overlay
      loadingOverlay.style.display = 'none';
      
      // Still transform layout even on error
      transformToSplitLayout();
      
      const resultsDiv = document.getElementById('results');
      const resultsCard = document.getElementById('resultsCard');
      
      resultsDiv.innerHTML = `<div class="error">Network error: ${error.message}</div>`;
      
      // Show results card with animation
      resultsCard.style.display = 'block';
      setTimeout(() => {
        resultsCard.classList.add('show');
      }, 100);
    });
  }, 2000); // 2 second delay for loading animation
});

function transformToSplitLayout() {
  const container = document.querySelector('.container');
  const queryCard = document.querySelector('.query-card');
  const body = document.querySelector('body');
  
  // Change container to split mode
  container.classList.add('split-mode');
  
  // Position query card to the left
  queryCard.classList.add('positioned-left');
  
  // Create split layout wrapper
  if (!document.querySelector('.split-layout')) {
    const splitLayout = document.createElement('div');
    splitLayout.className = 'split-layout';
    
    // Move container into split layout
    container.parentNode.insertBefore(splitLayout, container);
    splitLayout.appendChild(container);
    
    // Move results card into split layout
    const resultsCard = document.getElementById('resultsCard');
    splitLayout.appendChild(resultsCard);
  }
}

// Function to reveal answers in tutorial practice sections
function revealAnswer(button) {
    const answerDiv = button.nextElementSibling;
    answerDiv.style.display = "block";
    button.style.display = "none";
}
function resetToOriginalLayout() {
  const container = document.querySelector('.container');
  const queryCard = document.querySelector('.query-card');
  const resultsCard = document.getElementById('resultsCard');
  const splitLayout = document.querySelector('.split-layout');
  
  // Reset classes
  container.classList.remove('split-mode');
  queryCard.classList.remove('positioned-left');
  resultsCard.classList.remove('show');
  
  // Hide results card
  resultsCard.style.display = 'none';
  
  // Move container back to body if split layout exists
  if (splitLayout) {
    const body = document.querySelector('body');
    body.insertBefore(container, splitLayout);
    body.removeChild(splitLayout);
  }
  
  // Clear results
  document.getElementById('results').innerHTML = '';
}
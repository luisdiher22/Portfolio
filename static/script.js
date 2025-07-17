// Idioma actual (default: inglés)
let currentLang = "en";

const cardTexts = {
  en: {
    Skills: {
      title: "🧠 Skills",
      content:
        "Feel free to look on the <code>skills</code> table if you are curious on which tools and skills I am somewhat decent at!",
    },
    Education: {
      title: "🎓 Education",
      content:
        "Find this information in the <code>education</code> table. Nothing too fancy, just my college majors.",
    },
    Experience: {
      title: "📂 Experience",
      content:
        "Find this information in the <code>experience</code> table. All of the cool places I have worked at in the past!",
    },
    Projects: {
      title: "🚀 Projects",
      content:
        "Find this information in the <code>projects</code> table. Some projects I have done for school and some freelance jobs!",
    },
  },
  es: {
    Skills: {
      title: "🧠 Habilidades",
      content:
        "Puedes consultar la tabla <code>skills</code> si tienes curiosidad sobre las herramientas y habilidades que manejo.",
    },
    Education: {
      title: "🎓 Educación",
      content:
        "Puedes encontrar esta información en la tabla <code>education</code>. Mis estudios universitarios y más.",
    },
    Experience: {
      title: "📂 Experiencia",
      content:
        "Consulta la tabla <code>experience</code> para ver los lugares donde he trabajado anteriormente.",
    },
    Projects: {
      title: "🚀 Proyectos",
      content:
        "Mira en la tabla <code>projects</code> para ver proyectos que he realizado para la universidad o de forma independiente.",
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
    where: {
      title: "What does WHERE do?",
      body: "The WHERE clause filters results. Example: SELECT * FROM products WHERE price > 100;",
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
    where: {
      title: "¿Qué hace WHERE?",
      body: "La cláusula WHERE se usa para filtrar resultados. Por ejemplo: SELECT * FROM productos WHERE precio > 100;",
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
    const key = card.textContent.trim().replace(/[^À-ſa-zA-Z]/g, "");
    const langData = cardTexts[currentLang][key];

    if (langData) {
      cardContent.innerHTML = `<h2>${langData.title}</h2><p>${langData.content}</p>`;
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

  const exampleTitle = document.querySelector(".examples-card h3");
  if (exampleTitle) {
    exampleTitle.textContent =
      lang === "es"
        ? "Sistema de cartas:"
        : "Card system:";
  }
  const exampleTexts = document.querySelectorAll(".examples-card p");
if (exampleTexts.length >= 2) {
  exampleTexts[0].textContent = lang === "es"
    ? "Todo lo que está disponible en este portafolio está accesible mediante un sistema de tarjetas."
    : "Everything that is available in this portfolio is available through a card system.";

  exampleTexts[1].textContent = lang === "es"
    ? "Haz clic en las tarjetas abajo para ver más detalles sobre cada sección."
    : "Click on the cards below to see more details about each section.";
}

  const listItems = document.querySelectorAll(".examples-card li");
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
}

const cueWrapper = document.getElementById("cue-wrapper");
const toggleCue = document.getElementById("toggle-cue");

toggleCue.addEventListener("click", () => {
  cueWrapper.classList.toggle("collapsed");
  toggleCue.innerHTML = cueWrapper.classList.contains("collapsed")
    ? `<span class="cue-label">${currentLang === "es" ? "¿No sabes de SQL?" : "Don't know SQL?"}</span> ▲`
    : `<span class="cue-label">${currentLang === "es" ? "¿No sabes de SQL?" : "Don't know SQL?"}</span> ▼`;
});

// Permite que hacer clic en el texto también abra la caja (no solo la flecha)
toggleCue.querySelector(".cue-label")?.addEventListener("click", () => {
  toggleCue.click();
});

const cueDetail = document.getElementById("cue-detail");
const cueContent = document.getElementById("cue-content");
const closeCue = document.getElementById("close-cue");
let currentLevel = 1;

document.querySelectorAll(".cue-level").forEach((cue) => {
  cue.addEventListener("click", () => {
    if (cue.classList.contains("locked")) return;

    const key = cue.getAttribute("data-content");
    const { title, body } = cueData[currentLang][key];
    cueContent.innerHTML = `<h2>${title}</h2>${body}`;

    // Activar el botón "Mostrar respuesta"
    const revealBtn = cueContent.querySelector(".reveal-btn");
    if (revealBtn) {
      revealBtn.addEventListener("click", function () {
        const answerDiv = this.nextElementSibling;
        answerDiv.style.display = "block";
        this.style.display = "none";
      });
    }

    cueDetail.classList.remove("hidden");
    cueDetail.classList.add("show");

    document.querySelectorAll(".cue-level").forEach((c) => c.classList.remove("active"));
    cue.classList.add("active");

    currentLevel = parseInt(cue.dataset.level);
  });
});

closeCue.addEventListener("click", () => {
  cueDetail.classList.remove("show");
  cueDetail.classList.add("hidden");
});

document.getElementById("next-cue").addEventListener("click", () => {
  const next = document.querySelector(`.cue-level[data-level="${currentLevel + 1}"]`);
  if (next) {
    next.classList.remove("locked");
    next.click();
  }
});

// Handle SQL query form submission
document.getElementById("queryForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission
  
  const formData = new FormData(this);
  const query = formData.get('query');
  
  if (!query.trim()) {
    alert('Please enter a SQL query');
    return;
  }
  
  // Show loading state
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '<p>Executing query...</p>';
  
  // Send POST request to /query endpoint
  fetch('/query', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
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
  })
  .catch(error => {
    resultsDiv.innerHTML = `<div class="error">Network error: ${error.message}</div>`;
  });
});
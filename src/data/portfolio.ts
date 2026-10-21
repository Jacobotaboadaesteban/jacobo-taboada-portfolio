export type Language = "es" | "en";
export type Localized = Record<Language, string>;
export type GlassStyle = "rocks" | "coupe" | "highball";

export const identity = {
  name: "Jacobo Taboada Esteban",
  initials: "JT",
  email: "jacobotaboadaesteban@gmail.com",
  phone: "+34 693 725 136",
  phoneHref: "tel:+34693725136",
  linkedin: "https://www.linkedin.com/in/jacobo-taboada-esteban-b6499a177/",
  photo: "/images/jacobo.jpg",
  copyrightYear: 2026,
};

export const roles: Localized[] = [
  { es: "Ingeniero de datos e IA", en: "Data & AI engineer" },
  { es: "Desarrollador de software", en: "Software developer" },
  { es: "Tecnología con visión de negocio", en: "Technology with a business mindset" },
];

export const profile: Localized[] = [
  {
    es: "Estudio Ciencia e Ingeniería de Datos en la UC3M y me interesa conectar el análisis técnico con las necesidades reales de negocio. He trabajado en ingeniería de datos, automatización de procesos y desarrollo de software, convirtiendo retos operativos en herramientas prácticas.",
    en: "I study Data Science and Engineering at UC3M and enjoy connecting technical analysis with real business needs. I have worked on data engineering, process automation and software development, turning operational challenges into practical tools.",
  },
  {
    es: "Mi experiencia internacional en Purdue y en consultoría ha reforzado mi capacidad para estructurar problemas, colaborar con distintos equipos y llevar ideas a soluciones concretas. Me motiva construir productos útiles con datos, IA y software.",
    en: "My exchange experience at Purdue and consulting work have strengthened my ability to structure problems, collaborate across teams and turn ideas into concrete solutions. I am motivated by building useful products with data, AI and software.",
  },
];

// Fechas tomadas del brief. Revisar con el CV antes de publicar si cambian.
export const timeline = [
  {
    period: { es: "2023 — 2027", en: "2023 — 2027" },
    organization: "UC3M",
    title: { es: "Ciencia e Ingeniería de Datos", en: "Data Science and Engineering" },
    description: { es: "Grado en la Universidad Carlos III de Madrid.", en: "Degree at Universidad Carlos III de Madrid." },
  },
  {
    period: { es: "2025 — 2026", en: "2025 — 2026" },
    organization: "Purdue University",
    title: { es: "Intercambio internacional", en: "International exchange" },
    description: { es: "Una perspectiva internacional. Reconocimiento en la Dean’s List.", en: "An international perspective. Dean’s List recognition." },
  },
  {
    period: { es: "MAY — JUL 2026", en: "MAY — JUL 2026" },
    organization: "Plexus Tech / Triple Alpha",
    title: { es: "Prácticas · Ingeniería de datos", en: "Internship · Data engineering" },
    description: { es: "Experiencia práctica en ingeniería de datos.", en: "Practical experience in data engineering." },
  },
  {
    period: { es: "2026 — ACTUALIDAD", en: "2026 — PRESENT" },
    organization: "Spaulding Ridge",
    title: { es: "Data Solutions", en: "Data Solutions" },
    description: { es: "Experiencia en consultoría y soluciones de datos.", en: "Experience in consulting and data solutions." },
  },
];

export const skillGroups = [
  {
    title: { es: "Datos & análisis", en: "Data & analytics" },
    skills: ["Python", "SQL", "R", "MATLAB", "Excel", "PowerPoint", "Streamlit"],
  },
  {
    title: { es: "Bases de datos", en: "Databases" },
    skills: ["SQLite", "Oracle", "MongoDB", "SQL Server", "Firestore"],
  },
  {
    title: { es: "IA & visión artificial", en: "AI & computer vision" },
    skills: ["OpenCV", "InsightFace", "MediaPipe"],
  },
  {
    title: { es: "Software & cloud", en: "Software & cloud" },
    skills: ["Pyxel", "HTML", "CSS", "JavaScript", "Flutter", "Dart", "Firebase", "Cloud Functions", "Git", "GitHub"],
  },
];

export const capabilities: Localized[] = [
  { es: "Ingeniería de datos", en: "Data engineering" },
  { es: "Análisis de datos", en: "Data analysis" },
  { es: "Automatización", en: "Automation" },
  { es: "Inteligencia artificial", en: "Artificial intelligence" },
  { es: "Estrategia de producto", en: "Product strategy" },
];

export interface Project {
  id: string;
  name: string;
  year: string;
  category: Localized;
  collaboration: Localized;
  summary: Localized;
  description: Localized;
  preparation: Localized[];
  results: Localized;
  technologies: string[];
  repository?: string;
  status?: Localized;
  statusNote?: Localized;
  glass: GlassStyle;
  color: string;
}

// Añadir un objeto aquí crea automáticamente una bebida y una entrada en la carta.
export const projects: Project[] = [
  {
    id: "faceid-desk",
    name: "FaceID-Desk",
    year: "2025",
    category: { es: "Visión artificial", en: "Computer vision" },
    collaboration: { es: "Proyecto académico de equipo", en: "Academic team project" },
    summary: { es: "Verificación facial, de la cámara al código.", en: "Facial verification, from camera to code." },
    description: {
      es: "Proyecto desarrollado para la verificación facial 1:1 a través de una webcam. Combina OpenCV, InsightFace/ArcFace y MediaPipe e incorpora una comprobación básica de presencia mediante la detección de parpadeo. Es un prototipo académico, no un sistema de seguridad de producción.",
      en: "A project developed for 1:1 facial verification through a webcam. It combines OpenCV, InsightFace/ArcFace and MediaPipe, with a basic presence check through blink detection. It is an academic prototype, not a production security system.",
    },
    preparation: [
      { es: "Capturé muestras desde la webcam para crear una plantilla local con la representación facial de la persona registrada.", en: "I captured webcam samples to create a local template with the enrolled person’s facial representation." },
      { es: "Recogí muestras negativas y calibré un umbral de similitud para distinguir las comparaciones que el prototipo acepta de las que rechaza.", en: "I collected negative samples and calibrated a similarity threshold to distinguish comparisons the prototype accepts from those it rejects." },
      { es: "Implementé la verificación en directo: el sistema captura una cara y compara su representación con la plantilla registrada.", en: "I implemented live verification: the system captures a face and compares its representation with the enrolled template." },
      { es: "Probé el flujo con distintas personas, variaciones de iluminación y accesorios como gafas para observar cómo respondía el prototipo en diferentes condiciones de captura.", en: "I tried the workflow with different people, lighting conditions and accessories such as glasses to observe how the prototype behaved under different capture conditions." },
      { es: "Añadí una comprobación opcional de parpadeo como señal básica de presencia. Es una comprobación educativa y no evita por sí sola todos los intentos de suplantación.", en: "I added an optional blink check as a basic presence signal. It is an educational check and does not by itself prevent every spoofing attempt." },
    ],
    results: {
      es: "El prototipo permite recorrer el flujo de registro y verificación 1:1, con una comprobación de parpadeo opcional. Las plantillas se generan localmente. Es un proyecto educativo: la detección de parpadeo se puede eludir y la precisión depende de la iluminación, la cámara y el umbral elegido.",
      en: "The prototype supports a 1:1 enrolment and verification workflow, with an optional blink check. Templates are generated locally. It is an educational project: blink detection can be bypassed, and accuracy depends on lighting, camera quality and the selected threshold.",
    },
    technologies: ["Python", "OpenCV", "InsightFace / ArcFace", "MediaPipe"],
    repository: "https://github.com/Jacobotaboadaesteban/FaceID-Desk-GitHub",
    glass: "rocks",
    color: "#dfad48",
  },
  {
    id: "mario-bros",
    name: "Mario Bros",
    year: "2023–2024",
    category: { es: "Desarrollo de videojuegos", en: "Game development" },
    collaboration: { es: "Proyecto de programación", en: "Programming project" },
    summary: { es: "Lógica, píxeles y una moneda más.", en: "Logic, pixels and one more coin." },
    description: {
      es: "Juego de plataformas inspirado en Mario Bros, creado en Python con Pyxel. Permite moverse, saltar, recoger monedas y enfrentarse a tortugas, cangrejos y moscas. Incluye vidas, colisiones y puntuación. El repositorio contiene los gráficos y sonidos en la carpeta assets y las instrucciones para ejecutarlo en local.",
      en: "A platform game inspired by Mario Bros, built with Python and Pyxel. Move, jump, collect coins and face turtles, crabs and flies. It includes lives, collisions and scoring. The repository contains graphics and sounds in the assets folder, along with local setup instructions.",
    },
    preparation: [
      { es: "Organicé la estructura alrededor del escenario y el bucle principal en tablero.py, separando la lógica del juego en módulos.", en: "I organised the game around the level and main loop in tablero.py, keeping the game logic in separate modules." },
      { es: "Desarrollé el movimiento, el salto y las vidas del personaje en mario.py, con controles de teclado para recorrer el nivel.", en: "I implemented the character’s movement, jumping and lives in mario.py, with keyboard controls for navigating the level." },
      { es: "Añadí elementos de juego en módulos propios: enemigos —tortugas, cangrejos y moscas—, monedas y el bloque POW.", en: "I added gameplay elements in their own modules: enemies—turtles, crabs and flies—coins and the POW block." },
      { es: "Conecté las interacciones del nivel, incluidas las colisiones y la puntuación, y preparé los recursos gráficos y de audio para Pyxel.", en: "I connected level interactions, including collisions and scoring, and prepared the graphics and audio resources for Pyxel." },
      { es: "Dejé el juego listo para ejecutarse desde la carpeta del proyecto con python main.py; el repositorio incluye requisitos, controles y estructura de archivos.", en: "I made the game runnable from its project folder with python main.py; the repository documents its requirements, controls and file structure." },
    ],
    results: {
      es: "El resultado es un juego ejecutable en local en el que se puede recorrer el escenario, saltar, recoger monedas y esquivar enemigos. Incluye controles de teclado, colisiones, vidas y puntuación; el repositorio explica cómo instalar Pyxel y arrancarlo.",
      en: "The result is a locally runnable game where the player can move through the level, jump, collect coins and avoid enemies. It includes keyboard controls, collisions, lives and scoring; the repository explains how to install Pyxel and launch it.",
    },
    technologies: ["Python", "Pyxel"],
    repository: "https://github.com/Jacobotaboadaesteban/MarioBros",
    glass: "coupe",
    color: "#90bd86",
  },
  {
    id: "tees-for-kindness",
    name: "TeesForKindness",
    year: "2025",
    category: { es: "Desarrollo web", en: "Web development" },
    collaboration: { es: "Proyecto colaborativo", en: "Collaborative project" },
    summary: { es: "Una tienda construida en colaboración.", en: "An online store built together." },
    description: {
      es: "Proyecto colaborativo de una tienda online de camisetas gráficas, desarrollado con HTML, CSS y JavaScript. Una experiencia de desarrollo web en equipo. El enlace lleva al repositorio original de Franc0-ux, donde se conserva el trabajo del proyecto.",
      en: "A collaborative online store for graphic t-shirts, developed with HTML, CSS and JavaScript. An experience in building for the web as a team. The link leads to the original Franc0-ux repository, which holds the project’s work.",
    },
    preparation: [
      { es: "Planteamos en equipo una tienda online para presentar camisetas gráficas y sus productos.", en: "As a team, we planned an online store to present graphic t-shirts and their products." },
      { es: "Construimos las páginas principales que aparecen en el repositorio: index.html para la portada y spro.html para la vista de producto.", en: "We built the main pages listed in the repository: index.html for the home page and spro.html for the product view." },
      { es: "Definimos la presentación visual con CSS y añadimos la interacción de la web con JavaScript.", en: "We defined the visual presentation with CSS and added the site’s interactions with JavaScript." },
      { es: "Conservé el enlace al repositorio original del equipo, donde se encuentra el código del proyecto.", en: "I kept the link to the team’s original repository, where the project code is hosted." },
    ],
    results: {
      es: "Se creó una experiencia web navegable con una portada y una vista de producto. Fue un proyecto colaborativo; el enlace conserva el repositorio original del equipo.",
      en: "The project produced a navigable web experience with a home page and a product view. It was a collaborative project; the link preserves the team’s original repository.",
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/Franc0-ux/TeesForKindness",
    glass: "highball",
    color: "#d5b68c",
  },
  {
    id: "survival-analysis",
    name: "Survival Analysis",
    year: "2026",
    category: { es: "Análisis de datos · Salud", en: "Data analysis · Healthcare" },
    collaboration: { es: "Proyecto académico colaborativo", en: "Collaborative academic project" },
    summary: { es: "Comparé grupos de pacientes y modelos para entender su supervivencia.", en: "Compared patient groups and models to understand survival outcomes." },
    description: {
      es: "Ejemplo de limpieza y análisis de datos de pacientes pediátricos sometidos a un trasplante de médula ósea. Apliqué PCA y K-means para explorar tres grupos de pacientes y comparé sus curvas de Kaplan–Meier y modelos de Cox.",
      en: "A data cleaning and analysis example using records from paediatric patients who underwent bone marrow transplantation. I applied PCA and K-means to explore three patient groups, then compared their Kaplan–Meier curves and Cox models.",
    },
    preparation: [
      { es: "Partí del conjunto UCI Bone Marrow Transplant Children, con datos de pacientes pediátricos sometidos a un trasplante de médula ósea.", en: "I started with the UCI Bone Marrow Transplant Children dataset, which contains records for paediatric patients who underwent bone marrow transplantation." },
      { es: "Exploré las variables y preparé los datos, tratando los valores ausentes antes de aplicar los métodos de análisis.", en: "I explored the variables and prepared the data, handling missing values before applying the analysis methods." },
      { es: "Apliqué PCA para reducir la dimensionalidad y facilitar la exploración de patrones entre pacientes.", en: "I applied PCA to reduce dimensionality and make it easier to explore patterns across patients." },
      { es: "Utilicé K-means para explorar tres grupos de pacientes a partir de las variables analizadas.", en: "I used K-means to explore three patient groups based on the analysed variables." },
      { es: "Comparé las curvas de Kaplan–Meier de los grupos y modelos de Cox como parte del análisis de supervivencia.", en: "I compared the groups’ Kaplan–Meier curves and Cox models as part of the survival analysis." },
    ],
    results: {
      es: "La entrega reúne el proceso de limpieza, exploración, segmentación y modelado de supervivencia en un análisis reproducible. Esta ficha explica el método y no presenta conclusiones clínicas ni resultados estadísticos.",
      en: "The project brings data cleaning, exploration, clustering and survival modelling together in a reproducible analysis. This page describes the method and does not present clinical conclusions or statistical findings.",
    },
    technologies: ["Python", "Pandas", "scikit-learn", "lifelines", "Matplotlib"],
    repository: "https://github.com/Jacobotaboadaesteban/lab2-survival-analysis",
    glass: "highball",
    color: "#c8b35f",
  },
  {
    id: "memoria",
    name: "MemorIA",
    year: "2026",
    category: { es: "Salud digital", en: "Digital health" },
    collaboration: { es: "Proyecto personal en desarrollo", en: "Independent project in development" },
    summary: { es: "Un producto de salud digital, del descubrimiento al prototipo.", en: "A digital health product, from discovery to prototype." },
    description: {
      es: "Proyecto personal en desarrollo que explora una oportunidad en salud digital. Investigué soluciones existentes, necesidades de potenciales usuarios y barreras de adopción; con esos hallazgos definí la propuesta de valor y prioricé la hoja de ruta del MVP para tres perfiles de usuario. He construido un prototipo multiplataforma funcional con Flutter y Dart, un backend en Python y Firebase. Incluye autenticación y gestión de datos en Firestore.",
      en: "An independent project in development exploring an opportunity in digital health. I researched existing solutions, potential users’ needs and adoption barriers, then defined the product proposition and prioritised an MVP roadmap for three user profiles. I built a functional cross-platform prototype with Flutter and Dart, a Python backend and Firebase, including authentication and Firestore data management.",
    },
    preparation: [
      { es: "Investigué soluciones existentes, necesidades de potenciales usuarios y barreras de adopción para entender el espacio del producto.", en: "I researched existing solutions, potential users’ needs and adoption barriers to understand the product space." },
      { es: "Convertí ese trabajo de descubrimiento en una propuesta de valor y prioricé una hoja de ruta de MVP para tres perfiles de usuario.", en: "I translated that discovery work into a value proposition and prioritised an MVP roadmap for three user profiles." },
      { es: "Desarrollé un prototipo multiplataforma con Flutter y Dart, junto con un backend en Python y Firebase.", en: "I built a cross-platform prototype with Flutter and Dart, alongside a Python and Firebase backend." },
      { es: "Incorporé autenticación y gestión de datos en Firestore. El producto continúa en desarrollo.", en: "I added authentication and data management with Firestore. The product is still in development." },
    ],
    results: {
      es: "Hay un prototipo funcional en desarrollo con autenticación y gestión de datos. MemorIA sigue evolucionando y todavía no tiene una versión pública; por eso esta ficha describe el trabajo hasta ahora y no presenta el producto como terminado.",
      en: "A functional prototype with authentication and data management is in development. MemorIA is still evolving and does not yet have a public release, so this page describes the work so far without presenting the product as finished.",
    },
    technologies: ["Flutter", "Dart", "Python", "Firebase", "Firestore"],
    status: { es: "EN DESARROLLO", en: "IN DEVELOPMENT" },
    statusNote: { es: "Estoy construyendo el producto y compartiré una versión pública cuando esté lista.", en: "I’m building the product and will share a public version when it’s ready." },
    glass: "coupe",
    color: "#a6bc83",
  },
  {
    id: "hpe-mcp-kpis",
    name: "HPE Project",
    year: "2026",
    category: { es: "Datos · MCP · ciberseguridad", en: "Data · MCP · cybersecurity" },
    collaboration: { es: "Proyecto académico en equipo · contribución individual: 9 KPIs", en: "Academic team project · individual contribution: 9 KPIs" },
    summary: { es: "KPIs de tráfico de red convertidos en herramientas MCP reutilizables.", en: "Network traffic KPIs turned into reusable MCP tools." },
    description: {
      es: "Proyecto académico de ciencia de datos para analizar tráfico de red y exponer sus métricas como herramientas MCP. Mi contribución individual se centró en los últimos nueve KPIs: separé los cálculos en funciones reutilizables y los integré en un servidor MCP que reúne 14 herramientas. El servidor consulta los datos en Supabase, permite aplicar filtros y devuelve resultados estructurados. Contrasté los cálculos con el notebook de referencia para comprobar que mantenían la lógica original.",
      en: "An academic data science project for analysing network traffic and exposing its metrics as MCP tools. My individual contribution focused on the final nine KPIs: I separated the calculations into reusable functions and integrated them into an MCP server that brings together 14 tools. The server queries data from Supabase, supports filtering and returns structured results. I compared the calculations with the reference notebook to confirm they preserved the original logic.",
    },
    preparation: [
      { es: "Revisé el análisis de tráfico de red y la definición de sus KPIs para entender qué debía calcular cada métrica.", en: "I reviewed the network-traffic analysis and KPI definitions to understand what each metric needed to calculate." },
      { es: "Implementé mi contribución individual: nueve KPIs separados en funciones reutilizables.", en: "I implemented my individual contribution: nine KPIs separated into reusable functions." },
      { es: "Integré las funciones en el servidor MCP del proyecto, que agrupa 14 herramientas para consultar las métricas.", en: "I integrated the functions into the project’s MCP server, which groups 14 tools for querying the metrics." },
      { es: "Conecté las consultas con Supabase, incorporé filtros y estructuré las respuestas para que las herramientas pudieran devolver resultados consistentes.", en: "I connected queries to Supabase, added filters and structured the responses so the tools could return consistent results." },
      { es: "Contrasté los cálculos de mis KPIs con el notebook de referencia para comprobar que mantenían su lógica.", en: "I compared my KPI calculations with the reference notebook to check that they preserved its logic." },
    ],
    results: {
      es: "El servidor del proyecto reúne 14 herramientas MCP y devuelve métricas estructuradas a partir de consultas a Supabase. Contrasté mis nueve KPIs con el notebook de referencia para comprobar que conservaban la lógica original. La ficha está publicada antes que el repositorio, que aparecerá próximamente.",
      en: "The project server brings together 14 MCP tools and returns structured metrics from Supabase queries. I compared my nine KPIs with the reference notebook to check that they preserved the original logic. This project page is available before the repository, which is coming soon.",
    },
    technologies: ["Python", "FastMCP", "Pandas", "Supabase"],
    status: { es: "PRÓXIMAMENTE", en: "COMING SOON" },
    statusNote: { es: "La ficha ya resume el proyecto; publicaré el repositorio cuando esté preparado.", en: "This note summarises the project; I’ll publish the repository when it’s ready." },
    glass: "rocks",
    color: "#d5b161",
  },
];

export const copy = {
  es: {
    skip: "Saltar al contenido", navigation: "Navegación principal", language: "Idioma",
    nav: ["Inicio", "La historia", "El bar", "Contacto"],
    homeLabel: "Ir al inicio", edition: "PORTFOLIO PERSONAL · VOL. 01",
    pageTitle: "Jacobo Taboada Esteban — Datos, IA & Software",
    sceneTag: "DATOS · IDEAS · CÓDIGO",
    emblemTop: "BUENAS IDEAS", emblemBottom: "BUENA COMPAÑÍA",
    welcome: "BUENAS IDEAS. BUENA COMPAÑÍA.", disciplines: "DATOS / IA / SOFTWARE",
    headline: "Conecto datos, IA y estrategia para convertir problemas en soluciones.",
    contactCta: "Tomamos algo juntos", projectsCta: "Ver la carta",
    photoNote: "El retrato está por llegar.",
    photoAlt: "Retrato de Jacobo Taboada Esteban", photoCaption: "PERSONAS ANTES QUE DATOS.",
    scroll: "PASA, ESTÁS EN TU CASA", ribbon: "Habilidades — pausa al pasar el cursor o enfocar",
    pause: "Pausar movimiento", play: "Reanudar movimiento", roleLabel: "Perfil profesional",
    storyEyebrow: "01 / LA HISTORIA DEL LOCAL", storyTitle: "La curiosidad es\nel ingrediente.",
    dossier: "LA PERSONA DETRÁS DEL CÓDIGO", profile: "Perfil", trajectory: "El recorrido",
    toolkit: "Los ingredientes", toolkitNote: "Las herramientas cambian. La curiosidad se queda.", origin: "DE A CORUÑA, ESPAÑA",
    barEyebrow: "02 / EL BAR", barTitle: "Ideas que se\nsirven en código.",
    barIntro: "Cada bebida, un proyecto real. Elige en la barra o explora la carta para conocer su historia.",
    scene: "LA BARRA DE PROYECTOS", sceneNote: "ELIGE UNA BEBIDA · DESCUBRE UN PROYECTO", shelfDisplay: "Proyectos disponibles en la estantería",
    projectAvailable: "Repositorio disponible", featured: "NOVEDAD!", recommended: "RECOMENDADO",
    menu: "La carta", menuSub: "UNA SELECCIÓN DE PROYECTOS", menuFoot: "Hechos con curiosidad. Servidos con contexto.", menuComingSoon: "PRÓXIMAMENTE",
    openProject: "Ver proyecto", close: "Cerrar detalle", projectFile: "FICHA DE PROYECTO",
    aboutProject: "Qué hay en la mezcla", collaboration: "Tipo de proyecto", technologies: "Ingredientes técnicos", preparation: "Preparación", preparationSteps: "Pasos de preparación", results: "Resultados",
    projectTabs: { summary: "Resumen", preparation: "Preparación", results: "Resultados", technologies: "Tecnología" },
    repository: "Ver repositorio", external: "abre en una pestaña nueva", originalRepo: "Repositorio original",
    comingSoon: "Más información próximamente.",
    contactEyebrow: "03 / LA PRÓXIMA CONVERSACIÓN", contactTitle: "Tomamos algo\njuntos.",
    contactIntro: "¿Una idea, un reto con datos o una conversación sobre tecnología? Aquí empieza la siguiente mezcla.",
    write: "Escríbeme", email: "EMAIL", phone: "TELÉFONO", linkedin: "CONECTAMOS EN LINKEDIN", location: "UBICACIÓN", contactLocation: "Madrid, España · Disponibilidad para trasladarme",
    footer: "DATOS, IDEAS Y BUENAS CONVERSACIONES.", top: "Volver arriba", rights: "Todos los derechos reservados.",
  },
  en: {
    skip: "Skip to content", navigation: "Main navigation", language: "Language",
    nav: ["Home", "The story", "The bar", "Contact"],
    homeLabel: "Go to home", edition: "PERSONAL PORTFOLIO · VOL. 01",
    pageTitle: "Jacobo Taboada Esteban — Data, AI & Software",
    sceneTag: "DATA · IDEAS · CODE",
    emblemTop: "GOOD IDEAS", emblemBottom: "GOOD COMPANY",
    welcome: "GOOD IDEAS. GOOD COMPANY.", disciplines: "DATA / AI / SOFTWARE",
    headline: "I connect data, AI and strategy to turn problems into solutions.",
    contactCta: "Let’s grab a drink", projectsCta: "Explore the projects",
    photoNote: "A portrait is on its way.",
    photoAlt: "Portrait of Jacobo Taboada Esteban", photoCaption: "PEOPLE BEFORE DATA.",
    scroll: "COME IN, MAKE YOURSELF AT HOME", ribbon: "Skills — pause on hover or focus",
    pause: "Pause motion", play: "Resume motion", roleLabel: "Professional profile",
    storyEyebrow: "01 / THE STORY", storyTitle: "Curiosity is\nthe ingredient.",
    dossier: "THE PERSON BEHIND THE CODE", profile: "Profile", trajectory: "The journey",
    toolkit: "The ingredients", toolkitNote: "Tools change. Curiosity stays.", origin: "FROM A CORUÑA, SPAIN",
    barEyebrow: "02 / THE BAR", barTitle: "Ideas served\nin code.",
    barIntro: "Each drink is a real project. Pick one at the bar or explore the menu to discover its story.",
    scene: "THE PROJECT BAR", sceneNote: "PICK A DRINK · DISCOVER A PROJECT", shelfDisplay: "Projects displayed on the shelves",
    projectAvailable: "Repository available", featured: "NEW!", recommended: "RECOMMENDED",
    menu: "The menu", menuSub: "A SELECTION OF PROJECTS", menuFoot: "Made with curiosity. Served with context.", menuComingSoon: "COMING SOON",
    openProject: "View project", close: "Close details", projectFile: "PROJECT NOTES",
    aboutProject: "What’s in the mix", collaboration: "Project type", technologies: "Technical ingredients", preparation: "How it was made", preparationSteps: "Project steps", results: "Outcome",
    projectTabs: { summary: "Overview", preparation: "Process", results: "Outcome", technologies: "Technology" },
    repository: "View repository", external: "opens in a new tab", originalRepo: "Original repository",
    comingSoon: "More details coming soon.",
    contactEyebrow: "03 / THE NEXT CONVERSATION", contactTitle: "Let’s grab\na drink.",
    contactIntro: "An idea, a data challenge or a conversation about technology? The next mix starts here.",
    write: "Get in touch", email: "EMAIL", phone: "PHONE", linkedin: "LET’S CONNECT ON LINKEDIN", location: "LOCATION", contactLocation: "Madrid, Spain · Open to relocation",
    footer: "DATA, IDEAS AND GOOD CONVERSATIONS.", top: "Back to top", rights: "All rights reserved.",
  },
};

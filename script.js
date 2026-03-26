/* ================= MENU HAMBURGUESA ================= */
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  if (nav) {
    nav.classList.toggle("active");
  }
}

/* ================= SCROLL ANIMATIONS ================= */
document.addEventListener("DOMContentLoaded", () => {

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
  });

});


/* ================= LANGUAGE SYSTEM ================= */
const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navProjects: "Projects",
    navContact: "Contact",

    /* HERO NUEVO */
    hero_main: "I automate processes and build backend systems that help businesses grow",
    hero_stack: "Python · APIs · Artificial Intelligence",
    hero_desc: "I help businesses and entrepreneurs save time, reduce errors and scale operations with real solutions",

    btn_projects: "View Projects",
    btn_contact: "Work with me",

    /* ABOUT */
    about_title: "About Me",
    about_lead: "I'm <strong>Jorge Luis Carvajal</strong>, a backend-focused developer specialized in Python, automation, data analysis and artificial intelligence.",
    about_text: "I design clean, scalable and real-world solutions focused on performance, security and business value.",
    about_btn: "View Projects",

    /* SERVICES */
    servicesTitle: "Services",

    /* CONTACT */
    contactTitle: "Contact",
    contactText: "Have a project or an idea? Let’s build something powerful together."
  },

  es: {
    navHome: "Inicio",
    navAbout: "Sobre mí",
    navServices: "Servicios",
    navProjects: "Proyectos",
    navContact: "Contacto",

    /* HERO NUEVO */
    hero_main: "Automatizo procesos y desarrollo sistemas backend que hacen crecer negocios",
    hero_stack: "Python · APIs · Inteligencia Artificial",
    hero_desc: "Ayudo a empresas y emprendedores a ahorrar tiempo, reducir errores y escalar sus operaciones con soluciones reales",

    btn_projects: "Ver proyectos",
    btn_contact: "Trabajar conmigo",

    /* ABOUT */
    about_title: "Sobre mí",
    about_lead: "Soy <strong>Jorge Luis Carvajal</strong>, desarrollador backend especializado en Python, automatización, análisis de datos e inteligencia artificial.",
    about_text: "Diseño soluciones limpias, escalables y reales enfocadas en rendimiento, seguridad y valor para el negocio.",
    about_btn: "Ver proyectos",

    /* SERVICES */
    servicesTitle: "Servicios",

    /* CONTACT */
    contactTitle: "Contacto",
    contactText: "¿Tienes una idea o proyecto? Construyamos algo potente juntos."
  }
};


/* ================= LANGUAGE SWITCH ================= */
function setLanguage(lang) {

  const safeSetText = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  };

  const safeSetHTML = (selector, html) => {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  };

  /* NAV */
  safeSetText("[data-nav-home]", translations[lang].navHome);
  safeSetText("[data-nav-about]", translations[lang].navAbout);
  safeSetText("[data-nav-services]", translations[lang].navServices);
  safeSetText("[data-nav-projects]", translations[lang].navProjects);
  safeSetText("[data-nav-contact]", translations[lang].navContact);

  /* HERO NUEVO */
  safeSetText("[data-i18n='hero_main']", translations[lang].hero_main);
  safeSetText("[data-i18n='hero_stack']", translations[lang].hero_stack);
  safeSetText("[data-i18n='hero_desc']", translations[lang].hero_desc);

  safeSetText("[data-i18n='btn_projects']", translations[lang].btn_projects);
  safeSetText("[data-i18n='btn_contact']", translations[lang].btn_contact);

  /* ABOUT */
  safeSetText("[data-i18n='about_title']", translations[lang].about_title);
  safeSetHTML("[data-i18n='about_lead']", translations[lang].about_lead);
  safeSetText("[data-i18n='about_text']", translations[lang].about_text);
  safeSetText("[data-i18n='about_btn']", translations[lang].about_btn);

  /* SERVICES */
  safeSetText("[data-services-title]", translations[lang].servicesTitle);

  /* CONTACT */
  safeSetText("[data-contact-title]", translations[lang].contactTitle);
  safeSetText("[data-contact-text]", translations[lang].contactText);
}


/* ================= DEFAULT LANGUAGE ================= */
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("en");
});


/* ================= CERTIFICATES AUTO CAROUSEL ================= */
document.addEventListener("DOMContentLoaded", () => {

  const track = document.getElementById("certTrack");
  const items = document.querySelectorAll(".cert-item");

  if (!track || items.length === 0) {
    console.warn("Certificates carousel not found");
    return;
  }

  let currentIndex = 0;
  const total = items.length;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 4500);

});
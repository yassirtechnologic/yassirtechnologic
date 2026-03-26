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

    heroTitle: "Backend Developer & Applications",
    heroDesc: "I build secure and scalable backend solutions, automation tools and applications using Python, Node.js and Artificial Intelligence applied to real-world problems.",
    heroFocus: "Open to junior / junior+ backend or application developer opportunities.",

    about_title: "About Me",
    about_lead: "I'm <strong>Jorge Luis Carvajal</strong>, a backend-focused developer specialized in Python, automation, data analysis and artificial intelligence.",
    about_text: "I design clean, scalable and real-world solutions focused on performance, security and business value.",
    about_btn: "View Projects",

    servicesTitle: "Services",

    contactTitle: "Contact",
    contactText: "Have a project or an idea? Let’s build something powerful together."
  },

  es: {
    navHome: "Inicio",
    navAbout: "Sobre mí",
    navServices: "Servicios",
    navProjects: "Proyectos",
    navContact: "Contacto",

    heroTitle: "Desarrollador Backend & Aplicaciones",
    heroDesc: "Desarrollo soluciones backend, automatización y aplicaciones seguras y escalables usando Python, Node.js e Inteligencia Artificial aplicada a problemas reales.",
    heroFocus: "Interesado en oportunidades junior / junior+ como desarrollador backend o de aplicaciones.",

    about_title: "Sobre mí",
    about_lead: "Soy <strong>Jorge Luis Carvajal</strong>, desarrollador backend especializado en Python, automatización, análisis de datos e inteligencia artificial.",
    about_text: "Diseño soluciones limpias, escalables y reales enfocadas en rendimiento, seguridad y valor para el negocio.",
    about_btn: "Ver proyectos",

    servicesTitle: "Servicios",

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

  /* HERO */
  safeSetText("[data-hero-title]", translations[lang].heroTitle);
  safeSetText("[data-hero-desc]", translations[lang].heroDesc);
  safeSetText("[data-hero-focus]", translations[lang].heroFocus);

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

/* Idioma por defecto */
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

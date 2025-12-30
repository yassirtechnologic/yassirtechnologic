/* ================= MENU HAMBURGUESA ================= */
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  if (nav) nav.classList.toggle("active");
}

/* ================= SCROLL ANIMATIONS ================= */
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

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

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
    contactText: "Have a project or an opportunity? Let's talk."
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
    contactText: "¿Tienes un proyecto o una oportunidad? Hablemos."
  }
};

function setLanguage(lang) {
  /* NAV */
  document.querySelector("[data-nav-home]").textContent = translations[lang].navHome;
  document.querySelector("[data-nav-about]").textContent = translations[lang].navAbout;
  document.querySelector("[data-nav-services]").textContent = translations[lang].navServices;
  document.querySelector("[data-nav-projects]").textContent = translations[lang].navProjects;
  document.querySelector("[data-nav-contact]").textContent = translations[lang].navContact;

  /* HERO */
  document.querySelector("[data-hero-title]").textContent = translations[lang].heroTitle;
  document.querySelector("[data-hero-desc]").textContent = translations[lang].heroDesc;
  document.querySelector("[data-hero-focus]").textContent = translations[lang].heroFocus;

  /* ABOUT */
  document.querySelector("[data-i18n='about_title']").textContent =
    translations[lang].about_title;

  document.querySelector("[data-i18n='about_lead']").innerHTML =
    translations[lang].about_lead;

  document.querySelector("[data-i18n='about_text']").textContent =
    translations[lang].about_text;

  document.querySelector("[data-i18n='about_btn']").textContent =
    translations[lang].about_btn;

  /* SERVICES */
  document.querySelector("[data-services-title]").textContent =
    translations[lang].servicesTitle;

  /* CONTACT */
  document.querySelector("[data-contact-title]").textContent =
    translations[lang].contactTitle;

  document.querySelector("[data-contact-text]").textContent =
    translations[lang].contactText;
}

/* Idioma por defecto */
setLanguage("en");

/* ================= CERTIFICATES AUTO CAROUSEL ================= */
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("certTrack");
  const items = document.querySelectorAll(".cert-item");

  if (!track || items.length === 0) {
    console.warn("Certificados: carrusel no encontrado");
    return;
  }

  let currentIndex = 0;
  const total = items.length;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 4500);
});

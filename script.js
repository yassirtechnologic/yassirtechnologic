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

    aboutTitle: "About Me",
    aboutText: "I'm Jorge Luis Carvajal, a backend-focused developer with experience in Python, automation, data analysis and artificial intelligence.",

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

    aboutTitle: "Sobre mí",
    aboutText: "Soy Jorge Luis Carvajal, desarrollador backend con experiencia en Python, automatización, análisis de datos e inteligencia artificial.",

    servicesTitle: "Servicios",

    contactTitle: "Contacto",
    contactText: "¿Tienes un proyecto o una oportunidad? Hablemos."
  }
};

function setLanguage(lang) {
  document.querySelector("[data-nav-home]").textContent = translations[lang].navHome;
  document.querySelector("[data-nav-about]").textContent = translations[lang].navAbout;
  document.querySelector("[data-nav-services]").textContent = translations[lang].navServices;
  document.querySelector("[data-nav-projects]").textContent = translations[lang].navProjects;
  document.querySelector("[data-nav-contact]").textContent = translations[lang].navContact;

  document.querySelector("[data-hero-title]").textContent = translations[lang].heroTitle;
  document.querySelector("[data-hero-desc]").textContent = translations[lang].heroDesc;
  document.querySelector("[data-hero-focus]").textContent = translations[lang].heroFocus;

  document.querySelector("[data-about-title]").textContent = translations[lang].aboutTitle;
  document.querySelector("[data-about-text]").textContent = translations[lang].aboutText;

  document.querySelector("[data-services-title]").textContent = translations[lang].servicesTitle;

  document.querySelector("[data-contact-title]").textContent = translations[lang].contactTitle;
  document.querySelector("[data-contact-text]").textContent = translations[lang].contactText;
}

/* Idioma por defecto */
setLanguage("en");

/* ================= CERTIFICATES AUTO CAROUSEL (FIXED) ================= */

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("certTrack");
  const items = document.querySelectorAll(".cert-item");

  if (!track || items.length === 0) {
    console.warn("Certificados: carrusel no encontrado");
    return;
  }

  let currentIndex = 0;

  setInterval(() => {
    const itemWidth = items[0].offsetWidth;
    currentIndex++;

    if (currentIndex >= items.length) {
      currentIndex = 0;
    }

    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }, 5000);
});

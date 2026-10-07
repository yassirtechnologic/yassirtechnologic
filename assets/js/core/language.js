/* ==========================================================
   YASSIR TECHNOLOGIC

   File:
   language.js

   Description:
   Global language controller.

   Responsibility:
   Manages the active website language, translations,
   language persistence and accessibility states.

   Author:
   Yassir Technologic

   Version:
   1.0.0
========================================================== */


/* ==========================================================
   CONFIGURATION
========================================================== */

const STORAGE_KEY =
    "yassir-technologic-language";


const DEFAULT_LANGUAGE =
    "es";


const SUPPORTED_LANGUAGES = [
    "es",
    "en"
];


/* ==========================================================
   TRANSLATIONS

   Corporate Home translations, including modal and chatbot interface labels.
========================================================== */

const translations = {
    "es": {
        "nav_home": "Inicio",
        "nav_company": "Sobre nosotros",
        "nav_services": "Servicios",
        "nav_comments": "Comentarios",
        "nav_contact_link": "Contacto",
        "nav_contact": "Solicitar consulta",
        "hero_eyebrow": "YASSIR TECHNOLOGIC · SOFTWARE · IA · AUTOMATIZACIÓN",
        "hero_title": "Software que trabaja para tu negocio.",
        "hero_description": "Convertimos procesos complejos, tareas repetitivas y sistemas desconectados en operaciones más fluidas para tu equipo y tus clientes.",
        "hero_primary_action": "Solicitar una consulta",
        "hero_secondary_action": "Ver servicios",
        "flow_input": "Tu negocio",
        "flow_engine": "Software · IA · Automatización",
        "flow_output": "Operaciones más fluidas",
        "about_eyebrow": "SOBRE YASSIR TECHNOLOGIC",
        "about_title": "Tecnología que elimina fricción.",
        "about_description": "En Yassir Technologic ayudamos a empresas y profesionales a incorporar tecnología que responda a necesidades reales. Analizamos sus procesos y desarrollamos soluciones a medida para mejorar la productividad, reducir tareas manuales y costes operativos, ofrecer una mejor atención al cliente y facilitar la toma de decisiones con datos.",
        "about_area_0_title": "Tareas repetitivas",
        "about_area_0_text": "Automatización para liberar tiempo y reducir errores.",
        "about_area_1_title": "Sistemas aislados",
        "about_area_1_text": "Integraciones y APIs para conectar herramientas y datos.",
        "about_area_2_title": "Atención al cliente",
        "about_area_2_text": "Experiencias digitales y asistentes adaptados al negocio.",
        "about_area_3_title": "Cobros y operaciones",
        "about_area_3_text": "Flujos de pago integrados con los procesos de venta.",
        "about_closing": "No solo desarrollamos software. Creamos tecnología que trabaja para tu negocio.",
        "about_attributes": "Soluciones a medida · Seguridad · Escalabilidad · Automatización",
        "services_eyebrow": "SERVICIOS",
        "services_title": "Soluciones para necesidades reales.",
        "service_1_title": "Consultoría tecnológica",
        "service_1_text": "Detectar problemas, definir prioridades y decidir dónde tiene sentido invertir en tecnología.",
        "service_2_title": "Automatización de procesos",
        "service_2_text": "Reducir tareas repetitivas, trabajo manual y errores operativos.",
        "service_3_title": "Integración de sistemas y APIs",
        "service_3_text": "Conectar herramientas y evitar copiar información manualmente entre sistemas.",
        "service_4_title": "Desarrollo de software a medida",
        "service_4_text": "Resolver necesidades que el software estándar no cubre adecuadamente.",
        "service_5_title": "Desarrollo web, portales y backend",
        "service_5_text": "Digitalizar operaciones, servicios y experiencias para clientes y equipos.",
        "service_6_title": "Gestión de clientes y procesos comerciales",
        "service_6_text": "Organizar consultas, seguimiento, oportunidades y próximas acciones comerciales.",
        "service_7_title": "Inteligencia artificial aplicada",
        "service_7_text": "Incorporar asistentes y funciones de IA cuando exista un caso de uso empresarial concreto.",
        "service_8_title": "Machine learning y análisis de datos",
        "service_8_text": "Analizar información y evaluar oportunidades de predicción, clasificación o apoyo a decisiones según los datos disponibles.",
        "service_9_title": "Infraestructura cloud y AWS",
        "service_9_text": "Desplegar sistemas seguros, mantenibles y preparados para crecer en la nube.",
        "service_10_title": "Integración de pagos digitales",
        "service_10_text": "Incorporar cobros digitales dentro del proceso de compra o contratación.",
        "testimonials_eyebrow": "COMENTARIOS",
        "testimonials_title": "La confianza se construye con resultados reales.",
        "reviews_empty": "Todavía no hay comentarios públicos aprobados.",
        "reviews_more": "Ver más comentarios",
        "reviews_leave": "Dejar un comentario",
        "contact_eyebrow": "CONTACTO",
        "contact_title": "Hablemos de lo que tu negocio necesita mejorar.",
        "contact_description": "Cuéntanos qué proceso, tarea o problema quieres mejorar. Podemos analizar contigo si una solución de software, automatización o inteligencia artificial tiene sentido para tu negocio.",
        "contact_email": "Enviar email",
        "contact_whatsapp": "Hablar por WhatsApp",
        "contact_linkedin": "Conectar en LinkedIn",
        "contact_instagram": "Instagram",
        "footer_description": "Software, automatización e inteligencia artificial para empresas.",
        "footer_navigation_title": "Navegación",
        "footer_contact_title": "Contacto",
        "footer_rights": "Todos los derechos reservados.",
        "review_name": "Nombre",
        "review_company": "Empresa (opcional)",
        "review_message": "Comentario",
        "review_rating": "Valoración",
        "review_star_1": "1 estrella",
        "review_star_2": "2 estrellas",
        "review_star_3": "3 estrellas",
        "review_star_4": "4 estrellas",
        "review_star_5": "5 estrellas",
        "review_unavailable": "El envío de comentarios aún no está disponible. Puedes compartir tu experiencia por email.",
        "review_submit": "Enviar comentario",
        "review_modal_title": "Dejar un comentario",
        "review_modal_description": "Los comentarios se revisan antes de publicarse. El formulario está preparado; el envío online está pendiente de activación.",
        "modal_close": "Cerrar",
        "reviews_modal_title": "Comentarios públicos",
        "skip_content": "Ir al contenido",
        "header_brand_label": "Yassir Technologic - Inicio",
        "header_navigation_label": "Navegación principal",
        "language_selector_label": "Seleccionar idioma",
        "navigation_open": "Abrir menú de navegación",
        "navigation_close": "Cerrar menú de navegación",
        "footer_navigation_label": "Navegación del pie de página",
        "chatbot_status": "Andy · Asistente virtual",
        "chatbot_welcome": "Hola 👋 Soy Andy, el asistente virtual de Yassir Technologic. ¿En qué puedo ayudarte?",
        "chatbot_close": "Cerrar asistente",
        "chatbot_quick_automation": "Automatizar mi negocio",
        "chatbot_quick_services": "Ver servicios",
        "chatbot_quick_project": "Tengo un proyecto",
        "chatbot_send": "Enviar mensaje",
        "chatbot_message_label": "Escribe tu mensaje",
        "chatbot_open": "Abrir asistente Yassir AI",
        "chatbot_message_placeholder": "Escribe tu mensaje...",
        "seo_title": "Yassir Technologic | Software, automatización e inteligencia artificial",
        "seo_description": "Software a medida, automatización e inteligencia artificial para empresas. Yassir Technologic: tecnología que trabaja para tu negocio."
    },
    "en": {
        "nav_home": "Home",
        "nav_company": "About us",
        "nav_services": "Services",
        "nav_comments": "Reviews",
        "nav_contact_link": "Contact",
        "nav_contact": "Request consultation",
        "hero_eyebrow": "YASSIR TECHNOLOGIC · SOFTWARE · AI · AUTOMATION",
        "hero_title": "Software that works for your business.",
        "hero_description": "We turn complex processes, repetitive tasks and disconnected systems into smoother operations for your team and your customers.",
        "hero_primary_action": "Request a consultation",
        "hero_secondary_action": "View services",
        "flow_input": "Your business",
        "flow_engine": "Software · AI · Automation",
        "flow_output": "Smoother operations",
        "about_eyebrow": "ABOUT YASSIR TECHNOLOGIC",
        "about_title": "Technology that removes friction.",
        "about_description": "At Yassir Technologic, we help businesses and professionals adopt technology that responds to real needs. We analyze their processes and develop tailored solutions to improve productivity, reduce manual work and operating costs, improve customer service and support better decisions through data.",
        "about_area_0_title": "Repetitive tasks",
        "about_area_0_text": "Automation to save time and reduce errors.",
        "about_area_1_title": "Disconnected systems",
        "about_area_1_text": "Integrations and APIs to connect tools and data.",
        "about_area_2_title": "Customer service",
        "about_area_2_text": "Digital experiences and assistants adapted to the business.",
        "about_area_3_title": "Payments and operations",
        "about_area_3_text": "Payment flows integrated with sales processes.",
        "about_closing": "We don't just build software. We create technology that works for your business.",
        "about_attributes": "Tailored Solutions · Security · Scalability · Automation",
        "services_eyebrow": "SERVICES",
        "services_title": "Solutions for real business needs.",
        "service_1_title": "Technology consulting",
        "service_1_text": "Identify problems, set priorities and decide where investing in technology makes business sense.",
        "service_2_title": "Process automation",
        "service_2_text": "Reduce repetitive tasks, manual work and operational errors.",
        "service_3_title": "Systems and API integration",
        "service_3_text": "Connect tools and eliminate manual copying of information between systems.",
        "service_4_title": "Custom software development",
        "service_4_text": "Address business needs that standard software cannot adequately meet.",
        "service_5_title": "Web, portal and backend development",
        "service_5_text": "Digitize operations, services and experiences for customers and teams.",
        "service_6_title": "Customer and sales process management",
        "service_6_text": "Organize inquiries, follow-ups, opportunities and next steps in the sales process.",
        "service_7_title": "Applied artificial intelligence",
        "service_7_text": "Introduce AI assistants and features where there is a specific business use case.",
        "service_8_title": "Machine learning and data analysis",
        "service_8_text": "Analyze information and assess opportunities for prediction, classification or decision support based on available data.",
        "service_9_title": "Cloud infrastructure and AWS",
        "service_9_text": "Deploy secure, maintainable systems that are ready to grow in the cloud.",
        "service_10_title": "Digital payment integration",
        "service_10_text": "Integrate digital payments into purchasing and service booking processes.",
        "testimonials_eyebrow": "REVIEWS",
        "testimonials_title": "Trust is built on real results.",
        "reviews_empty": "There are no approved public reviews yet.",
        "reviews_more": "View more reviews",
        "reviews_leave": "Leave a review",
        "contact_eyebrow": "CONTACT",
        "contact_title": "Let's talk about what your business needs to improve.",
        "contact_description": "Tell us which process, task or problem you want to improve. Together, we can assess whether software, automation or artificial intelligence makes sense for your business.",
        "contact_email": "Send an email",
        "contact_whatsapp": "Chat on WhatsApp",
        "contact_linkedin": "Connect on LinkedIn",
        "contact_instagram": "Instagram",
        "footer_description": "Software, automation and artificial intelligence for businesses.",
        "footer_navigation_title": "Navigation",
        "footer_contact_title": "Contact",
        "footer_rights": "All rights reserved.",
        "review_name": "Name",
        "review_company": "Company (optional)",
        "review_message": "Review",
        "review_rating": "Rating",
        "review_star_1": "1 star",
        "review_star_2": "2 stars",
        "review_star_3": "3 stars",
        "review_star_4": "4 stars",
        "review_star_5": "5 stars",
        "review_unavailable": "Review submission is not available yet. You can share your experience by email.",
        "review_submit": "Submit review",
        "review_modal_title": "Leave a review",
        "review_modal_description": "Reviews are moderated before publication. The form is ready; online submission is awaiting activation.",
        "modal_close": "Close",
        "reviews_modal_title": "Public reviews",
        "skip_content": "Skip to content",
        "header_brand_label": "Yassir Technologic - Home",
        "header_navigation_label": "Primary navigation",
        "language_selector_label": "Select language",
        "navigation_open": "Open navigation menu",
        "navigation_close": "Close navigation menu",
        "footer_navigation_label": "Footer navigation",
        "chatbot_status": "Andy · Virtual assistant",
        "chatbot_welcome": "Hi 👋 I'm Andy, Yassir Technologic's virtual assistant. How can I help you?",
        "chatbot_close": "Close assistant",
        "chatbot_quick_automation": "Automate my business",
        "chatbot_quick_services": "View services",
        "chatbot_quick_project": "I have a project",
        "chatbot_send": "Send message",
        "chatbot_message_label": "Write your message",
        "chatbot_open": "Open Yassir AI assistant",
        "chatbot_message_placeholder": "Write your message...",
        "seo_title": "Yassir Technologic | Software, automation and artificial intelligence",
        "seo_description": "Custom software, automation and artificial intelligence for businesses. Yassir Technologic: technology that works for your business."
    }
};

function isSupportedLanguage(language) {

    return SUPPORTED_LANGUAGES.includes(
        language
    );

}


/* ==========================================================
   STORED LANGUAGE
========================================================== */

function getStoredLanguage() {

    try {

        const storedLanguage =
            localStorage.getItem(
                STORAGE_KEY
            );


        if (
            storedLanguage &&
            isSupportedLanguage(storedLanguage)
        ) {

            return storedLanguage;

        }

    } catch {

        /*
         * localStorage may be unavailable in restricted
         * browser environments. The website must continue
         * working without persistence.
         */

    }


    return null;

}


/* ==========================================================
   BROWSER LANGUAGE
========================================================== */

function getBrowserLanguage() {

    const browserLanguage =
        navigator.language
            ?.slice(0, 2)
            .toLowerCase();


    if (
        browserLanguage &&
        isSupportedLanguage(browserLanguage)
    ) {

        return browserLanguage;

    }


    return DEFAULT_LANGUAGE;

}


/* ==========================================================
   INITIAL LANGUAGE
========================================================== */

function getInitialLanguage() {

    return (
        getStoredLanguage() ??
        getBrowserLanguage()
    );

}


/* ==========================================================
   SAVE LANGUAGE
========================================================== */

function saveLanguage(language) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            language
        );

    } catch {

        /*
         * Persistence is optional.
         * No action is required if storage is unavailable.
         */

    }

}


/* ==========================================================
   TEXT TRANSLATIONS
========================================================== */

function updateTextContent(language) {

    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach((element) => {

        const key =
            element.dataset.i18n;


        const translatedText =
            translations[language]?.[key];


        /*
         * Keys belonging to sections not yet migrated are
         * intentionally left untouched.
         */

        if (translatedText === undefined) {

            return;

        }


        element.textContent =
            translatedText;

    });

}

/* ==========================================================
   ATTRIBUTE TRANSLATIONS
========================================================== */

function updateAttributeTranslations(language) {

    /* ======================================================
       ARIA LABELS
    ====================================================== */

    const ariaLabelElements =
        document.querySelectorAll(
            "[data-i18n-aria-label]"
        );


    ariaLabelElements.forEach((element) => {

        const key =
            element.dataset.i18nAriaLabel;


        const translatedText =
            translations[language]?.[key];


        if (translatedText === undefined) {

            return;

        }


        element.setAttribute(
            "aria-label",
            translatedText
        );

    });


    /* ======================================================
       PLACEHOLDERS
    ====================================================== */

    const placeholderElements =
        document.querySelectorAll(
            "[data-i18n-placeholder]"
        );


    placeholderElements.forEach((element) => {

        const key =
            element.dataset.i18nPlaceholder;


        const translatedText =
            translations[language]?.[key];


        if (translatedText === undefined) {

            return;

        }


        element.setAttribute(
            "placeholder",
            translatedText
        );

    });

}

/* ==========================================================
   DOCUMENT LANGUAGE
========================================================== */

function updateDocumentLanguage(language) {

    document.documentElement.lang =
        language;

}


/* ==========================================================
   HEADER ACCESSIBILITY
========================================================== */

function updateHeaderAccessibility(language) {

    const dictionary =
        translations[language];


    const brand =
        document.querySelector(
            ".site-header__brand"
        );


    const navigation =
        document.querySelector(
            "[data-navigation]"
        );


    const languageSelector =
        document.querySelector(
            ".site-header__languages"
        );


    const navigationToggle =
        document.querySelector(
            "[data-nav-toggle]"
        );


    const toggleLabel =
        navigationToggle?.querySelector(
            ".visually-hidden"
        );


    if (brand) {

        brand.setAttribute(
            "aria-label",
            dictionary.header_brand_label
        );

    }


    if (navigation) {

        navigation.setAttribute(
            "aria-label",
            dictionary.header_navigation_label
        );

    }


    if (languageSelector) {

        languageSelector.setAttribute(
            "aria-label",
            dictionary.language_selector_label
        );

    }


    if (
        navigationToggle &&
        toggleLabel
    ) {

        navigationToggle.dataset.labelOpen =
            dictionary.navigation_open;


        navigationToggle.dataset.labelClose =
            dictionary.navigation_close;


        const menuIsOpen =
            navigationToggle.getAttribute(
                "aria-expanded"
            ) === "true";


        toggleLabel.textContent =
            menuIsOpen
                ? dictionary.navigation_close
                : dictionary.navigation_open;

    }

}


/* ==========================================================
   LANGUAGE BUTTON STATES
========================================================== */

function updateLanguageButtons(language) {

    const buttons =
        document.querySelectorAll(
            "button[data-language]"
        );


    buttons.forEach((button) => {

        const isActive =
            button.dataset.language === language;


        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );

    });

}


/* ==========================================================
   APPLY LANGUAGE
========================================================== */

function applyLanguage(
    language,
    {
        persist = true
    } = {}
) {

    if (!isSupportedLanguage(language)) {

        return;

    }


    document.title = translations[language].seo_title;
    document.querySelector('meta[name="description"]').content = translations[language].seo_description;
    document.querySelector('meta[property="og:title"]').content = translations[language].seo_title;
    document.querySelector('meta[property="og:description"]').content = translations[language].seo_description;
    document.querySelector('meta[property="og:locale"]').content = language === 'en' ? 'en_GB' : 'es_ES';
    updateDocumentLanguage(language);

    updateTextContent(language);

    updateAttributeTranslations(language);

    updateHeaderAccessibility(language);

    updateLanguageButtons(language);


    if (persist) {

        saveLanguage(language);

    }


    /*
     * Exposes the current language to other modules without
     * creating global JavaScript variables.
     */

    document.documentElement.dataset.language =
        language;

}


/* ==========================================================
   INITIALIZE LANGUAGE SYSTEM
========================================================== */

export function initLanguage() {

    const languageButtons =
        document.querySelectorAll(
            "button[data-language]"
        );


    const initialLanguage =
        getInitialLanguage();


    applyLanguage(
        initialLanguage,
        {
            persist: false
        }
    );


    languageButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const language =
                    button.dataset.language;


                if (!language) {

                    return;

                }


                applyLanguage(language);

            }
        );

    });

}
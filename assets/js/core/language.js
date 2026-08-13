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

   We start with the Header translations.

   Additional sections will be added progressively as each
   module of the new website is rebuilt.
========================================================== */

const translations = {

    /* ======================================================
       SPANISH
    ====================================================== */

    es: {

        /* ==================================================
           HEADER
        ================================================== */

        nav_home:
            "Inicio",

        nav_services:
            "Servicios",

        nav_projects:
            "Proyectos",

        nav_company:
            "Empresa",

        nav_contact:
            "Solicitar consulta",

        header_brand_label:
            "Yassir Technologic - Inicio",

        header_navigation_label:
            "Navegación principal",

        language_selector_label:
            "Seleccionar idioma",

        navigation_open:
            "Abrir menú de navegación",

        navigation_close:
            "Cerrar menú de navegación",


        /* ==================================================
           HERO
        ================================================== */

        hero_eyebrow:
            "Inteligencia Artificial · Automatización · Software",

        hero_title:
            "Tecnología que convierte procesos complejos en negocios más eficientes.",

        hero_description:
            "Diseñamos soluciones de inteligencia artificial, automatización y software para ayudar a empresas a ahorrar tiempo, reducir trabajo manual y crecer con una infraestructura preparada para el futuro.",

        hero_primary_action:
            "Explorar soluciones",

        hero_secondary_action:
            "Solicitar consulta",

        hero_benefits_label:
            "Beneficios principales",

        hero_benefit_automation:
            "Automatización orientada a resultados",

        hero_benefit_scalability:
            "Sistemas preparados para escalar",

        hero_benefit_business:
            "Tecnología enfocada en valor de negocio",

        hero_system_input_label:
            "Entrada",

        hero_system_processes:
            "Procesos",

        hero_system_intelligence_label:
            "Inteligencia",

        hero_system_ai_automation:
            "IA + Automatización",

        hero_system_result_label:
            "Resultado",

        hero_system_efficiency:
            "Eficiencia",

        hero_system_ai:
            "Inteligencia Artificial",

        hero_system_integrations:
            "Integraciones",

        hero_system_automation:
            "Automatización",

        hero_system_scalability:
            "Escalabilidad",

        /* ==================================================
        COMPANIES
        ================================================== */

        companies_eyebrow:
            "Tecnología para negocios reales",

        companies_title:
            "Soluciones adaptadas a cómo funciona tu negocio.",

        companies_description:
            "Trabajamos con empresas, profesionales y negocios que quieren automatizar procesos, reducir tareas manuales y utilizar mejor la tecnología.",

        companies_audiences_label:
            "Tipos de negocios",

        companies_businesses:
            "Empresas",

        companies_freelancers:
            "Autónomos",

        companies_restaurants:
            "Restaurantes",

        companies_hotels:
            "Hoteles",

        companies_professionals:
            "Profesionales",

        companies_local_businesses:
            "Negocios locales",

        companies_scalability_title:
            "Preparado para crecer",

        companies_scalability_text:
            "Diseñamos soluciones que pueden evolucionar junto con tu negocio.",

        companies_security_title:
            "Seguridad desde el diseño",

        companies_security_text:
            "La estabilidad, la protección y las buenas prácticas forman parte de la arquitectura.",

        companies_value_title:
            "Tecnología con propósito",

        companies_value_text:
            "Cada solución debe generar eficiencia, ahorro o nuevas oportunidades de crecimiento",

        /* ==================================================
        PROBLEMS
        ================================================== */

        problems_eyebrow:
            "El problema no siempre es trabajar más",

        problems_title:
            "Muchos negocios pierden tiempo y dinero en procesos que la tecnología puede simplificar.",

        problems_description:
            "Identificamos cuellos de botella, tareas repetitivas y sistemas desconectados para convertirlos en procesos más rápidos, medibles y escalables.",

        problem_manual_title:
            "Demasiado trabajo manual",

        problem_manual_text:
            "Tareas repetitivas consumen horas que podrían dedicarse a clientes, estrategia y crecimiento.",

        problem_disconnected_title:
            "Herramientas desconectadas",

        problem_disconnected_text:
            "Información repartida entre aplicaciones obliga a copiar datos y aumenta el riesgo de errores.",

        problem_response_title:
            "Respuestas demasiado lentas",

        problem_response_text:
            "Clientes y equipos esperan información que podría obtenerse o gestionarse automáticamente.",

        problem_visibility_title:
            "Falta de visibilidad",

        problem_visibility_text:
            "Sin datos claros es difícil saber qué funciona, detectar problemas y tomar mejores decisiones.",

        problem_scale_title:
            "Procesos que no escalan",

        problem_scale_text:
            "Lo que funciona con pocos clientes puede convertirse en un cuello de botella cuando el negocio crece.",

        problem_generic_title:
            "Software que no se adapta",

        problem_generic_text:
            "Las herramientas genéricas no siempre encajan con los procesos reales de cada empresa.",

        problems_closing:
            "La tecnología correcta no añade complejidad: elimina fricción.",

        problems_action:
            "Ver cómo lo resolvemos",

        /* ==================================================
        COMPANY / ABOUT
        ================================================== */

        about_eyebrow_v2:
            "Yassir Technologic",

        about_title_v2:
            "Construimos tecnología con un objetivo: hacer que los negocios funcionen mejor.",

        about_lead_v2:
            "No desarrollamos tecnología simplemente porque sea posible. Analizamos primero dónde puede generar eficiencia, ahorro, control o nuevas oportunidades.",

        about_description_v2:
            "Yassir Technologic desarrolla soluciones de inteligencia artificial, automatización y software con una arquitectura profesional preparada para evolucionar junto con cada negocio.",

        about_projects_action:
            "Ver proyectos",

        about_contact_action:
            "Hablar con nosotros",

        about_company_badge:
            "Empresa tecnológica",


        /* COMPANY SYSTEM */

        about_system_input:
            "Necesidad empresarial",

        about_system_engine:
            "Tecnología aplicada",

        about_system_output:
            "Resultado de negocio",


        /* PRINCIPLES */

        about_business_title:
            "Negocio primero",

        about_business_text:
            "Entendemos el problema antes de elegir la tecnología.",

        about_architecture_title:
            "Arquitectura preparada para crecer",

        about_architecture_text:
            "Construimos sistemas modulares, mantenibles y escalables.",

        about_security_title:
            "Seguridad y calidad",

        about_security_text:
            "Aplicamos buenas prácticas desde la base del proyecto.",

        about_evolution_title:
            "Evolución continua",

        about_evolution_text:
            "Diseñamos soluciones que pueden mejorar a medida que cambia el negocio.",


        /* VISION */

        about_statement_label:
            "Nuestra visión",

        about_statement_text:
            "Las empresas que incorporen la tecnología adecuada antes que su competencia estarán mejor preparadas para operar, crecer y adaptarse al futuro.",

        /* ==================================================
        SERVICES
        ================================================== */

        services_eyebrow:
            "Soluciones tecnológicas",

        services_title_v2:
            "Tecnología diseñada para resolver problemas reales.",

        services_description:
            "Combinamos inteligencia artificial, automatización y desarrollo de software para construir soluciones adaptadas a las necesidades reales de cada negocio.",


        /* AUTOMATION */

        service_automation_title_v2:
            "Automatización de procesos",

        service_automation_text_v2:
            "Automatizamos tareas repetitivas y flujos de trabajo para reducir errores, ahorrar tiempo y liberar recursos.",


        /* AI & CHATBOTS */

        service_ai_title:
            "Inteligencia Artificial y Chatbots",

        service_ai_text:
            "Creamos asistentes inteligentes capaces de atender, responder, clasificar información y automatizar conversaciones y procesos.",


        /* CUSTOM SOFTWARE */

        service_software_title:
            "Software a medida",

        service_software_text:
            "Desarrollamos sistemas adaptados a procesos específicos cuando las herramientas genéricas no son suficientes.",


        /* WEB DEVELOPMENT */

        service_web_title:
            "Desarrollo Web",

        service_web_text:
            "Diseñamos y desarrollamos experiencias web rápidas, profesionales y orientadas a captar clientes y generar negocio.",


        /* INTEGRATIONS */

        service_integrations_title:
            "Integraciones y APIs",

        service_integrations_text:
            "Conectamos herramientas, plataformas y datos para eliminar duplicaciones y crear flujos de trabajo unificados.",


        /* DASHBOARDS */

        service_dashboards_title:
            "Dashboards y análisis de datos",

        service_dashboards_text:
            "Transformamos información dispersa en indicadores claros para controlar operaciones y tomar mejores decisiones.",


        /* SAAS */

        service_saas_title:
            "Soluciones SaaS",

        service_saas_text:
            "Construimos productos digitales escalables preparados para ofrecer servicios mediante modelos de suscripción.",


        /* CONSULTING */

        service_consulting_title:
            "Consultoría tecnológica",

        service_consulting_text:
            "Analizamos procesos y oportunidades para identificar dónde la automatización, la IA o el software pueden generar mayor impacto.",

        service_consulting_action:
            "Analizar mi negocio",


        /* SERVICES CTA */

        services_cta_title:
            "¿No sabes qué solución necesitas?",

        services_cta_text:
            "Cuéntanos cómo funciona tu negocio y analizaremos dónde la tecnología puede generar mayor impacto.",

        services_cta_action:
            "Hablar con Yassir Technologic",

        /* ==================================================
        PRODUCTS
        ================================================== */

        products_eyebrow:
            "Productos Yassir Technologic",

        products_title:
            "Tecnología creada para convertirse en una ventaja competitiva.",

        products_description:
            "Desarrollamos plataformas y productos tecnológicos preparados para automatizar operaciones, mejorar la experiencia del cliente y facilitar el crecimiento.",


        /* FEATURED PRODUCT */

        products_featured_badge:
            "Inteligencia Artificial",

        product_ai_title:
            "Yassir AI Assistant",

        product_ai_description:
            "Asistentes inteligentes para automatizar atención, captación de clientes, preguntas frecuentes y procesos de conversación dentro de un negocio.",

        product_ai_feature_1:
            "Atención automatizada las 24 horas",

        product_ai_feature_2:
            "Captación y clasificación de potenciales clientes",

        product_ai_feature_3:
            "Integración con procesos y sistemas empresariales",

        product_ai_action:
            "Solicitar información",

        product_view_projects:
            "Ver casos relacionados",

        product_ai_demo_client:
            "Necesito automatizar la atención de mis clientes.",

        product_ai_demo_assistant:
            "Podemos analizar tus consultas, responder automáticamente y enviar cada oportunidad al proceso adecuado.",

        product_ai_demo_processing:
            "Analizando necesidad",

        product_ai_demo_result:
            "Lead cualificado",


        /* YASSIR CORE */

        product_core_category:
            "Gestión empresarial",

        product_core_title:
            "Yassir Core",

        product_core_description:
            "Plataforma empresarial modular para centralizar clientes, operaciones, finanzas, ventas y datos dentro de un único ecosistema.",

        product_core_feature_1:
            "Gestión centralizada",

        product_core_feature_2:
            "Arquitectura modular",

        product_core_feature_3:
            "Información para tomar decisiones",

        product_core_action:
            "Conocer la plataforma",


        /* SMART ORDERING */

        product_ordering_category:
            "Hostelería",

        product_ordering_title:
            "Yassir Smart Ordering",

        product_ordering_description:
            "Sistema digital de pedidos diseñado para restaurantes, cafeterías y negocios de hostelería que quieren agilizar pedidos y mejorar la experiencia del cliente.",

        product_ordering_feature_1:
            "Pedidos digitales",

        product_ordering_feature_2:
            "Menor carga operativa",

        product_ordering_feature_3:
            "Experiencia de compra más rápida",

        product_ordering_action:
            "Solicitar información",


        /* PRODUCTS CTA */

        products_cta_label:
            "¿Necesitas algo diferente?",

        products_cta_title:
            "También construimos soluciones específicas para cada negocio.",

        products_cta_description:
            "Si ninguno de nuestros productos encaja exactamente con tu proceso, podemos diseñar una solución a medida.",

        products_cta_action:
            "Cuéntanos qué necesitas",

        /* ==================================================
        PROCESS
        ================================================== */

        process_eyebrow:
            "Cómo trabajamos",

        process_title:
            "De un problema real a una solución funcionando.",

        process_description:
            "Cada proyecto comienza entendiendo el negocio. Después diseñamos, construimos e integramos la tecnología necesaria con una metodología clara y medible.",


        /* ANALYSIS */

        process_analysis_title:
            "Analizamos",

        process_analysis_text:
            "Estudiamos tus procesos, objetivos y puntos de fricción para identificar dónde la tecnología puede generar mayor impacto.",


        /* DESIGN */

        process_design_title:
            "Diseñamos",

        process_design_text:
            "Definimos la arquitectura, las funcionalidades y la estrategia técnica antes de comenzar el desarrollo.",


        /* BUILD */

        process_build_title:
            "Construimos",

        process_build_text:
            "Desarrollamos la solución utilizando una arquitectura modular, mantenible y preparada para crecer.",


        /* INTEGRATION */

        process_integrate_title:
            "Integramos",

        process_integrate_text:
            "Conectamos la solución con los sistemas, herramientas y flujos existentes para que forme parte real de la operación.",


        /* OPTIMIZATION */

        process_optimize_title:
            "Optimizamos",

        process_optimize_text:
            "Medimos resultados, detectamos mejoras y evolucionamos la solución a medida que cambian las necesidades del negocio.",


        /* PRINCIPLE */

        process_principle_label:
            "Nuestro principio",

        process_principle_text:
            "La tecnología debe adaptarse al negocio. El negocio no debería tener que adaptarse a una mala tecnología.",

        process_action:
            "Hablar sobre mi proyecto",

        /* ==================================================
        TECHNOLOGY
        ================================================== */

        technology_eyebrow:
            "Tecnología",

        technology_title:
            "Elegimos la tecnología según el problema, no el problema según la tecnología.",

        technology_description:
            "Combinamos inteligencia artificial, machine learning, desarrollo de software, datos, integraciones y cloud para construir soluciones profesionales y escalables.",


        /* ARTIFICIAL INTELLIGENCE & MACHINE LEARNING */

        technology_ai_title:
            "Inteligencia Artificial y Machine Learning",

        technology_ai_text:
            "Aplicamos modelos de lenguaje, machine learning y sistemas inteligentes para analizar información, automatizar procesos y construir soluciones capaces de aprender de los datos.",


        /* SOFTWARE ENGINEERING */

        technology_backend_title:
            "Ingeniería de software",

        technology_backend_text:
            "Sistemas backend, APIs y aplicaciones diseñadas con arquitecturas modulares, mantenibles y preparadas para crecer.",


        /* DIGITAL EXPERIENCES */

        technology_frontend_title:
            "Experiencias digitales",

        technology_frontend_text:
            "Interfaces rápidas, accesibles y responsive enfocadas en experiencia de usuario, rendimiento y conversión.",


        /* DATA */

        technology_data_title:
            "Datos y analítica",

        technology_data_text:
            "Transformamos datos operativos en información estructurada, indicadores y herramientas para tomar mejores decisiones.",


        /* INTEGRATIONS */

        technology_integrations_title:
            "Integraciones",

        technology_integrations_text:
            "Conectamos plataformas, servicios y herramientas para crear procesos continuos y reducir trabajo manual entre sistemas.",


        /* CLOUD & SECURITY */

        technology_cloud_title:
            "Cloud y seguridad",

        technology_cloud_text:
            "Diseñamos infraestructura preparada para desplegar, proteger y operar soluciones empresariales de forma fiable.",


        /* ENGINEERING PRINCIPLE */

        technology_principle_label:
            "Ingeniería antes que moda",

        technology_principle_title:
            "No utilizamos una tecnología porque esté de moda.",

        technology_principle_text:
            "Elegimos las herramientas que ofrecen el equilibrio adecuado entre rendimiento, seguridad, mantenimiento, coste y capacidad de crecimiento.",

        technology_action:
            "Ver tecnología aplicada",

        /* ==================================================
        PROJECTS
        ================================================== */

        projects_eyebrow:
            "Proyectos y casos reales",

        projects_title_v2:
            "Tecnología aplicada a problemas reales.",

        projects_description_v2:
            "Cada proyecto nos permite convertir una necesidad concreta en una solución funcional mediante software, automatización, inteligencia artificial y desarrollo web.",


        /* COMMON PROJECT LABELS */

        projects_problem_label:
            "Problema",

        projects_solution_label:
            "Solución",

        projects_value_label:
            "Valor",

        projects_repository_action:
            "Ver repositorio",

        projects_live_action:
            "Ver proyecto",

        projects_live_system:
            "Sistema activo",

        projects_demo_user_label:
            "Usuario",

        projects_demo_intent:
            "Intención",


        /* FEATURED PROJECT */

        project_chatbot_title:
            "Yassir Universal AI Chatbot",

        project_chatbot_description:
            "Sistema de chatbot inteligente diseñado para automatizar conversaciones, responder consultas y reducir trabajo manual en la atención al cliente.",

        project_chatbot_problem:
            "Atención repetitiva y procesos de conversación que requieren intervención manual.",

        project_chatbot_solution:
            "Asistente basado en inteligencia artificial capaz de gestionar interacciones y automatizar parte del flujo de atención.",

        project_chatbot_value:
            "Reduce tiempos de respuesta y disminuye la carga de trabajo manual.",

        project_demo_user:
            "Necesito información sobre sus servicios.",

        project_demo_bot:
            "Puedo ayudarte a identificar la solución adecuada y recopilar la información necesaria.",


        /* EVENT MANAGEMENT APP */

        project_events_app_title:
            "Eventos York & Katy — Android App",

        project_events_app_description:
            "Aplicación para gestionar procesos relacionados con eventos, interacción con clientes y reservas.",

        project_events_app_value:
            "Solución desarrollada para una necesidad empresarial real y utilizada en producción.",


        /* YASSIR TECHNOLOGIC WEBSITE */

        project_yassir_web_title:
            "Web Corporativa Yassir Technologic",

        project_yassir_web_description:
            "Plataforma web corporativa multilingüe diseñada para presentar servicios, productos tecnológicos y proyectos de Yassir Technologic.",

        project_yassir_web_value:
            "Arquitectura modular, responsive y preparada para crecer con nuevos productos y servicios.",


        /* BALLADARES */

        project_balladares_title:
            "Web Mantenimiento Balladares",

        project_balladares_description:
            "Sitio web profesional desarrollado para mejorar la presencia digital de un negocio real.",

        project_balladares_value:
            "Facilita que potenciales clientes conozcan los servicios del negocio mediante una presencia online accesible.",


        /* EVENT WEBSITE */

        project_events_web_title:
            "Eventos York & Katy Website",

        project_events_web_description:
            "Web para promoción de servicios de eventos con contenido visual, testimonios y experiencia adaptada a diferentes dispositivos.",

        project_events_web_value:
            "Centraliza la presencia digital del negocio y facilita que los visitantes conozcan sus servicios.",


        /* DATA ANALYSIS */

        project_data_title:
            "Python Data Analysis Portfolio",

        project_data_description:
            "Proyectos de análisis y transformación de datos desarrollados con Python utilizando conjuntos de datos y ejercicios prácticos.",

        project_data_value:
            "Demuestra procesos de limpieza, análisis y transformación de información mediante Python.",


        /* PROJECTS CTA */

        projects_cta_label:
            "Tu proyecto puede ser el siguiente",

        projects_cta_title:
            "¿Tienes un proceso, una idea o un problema que podamos transformar con tecnología?",

        projects_cta_action:
            "Cuéntanos tu proyecto",

        /* ==================================================
        CONTACT
        ================================================== */

        contact_eyebrow:
            "Hablemos",

        contact_title_v2:
            "Convirtamos tu próxima idea en una solución real.",

        contact_description_v2:
            "Cuéntanos qué quieres mejorar, automatizar o construir. Analizaremos tu necesidad y buscaremos la solución tecnológica adecuada para tu negocio.",


        /* CONTACT INFORMATION */

        contact_consultation_badge:
            "Consulta inicial",

        contact_information_title:
            "Empecemos por entender tu necesidad.",

        contact_information_description:
            "No necesitas tener una solución técnica definida. Explícanos el problema y nosotros te ayudaremos a determinar cómo puede resolverlo la tecnología.",


        /* BENEFITS */

        contact_benefit_analysis_title:
            "Analizamos tu caso",

        contact_benefit_analysis_description:
            "Entendemos primero el problema, el proceso y los objetivos de tu negocio.",

        contact_benefit_solution_title:
            "Diseñamos la solución",

        contact_benefit_solution_description:
            "Evaluamos qué tecnología puede generar mayor valor sin añadir complejidad innecesaria.",

        contact_benefit_growth_title:
            "Pensamos a largo plazo",

        contact_benefit_growth_description:
            "Construimos soluciones preparadas para evolucionar junto con tu negocio.",


        /* DIRECT CONTACT */

        contact_direct_label:
            "Contacto directo",


        /* FORM */

        contact_form_label:
            "Cuéntanos sobre tu proyecto",

        contact_form_description:
            "Completa los datos y podremos entender mejor qué necesitas.",

        contact_name_label:
            "Nombre",

        contact_name_placeholder:
            "Tu nombre",

        contact_email_label:
            "Email",

        contact_email_placeholder:
            "tu@email.com",

        contact_company_label:
            "Empresa o negocio",

        contact_company_placeholder:
            "Nombre de tu empresa",

        contact_service_label:
            "¿En qué podemos ayudarte?",

        contact_service_placeholder:
            "Selecciona una opción",

        contact_service_automation:
            "Automatización de procesos",

        contact_service_ai:
            "Inteligencia Artificial y Chatbots",

        contact_service_software:
            "Software a medida",

        contact_service_web:
            "Desarrollo web",

        contact_service_integration:
            "Integraciones y APIs",

        contact_service_data:
            "Datos y analítica",

        contact_service_consulting:
            "Consultoría tecnológica",

        contact_service_other:
            "Otro proyecto",

        contact_message_label:
            "Proyecto o necesidad",

        contact_message_placeholder:
            "Cuéntanos qué quieres mejorar, automatizar o construir...",

        contact_submit:
            "Solicitar consulta",

        contact_form_note:
            "Revisaremos tu solicitud para entender el proyecto antes de proponerte el siguiente paso.",

        /* ==================================================
        TESTIMONIALS
        ================================================== */

        testimonials_eyebrow:
            "Experiencias de clientes",

        testimonials_title:
            "La confianza se construye con resultados reales.",

        testimonials_description:
            "Queremos que cada opinión publicada represente una experiencia real con nuestros servicios, productos o proyectos tecnológicos.",


        /* TRUST */

        testimonials_trust_badge:
            "Opiniones verificadas",

        testimonials_trust_title:
            "Testimonios auténticos, no comentarios genéricos.",

        testimonials_trust_description:
            "Las opiniones que mostremos aquí estarán vinculadas a clientes y experiencias reales con Yassir Technologic.",

        testimonials_principle_real:
            "Experiencias reales",

        testimonials_principle_reviewed:
            "Opiniones revisadas",

        testimonials_principle_context:
            "Contexto del proyecto",


        /* REVIEWS */

        testimonials_reviews_label:
            "Testimonios",

        testimonials_empty_title:
            "Estamos construyendo esta sección con experiencias reales.",

        testimonials_empty_description:
            "Los próximos testimonios publicados corresponderán a clientes y proyectos reales de Yassir Technologic.",


        /* CTA */

        testimonials_cta_label:
            "¿Ya has trabajado con nosotros?",

        testimonials_cta_title:
            "Tu experiencia puede ayudar a otros negocios a tomar una mejor decisión.",

        testimonials_cta_action:
            "Compartir mi experiencia",

        /* ==================================================
        TESTIMONIAL MODAL
        ================================================== */

        testimonial_modal_eyebrow:
            "Tu experiencia",

        testimonial_modal_title:
            "Comparte tu experiencia con Yassir Technologic.",

        testimonial_modal_description:
            "Tu opinión nos ayuda a mejorar y permite que otros negocios conozcan experiencias reales con nuestras soluciones.",

        testimonial_modal_close:
            "Cerrar ventana",


        /* FORM */

        testimonial_name_label:
            "Nombre",

        testimonial_name_placeholder:
            "Tu nombre",

        testimonial_company_label:
            "Empresa o negocio",

        testimonial_company_placeholder:
            "Nombre de tu empresa",

        testimonial_project_label:
            "Servicio o proyecto",

        testimonial_project_placeholder:
            "Ej. Automatización, desarrollo web, chatbot...",

        testimonial_rating_label:
            "Valoración",

        testimonial_rating_5:
            "5 estrellas",

        testimonial_rating_4:
            "4 estrellas",

        testimonial_rating_3:
            "3 estrellas",

        testimonial_rating_2:
            "2 estrellas",

        testimonial_rating_1:
            "1 estrella",

        testimonial_message_label:
            "Tu experiencia",

        testimonial_message_placeholder:
            "Cuéntanos cómo fue trabajar con Yassir Technologic...",

        testimonial_review_notice:
            "Las opiniones se revisan antes de publicarse para proteger la calidad y autenticidad de los testimonios.",

        testimonial_cancel:
            "Cancelar",

        testimonial_submit:
            "Enviar",

        /* ==================================================
        FAQ
        ================================================== */

        faq_eyebrow:
            "Preguntas frecuentes",

        faq_title:
            "Antes de comenzar un proyecto, resolvamos tus dudas.",

        faq_description:
            "Estas son algunas de las preguntas más habituales sobre nuestros servicios, procesos y soluciones tecnológicas.",


        /* FAQ INTRO */

        faq_intro_badge:
            "Tecnología con propósito",

        faq_intro_title:
            "No necesitas saber qué tecnología necesitas.",

        faq_intro_description:
            "Nuestro trabajo comienza entendiendo tu problema, tus procesos y tus objetivos. La tecnología viene después.",

        faq_contact_action:
            "Hablar sobre mi proyecto",


        /* FAQ 01 */

        faq_question_1:
            "¿Qué tipo de empresas pueden trabajar con Yassir Technologic?",

        faq_answer_1:
            "Trabajamos con empresas, autónomos, profesionales y negocios que quieren mejorar procesos, automatizar tareas, desarrollar software o aplicar nuevas tecnologías de forma útil.",


        /* FAQ 02 */

        faq_question_2:
            "¿Necesito saber exactamente qué solución tecnológica quiero?",

        faq_answer_2:
            "No. Puedes comenzar explicándonos el problema, la tarea repetitiva o el proceso que quieres mejorar. A partir de ahí analizamos qué solución puede tener más sentido.",


        /* FAQ 03 */

        faq_question_3:
            "¿Todas las soluciones utilizan inteligencia artificial?",

        faq_answer_3:
            "No. Utilizamos inteligencia artificial cuando aporta valor real. En otros casos, una automatización, integración, aplicación web o solución de software tradicional puede ser más adecuada.",


        /* FAQ 04 */

        faq_question_4:
            "¿Podéis integrar una solución con herramientas que ya utilizamos?",

        faq_answer_4:
            "Dependiendo de las herramientas y de las integraciones que permitan, podemos estudiar conexiones mediante APIs, automatizaciones y otros mecanismos de integración.",


        /* FAQ 05 */

        faq_question_5:
            "¿Cuánto tiempo tarda un proyecto?",

        faq_answer_5:
            "Depende del alcance, las integraciones y la complejidad. Antes de comenzar definimos los objetivos y las fases necesarias para que el proyecto tenga un alcance claro.",


        /* FAQ 06 */

        faq_question_6:
            "¿Cómo se determina el precio de una solución?",

        faq_answer_6:
            "El coste depende de las necesidades del proyecto, su alcance, funcionalidades e integraciones. Primero analizamos el caso para poder plantear una propuesta adecuada.",


        /* FAQ 07 */

        faq_question_7:
            "¿La solución puede crecer si mi negocio también crece?",

        faq_answer_7:
            "Ese es uno de nuestros principios de arquitectura. Diseñamos pensando en evolución, mantenimiento y crecimiento siempre que las necesidades del proyecto lo permitan.",
        /* ==================================================
        FOOTER
        ================================================== */

        footer_description:
            "Creamos soluciones de software, automatización e inteligencia artificial para ayudar a negocios y profesionales a trabajar de forma más eficiente.",

        footer_navigation_label:
            "Navegación del pie de página",

        footer_navigation_title:
            "Navegación",

        footer_home:
            "Inicio",

        footer_services:
            "Servicios",

        footer_projects:
            "Proyectos",

        footer_company:
            "Empresa",

        footer_contact:
            "Contacto",


        /* SOLUTIONS */

        footer_solutions_title:
            "Soluciones",

        footer_solution_automation:
            "Automatización",

        footer_solution_ai:
            "IA y Chatbots",

        footer_solution_software:
            "Software a medida",

        footer_solution_web:
            "Desarrollo web",

        footer_solution_integrations:
            "Integraciones y APIs",


        /* CONNECT */

        footer_connect_title:
            "Conecta",

        footer_faq:
            "Preguntas frecuentes",

        footer_consultation:
            "Solicitar consulta",


        /* BOTTOM */

        footer_rights:
            "Todos los derechos reservados.",

        footer_back_top:
            "Volver arriba ↑",

        /* ==================================================
        CHATBOT
        ================================================== */

        chatbot_status:
            "Asistente virtual",

        chatbot_close:
            "Cerrar asistente",

        chatbot_welcome:
            "Hola 👋 Soy Andy, el asistente virtual de Yassir Technologic. ¿En qué puedo ayudarte?",

        chatbot_quick_services:
            "Ver servicios",

        chatbot_quick_automation:
            "Automatizar mi negocio",

        chatbot_quick_project:
            "Tengo un proyecto",

        chatbot_message_label:
            "Escribe tu mensaje",

        chatbot_message_placeholder:
            "Escribe tu mensaje...",

        chatbot_send:
            "Enviar mensaje",

        chatbot_open:
            "Abrir asistente Yassir AI",
    },


    /* ======================================================
       ENGLISH
    ====================================================== */

    en: {

        /* ==================================================
           HEADER
        ================================================== */

        nav_home:
            "Home",

        nav_services:
            "Services",

        nav_projects:
            "Projects",

        nav_company:
            "Company",

        nav_contact:
            "Request consultation",

        header_brand_label:
            "Yassir Technologic - Home",

        header_navigation_label:
            "Primary navigation",

        language_selector_label:
            "Select language",

        navigation_open:
            "Open navigation menu",

        navigation_close:
            "Close navigation menu",


        /* ==================================================
           HERO
        ================================================== */

        hero_eyebrow:
            "Artificial Intelligence · Automation · Software",

        hero_title:
            "Technology that turns complex processes into more efficient businesses.",

        hero_description:
            "We design artificial intelligence, automation and software solutions that help businesses save time, reduce manual work and grow with infrastructure built for the future.",

        hero_primary_action:
            "Explore solutions",

        hero_secondary_action:
            "Request consultation",

        hero_benefits_label:
            "Key benefits",

        hero_benefit_automation:
            "Automation focused on results",

        hero_benefit_scalability:
            "Systems built to scale",

        hero_benefit_business:
            "Technology focused on business value",

        hero_system_input_label:
            "Input",

        hero_system_processes:
            "Processes",

        hero_system_intelligence_label:
            "Intelligence",

        hero_system_ai_automation:
            "AI + Automation",

        hero_system_result_label:
            "Outcome",

        hero_system_efficiency:
            "Efficiency",

        hero_system_ai:
            "Artificial Intelligence",

        hero_system_integrations:
            "Integrations",

        hero_system_automation:
            "Automation",

        hero_system_scalability:
            "Scalability",

        /* ==================================================
        COMPANIES
        ================================================== */

        companies_eyebrow:
            "Technology for real businesses",

        companies_title:
            "Solutions adapted to how your business actually works.",

        companies_description:
            "We work with companies, professionals and local businesses that want to automate processes, reduce manual work and make better use of technology.",

        companies_audiences_label:
            "Business types",

        companies_businesses:
            "Companies",

        companies_freelancers:
            "Freelancers",

        companies_restaurants:
            "Restaurants",

        companies_hotels:
            "Hotels",

        companies_professionals:
            "Professionals",

        companies_local_businesses:
            "Local businesses",

        companies_scalability_title:
            "Built to grow",

        companies_scalability_text:
            "We design solutions that can evolve together with your business.",

        companies_security_title:
            "Security by design",

        companies_security_text:
            "Stability, protection and engineering best practices are part of the architecture.",

        companies_value_title:
            "Technology with purpose",

        companies_value_text:
            "Every solution should create efficiency, savings or new opportunities for growth",

        /* ==================================================
        PROBLEMS
        ================================================== */

        problems_eyebrow:
            "The problem is not always working harder",

        problems_title:
            "Many businesses lose time and money on processes that technology can simplify.",

        problems_description:
            "We identify bottlenecks, repetitive tasks and disconnected systems and turn them into faster, measurable and scalable processes.",

        problem_manual_title:
            "Too much manual work",

        problem_manual_text:
            "Repetitive tasks consume hours that could be spent on customers, strategy and growth.",

        problem_disconnected_title:
            "Disconnected tools",

        problem_disconnected_text:
            "Information spread across applications forces teams to copy data and increases the risk of errors.",

        problem_response_title:
            "Slow response times",

        problem_response_text:
            "Customers and teams wait for information that could be retrieved or managed automatically.",

        problem_visibility_title:
            "Lack of visibility",

        problem_visibility_text:
            "Without clear data, it is difficult to understand what works, detect problems and make better decisions.",

        problem_scale_title:
            "Processes that do not scale",

        problem_scale_text:
            "What works with a few customers can become a bottleneck as the business grows.",

        problem_generic_title:
            "Software that does not adapt",

        problem_generic_text:
            "Generic tools do not always fit the real processes and requirements of each business.",

        problems_closing:
            "The right technology does not add complexity: it removes friction.",

        problems_action:
            "See how we solve it",

        /* ==================================================
        COMPANY / ABOUT
        ================================================== */

        about_eyebrow_v2:
            "Yassir Technologic",

        about_title_v2:
            "We build technology with one objective: to make businesses work better.",

        about_lead_v2:
            "We do not develop technology simply because it is possible. We first analyze where it can create efficiency, savings, control or new opportunities.",

        about_description_v2:
            "Yassir Technologic develops artificial intelligence, automation and software solutions with professional architecture designed to evolve alongside each business.",

        about_projects_action:
            "View projects",

        about_contact_action:
            "Talk to us",

        about_company_badge:
            "Technology company",


        /* COMPANY SYSTEM */

        about_system_input:
            "Business need",

        about_system_engine:
            "Applied technology",

        about_system_output:
            "Business outcome",


        /* PRINCIPLES */

        about_business_title:
            "Business first",

        about_business_text:
            "We understand the problem before choosing the technology.",

        about_architecture_title:
            "Architecture built to grow",

        about_architecture_text:
            "We build modular, maintainable and scalable systems.",

        about_security_title:
            "Security and quality",

        about_security_text:
            "We apply engineering best practices from the foundation of every project.",

        about_evolution_title:
            "Continuous evolution",

        about_evolution_text:
            "We design solutions that can improve as the business changes.",


        /* VISION */

        about_statement_label:
            "Our vision",

        about_statement_text:
            "Businesses that adopt the right technology before their competitors will be better prepared to operate, grow and adapt to the future.",

        /* ==================================================
        SERVICES
        ================================================== */

        services_eyebrow:
            "Technology solutions",

        services_title_v2:
            "Technology designed to solve real business problems.",

        services_description:
            "We combine artificial intelligence, automation and software development to build solutions adapted to the real needs of each business.",


        /* AUTOMATION */

        service_automation_title_v2:
            "Process Automation",

        service_automation_text_v2:
            "We automate repetitive tasks and workflows to reduce errors, save time and free up valuable resources.",


        /* AI & CHATBOTS */

        service_ai_title:
            "Artificial Intelligence & Chatbots",

        service_ai_text:
            "We build intelligent assistants capable of supporting customers, answering questions, classifying information and automating conversations and processes.",


        /* CUSTOM SOFTWARE */

        service_software_title:
            "Custom Software",

        service_software_text:
            "We develop systems tailored to specific processes when generic tools are no longer enough.",


        /* WEB DEVELOPMENT */

        service_web_title:
            "Web Development",

        service_web_text:
            "We design and develop fast, professional web experiences focused on attracting customers and generating business.",


        /* INTEGRATIONS */

        service_integrations_title:
            "Integrations & APIs",

        service_integrations_text:
            "We connect tools, platforms and data to eliminate duplication and create unified workflows.",


        /* DASHBOARDS */

        service_dashboards_title:
            "Dashboards & Data Analytics",

        service_dashboards_text:
            "We transform scattered information into clear indicators for monitoring operations and making better decisions.",


        /* SAAS */

        service_saas_title:
            "SaaS Solutions",

        service_saas_text:
            "We build scalable digital products designed to deliver services through subscription-based business models.",


        /* CONSULTING */

        service_consulting_title:
            "Technology Consulting",

        service_consulting_text:
            "We analyze processes and opportunities to identify where automation, AI or software can create the greatest impact.",

        service_consulting_action:
            "Analyze my business",


        /* SERVICES CTA */

        services_cta_title:
            "Not sure which solution you need?",

        services_cta_text:
            "Tell us how your business works and we will identify where technology can create the greatest impact.",

        services_cta_action:
            "Talk to Yassir Technologic",

        /* ==================================================
        PRODUCTS
        ================================================== */

        products_eyebrow:
            "Yassir Technologic Products",

        products_title:
            "Technology built to become a competitive advantage.",

        products_description:
            "We develop technology platforms and products designed to automate operations, improve customer experiences and support business growth.",


        /* FEATURED PRODUCT */

        products_featured_badge:
            "Artificial Intelligence",

        product_ai_title:
            "Yassir AI Assistant",

        product_ai_description:
            "Intelligent assistants designed to automate customer support, lead generation, frequently asked questions and business conversations.",

        product_ai_feature_1:
            "Automated customer support 24/7",

        product_ai_feature_2:
            "Lead capture and qualification",

        product_ai_feature_3:
            "Integration with business processes and systems",

        product_ai_action:
            "Request information",

        product_view_projects:
            "View related projects",

        product_ai_demo_client:
            "I need to automate customer support.",

        product_ai_demo_assistant:
            "We can analyze your requests, respond automatically and route each opportunity to the right process.",

        product_ai_demo_processing:
            "Analyzing requirement",

        product_ai_demo_result:
            "Qualified lead",


        /* YASSIR CORE */

        product_core_category:
            "Business Management",

        product_core_title:
            "Yassir Core",

        product_core_description:
            "A modular business platform designed to centralize customers, operations, finance, sales and data within a single ecosystem.",

        product_core_feature_1:
            "Centralized management",

        product_core_feature_2:
            "Modular architecture",

        product_core_feature_3:
            "Information for better decision-making",

        product_core_action:
            "Explore the platform",


        /* SMART ORDERING */

        product_ordering_category:
            "Hospitality",

        product_ordering_title:
            "Yassir Smart Ordering",

        product_ordering_description:
            "A digital ordering system for restaurants, cafés and hospitality businesses that want to streamline orders and improve the customer experience.",

        product_ordering_feature_1:
            "Digital ordering",

        product_ordering_feature_2:
            "Reduced operational workload",

        product_ordering_feature_3:
            "Faster purchasing experience",

        product_ordering_action:
            "Request information",


        /* PRODUCTS CTA */

        products_cta_label:
            "Need something different?",

        products_cta_title:
            "We also build solutions specifically designed for your business.",

        products_cta_description:
            "If none of our products fits your process exactly, we can design and develop a custom solution.",

        products_cta_action:
            "Tell us what you need",

        /* ==================================================
        PROCESS
        ================================================== */

        process_eyebrow:
            "How we work",

        process_title:
            "From a real problem to a working solution.",

        process_description:
            "Every project starts by understanding the business. We then design, build and integrate the technology required through a clear and measurable methodology.",


        /* ANALYSIS */

        process_analysis_title:
            "Analyze",

        process_analysis_text:
            "We study your processes, objectives and friction points to identify where technology can create the greatest impact.",


        /* DESIGN */

        process_design_title:
            "Design",

        process_design_text:
            "We define the architecture, functionality and technical strategy before development begins.",


        /* BUILD */

        process_build_title:
            "Build",

        process_build_text:
            "We develop the solution using a modular, maintainable architecture designed to grow.",


        /* INTEGRATION */

        process_integrate_title:
            "Integrate",

        process_integrate_text:
            "We connect the solution with existing systems, tools and workflows so it becomes a real part of the operation.",


        /* OPTIMIZATION */

        process_optimize_title:
            "Optimize",

        process_optimize_text:
            "We measure results, identify improvements and evolve the solution as the needs of the business change.",


        /* PRINCIPLE */

        process_principle_label:
            "Our principle",

        process_principle_text:
            "Technology should adapt to the business. The business should not have to adapt to bad technology.",

        process_action:
            "Discuss my project",

        /* ==================================================
        TECHNOLOGY
        ================================================== */

        technology_eyebrow:
            "Technology",

        technology_title:
            "We choose technology based on the problem, not the problem based on the technology.",

        technology_description:
            "We combine artificial intelligence, machine learning, software development, data, integrations and cloud technologies to build professional and scalable solutions.",


        /* ARTIFICIAL INTELLIGENCE & MACHINE LEARNING */

        technology_ai_title:
            "Artificial Intelligence & Machine Learning",

        technology_ai_text:
            "We apply language models, machine learning and intelligent systems to analyze information, automate processes and build solutions capable of learning from data.",


        /* SOFTWARE ENGINEERING */

        technology_backend_title:
            "Software Engineering",

        technology_backend_text:
            "Backend systems, APIs and applications designed with modular, maintainable architectures built to scale.",


        /* DIGITAL EXPERIENCES */

        technology_frontend_title:
            "Digital Experiences",

        technology_frontend_text:
            "Fast, accessible and responsive interfaces focused on user experience, performance and conversion.",


        /* DATA */

        technology_data_title:
            "Data & Analytics",

        technology_data_text:
            "We transform operational data into structured information, indicators and tools for better decision-making.",


        /* INTEGRATIONS */

        technology_integrations_title:
            "Integrations",

        technology_integrations_text:
            "We connect platforms, services and tools to create continuous workflows and reduce manual work between systems.",


        /* CLOUD & SECURITY */

        technology_cloud_title:
            "Cloud & Security",

        technology_cloud_text:
            "We design infrastructure prepared to deploy, protect and operate business solutions reliably.",


        /* ENGINEERING PRINCIPLE */

        technology_principle_label:
            "Engineering before trends",

        technology_principle_title:
            "We do not use technology simply because it is trending.",

        technology_principle_text:
            "We choose tools that provide the right balance between performance, security, maintainability, cost and scalability.",

        technology_action:
            "See technology in action",

        /* ==================================================
        PROJECTS
        ================================================== */

        projects_eyebrow:
            "Projects and real-world cases",

        projects_title_v2:
            "Technology applied to real problems.",

        projects_description_v2:
            "Every project allows us to turn a specific need into a working solution through software, automation, artificial intelligence and web development.",


        /* COMMON PROJECT LABELS */

        projects_problem_label:
            "Problem",

        projects_solution_label:
            "Solution",

        projects_value_label:
            "Value",

        projects_repository_action:
            "View repository",

        projects_live_action:
            "View project",

        projects_live_system:
            "Live system",

        projects_demo_user_label:
            "User",

        projects_demo_intent:
            "Intent",


        /* FEATURED PROJECT */

        project_chatbot_title:
            "Yassir Universal AI Chatbot",

        project_chatbot_description:
            "An intelligent chatbot system designed to automate conversations, answer inquiries and reduce manual work in customer support.",

        project_chatbot_problem:
            "Repetitive customer interactions and conversational processes that require manual intervention.",

        project_chatbot_solution:
            "An AI-powered assistant capable of managing interactions and automating part of the customer service workflow.",

        project_chatbot_value:
            "Reduces response times and decreases manual workload.",

        project_demo_user:
            "I need information about your services.",

        project_demo_bot:
            "I can help you identify the right solution and collect the information required.",


        /* EVENT MANAGEMENT APP */

        project_events_app_title:
            "Eventos York & Katy — Android App",

        project_events_app_description:
            "An application designed to manage event-related processes, customer interactions and bookings.",

        project_events_app_value:
            "A solution developed for a real business need and used in production.",


        /* YASSIR TECHNOLOGIC WEBSITE */

        project_yassir_web_title:
            "Yassir Technologic Corporate Website",

        project_yassir_web_description:
            "A multilingual corporate website designed to present Yassir Technologic services, technology products and projects.",

        project_yassir_web_value:
            "A modular, responsive architecture prepared to grow with new products and services.",


        /* BALLADARES */

        project_balladares_title:
            "Mantenimiento Balladares Website",

        project_balladares_description:
            "A professional website developed to improve the digital presence of a real business.",

        project_balladares_value:
            "Helps potential customers discover the company's services through an accessible online presence.",


        /* EVENT WEBSITE */

        project_events_web_title:
            "Eventos York & Katy Website",

        project_events_web_description:
            "A website for promoting event services through visual content, testimonials and an experience adapted to different devices.",

        project_events_web_value:
            "Centralizes the business's digital presence and helps visitors discover its services.",


        /* DATA ANALYSIS */

        project_data_title:
            "Python Data Analysis Portfolio",

        project_data_description:
            "Data analysis and transformation projects developed in Python using datasets and practical exercises.",

        project_data_value:
            "Demonstrates data cleaning, analysis and transformation processes using Python.",


        /* PROJECTS CTA */

        projects_cta_label:
            "Your project could be next",

        projects_cta_title:
            "Do you have a process, idea or problem that we can transform with technology?",

        projects_cta_action:
            "Tell us about your project",

        /* ==================================================
        CONTACT
        ================================================== */

        contact_eyebrow:
            "Let's talk",

        contact_title_v2:
            "Let's turn your next idea into a real solution.",

        contact_description_v2:
            "Tell us what you want to improve, automate or build. We will analyze your needs and identify the right technology solution for your business.",


        /* CONTACT INFORMATION */

        contact_consultation_badge:
            "Initial consultation",

        contact_information_title:
            "Let's start by understanding what you need.",

        contact_information_description:
            "You do not need to have a technical solution already defined. Tell us about the problem and we will help determine how technology can solve it.",


        /* BENEFITS */

        contact_benefit_analysis_title:
            "We analyze your case",

        contact_benefit_analysis_description:
            "We first understand the problem, the process and your business objectives.",

        contact_benefit_solution_title:
            "We design the solution",

        contact_benefit_solution_description:
            "We evaluate which technology can create the most value without adding unnecessary complexity.",

        contact_benefit_growth_title:
            "We think long term",

        contact_benefit_growth_description:
            "We build solutions prepared to evolve alongside your business.",


        /* DIRECT CONTACT */

        contact_direct_label:
            "Direct contact",


        /* FORM */

        contact_form_label:
            "Tell us about your project",

        contact_form_description:
            "Complete the information below so we can better understand what you need.",

        contact_name_label:
            "Name",

        contact_name_placeholder:
            "Your name",

        contact_email_label:
            "Email",

        contact_email_placeholder:
            "your@email.com",

        contact_company_label:
            "Company or business",

        contact_company_placeholder:
            "Your company name",

        contact_service_label:
            "How can we help?",

        contact_service_placeholder:
            "Select an option",

        contact_service_automation:
            "Process Automation",

        contact_service_ai:
            "Artificial Intelligence & Chatbots",

        contact_service_software:
            "Custom Software",

        contact_service_web:
            "Web Development",

        contact_service_integration:
            "Integrations & APIs",

        contact_service_data:
            "Data & Analytics",

        contact_service_consulting:
            "Technology Consulting",

        contact_service_other:
            "Other project",

        contact_message_label:
            "Project or requirement",

        contact_message_placeholder:
            "Tell us what you want to improve, automate or build...",

        contact_submit:
            "Request consultation",

        contact_form_note:
            "We will review your request to understand the project before proposing the next step.",

        /* ==================================================
        TESTIMONIALS
        ================================================== */

        testimonials_eyebrow:
            "Client experiences",

        testimonials_title:
            "Trust is built through real results.",

        testimonials_description:
            "We want every published testimonial to represent a real experience with our services, products or technology projects.",


        /* TRUST */

        testimonials_trust_badge:
            "Verified experiences",

        testimonials_trust_title:
            "Authentic testimonials, not generic comments.",

        testimonials_trust_description:
            "The testimonials displayed here will be connected to real clients and real experiences with Yassir Technologic.",

        testimonials_principle_real:
            "Real experiences",

        testimonials_principle_reviewed:
            "Reviewed testimonials",

        testimonials_principle_context:
            "Project context",


        /* REVIEWS */

        testimonials_reviews_label:
            "Testimonials",

        testimonials_empty_title:
            "We are building this section with real client experiences.",

        testimonials_empty_description:
            "Future testimonials published here will come from real Yassir Technologic clients and projects.",


        /* CTA */

        testimonials_cta_label:
            "Have you worked with us?",

        testimonials_cta_title:
            "Your experience can help other businesses make a better decision.",

        testimonials_cta_action:
            "Share my experience",

        /* ==================================================
        TESTIMONIAL MODAL
        ================================================== */

        testimonial_modal_eyebrow:
            "Your experience",

        testimonial_modal_title:
            "Share your experience with Yassir Technologic.",

        testimonial_modal_description:
            "Your feedback helps us improve and allows other businesses to learn from real experiences with our solutions.",

        testimonial_modal_close:
            "Close dialog",


        /* FORM */

        testimonial_name_label:
            "Name",

        testimonial_name_placeholder:
            "Your name",

        testimonial_company_label:
            "Company or business",

        testimonial_company_placeholder:
            "Your company name",

        testimonial_project_label:
            "Service or project",

        testimonial_project_placeholder:
            "E.g. Automation, web development, chatbot...",

        testimonial_rating_label:
            "Rating",

        testimonial_rating_5:
            "5 stars",

        testimonial_rating_4:
            "4 stars",

        testimonial_rating_3:
            "3 stars",

        testimonial_rating_2:
            "2 stars",

        testimonial_rating_1:
            "1 star",

        testimonial_message_label:
            "Your experience",

        testimonial_message_placeholder:
            "Tell us what it was like working with Yassir Technologic...",

        testimonial_review_notice:
            "Testimonials are reviewed before publication to protect their quality and authenticity.",

        testimonial_cancel:
            "Cancel",

        testimonial_submit:
            "Send",

        /* ==================================================
        FAQ
        ================================================== */

        faq_eyebrow:
            "Frequently asked questions",

        faq_title:
            "Before starting a project, let's answer your questions.",

        faq_description:
            "Here are some of the most common questions about our services, processes and technology solutions.",


        /* FAQ INTRO */

        faq_intro_badge:
            "Technology with purpose",

        faq_intro_title:
            "You don't need to know which technology you need.",

        faq_intro_description:
            "Our work starts by understanding your problem, your processes and your objectives. Technology comes afterwards.",

        faq_contact_action:
            "Talk about my project",


        /* FAQ 01 */

        faq_question_1:
            "What types of businesses can work with Yassir Technologic?",

        faq_answer_1:
            "We work with companies, self-employed professionals and businesses that want to improve processes, automate tasks, develop software or apply new technologies in a practical way.",


        /* FAQ 02 */

        faq_question_2:
            "Do I need to know exactly which technology solution I want?",

        faq_answer_2:
            "No. You can start by explaining the problem, repetitive task or process you want to improve. From there, we analyze which solution makes the most sense.",


        /* FAQ 03 */

        faq_question_3:
            "Do all solutions use artificial intelligence?",

        faq_answer_3:
            "No. We use artificial intelligence when it creates real value. In other cases, automation, integration, a web application or traditional software may be more appropriate.",


        /* FAQ 04 */

        faq_question_4:
            "Can you integrate a solution with tools we already use?",

        faq_answer_4:
            "Depending on the tools and the integrations they support, we can evaluate connections through APIs, automation and other integration mechanisms.",


        /* FAQ 05 */

        faq_question_5:
            "How long does a project take?",

        faq_answer_5:
            "It depends on the scope, integrations and complexity. Before development begins, we define the objectives and phases required to establish a clear project scope.",


        /* FAQ 06 */

        faq_question_6:
            "How is the price of a solution determined?",

        faq_answer_6:
            "The cost depends on the project's requirements, scope, functionality and integrations. We first analyze the case so we can prepare an appropriate proposal.",


        /* FAQ 07 */

        faq_question_7:
            "Can the solution grow as my business grows?",

        faq_answer_7:
            "That is one of our architectural principles. We design with evolution, maintenance and growth in mind whenever the project's requirements allow it.",
        /* ==================================================
        FOOTER
        ================================================== */

        footer_description:
            "We build software, automation and artificial intelligence solutions to help businesses and professionals work more efficiently.",

        footer_navigation_label:
            "Footer navigation",

        footer_navigation_title:
            "Navigation",

        footer_home:
            "Home",

        footer_services:
            "Services",

        footer_projects:
            "Projects",

        footer_company:
            "Company",

        footer_contact:
            "Contact",


        /* SOLUTIONS */

        footer_solutions_title:
            "Solutions",

        footer_solution_automation:
            "Automation",

        footer_solution_ai:
            "AI & Chatbots",

        footer_solution_software:
            "Custom Software",

        footer_solution_web:
            "Web Development",

        footer_solution_integrations:
            "Integrations & APIs",


        /* CONNECT */

        footer_connect_title:
            "Connect",

        footer_faq:
            "Frequently asked questions",

        footer_consultation:
            "Request consultation",


        /* BOTTOM */

        footer_rights:
            "All rights reserved.",

        footer_back_top:
            "Back to top ↑",

        /* ==================================================
        CHATBOT
        ================================================== */

        chatbot_status:
            "Virtual assistant",

        chatbot_close:
            "Close assistant",

        chatbot_welcome:
            "Hi 👋 I'm Andy, the Yassir Technologic virtual assistant. How can I help you?",

        chatbot_quick_services:
            "View services",

        chatbot_quick_automation:
            "Automate my business",

        chatbot_quick_project:
            "I have a project",

        chatbot_message_label:
            "Write your message",

        chatbot_message_placeholder:
            "Write your message...",

        chatbot_send:
            "Send message",

        chatbot_open:
            "Open Yassir AI assistant",
    }


};


/* ==========================================================
   LANGUAGE VALIDATION
========================================================== */

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
            "[data-language]"
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


    updateDocumentLanguage(language);

    updateTextContent(language);

    updateAttributeTranslations(language);

    updateHeaderAccessibility(language);

    updateLanguageButtons(language);


    /* ======================================================
    LEGACY LANGUAGE BRIDGE

    Temporary compatibility layer while the old website
    sections are progressively migrated.
    ====================================================== */

    if (
        typeof window.setLanguage === "function"
    ) {

        window.setLanguage(language);

    }


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
            "[data-language]"
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
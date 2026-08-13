/* ==========================================================
   YASSIR TECHNOLOGIC

   File:
   app.js

   Description:
   Main frontend application entry point.

   Responsibility:
   Initializes the JavaScript modules used across
   the Yassir Technologic corporate website.

   Author:
   Yassir Technologic

   Version:
   1.2.0
========================================================== */


/* ==========================================================
   IMPORTS
========================================================== */

import {
    initNavbar
} from "../components/navbar.js";


import {
    initModals
} from "../components/modal.js";


import {
    initChatbot
} from "../components/chatbot.js";


import {
    initLanguage
} from "./language.js";


/* ==========================================================
   APPLICATION INITIALIZATION
========================================================== */

function initApp() {

    /* ======================================================
       CORE
    ====================================================== */

    initLanguage();


    /* ======================================================
       COMPONENTS
    ====================================================== */

    initNavbar();

    initModals();

    initChatbot();

}


/* ==========================================================
   DOM READY
========================================================== */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initApp,
        {
            once: true
        }
    );

} else {

    initApp();

}
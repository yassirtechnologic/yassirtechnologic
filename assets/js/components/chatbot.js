/* ==========================================================
   YASSIR TECHNOLOGIC

   File:
   chatbot.js

   Description:
   Yassir AI chatbot interface controller.

   Responsibility:
   Controls the chatbot UI, conversation history,
   user messages, quick actions and communication
   with the Yassir AI API service.

   Author:
   Yassir Technologic

   Version:
   2.0.0
========================================================== */


/* ==========================================================
   IMPORTS
========================================================== */

import {
    sendChatConversation
} from "../services/chatbot-api.js";


/* ==========================================================
   SELECTORS
========================================================== */

const SELECTORS = {

    root:
        "[data-chatbot]",

    trigger:
        "[data-chatbot-trigger]",

    panel:
        "[data-chatbot-panel]",

    close:
        "[data-chatbot-close]",

    form:
        "[data-chatbot-form]",

    input:
        "[data-chatbot-input]",

    messages:
        "[data-chatbot-messages]",

    quickAction:
        "[data-chatbot-quick]",

    send:
        ".chatbot__send"

};


/* ==========================================================
   QUICK ACTION MESSAGES
========================================================== */

const QUICK_ACTIONS = {

    es: {

        services:
            "Quiero conocer sus servicios.",

        automation:
            "Quiero automatizar procesos de mi negocio.",

        project:
            "Tengo un proyecto y quiero saber cómo pueden ayudarme."

    },

    en: {

        services:
            "I want to learn about your services.",

        automation:
            "I want to automate processes in my business.",

        project:
            "I have a project and I want to know how you can help me."

    }

};


/* ==========================================================
   INTERFACE MESSAGES
========================================================== */

const UI_MESSAGES = {

    es: {

        typing:
            "Yassir AI está escribiendo...",

        connectionError:
            "No he podido conectarme en este momento. Inténtalo de nuevo en unos segundos.",

        invalidResponse:
            "No he podido generar una respuesta válida. Inténtalo de nuevo."

    },

    en: {

        typing:
            "Yassir AI is typing...",

        connectionError:
            "I couldn't connect right now. Please try again in a few seconds.",

        invalidResponse:
            "I couldn't generate a valid response. Please try again."

    }

};


/* ==========================================================
   CONVERSATION STATE
========================================================== */

/*
 * The backend expects the complete conversation using:
 *
 * {
 *     role: "user" | "assistant",
 *     content: "..."
 * }
 */

const conversationHistory = [];


let isLoading = false;


/* ==========================================================
   CURRENT LANGUAGE
========================================================== */

function getCurrentLanguage() {

    const language =
        document.documentElement.dataset.language;


    return language === "en"
        ? "en"
        : "es";

}


/* ==========================================================
   GET INTERFACE MESSAGE
========================================================== */

function getInterfaceMessage(key) {

    const language =
        getCurrentLanguage();


    return (
        UI_MESSAGES[language]?.[key] ??
        UI_MESSAGES.es[key] ??
        ""
    );

}


/* ==========================================================
   OPEN CHATBOT
========================================================== */

function openChatbot(
    chatbot,
    trigger,
    panel,
    input
) {

    chatbot.classList.add(
        "is-open"
    );


    trigger.setAttribute(
        "aria-expanded",
        "true"
    );


    panel.setAttribute(
        "aria-hidden",
        "false"
    );


    requestAnimationFrame(() => {

        input?.focus();

    });

}


/* ==========================================================
   CLOSE CHATBOT
========================================================== */

function closeChatbot(
    chatbot,
    trigger,
    panel,
    {
        restoreFocus = true
    } = {}
) {

    chatbot.classList.remove(
        "is-open"
    );


    trigger.setAttribute(
        "aria-expanded",
        "false"
    );


    panel.setAttribute(
        "aria-hidden",
        "true"
    );


    if (restoreFocus) {

        trigger.focus();

    }

}


/* ==========================================================
   TOGGLE CHATBOT
========================================================== */

function toggleChatbot(
    chatbot,
    trigger,
    panel,
    input
) {

    const isOpen =
        chatbot.classList.contains(
            "is-open"
        );


    if (isOpen) {

        closeChatbot(
            chatbot,
            trigger,
            panel
        );

        return;

    }


    openChatbot(
        chatbot,
        trigger,
        panel,
        input
    );

}


/* ==========================================================
   INPUT AUTO RESIZE
========================================================== */

function resizeInput(input) {

    if (!input) {

        return;

    }


    input.style.height =
        "auto";


    input.style.height =
        `${Math.min(
            input.scrollHeight,
            112
        )}px`;

}


/* ==========================================================
   RESET INPUT
========================================================== */

function resetInput(input) {

    if (!input) {

        return;

    }


    input.value =
        "";


    input.style.height =
        "auto";

}


/* ==========================================================
   SCROLL TO LATEST MESSAGE
========================================================== */

function scrollToLatestMessage(messages) {

    if (!messages) {

        return;

    }


    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    messages.scrollTo({

        top:
            messages.scrollHeight,

        behavior:
            reduceMotion
                ? "auto"
                : "smooth"

    });

}


/* ==========================================================
   CREATE MESSAGE
========================================================== */

function createMessage(
    type,
    text,
    {
        author = true
    } = {}
) {

    const message =
        document.createElement(
            "div"
        );


    message.className =
        `chatbot__message chatbot__message--${type}`;


    if (
        type === "bot" &&
        author
    ) {

        const authorElement =
            document.createElement(
                "span"
            );


        authorElement.className =
            "chatbot__message-author";


        authorElement.textContent =
            "Yassir AI";


        message.appendChild(
            authorElement
        );

    }


    const paragraph =
        document.createElement(
            "p"
        );


    /*
     * User and server content must never be interpreted
     * as HTML.
     */

    paragraph.textContent =
        text;


    message.appendChild(
        paragraph
    );


    return message;

}


/* ==========================================================
   ADD MESSAGE TO INTERFACE
========================================================== */

function addMessage(
    messages,
    type,
    text,
    options
) {

    if (
        !messages ||
        typeof text !== "string"
    ) {

        return null;

    }


    const message =
        createMessage(
            type,
            text,
            options
        );


    messages.appendChild(
        message
    );


    scrollToLatestMessage(
        messages
    );


    return message;

}


/* ==========================================================
   TYPING INDICATOR
========================================================== */

function addTypingIndicator(messages) {

    const typingMessage =
        addMessage(
            messages,
            "bot",
            getInterfaceMessage(
                "typing"
            )
        );


    if (typingMessage) {

        typingMessage.dataset.chatbotTyping =
            "";

        typingMessage.setAttribute(
            "role",
            "status"
        );

    }


    return typingMessage;

}


/* ==========================================================
   REMOVE TYPING INDICATOR
========================================================== */

function removeTypingIndicator(
    typingMessage
) {

    typingMessage?.remove();

}


/* ==========================================================
   LOADING STATE
========================================================== */

function setLoadingState(
    loading,
    input,
    sendButton,
    quickActions
) {

    isLoading =
        loading;


    input.disabled =
        loading;


    if (sendButton) {

        sendButton.disabled =
            loading;

    }


    quickActions.forEach((button) => {

        button.disabled =
            loading;

    });

}


/* ==========================================================
   ADD USER TO CONVERSATION
========================================================== */

function addUserToHistory(text) {

    conversationHistory.push({

        role:
            "user",

        content:
            text

    });

}


/* ==========================================================
   ADD BOT TO CONVERSATION
========================================================== */

function addBotToHistory(text) {

    conversationHistory.push({

        role:
            "assistant",

        content:
            text

    });

}


/* ==========================================================
   SEND MESSAGE TO YASSIR AI
========================================================== */

async function sendToYassirAI(
    text,
    {
        messages,
        input,
        sendButton,
        quickActions
    }
) {

    const cleanText =
        text.trim();


    if (
        !cleanText ||
        isLoading
    ) {

        return;

    }


    /* ======================================================
       USER MESSAGE
    ====================================================== */

    addMessage(
        messages,
        "user",
        cleanText,
        {
            author:
                false
        }
    );


    addUserToHistory(
        cleanText
    );


    resetInput(
        input
    );


    /* ======================================================
       LOADING
    ====================================================== */

    setLoadingState(
        true,
        input,
        sendButton,
        quickActions
    );


    const typingMessage =
        addTypingIndicator(
            messages
        );


    try {

        /* ==================================================
           BACKEND REQUEST
        ================================================== */

        const response =
            await sendChatConversation(
                conversationHistory
            );


        removeTypingIndicator(
            typingMessage
        );


        const reply =
            response?.reply?.trim();


        if (!reply) {

            addMessage(
                messages,
                "bot",
                getInterfaceMessage(
                    "invalidResponse"
                )
            );


            return;

        }


        /* ==================================================
           BOT MESSAGE
        ================================================== */

        addMessage(
            messages,
            "bot",
            reply
        );


        addBotToHistory(
            reply
        );

    } catch (error) {

        console.error(
            "Yassir AI request failed:",
            error
        );


        removeTypingIndicator(
            typingMessage
        );


        addMessage(
            messages,
            "bot",
            getInterfaceMessage(
                "connectionError"
            )
        );

    } finally {

        setLoadingState(
            false,
            input,
            sendButton,
            quickActions
        );


        input.focus();

    }

}


/* ==========================================================
   HANDLE FORM MESSAGE
========================================================== */

function handleMessage(
    messages,
    input,
    sendButton,
    quickActions
) {

    const text =
        input.value;


    return sendToYassirAI(
        text,
        {
            messages,
            input,
            sendButton,
            quickActions
        }
    );

}


/* ==========================================================
   HANDLE QUICK ACTION
========================================================== */

function handleQuickAction(
    button,
    messages,
    input,
    sendButton,
    quickActions
) {

    const action =
        button.dataset.chatbotQuick;


    const language =
        getCurrentLanguage();


    const text =
        QUICK_ACTIONS[language]?.[action];


    if (!text) {

        return;

    }


    return sendToYassirAI(
        text,
        {
            messages,
            input,
            sendButton,
            quickActions
        }
    );

}


/* ==========================================================
   ENTER KEY
========================================================== */

function handleInputKeydown(
    event,
    form
) {

    if (
        event.isComposing ||
        event.key !== "Enter" ||
        event.shiftKey
    ) {

        return;

    }


    event.preventDefault();


    form.requestSubmit();

}


/* ==========================================================
   INITIALIZE CHATBOT
========================================================== */

export function initChatbot() {

    const chatbot =
        document.querySelector(
            SELECTORS.root
        );


    if (!chatbot) {

        return;

    }


    const trigger =
        chatbot.querySelector(
            SELECTORS.trigger
        );


    const panel =
        chatbot.querySelector(
            SELECTORS.panel
        );


    const closeButton =
        chatbot.querySelector(
            SELECTORS.close
        );


    const form =
        chatbot.querySelector(
            SELECTORS.form
        );


    const input =
        chatbot.querySelector(
            SELECTORS.input
        );


    const messages =
        chatbot.querySelector(
            SELECTORS.messages
        );


    const sendButton =
        chatbot.querySelector(
            SELECTORS.send
        );


    const quickActions =
        chatbot.querySelectorAll(
            SELECTORS.quickAction
        );


    if (
        !trigger ||
        !panel ||
        !form ||
        !input ||
        !messages
    ) {

        return;

    }


    /* ======================================================
       INITIAL STATE
    ====================================================== */

    chatbot.classList.remove(
        "is-open"
    );


    trigger.setAttribute(
        "aria-expanded",
        "false"
    );


    panel.setAttribute(
        "aria-hidden",
        "true"
    );


    /* ======================================================
       OPEN / CLOSE
    ====================================================== */

    trigger.addEventListener(
        "click",
        () => {

            toggleChatbot(
                chatbot,
                trigger,
                panel,
                input
            );

        }
    );


    closeButton?.addEventListener(
        "click",
        () => {

            closeChatbot(
                chatbot,
                trigger,
                panel
            );

        }
    );


    /* ======================================================
       ESCAPE
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key !== "Escape" ||
                !chatbot.classList.contains(
                    "is-open"
                )
            ) {

                return;

            }


            closeChatbot(
                chatbot,
                trigger,
                panel
            );

        }
    );


    /* ======================================================
       INPUT
    ====================================================== */

    input.addEventListener(
        "input",
        () => {

            resizeInput(
                input
            );

        }
    );


    input.addEventListener(
        "keydown",
        (event) => {

            handleInputKeydown(
                event,
                form
            );

        }
    );


    /* ======================================================
       FORM
    ====================================================== */

    form.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            await handleMessage(
                messages,
                input,
                sendButton,
                quickActions
            );

        }
    );


    /* ======================================================
       QUICK ACTIONS
    ====================================================== */

    quickActions.forEach((button) => {

        button.addEventListener(
            "click",
            async () => {

                await handleQuickAction(
                    button,
                    messages,
                    input,
                    sendButton,
                    quickActions
                );

            }
        );

    });

}
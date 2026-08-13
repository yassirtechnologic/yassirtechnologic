/* ==========================================================
   YASSIR TECHNOLOGIC

   File:
   chatbot-api.js

   Description:
   Yassir AI API communication service.

   Responsibility:
   Manages chatbot conversation identifiers and communicates
   with the Yassir AI backend without coupling networking
   logic to the chatbot interface.

   Author:
   Yassir Technologic

   Version:
   1.0.0
========================================================== */

/* ==========================================================
   API CONFIGURATION
========================================================== */

const API_URL =
    "https://yassirbot-backend.onrender.com/api/ai/chat";

const REQUEST_TIMEOUT =
    60000;

/* ==========================================================
   STORAGE
========================================================== */

const STORAGE_KEY =
    "yassir_conversation_id";


/* ==========================================================
   CREATE CONVERSATION ID
========================================================== */

function createConversationId() {

    if (
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID === "function"
    ) {

        return crypto.randomUUID();

    }


    /*
     * Fallback for environments where randomUUID
     * is not available.
     */

    return [
        Date.now(),
        Math.random()
            .toString(16)
            .slice(2)
    ].join("-");

}


/* ==========================================================
   READ STORED CONVERSATION
========================================================== */

function readStoredConversationId() {

    try {

        return localStorage.getItem(
            STORAGE_KEY
        );

    } catch {

        /*
         * Storage may be unavailable in restricted
         * browser environments.
         */

        return null;

    }

}


/* ==========================================================
   SAVE CONVERSATION
========================================================== */

function saveConversationId(
    conversationId
) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            conversationId
        );

    } catch {

        /*
         * Conversation persistence is optional.
         * The chatbot can still operate without localStorage.
         */

    }

}


/* ==========================================================
   GET CONVERSATION ID
========================================================== */

function getConversationId() {

    const storedConversationId =
        readStoredConversationId();


    if (storedConversationId) {

        return storedConversationId;

    }


    const conversationId =
        createConversationId();


    saveConversationId(
        conversationId
    );


    return conversationId;

}


/* ==========================================================
   RESET CONVERSATION
========================================================== */

export function resetChatConversation() {

    try {

        localStorage.removeItem(
            STORAGE_KEY
        );

    } catch {

        /*
         * No additional action is required if
         * storage is unavailable.
         */

    }

}


/* ==========================================================
   VALIDATE MESSAGES
========================================================== */

function validateMessages(messages) {

    if (!Array.isArray(messages)) {

        throw new TypeError(
            "Chatbot messages must be an array."
        );

    }

}


/* ==========================================================
   PARSE RESPONSE
========================================================== */

async function parseResponse(response) {

    const contentType =
        response.headers.get(
            "content-type"
        ) ?? "";


    if (
        !contentType.includes(
            "application/json"
        )
    ) {

        throw new Error(
            "The chatbot server returned an invalid response."
        );

    }


    return response.json();

}


/* ==========================================================
   SEND CONVERSATION
========================================================== */

export async function sendChatConversation(
    messages = []
) {

    validateMessages(
        messages
    );


    const controller =
        new AbortController();


    const timeoutId =
        window.setTimeout(
            () => {

                controller.abort();

            },
            REQUEST_TIMEOUT
        );


    try {

        const response =
            await fetch(
                API_URL,
                {

                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify({

                            assistantId:
                                "yassir-technologic",
                            conversationId:
                                getConversationId(),

                            messages

                        }),

                    signal:
                        controller.signal

                }
            );


        const data =
            await parseResponse(
                response
            );


        if (!response.ok) {

            throw new Error(
                data?.reply ||
                `Chatbot request failed with status ${response.status}.`
            );

        }


        if (
            typeof data?.reply !== "string"
        ) {

            throw new Error(
                "The chatbot response does not contain a valid reply."
            );

        }


        return data;

    } catch (error) {

        if (
            error instanceof DOMException &&
            error.name === "AbortError"
        ) {

            throw new Error(
                "CHATBOT_REQUEST_TIMEOUT"
            );

        }


        throw error;

    } finally {

        window.clearTimeout(
            timeoutId
        );

    }

}
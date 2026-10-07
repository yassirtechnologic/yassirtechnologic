/* ==========================================================
   YASSIR TECHNOLOGIC

   File:
   modal.js

   Description:
   Reusable modal controller.

   Responsibility:
   Opens and closes modal dialogs, manages keyboard
   interaction, focus restoration and accessibility state.

   Author:
   Yassir Technologic

   Version:
   1.0.0
========================================================== */


/* ==========================================================
   SELECTORS
========================================================== */

const SELECTORS = {

    modal:
        "[data-modal]",

    open:
        "[data-modal-open]",

    close:
        "[data-modal-close]",

    dialog:
        ".modal__dialog"

};


/* ==========================================================
   STATE
========================================================== */

let activeModal = null;

let previousFocusedElement = null;
let backgroundState = [];

function lockBackground(modal) {
    backgroundState = [...document.body.children]
        .filter((element) => element !== modal && element.tagName !== 'SCRIPT')
        .map((element) => ({ element, inert: element.inert }));
    backgroundState.forEach(({ element }) => { element.inert = true; });
}

function unlockBackground() {
    backgroundState.forEach(({ element, inert }) => { element.inert = inert; });
    backgroundState = [];
}


/* ==========================================================
   FOCUSABLE ELEMENTS
========================================================== */

function getFocusableElements(modal) {

    return [
        ...modal.querySelectorAll(
            `
            a[href],
            button:not([disabled]),
            input:not([disabled]),
            select:not([disabled]),
            textarea:not([disabled]),
            [tabindex]:not([tabindex="-1"])
            `
        )
    ].filter((element) => {

        return !element.hasAttribute("hidden") && element.getClientRects().length > 0;

    });

}


/* ==========================================================
   OPEN MODAL
========================================================== */

function openModal(modal) {

    if (!modal) {

        return;

    }


    previousFocusedElement =
        document.activeElement;


    activeModal =
        modal;

    modal.inert = false;
    lockBackground(modal);


    modal.classList.add(
        "is-open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );


    const focusableElements =
        getFocusableElements(modal);


    const firstFocusableElement =
        focusableElements[0];


    if (firstFocusableElement) {

        requestAnimationFrame(() => {

            firstFocusableElement.focus();

        });

    }

}


/* ==========================================================
   CLOSE MODAL
========================================================== */

function closeModal(modal = activeModal) {

    if (!modal) {

        return;

    }


    modal.classList.remove(
        "is-open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );


    modal.inert = true;
    unlockBackground();
    activeModal = null;


    if (
        previousFocusedElement instanceof HTMLElement
    ) {

        previousFocusedElement.focus();

    }


    previousFocusedElement = null;

}


/* ==========================================================
   HANDLE OPEN TRIGGER
========================================================== */

function handleOpenTrigger(trigger) {

    const modalId =
        trigger.dataset.modalOpen;


    if (!modalId) {

        return;

    }


    const modal =
        document.getElementById(
            modalId
        );


    openModal(modal);

}


/* ==========================================================
   KEYBOARD
========================================================== */

function handleKeyboard(event) {

    if (!activeModal) {

        return;

    }


    /* ESCAPE */

    if (event.key === "Escape") {

        event.preventDefault();

        closeModal();

        return;

    }


    /* FOCUS TRAP */

    if (event.key !== "Tab") {

        return;

    }


    const focusableElements =
        getFocusableElements(
            activeModal
        );


    if (!focusableElements.length) {

        event.preventDefault();

        return;

    }


    const firstElement =
        focusableElements[0];


    const lastElement =
        focusableElements[
            focusableElements.length - 1
        ];


    if (
        event.shiftKey &&
        document.activeElement === firstElement
    ) {

        event.preventDefault();

        lastElement.focus();

        return;

    }


    if (
        !event.shiftKey &&
        document.activeElement === lastElement
    ) {

        event.preventDefault();

        firstElement.focus();

    }

}


/* ==========================================================
   INITIALIZE MODALS
========================================================== */

export function initModals() {

    const modals =
        document.querySelectorAll(
            SELECTORS.modal
        );


    const openTriggers =
        document.querySelectorAll(
            SELECTORS.open
        );


    /* ======================================================
       INITIAL STATE
    ====================================================== */

    modals.forEach((modal) => {

        modal.inert = true;
        modal.setAttribute(
            "aria-hidden",
            "true"
        );

    });


    /* ======================================================
       OPEN
    ====================================================== */

    openTriggers.forEach((trigger) => {

        trigger.addEventListener(
            "click",
            () => {

                handleOpenTrigger(
                    trigger
                );

            }
        );

    });


    /* ======================================================
       CLOSE
    ====================================================== */

    modals.forEach((modal) => {

        const closeTriggers =
            modal.querySelectorAll(
                SELECTORS.close
            );


        closeTriggers.forEach((trigger) => {

            trigger.addEventListener(
                "click",
                () => {

                    closeModal(
                        modal
                    );

                }
            );

        });

    });


    /* ======================================================
       KEYBOARD
    ====================================================== */

    document.addEventListener(
        "keydown",
        handleKeyboard
    );

}
/* ==========================================================
   YASSIR TECHNOLOGIC

   File:
   navbar.js

   Description:
   Site navigation controller.

   Responsibility:
   Controls the mobile navigation menu, accessibility states,
   keyboard interaction and header scroll behavior.

   Author:
   Yassir Technologic

   Version:
   1.0.0
========================================================== */


/* ==========================================================
   CONFIGURATION
========================================================== */

const SELECTORS = {

    header: "[data-header]",

    navigation: "[data-navigation]",

    toggle: "[data-nav-toggle]",

    navLinks: "[data-nav-link]",

    toggleLabel: ".visually-hidden"

};


const CLASSES = {

    navigationOpen: "is-open",

    headerScrolled: "is-scrolled"

};


const DESKTOP_MEDIA_QUERY =
    "(min-width: 64.0625rem)";


/* ==========================================================
   INITIALIZE NAVBAR
========================================================== */

export function initNavbar() {

    const header =
        document.querySelector(SELECTORS.header);

    const navigation =
        document.querySelector(SELECTORS.navigation);

    const toggle =
        document.querySelector(SELECTORS.toggle);


    /* ------------------------------------------------------
       GUARD CLAUSE

       Stops initialization safely if the required
       elements are not present on the current page.
    ------------------------------------------------------ */

    if (!header || !navigation || !toggle) {

        return;

    }


    const navLinks =
        navigation.querySelectorAll(
            SELECTORS.navLinks
        );


    const toggleLabel =
        toggle.querySelector(
            SELECTORS.toggleLabel
        );


    const desktopMedia =
        window.matchMedia(
            DESKTOP_MEDIA_QUERY
        );


    /* ======================================================
       MENU STATE
    ====================================================== */

    const isMenuOpen = () => {

        return (
            toggle.getAttribute(
                "aria-expanded"
            ) === "true"
        );

    };


    /* ======================================================
       UPDATE ACCESSIBLE LABEL
    ====================================================== */

    const updateToggleLabel = (isOpen) => {

        if (!toggleLabel) {

            return;

        }


        const openLabel =
            toggle.dataset.labelOpen ??
            "Abrir menú de navegación";


        const closeLabel =
            toggle.dataset.labelClose ??
            "Cerrar menú de navegación";


        toggleLabel.textContent =
            isOpen
                ? closeLabel
                : openLabel;

    };


    /* ======================================================
       OPEN MENU
    ====================================================== */

    const openMenu = () => {

        navigation.classList.add(
            CLASSES.navigationOpen
        );


        toggle.setAttribute(
            "aria-expanded",
            "true"
        );


        updateToggleLabel(true);

    };


    /* ======================================================
       CLOSE MENU
    ====================================================== */

    const closeMenu = ({
        returnFocus = false
    } = {}) => {

        navigation.classList.remove(
            CLASSES.navigationOpen
        );


        toggle.setAttribute(
            "aria-expanded",
            "false"
        );


        updateToggleLabel(false);


        if (returnFocus) {

            toggle.focus();

        }

    };


    /* ======================================================
       TOGGLE MENU
    ====================================================== */

    const toggleMenu = () => {

        if (isMenuOpen()) {

            closeMenu();

            return;

        }


        openMenu();

    };


    /* ======================================================
       TOGGLE BUTTON
    ====================================================== */

    toggle.addEventListener(
        "click",
        toggleMenu
    );


    /* ======================================================
       NAVIGATION LINKS

       Closes the mobile menu after selecting a destination.
    ====================================================== */

    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                if (!desktopMedia.matches) {

                    closeMenu();

                }

            }
        );

    });


    /* ======================================================
       ESCAPE KEY

       Allows keyboard users to close the menu and
       returns focus to the menu trigger.
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                isMenuOpen()
            ) {

                closeMenu({
                    returnFocus: true
                });

            }

        }
    );


    /* ======================================================
       CLICK OUTSIDE

       Closes the mobile navigation when clicking outside
       the header while the menu is open.
    ====================================================== */

    document.addEventListener(
        "click",
        (event) => {

            if (!isMenuOpen()) {

                return;

            }


            if (
                event.target instanceof Node &&
                !header.contains(event.target)
            ) {

                closeMenu();

            }

        }
    );


    /* ======================================================
       DESKTOP BREAKPOINT

       Ensures that a mobile menu cannot remain logically
       open after the viewport changes to desktop.
    ====================================================== */

    const handleViewportChange = (event) => {

        if (event.matches) {

            closeMenu();

        }

    };


    desktopMedia.addEventListener(
        "change",
        handleViewportChange
    );


    /* ======================================================
       HEADER SCROLL STATE
    ====================================================== */

    const updateHeaderScrollState = () => {

        const isScrolled =
            window.scrollY > 12;


        header.classList.toggle(
            CLASSES.headerScrolled,
            isScrolled
        );

    };


    window.addEventListener(
        "scroll",
        updateHeaderScrollState,
        {
            passive: true
        }
    );


    /* ======================================================
       INITIAL STATE
    ====================================================== */

    updateToggleLabel(
        isMenuOpen()
    );


    updateHeaderScrollState();

}
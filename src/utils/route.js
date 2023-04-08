import { loginPage as lP } from "../pages/login/index.js";
import { registerPage as rP } from "../pages/register/index.js";
import { page404, page500 } from './../pages/errors/index.js';
import { chatPage as cP } from "../pages/chat/index.js";
import { profilePage as pP } from './../pages/profile/index.js';


import addComponents from "./addComponents.js";


export function handleRoute() {

    const path = window.location.pathname;
    let page = '';


    if (path === '/') {
        page = lP;
    } else if (path === '/register') {
        page = rP;
    } else if (path === '/unknown') {
        page = page404;
    } else if (path === '/server-error') {
        page = page500;
    } else if (path === '/chat') {
        page = cP;
    } else if (path === '/chat/profile') {
        page = pP;
    }

    main.innerHTML = page;

    addComponents()
}

export function checkRoute(event) {
    const link = event.target.closest('a');

    if (link && link.href.startsWith(window.location.origin)) {
        event.preventDefault();
        window.history.pushState(null, null, link.href);
        handleRoute();
    }
}

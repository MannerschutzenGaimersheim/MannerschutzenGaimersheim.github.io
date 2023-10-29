
/* Javascript to show and hide cookie banner using localstorage */
/* Shows the Cookie banner */
function showCookieBanner() {
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "block";
}

/* Hides the Cookie banner and saves the value to localstorage */
function hideCookieBanner() {
    localStorage.setItem("cb_isCookieAccepted", "yes");
    let cookieBanner = document.getElementById("cb-cookie-banner");
    cookieBanner.style.display = "none";
    loadExternal();
}

/* Checks the localstorage and shows Cookie banner based on it. */
function initializeCookieBanner() {
    let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
    if (isCookieAccepted === null) {
        localStorage.setItem("cb_isCookieAccepted", "no");
        showCookieBanner();
    }
    if (isCookieAccepted === "no") {
        showCookieBanner();
    }
    if (isCookieAccepted === "yes") {
        loadExternal();
    }
}

function loadExternal() {
    setExternalSrc('google-map-bogenplatz', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d781.2753779891998!2d11.368139189920491!3d48.803143850549944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479efd8aa88c1a15%3A0x17c591e32e8b0401!2sKoboldgarten%2C%2085080%20Gaimersheim!5e0!3m2!1sde!2sde!4v1697927077708!5m2!1sde!2sde")
    setExternalSrc('google-map-vereinsheim', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.42991855488043!2d11.370119866198793!3d48.80841085070074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f03a1269566df%3A0xa307763263105b5a!2sSch%C3%BCtzenverein%20M%C3%A4nnersch%C3%BCtzengesellschaft%20Gaimersheim!5e0!3m2!1sde!2sde!4v1697883880594!5m2!1sde!2sde")
    setExternalSrc('vereinonlie-kalender', "https://www.vereinonline.org/Maennerschuetzen_Gaimersheim/?kalender&dialog=1&buttons=nein&titel=nein&art=ListeZ&nolinks=1&zeit&zusammen&limit=10")
}

function setExternalSrc(id, src) {
    element = top.document.getElementById(id);
    if (element) {
        element.setAttribute("src", src);
    }
}

// Assigning values to window object
window.onload = initializeCookieBanner();
window.cb_hideCookieBanner = hideCookieBanner;

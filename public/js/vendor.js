import createHtmlElement from "../main.js";

//Importando CSS's
let cssUrls = {
    "base" : {
        "bootstrap" : "/node_modules/bootstrap/dist/css/bootstrap.min.css",
        "main" : "/public/css/styles.css"
    },
    "components" : {
        "header" : "/public/css/components/header/header.css",
        "sidebar" : "/public/css/components/sidebar/sidebar.css",
        "buttons" : "/public/css/components/buttons/buttons.css",
        "inputs" : "/public/css/components/inputs/inputs.css",
    }
};

// Importando JS's
let jsUrls = {
    "base" : {
        "bootstrap" : "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    },
    "components" : {
        "header" : "/public/js/components/header/header.js",
        "sidebar" : "/public/js/components/sidebar/sidebar.js",
        "main-content" : "/public/js/components/main-content/main-content.js",
    }
}

for (const prop in cssUrls.base) {
    let linkAttributes = {
        "rel": "stylesheet",
        "href": cssUrls.base[prop]
    };

    createHtmlElement("link", linkAttributes, 'head');
}

for (const prop in cssUrls.base) {
    let linkAttributes = {
        "rel": "stylesheet",
        "href": cssUrls.base[prop]
    };

    createHtmlElement("link", linkAttributes, 'head');
}

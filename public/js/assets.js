import createHtmlElement from "./main.js";

//Importando CSS's
let cssUrls = {
    "base" : {
        "bootstrap" : "/node_modules/bootstrap/dist/css/bootstrap.css",
        "main" : "/public/css/styles.css"
    },
    "components" : {
        "header" : "/public/css/components/header/header.css",
        "dropdowns" : "/public/css/components/dropdowns/dropdowns.css",
        "sidebar" : "/public/css/components/sidebar/sidebar.css",
        "buttons" : "/public/css/components/buttons/buttons.css",
        "inputs" : "/public/css/components/inputs/inputs.css",
        "tables" : "/public/css/components/tables/tables.css",
        "icons" : "/public/css/components/icons/icons.css",
    }
};

// Importando JS's
let jsUrls = {
    "base" : {
        "bootstrap" : "/node_modules/bootstrap/dist/js/bootstrap.js",
        "jquery" : "/node_modules/jquery/dist/jquery.js",
        "font-awesome" : "https://kit.fontawesome.com/5a992afea4.js",
    },
    "components" : {
        "header" : "/public/js/components/header/header.js",
        "sidebar" : "/public/js/components/sidebar/sidebar.js",
    }
}

// Inserindo CSS Base
for (const prop in cssUrls.base) {
    let linkAttributes = {
        "rel": "stylesheet",
        "href": cssUrls.base[prop]
    };

    createHtmlElement("link", linkAttributes, 'head');
}

//Inserindo CSS de componentes
for (const prop in cssUrls.components) {
    let linkAttributes = {
        "rel": "stylesheet",
        "href": cssUrls.components[prop]
    };

    createHtmlElement("link", linkAttributes, 'head');
}

//Inserindo JS Base
for (const prop in jsUrls.base) {
    let scriptAttributes = {
        "src": jsUrls.base[prop],
    };

    createHtmlElement("script", scriptAttributes, 'body');
}

//Inserindo JS de componentes
for (const prop in jsUrls.components) {
    let scriptAttributes = {
        "src": jsUrls.components[prop],
    };

    createHtmlElement("script", scriptAttributes, 'body');
}
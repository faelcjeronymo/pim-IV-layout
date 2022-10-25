/**
 * @param {String} elementName Nome do elemento à ser criado.
 * @param {Object} elementAttributes Objeto {chave : valor} javascript, com os attributos à serem inseridos no elemento criado.
 * @param {String} elementAppendParent Seletor do elemento pai, que deseja inserir o elemento criado.
 */
export default function createHtmlElement (elementName, elementAttributes = {}, elementAppendParent) {
    /**
     * Elemento HTML
     */
    let element = document.createElement(elementName);

    /* Inserindo Atributos no elemento criado */
    if (Object.keys(elementAttributes) !== 0) {
        for (const attribute in elementAttributes) {    

            if (elementAttributes[attribute] === true) {
                let elementAttribute = document.createAttribute(attribute);
                element.setAttributeNode(elementAttribute);
            } else {
                const elementAttribute = document.createAttribute(attribute);
                elementAttribute.value = elementAttributes[attribute];
                element.setAttributeNode(elementAttribute);
            }
        }
    }

    /* Inserindo elemento no elemento Pai especificado */
    let elementParent = document.querySelector(elementAppendParent);
    elementParent.appendChild(element);
}
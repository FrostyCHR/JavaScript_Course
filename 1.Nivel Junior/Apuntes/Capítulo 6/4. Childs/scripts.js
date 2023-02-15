//---------------------------------CHILDS---------------------------------//

// OBTENCIÓN Y MODIFICACIÓN (element.)

/*

firstChild: Permite seleccionar el primer nodo hijo del elemento sobre el que lo ejecutamos.
lastChild: Como el anterior, pero el último hijo.
(no son muy útiles)

firstElementChild: Permite seleccionar el primer elemento HTML hijo. (no hace falta que no hayan espacios, como en los anteriores)
lastElementChild: Igual que el anterior, pero el último hijo.

childNodes: Permite seleccionar todos los nodos hijos de un elemento.

children: Igual que el anterior, pero solamente los elementos HTML.

*/

let container = document.querySelector(".container");

let firstChild = container.firstChild;
let lastChild = container.lastChild;

let lastElementChild = container.lastElementChild;

let nodes = container.childNodes;

console.log(firstChild); // h2
console.log(lastChild); // Text

console.log(lastElementChild); // p

console.log(nodes); // Todos los hijos (node list)
for (son of nodes) {
    console.log(son); // Todos los hijos (por separado)
}

console.log(container.children); // Todos los ELEMENTOS hijos.


// MÉTODOS DE CHILDS (element.)

/*

appendChild(): Añade el elemento entre paréntesis al elemento sobre el que lo aplicamos (father.appendChild(child);)

replaceChild(): Permite sustituir un hijo por otro. (primero el nuevo, luego el viejo)
removeChild(): Permite eliminar el hijo que se encuentra como parámetro.

hasChildNodes(): Devuelve un boolean teniendo en cuenta si el elemento tiene NODOS hijos o no. (NO requiere parámetros)


*/

let newH2 = document.createElement("H2");
newH2.textContent = "Título h2 nuevo";
let oldH2 = container.firstElementChild;

container.replaceChild(newH2, oldH2); // Sustituye un h2 por otro


let p = container.lastElementChild;
container.removeChild(p); // Elimina el p


if (container.hasChildNodes()) { // Equals true
    document.write("Tiene hijos");
} else {
    document.write("No tiene hijos")
}
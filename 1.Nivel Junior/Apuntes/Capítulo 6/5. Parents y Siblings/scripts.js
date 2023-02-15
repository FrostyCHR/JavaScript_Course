//---------------------------------PARENTS Y SIBLINGS---------------------------------//

// PROPIEDADES DE PARENTS

/*

parentNode: Selecciona el NODO padre de un elemento.
parentElement: Selecciona el NODO ELEMENTO padre de un elemento.

Suele dar el mismo resultado, pero por si acaso, es mejor usar parentElement

*/

let p = document.querySelector(".container").lastElementChild;

console.log(p.parentElement);


// PROPIEDADES DE SIBLINGS

/*

nextSibling: Selecciona el siguiente NODO hermano.
previousSibling: Selecciona el anterior NODO hermano.

nextElementSibling: Selecciona el siguiente ELEMENTO hermano.
previousElementSibling: Selecciona el anterior ELEMENTO hermano.

*/

console.log(p.previousSibling); // Text
console.log(p.nextSibling); // Text

console.log(p.previousElementSibling); // Input
console.log(p.nextElementSibling); // Null (no hay)


// NODOS EXTRA

/*

closest(): Selecciona el elemento contenedor (padre, abuelo...) más cercano con el selector especificado. (se incluye a sí mismo)

*/

let este = document.getElementById("este");

console.log(este.closest(".class"));
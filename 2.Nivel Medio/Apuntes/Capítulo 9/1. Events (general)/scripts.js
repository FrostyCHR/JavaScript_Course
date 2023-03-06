//---------------------------------EVENTS (GENERAL)---------------------------------//

// EVENTOS

/*

Evento: Un evento es cualquier cambio que ocurra en la página.
Event handler: Es una manera de ejecutar algo en el momento que ocurra un evento. Se hace mediante atributos en HTML. (no se usa)
Event listener: Es otra manera de trabajar con los eventos. En lugar de atributos, se usan métodos de JavaScript para tenerlo más ordenado.

*/

/*

element.addEventListener(): Permite hacer que un elemento empieze a detectar el evento que queramos, así como lo que ocurre tras él.
element.removeEventListener(): Elimina un event listener.

*/

const button = document.querySelector(".button");

// Función normal:
/* button.addEventListener("click", prueba1); // No se pueden poner parámetros en prueba 1. (mirar más abajo)

function prueba1() {

    confirm("¿Sí?");
    button.removeEventListener("click", prueba1); // Elimina el evento.

} */

// Se puede declarar la función después del evento porque el archivo se ejecuta al cargar la página, por lo que cuando activemos el evento la función ya estará declarada.

/* function otherFunction(x){
    alert(x);
}

let parameter = "hola";

// Función flecha: (con parámetro) (creo que no se puede eliminar el event listener)
button.addEventListener("click", ()=>{
    otherFunction(parameter); // Se debe llamar a una función a parte.
}) */



// MEJOR MANERA. "Parámetros" y eliminar evento:
// (El problema es que al no ser parámetros propiamente dichos, la variable dentro de la función y la que creamos fuera deben tener el mismo nombre)
// (También podríamos simplemente poner el código de functionForEvent() en una función flecha dentro del EventListener si no quisieramos eliminarlo.)

let forFunction = "si"; // "Parámetro".

function functionForEvent() {

    /* let forFunction = 5; CUIDADO CON LOS NOMBRES, esto no se podría hacer */
    alert(forFunction); // Código que necesite el "parámetro".
    button.removeEventListener("click",functionForEvent); // Eliminación del evento.

}

button.addEventListener("click", functionForEvent);
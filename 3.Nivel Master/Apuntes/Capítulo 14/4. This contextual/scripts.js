//---------------------------------THIS CONTEXTUAL---------------------------------//
"use strict";
/*

Fuera de cualquier función, this es IGUAL a window. (===)
Con modo estricto, this no funciona dentro de una función si no está contenido por un objeto.

*/

console.log(window);
console.log(this);

function saludar() { // No puede ser flecha porque se va a usar como método.
    console.log(`Hola ${this.nombre}`);
}

const objeto = {
    nombre: `Gerardo`,
    saludar // Así asignamos la función saludar como método de objeto. (Como la propiedad y la función se llaman igual, no hay que poner los dos puntos)
}

objeto.saludar(); // This pasa a ser objeto.

function contructor(nombre) {
    this.nombre = nombre;
    this.saludar = saludar;
}

const objeto2 = new contructor("Kata");
objeto2.saludar(); // Funciona igual que el anterior pero mediante constructor.
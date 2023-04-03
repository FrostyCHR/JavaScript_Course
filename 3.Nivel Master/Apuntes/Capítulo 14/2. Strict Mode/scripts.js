//---------------------------------STRICT MODE---------------------------------//
/*

El modo estricto es una especie de configuración de JavaScript orientada a castigar y, por lo tanto, evitar malas prácticas en el código.
Un claro ejemplo es el siguiente: Sin este modo, JS nos permite crear una variable sin poner var, let o const delante. Con "strict mode" no se puede.
Si no es la primera instrucción del bloque, no funciona. (Sí, se puede poner solo dentro de una funció, por ejemplo)

*/
"use strict";

// Ejemplo 1:

/* norma = "si"; */ // Se debe poner siempre var (no), let o const delante.


// Ejemplo 2:

const obj1 = {};

Object.defineProperty(obj1,"test",{value: "valor", writable: false}); // Writable hace que no se pueda modificar.
Object.defineProperty(obj1,"test2",{value: "valor2"});

/* obj1.test = "valor modificado"; */ // No se puede modificar algo con writable: false.

console.log(obj1);


// Ejemplo 3:

const obj2 = {prueba: "valor"};

Object.preventExtensions(obj2); // No se puede añadir nada.

/* Object.defineProperty(obj2,"test",{pruebaAdd: "valor"}); */ // Da error con y sin "use strict".
/* obj2.jaja = "jaja"; */ // Error solo con "use strict".

console.log(obj2);


// Ejemplo 4:

const string1 = "Hola";
/* string1.propiedad = "Buenas tardes"; */ // No se debería poder añadir una propiedad a un string.


// Ejemplo 5:

/* function saludar(texto, texto) { // La función toma el último al ejecutarse.
    console.log("Hola" + texto); // Segundo texto.
} */

/* saludar("Pedro"); */ // Al poner un parámetro, Pedro es igual al primer texto, y el segundo es undefined.


// Ejemplo 6:

const obj3 = {
    "propiedad": "valor"
}

// Delete sirve para eliminar propiedades de objetos, pero no objetos. (ni strings, ni números...)
/* delete obj3; */


// Ejemplo 7:

let package = "si"; // Package es una palabra reservada y, por lo tanto, no deberíamos poder crear una variable con ese nombre.

console.log(package);


// Otros cambios más complejos.
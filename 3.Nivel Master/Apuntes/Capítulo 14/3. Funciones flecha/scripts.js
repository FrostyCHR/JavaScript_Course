//---------------------------------FUNCIONES FLECHA---------------------------------//
/*

Como ya vimos en el nivel junior, las funciones flecha son funciones con una sintaxis diferente. Tienen muchas diferencias con las normales.
No se deben usar como métodos ni como constructores de objetos. (Ver punto 3)

*/
"use strict";
/*

1. Retorno de una sola expresión:
Si hay únicamente una línea de código, las funciones flecha la devolveran (como un return).

*/

const funcionF1 = (x,y) => (x+y)**2; // Tiene que estar TODO SÍ O SÍ en una línea, no sirve poniendo llaves.

let resultado1 = funcionF1(2,5);
console.log(resultado1);


/*

2. Paréntesis opcionales:
Si hay únicamente un parámetro, no hace falta poner paréntesis.

*/

const funcionF2 = x => (x+2)**2;

let resultado2 = funcionF2(2);
console.log(resultado2);


/*

3. This y métodos:
En funciones flecha como métodos, this no se refiere al objeto (el que tiene la función como método), se refiere al objeto que llama al objeto que llama a la función flecha. Por lo tanto, this se refiere a window y no al objeto que queremos. Además, tampoco se pueden usar como funciones constructoras.

*/

const obj1 = {
    Nombre: "Oriol",
    Saludar: () => console.log(this.Nombre)
}

window.Nombre = "Pol"; // Al definir window.Nombre, vemos el curioso comportamiento de this.

obj1.Saludar();
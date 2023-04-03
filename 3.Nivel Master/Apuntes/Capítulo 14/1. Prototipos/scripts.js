//---------------------------------PROTOTIPOS---------------------------------//
/*

IMPORTANTE: A partir de ahora, las clases que no requieran de live server se encontrarán aquí y, los que sí que lo necesiten, en htdocs.


Prototypes: Un prototipo es una especie de objeto a través del cual se crean más objetos. Algo similar a la herencia.
El prototipo "padre" es el object, ya que TODO es un objeto en JavaScript. Además, cada tipo de dato está basado en un prototipo que encadena object.


Dos tipos de prototipos:

Heredados: Cuando ya están creados. Se accede con .__proto__. Tipos de datos.
Creados: Cuando los hacemos nosotros. Se accede con prototype. Funciones por ejemplo.

*/

let string = "String";

console.log(string.__proto__); // El __proto__ es string, pero además tiene object, el más importante.


let object = {
    "propiedad": "valor"
};

console.log(object.__proto__); // Aquí solamente hay un __proto__, object.


let funcion = function(){};

console.log(funcion.prototype);


/*
Características:

Se puede modificar.
Es un objeto.
Tiene existencia física en la memoria.
Se puede llamar.
Es un modelo ejemplar o superior de objeto.
Un objeto basado en un prototipo hereda las propiedades y los métodos de este.

*/

let array = ["Puede ser", "Hola", true];

console.log(array); // Su única propiedad es length. El resto de métodos los hereda del prototipo array.

class Test {
    constructor(){}
    método() {
        alert("Método");
    }
}

let pruebaClase = new Test();

console.log(pruebaClase); // Es un caso extraño. No se crea un prototipo (.prototype). Se modifica un prototipo heredero de object.

/*

Ejemplo claro:

Un array cualquiera tiene sus diversas posiciones con sus elementos contenidos. Además, abajo se encuentra el prototipo array. Este tiene todos los métodos y propiedades de cualquier array, se trata de un objeto "plantilla". Esta plantilla a su vez está basada en otra plantilla totalmente general, el prototipo object.



Sobrescribir método vs prototipo:

Tomando el objeto pruebaClase anterior, una cosa es modificar el objeto en sí (caso 1) y otra es modificar el prototipo en el que este objeto se basa (caso 2).

*/

// Caso 1.
pruebaClase.método = () => {
    alert("Método modificado.");
}

// Caso 2.
pruebaClase.__proto__.método = () => {
    alert("Método modificado.");
}

console.log(pruebaClase);

// ¿Cómo es posible que también se modifique el primer console.log() de pruebaClase?
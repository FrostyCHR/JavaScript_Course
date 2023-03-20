//---------------------------------PROMESAS---------------------------------//
/*

Una promesa es un tipo de objeto que tiene como parámetro una función que a su vez tiene dos parámetros, ambos funciones, resolve y reject.
Son asíncronas. (ver siguientes apuntes)


Resolve:
Es la función que se ejecuta cuando todo sale bien en una promesa.

Reject:
Es la función que se ejecuta cuando hay algún error en una promesa.

Then:
Es la función resolve, es decir, lo que se ejecuta cuando va bien. Devuelve la promesa tal cual.

Catch:
Es la función reject. Gracias a la última característica de then, se puede poner después.

*/

let nombre = "Joer";

const promesa = new Promise((resolve, reject) => {

    if (nombre !== "Joker") {
        reject("El nombre no es Joker."); // Al ejecutar reject se crea un error.
    } else {
        resolve("El nombre es " + nombre+".");
    };

});

promesa.then(resultado => { // Resultado es el valor del parámetro de resolve. Únicamente si sale bien.

    console.log(resultado);

}).catch(error => {

    console.error(error);
    
});

/*

IMPORTANTE:

La diferencia entre las promesas y try catch es que estas son asíncronas, mientras que las sentencias mencionadas son síncronas. (ver siguientes apuntes)

*/
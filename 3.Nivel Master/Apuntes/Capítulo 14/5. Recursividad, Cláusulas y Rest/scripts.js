//---------------------------------RECURSIVIDAD, CLÁUSULAS Y REST---------------------------------//
"use strict";
/*

La recursividad ocurre cuando una función se llama a sí misma. Si no se usan de manera correcta, podemos llegar a bucles infinitos. (No le veo mucha utilidad)

*/

const functRecurs = (message) => {
    try {
        let edad;
        if (message) edad = prompt("Introduce un número para tu edad");
        else edad = prompt("¿Cúal es tu edad?");
    
        if (isNaN(edad)) throw "Error";

        // Hacer lo que queramos con edad.

    } catch (error) {
        functRecurs(error);
    }
}

functRecurs();


/*

Una cláusula es una función que retorna otra función. (No les veo mucha utilidad)

*/

const changeFS = (size) => {
    return () => {
        document.querySelector(".text").style.fontSize = size;
    }
}

let fs12 = changeFS("12px");
let fs15 = changeFS("15px");
let fs18 = changeFS("18px");

document.querySelector(".s12px").addEventListener("click", fs12);
document.querySelector(".s15px").addEventListener("click", fs15);
document.querySelector(".s18px").addEventListener("click", fs18);


/*

Rest es el uso del operador spread (...) como parámetro en una función. Irónicamente, el parámetro rest hace lo contrario que spread. Este divide un array en diversos elementos, mientras que rest los une. Es muy útil para hacer funciones con indefinidos parámetros.

*/

const sumar = (par1,...num) => { // Rest debe ser el último.
    let resultado = 0; // El = 0 es importante porque si no se pone más adelante empieza a calcular undefined + un número, cosa que no es posible.
    for (let n of num) {
        resultado += parseInt(n);
    }
    return `${par1} El resultado es ${resultado}.`;
}

console.log(sumar("Buenos días.", 56, 1, 5, -24, 4, 0)); // Junta todos estos valores en un array.
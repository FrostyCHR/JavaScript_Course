//---------------------------------OPERADOR TERNARIO Y OPERADOR SPREAD---------------------------------//
"use strict";
/*

// Operador ternario

El operador ternario o condicional (por su uso) es una manera de trabajar con condiciones que no usa la sentencia if.
Se define la condición a evaluar entre paréntesis. Luego se pone ? y a la derecha lo que pasará si se cumple la condición. Tras : se pone lo que parará si no se cumple (en la misma línea o en otras). Para poner más de una instrucción, se ponen paréntesis y se separa cada una con una coma.
El operador ternario consume menos recursos que if.

*/

let edad = 20;

// Con if:

if (edad >= 18) console.log("Mayor de edad. (if)");
else console.log("Menor de edad. (if)");


// Con el operador ternario:

(edad >= 18) ? (
    console.log("Mayor de edad. (operator)"),
    console.log("Segunda instrucción")
)
: console.log("Menor de edad. (operator)");


// Operador spread:
/*

El operador spread (...) permite dividir un array en diversos elementos. Cuando se encuentra como parámetro en una función, se llama rest.

*/

let var1 = "Var 1";
let var2 = "Var 2";
let var3 = "Var 3";

let array = [var1,var2,var3];

console.log(var1,var2,var3);
console.log(array);
console.log(...array); // El spread "rompe" el array en diferentes trozos (elementos).

// Añadir un array a otro array:

let colores = ["Rojo","Verde","Azul","Naranja","Magenta","Morado"];
let coloresExtra = ["Beige","Amarillo","Gris"];

// Otro:

/* for (const color of coloresExtra) colores.push(color); */

// Spread:

colores.push(...coloresExtra);


// Unir dos arrays en uno:

let todo = [...colores,...coloresExtra];


// Pasar un array como varios argumentos: (argumento rest)

const sumar = (num1,num2) => {console.log(num1+num2);}

let nums = [5,2];

sumar(...nums);
function comprobar (x, y) {
    while (isNaN(x)===true || isNaN(y)===true) {
        alert("Escribe solo numeros.");
        x = prompt("Escribe un numero.");
        y = prompt("Escribe otro numero.")
    }
}

let Operación = prompt("Escribe una operación.");
let num1 = prompt("Escribe un numero.");
let num2= prompt("Escribe otro numero.");

comprobar (num1, num2)


function Calculadora (Operación, x, y) {
    if (Operación === "suma") {
        document.write (parseInt(x)+parseInt(y));
    } else if (Operación === "resta") {
        document.write (x-y);
    } else if (Operación === "multiplicación") {
        document.write (x*y);
    } else if (Operación === "división") {
        document.write (x/y);
    } else if (Operación === "exponencialicación") {
        document.write (x**y);
    } else if (Operación === "residuo") {
        document.write (x%y);
    } else {
        document.write(-1)
    }
}

Calculadora (Operación, num1, num2)
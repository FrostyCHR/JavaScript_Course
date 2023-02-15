let x = prompt("Escribe un numero.");
let y = prompt("Escribe otro numero.");

function comprobar (x, y) {
    while (isNaN(x)===true || isNaN(y)===true) {
        alert("Escribe solo numeros.");
        x = prompt("Escribe un numero.");
        y = prompt("Escribe otro numero.")
    }
}

comprobar (x,y)
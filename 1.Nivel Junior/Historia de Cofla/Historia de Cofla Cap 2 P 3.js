const suma= (x,y) => {
    let resultado = parseInt(x)+parseInt(y);
    document.write(`El resultado es ${resultado}.`);
}

const resta=(x,y) => {
    let resultado = parseInt(x)- parseInt(y);
    document.write(`El resultado es ${resultado}.`);
}

const multi=(x,y) => {
    let resultado = parseInt(x)*parseInt(y);
    document.write(`El resultado es ${resultado}.`);
}

const divi=(x,y) => {
    let resultado = parseInt(x)/parseInt(y);
    document.write(`El resultado es ${resultado}.`);
}

let x=prompt("Escribe el primer numero.")
let y=prompt("Escribe el segundo numero.")
let operación=prompt("Escribe el signo de la operación.")

const comprobar= (x, y)=> {
    while (isNaN(x)===true || isNaN(y)===true) {
        alert("Escribe solo numeros.");
        x = prompt("Escribe un numero.");
        y = prompt("Escribe otro numero.")
    }
}

comprobar (x,y)




if (operación=== "+") {
    suma(x,y)
} else if(operación==="-") {
    resta(x,y)
}else if(operación==="*") {
    multi(x,y)
}else if(operación==="/") {
    divi(x,y)
} else {
    alert("Por favor, presiona la tecla f5 y vuelve a intentarlo. Recuerda que solo hay estos signos disponibles: +, -, * y /.");
}
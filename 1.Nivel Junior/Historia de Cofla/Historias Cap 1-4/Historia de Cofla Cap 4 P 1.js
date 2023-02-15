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

const potenciar=(x,y) => {
    let resultado = parseInt(x)**parseInt(y);
    document.write(`El resultado es ${resultado}.`);
}

const raízCuadrada=(x) => {
    let resultado = Math.sqrt(parseInt(x));
    document.write(`El resultado es ${resultado}.`);
}

const raízCúbica=(x) => {
    let resultado = Math.cbrt(parseInt(x));
    document.write(`El resultado es ${resultado}.`);
}

const comprobar= (x, y)=> {
    while (isNaN(x)===true || isNaN(y)===true) {
        alert("Escribe solo numeros.");
        x =  prompt("Escribe un numero. Si vas a potenciar, este será la base. Si vas a usar una raíz, este será el interior del radicando.");
        y =  prompt("Escribe otro numero. Si vas a potenciar, este será el exponente. Si vas a usar una raíz, pon 0.");
    }
    return [x,y];
}

let operación=prompt("Escribe el signo de la operación. Si vas a usar raízes, pon sqrt o cbrt.");

let x;
let y;

x=prompt("Escribe el primer numero. Si vas a potenciar, este será la base. Si vas a usar una raíz, este será el interior del radicando.");
y=prompt("Escribe el segundo numero. Si vas a potenciar, este será el exponente. Si vas a usar una raíz, pon 0.");

let arrayDeComprobación = comprobar (x,y);

x = arrayDeComprobación[0];
y = arrayDeComprobación[1];




if (operación=== "+") {
    suma(x,y);
} else if(operación==="-") {
    resta(x,y);
}else if(operación==="*") {
    multi(x,y);
}else if(operación==="/") {
    divi(x,y);
} else if(operación==="**") {
    potenciar(x,y);
} else if (operación==="sqrt") {
    raízCuadrada(x);
} else if (operación==="cbrt") {
    raízCúbica(x);
} else {
    alert("Por favor, presiona la tecla f5 y vuelve a intentarlo. Recuerda que solo hay estos signos disponibles: +, -, *, /, **, sqrt y cbrt.");
}


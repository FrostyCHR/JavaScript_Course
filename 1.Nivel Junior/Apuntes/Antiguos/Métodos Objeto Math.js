/*

// Los métodos sqrt y cbrt son para hacer la raíz cúbica y cuadrada de un numero.

document.write(Math.cbrt(27));


// Max devuelve el valor más grande de un conjunto de números. (No sirven arrays). Min es igual, pero al revés.

document.write(Math.min(48,53,562,6,23,3,32, -56));




// Random da un numero alatorio entre 0 y 1. Se puede multiplicar para que de entre 0 y 100, por ejemplo. 0 incluido, 1 no.
// Round redondea. Trunc trunca (Elimina los decimales y ya, no tiene nada en cuenta). Y floor redondea SIEMPRE hacia abajo. (si tiene -5.34245 devuelve -6, porque -6 es más pequeño que -5)


let random = Math.random()*100
document.write( "Numero sin redondear (de 0 a 100, 100 no incluido): <b>" + random + " </b> <br> <br>");
document.write( "Numero redondeado (de 0 a 100): <b>" + Math.round(random) + "</b> <br> <br>");
document.write( "Numero truncado (de 0 a 99): <b>" + Math.trunc(random) + "</b>");

// Al usar round puede salir de 0 a 100 (porque 99,5 y mayor se redondea a 100), y con floor sale de 0 a 99.
// Para que 0 y 100 no estén incluidos podemos hacer lo siguiente:


const aleatorio = (max, min) => {
    return Math.round(Math.random()*(max-min)+min);
} 


let contador = 0;

while (contador < 10) {
    let num1 = 99;
    let num2 = 1;
    document.write(aleatorio(num1, num2) + "<br>");
    contador++
}

// Floor y trunc solo dan resultados diferentes en numeros negativos.

let contador = 0
let diferentes = []

while(contador<100) {
    let random = Math.random()*-100

    let floor = Math.floor(random);
    let trunc = Math.trunc(random);

    if (floor != trunc) {
        diferentes.push(floor, trunc);
    
        }
    contador++
}

document.write(diferentes)
*/

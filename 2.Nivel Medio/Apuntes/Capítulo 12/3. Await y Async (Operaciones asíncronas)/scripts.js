//---------------------------------AWAIT Y ASYNC (OPERACIONES ASÍNCRONAS)---------------------------------//
/*

Una operación es asíncrona cuando esta se ejecuta en el momento en el que pasa algún suceso especial. No es asíncrono si se ejecuta sin importar que haya sucedido algo o no.

Las promesas son operaciones asíncronas.
Abajo hay un muy buen ejemplo usando timeouts para simular que el código tarda en recibir alguna información.

*/

// Síncrono:

/*
const objeto = {
    prop1: "val1",
    prop2: "val2",
    prop3: "val3"
};

const obtenerObj = () => {
    setTimeout (() => {
        return objeto;
    }, 2000); // 2s
};

console.log(obtenerObj());
*/

// Dice undefined porque primero se ejecuta todo el documento (hasta el console.log()), y después el timeout, cuando ya se ha mostrado la función sin valor (todavía) por consola.


// Asíncrono:

/*
const objeto = {
    prop1: "val1",
    prop2: "val2",
    prop3: "val3"
};

const obtenerObj = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(objeto);
    }, 2000); // 2s
});

obtenerObj.then((resolve) => {
    console.log(resolve);
});
*/

// Con then hacemos que se ejecute ÚNICAMENTE cuando se haya resuelto (suponiendo que no hay errores) y, por lo tanto, se muestra por consola el objeto.


/*

AWAIT Y AYNC:

Await: Obtiene el valor que tiene como parámetro resolve en la promesa. Además, ordena los datos según el orden que digamos (ver ejemplo).
Async: Permite hacer asíncrona a una función para poder usar await.

*/

const funciónTest = (text) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, Math.random() * 5000);
    });

};

/*
funciónTest("1: Hola").then((resolve) => {
    console.log(resolve);
});

funciónTest("2: Buenos días.").then((resolve) => {
    console.log(resolve);
});

funciónTest("3: Adiós.").then((resolve) => {
    console.log(resolve);
});
*/

// Al usar promesas sin saber el tiempo que van a tardar en resolverse (Math.random() en el timeout) pueden desordenarse.

const obtInfo = async () => {
    
    valor1 = await funciónTest("1: Hola.");
    valor2 = await funciónTest("2: Buenos días.");
    valor3 = await funciónTest("3: Adiós.");

    console.log(valor1);
    console.log(valor2);
    console.log(valor3);

};

obtInfo();
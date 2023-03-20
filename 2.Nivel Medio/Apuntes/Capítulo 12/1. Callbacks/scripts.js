//---------------------------------CALLBACKS---------------------------------//
/*

Hay que tener en cuenta que se puede ejecutar una función sin rellenear todos sus parámetros.

En pocas palabras, un callback es una función que llama a otra función, siendo esta última un parámetro.

Se usan para ejecutar un cierto código en caso de que pase algo.
(La verdad es que no le veo mucha utilidad, ya que se crea un código muy lioso)

*/

const input = document.getElementById("JSinput");
const button = document.getElementById("JSbutton");

const funct1 = (par1, callback) => { // El parámetro callback es una función.

    if (par1 > 5) {
        callback(par1); // La función funct1 llama a callback, una función que actua como parámetro.
    } else {
        document.write("No");
    };

};

button.addEventListener("click", () => { // Como no se pueden ejecutar funciones con parámetros, se debe hacer así.
    funct1(input.value, par => { // input.value = par1, callback = la función flecha.
        document.write(parseInt(par) + 5);
    });
});

/* 

IMPORTANTE DATO SOBRE CALLBACKS:

Podemos ahorrar código haciendo que se ejecute un callback diferente según una cierta condición.

*/

const input2 = document.getElementById("JSinput2");
const button2 = document.getElementById("JSbutton2");

// Con lo que me refiero:

function first(parameter, callback) {

    // Code

    callback(parameter);

};

function cb1(parameter) {

    console.log(parameter + " cb1");

};

function cb2(parameter) {

    console.log(parameter + " cb2");

};

button2.addEventListener("click", () => {

    if (input2.value > 5) {
        first(input2.value, cb1); // Podemos cambiar la función callback según una condición.
    } else if (input2.value < 0) {
        first(input2.value, cb2);
    };

});
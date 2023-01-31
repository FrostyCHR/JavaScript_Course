// Filter hace que cada vuelta del bucle la variable (elemento) coja el valor de una posición del array.


let array = ["pollo", 35, "gg", false];


array.filter( (elemento)  => {

    b = `${elemento} <br>`
    document.write(b);

})



// De esto sirve filter.

let numeros = [19, 52, 55,9,0];
    
resultado = numeros.filter(num => num > 15);

document.write(resultado);


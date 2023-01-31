var num1 = prompt ("Escribe un numero")
var num2 = prompt ("Escribe un numero")
var num3 = prompt ("Escribe un numero")
var num4 = prompt ("Escribe un numero")
var num5 = prompt ("Escribe un numero")
var num6 = prompt ("Escribe un numero")

while(isNaN(num1)===true || isNaN(num2)===true || isNaN(num3)===true || isNaN(num4)===true || isNaN(num5)===true || isNaN(num6)===true) {
    alert ("Escribe solo numeros")
    var num1 = prompt ("Escribe un numero")
    var num2 = prompt ("Escribe un numero")
    var num3 = prompt ("Escribe un numero")
    var num4 = prompt ("Escribe un numero")
    var num5 = prompt ("Escribe un numero")
    var num6 = prompt ("Escribe un numero")
}

var array = [num1, num2, num3, num4, num5, num6]

// Para ordenar un array de numeros hay que hacer lo de function. Dependiendo lo que ponga en return, el orden sera normal o inverso. 
// Si es de letras, con poner el sort después de la variable ya va.

var arrayOrdenado = array.sort (function (a,b) {return a-b} )

document.write (arrayOrdenado.length)

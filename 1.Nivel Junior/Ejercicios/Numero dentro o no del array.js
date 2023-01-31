var num1 = prompt ("Escribe un numero")
var num2 = prompt ("Escribe un numero")
var num3 = prompt ("Escribe un numero")
var num4 = prompt ("Escribe un numero")
var num5 = prompt ("Escribe un numero")
var num6 = prompt ("Escribe un numero")
alert ("Ahora escribe el numero que quieres comprobar")
var numNoArray = prompt ("Escribe un numero")

while(isNaN(num1)===true || isNaN(num2)===true || isNaN(num3)===true || isNaN(num4)===true || isNaN(num5)===true || isNaN(num6)===true|| isNaN(numNoArray)===true) {
    alert ("Escribe solo numeros")
    var num1 = prompt ("Escribe un numero")
    var num2 = prompt ("Escribe un numero")
    var num3 = prompt ("Escribe un numero")
    var num4 = prompt ("Escribe un numero")
    var num5 = prompt ("Escribe un numero")
    var num6 = prompt ("Escribe un numero")
    alert ("Ahora escribe el numero que quieres comprobar")
    var numNoArray = prompt ("Escribe un numero")
}

var array = [num1, num2, num3, num4, num5, num6]

var indice = array.indexOf (numNoArray)

if (indice== -1) {
    document.write ("El numero NO está en el array.")
} else {
    document.write ("El numero está en el array.")
}
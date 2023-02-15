var numero = prompt("Escribe un numero")

while (isNaN (numero)===true ) {
    alert ("Escribe solo numeros")
    numero = prompt("Escribe un numero")
}

var suma = 0
var contadorNumeros = 0

while (numero>=0) {
    suma=parseInt(suma) + parseInt(numero)
    numero = prompt ("Escribe un numero")
    if (isNaN(numero)===true) {
        alert ("Escribe solo numeros")
        numero = prompt("Escribe un numero")
    }
    contadorNumeros++
}

var media = suma/contadorNumeros

document.write ("La suma es " + suma + ". ")
document.write ("La media es " + media)
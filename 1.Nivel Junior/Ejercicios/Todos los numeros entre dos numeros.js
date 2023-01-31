var num1 = prompt ("Escribe un numero")
var num2 = prompt ("Escribe otro numero")

while (isNaN(num1)===true || isNaN(num2)===true) {
    alert ("Por favor, escribe solo numeros.")
    num1 = prompt ("Escribe un numero")
    num2 = prompt ("Escribe otro numero")
}

var contador = 0

if (num1>num2) {
    contador= parseInt (num2) + parseInt (1)
} else if (num1<num2) {
    contador= parseInt (num1) + parseInt (1)
}

if (num1<num2) {
    while (contador>num1 && contador<num2) {
        document.write (contador +", ")
        contador++
    }
}
if (num1>num2) {
    while (contador<num1 && contador>num2) {
        document.write (contador +", ")
        contador++
    }
}
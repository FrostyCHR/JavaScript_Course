var num=prompt("Escribe un numero")

while(isNaN (num)===true) {
    alert ("Escribe solo numeros")
    num=prompt("Escribe un numero")
}

contador=0

while (contador<=10) {
    document.write (num +"·"+contador + " = " +num*contador + ", ")
    contador++
}
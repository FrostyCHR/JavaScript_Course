var num=prompt("Escribe un numero")

while(isNaN (num)===true) {
    alert ("Escribe solo numeros")
    num=prompt("Escribe un numero")
}

if (num%2===0) {
    document.write ("El numeros es par.")
} else if (num%2 !=0) {
    document.write ("El numeros es impar.")
}
var num=prompt("Escribe un numero")

while(isNaN (num)===true) {
    alert ("Escribe solo numeros")
    num=prompt("Escribe un numero")
}

var contador=0

for (contador=1; contador<num; contador++) {
    if (num%contador===0) {
        document.write (contador + ", ")
    }
}
var ElNumero = prompt ("Escribe un numero")

while (isNaN(ElNumero)===true) {
    alert("Por favor, escribe solo numeros")
    ElNumero = prompt ("Escribe un numero")
}

var contador = 2
var noprimo = false

while (contador<ElNumero) {
    if (ElNumero%contador===0 ) {
        noprimo=true
        break
    }
    contador++
}

if (noprimo===true) {
    document.write ("El numero NO es primo")
} else if (noprimo===false) {
    document.write ("El numero es primo")
}
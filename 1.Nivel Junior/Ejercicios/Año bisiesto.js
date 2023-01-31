var año = prompt ("Escribe el año que quieres comprobar.")

while (isNaN(año)===true) {
    alert("Escribe solo un año")
    var año = prompt ("Escribe el año que quieres comprobar.")
}

if (año%4===0 && (año%100 !=0 || año%400===0)) {
    document.write("El año es bisiesto.")
} else {
    document.write("El año NO es bisiesto.")
}
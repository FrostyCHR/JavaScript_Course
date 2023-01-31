let figura = prompt("Escribe la figura que quieras.");

if (figura==="triángulo") {
    let base= prompt("Escribe la base.");
    let altura = prompt("Escribe la altura.");
    document.write((base*altura)/2);
} else if (figura==="rectángulo") {
    let base= prompt("Escribe la base.");
    let altura = prompt("Escribe la altura.");
    document.write (base*altura);
} else if (figura==="circulo") {
    let radio = prompt ("Escribe el radio.");
    document.write(3.14*radio**2);
} else {
    document.write("La figura no es válida.");
}
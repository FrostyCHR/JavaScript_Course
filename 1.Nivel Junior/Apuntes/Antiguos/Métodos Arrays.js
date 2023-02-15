/*
let array = ["pepito", 24, true];

// Pop elimina el último elemento y le pone el valor del elemento eliminado a otra variable. (La que digamos). Shift es lo mismo, pero al inicio.

elementoRemovido = array.pop();

document.write (elementoRemovido + "<br> <br>" + array);



let array = ["pepito", 24, true];

// Añade uno o más elementos al final de la lista. El resultado es la cantidad de elementos que tiene después de la maniobra. UnShift hace lo mismo al inicio.

resultado = array.push("la tuya");

document.write (resultado + "<br> <br>" + array);



let array = ["pepito", 24, true];

// Invierte el orden de un array.

document.write ("Array original: <b> " + array + "</b> <br>");

array.reverse();

document.write ("Array nuevo: <b> " + reverse + "</b>");



let array = ["jaj", "+p", "ahre", "ratón", "alga"];

// Sort ordena el array en orden lexicográfico. (El de toda la vida, vamos)

document.write(array + "<br> <br>");

array.sort();

document.write(array);



let array = ["pepito", 24, true];

// Splice elimina la cantidad de elementos indicados en el segundo numero a partir de la posición del primer número.
// También puede añadir elementos en ese espacio. También puedes hacer que no elimine nada, convirtiéndolo en un push o shift en cualquier parte del array.

document.write("Array original: <b>"+array+"</b> <br> <br>")

array.splice(1,0, "pelotudo", "pto");

document.write("Nuevo Array: <b>" + array + "</b> <br>");



let array = ["pepito", 24, true];

// Convierte un array en un string. Separa los elementos con el caracter que le digas. Ej. -, space, , .

document.write("Array original: <b>" + array + "</b> <br> <br>");

let resultado = array.join(" ");

document.write("Resultado: <b>" + resultado + "</b> <br> <br>");
let nuevoArray = resultado.split(" ");
document.write("De nuevo Array: <b>" + nuevoArray[2] + "</b>");



let array = ["pepito", 24, true, "papa"];

// Es como Substring pero con arrays. El primer número es la primera posición donde vamos a cortar, y el segundo es la posición a la que llegamos. (Esta no está incluida) 
// Para llegar al final, lo dejamos vacío. Se puede poner por ejemplo -1, y muestra todo menos el último, o -2, y muestra todo menos los dos últimos.

document.write("Array original: <b>" + array + "</b> <br> <br>");

let resultado = array.slice(0,3);

document.write("Nuevo Array: <b>" + resultado + "</b> <br>");

// En arrays, toString, includes, indexOf y lastIndexOf funcionan igual, solo que en los indexOf funciona con la posición del elemento y no con la de su primer o último caracter.

*/
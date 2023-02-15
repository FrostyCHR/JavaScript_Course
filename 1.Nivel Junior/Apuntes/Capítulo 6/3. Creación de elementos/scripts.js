//---------------------------------CREACIÓN DE ELEMENTOS---------------------------------//

// VOCABULARIO
/*

parent: Elemento que contiene otro (o más) elemento.
child: Elemento que está contenido por otro.
(El contenedor es el parent, y el contenido es el child)
sibling: Elemento que comparte parent con otro.

*/


// CREACIÓN DE ELEMENTOS
/*

(document.):

createElement(): Crea un elemento del tipo que digamos.
createTextNode(): Crea un nodo de tipo texto.
crateDocumentFragment(): Crea un objeto (document fragment) donde podemos añadir elementos, para posteriormente introducirlo como hijo.

(element.):

appendChild(): Añade el elemento entre paréntesis como hijo del elemento sobre el que se aplica.

*/

let item = document.createElement("div");
let content = document.createTextNode("Contenido de pruebas")

document.write(item);
document.write(content); // OBJECT TEXT. No muestra el texto en sí, dice que es un objeto. (en consola sí)


/* item.innerHTML = content;
document.write(item); // No funciona */

item.appendChild(content);
document.write(`<br> <br> ${item}`); // Aquí no
console.log(item); // Aquí sí

let container = document.getElementById("container");

container.appendChild(item);
// NO SE PUEDE ver correctamente un elemento con document.write(), pero al meterlo dentro de uno existente sí es posible.



let fragment = document.createDocumentFragment();
let list = document.getElementById("list");

for (let i = 0; i<5; i++) { // Número de veces.

    let elementList = document.createElement("li"); // Creamos cada LI (no se pueden repetir).
    let textList = document.createTextNode("Elemento de la lista"); // Creamos cada node de texto (tampoco se pueden repetir).
    elementList.appendChild(textList); // Añadimos el texto como hijo del LI.
    fragment.appendChild(elementList); // Añadimos el LI al fragmento.
    
}
list.appendChild(fragment); // Finalmente, añadimos el fragmento a la lista.




//NOTAS ADICIONALES
/*

Cuando hablamos de métodos de childs, por poner un ejemplo, nos referimos a funciones aplicadas a un objeto en el que algún child está implicado, es decir, no tiene por qué aplicarse sobre el child.

Text node y string NO SON LO MISMO NI TIENEN NADA QUE VER. El primero es un objeto, el segundo no, por lo que no se comportan de la misma manera.

Los objetos (nodos) son únicos, no se pueden añadir más de una vez. (Ni si quiera usando un for, ya que consume MUCHÍSIMOS recursos, es mejor usar createDocumentFragment() para texto)

*/
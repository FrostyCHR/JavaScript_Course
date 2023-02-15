//---------------------------------DOM Y ATRIBUTOS---------------------------------//

/*

El DOM es el elemento que contiene toda una página web (html, css) permitiendo trabajar con dichos elementos a través de JavaScript. (Elemento padre)

NODOS: 
Son cada uno de los elementos que forman parte del DOM, como por ejemplo párrafos, títulos, div's, secciones... Todas las etiquetas son nodos, pero no todos los nodos son etiquetas.

Tipos:
-Document: Nodo principal o raíz del que derivan el resto.
-Element: Nodos crados por la presencia de etiquetas HTML.
-Text: Texto dentro de las etiquetas.
-Attribute: Información asociada a un tipo element.
-Otros: Doctype, comentarios...

*/

// MÉTODOS DE SELECCIÓN DE ELEMENTOS (document.)

/*

getElementById(): Por ID.
getElementsByTagName(): Por nombre del elemento (p). (Siempre es una colección aunque solo haya uno)
querySelector(): Primer elemento que tenga el selector especificado en el parámetro.
querySelectorAll(): Igual que el anterior, pero coge un NODE LIST (lista de nodos) (array NO) con todos los elementos.

(Algunos elementos dice la etiqueta que es, y otros solo que es HTML)

*/


document.write(document.getElementById("JSno") + "<br>");

document.write(document.getElementsByTagName("p")[0] + "<br>"); // Primer p

document.write(document.querySelector(".clase") + "<br>"); // (Solo el primero)

document.write(document.querySelectorAll(".clase") + "<br>"); // (Todos)


// MÉTODOS DE ATRIBUTOS (element.)

/*

setAttribute(): Pone el valor que le digamos al atributo que queramos. (modifica, en caso de que ya esté definido)
getAttribute(): Coge el valor del atributo que queramos.
removeAttribute(): Elimina el atributo que queramos, si es que tiene. (no es lo mismo que dejar en blanco en ciertos atributos)

*/


let input = document.getElementById("JSinputTest");

input.setAttribute("type", "range");

document.write("<br> <br> <br> <br> <br>" + input.getAttribute("type"));

input.removeAttribute("hidden"); // Hemos quitado el hidden, y por lo tanto sí que se ve.


// Otros atributos

/*

contentEditable: Permite al usuario editar el contenido. (Booleans. George Boole)
dir: Pone el texto a la izquierda o a la derecha. (NO usar, hacerlo desde CSS3)
hidden: Es como display none. Si existe, tenga valor o no, se ocultará el elemento. Para que vuelva a aparecer, se debe usar element.removeAttribute("hidden");
tabindex: Indica el orden en el que se pasa de elemento en elemento al usar la tecla tab. Se deben usar números.
title: Al poner el ratón por encima aparece texto.



*/

let title = document.getElementById("JStitle");
title.setAttribute("contentEditable", "true");
title.setAttribute("title", "hola buenos días");


// Atributos y métodos exclusivos de inputs (y otros)

/*

Con lo siguiente accedemos "directamente", sin pasar por HTML.
(NO son funciones, como length)

className: Dice la clase del elemento.
value: Dice el valor del input. (NO es lo mismo que placeholder)
type: Dice el tipo de input. (También se puede modificar como si fuese un set attribue)
accept: Permite decidir que tipo de entradas son aceptadas en el input. (Normalmente en type file)
form: Atributo de inputs que permite decidir a qué formulario pertenece, a pesar de no estar dentro de él. (Similar a for con los labels)
minLength: Cantidad mínima de caracteres para que pueda ser enviado.
placeholder: Lo que hay antes de escribir nada.
required: Indica si es necesario para enviar el formulario. (RE DÉBIL)

*/

let inputAttr = document.querySelector(".methodsInputs");

document.write(`<br> <br> <br> <br> <br> <br> <b>Clase:</b> ${inputAttr.className}`);
document.write(`<br> <b>Value:</b> ${inputAttr.value}`);
/* inputAttr.type = "file"; */
document.write(`<br> <b>Type:</b> ${inputAttr.type}`);
inputAttr.accept = "video/avi";
inputAttr.minLength = 5;


// Atributo Style

/*

Permite cambiar el estilo de un elemento mediante CSS3. Las propiedades que tienen un guión, como background-color se escriben en camelCase: backgroundColor.
Se usa de la siguiente manera:

element.style.property = "value";

(En este momento creo que no se pueden modificar pseudoelementos o pseudoclases de esta manera, pero no pasa nada porque es posible de otra)

*/

inputAttr.style.padding = "25px";
inputAttr.style.color = "#a412ba";
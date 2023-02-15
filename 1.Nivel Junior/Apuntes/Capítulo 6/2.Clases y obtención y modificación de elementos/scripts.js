//---------------------------------CLASSLIST Y OBTENCIÓN Y MODIFICACIÓN DE ELEMENTOS---------------------------------//


// CLASSLIST

/*

Permite hacer cambios en las clases de los elementos.

add(): Añade la clase que esté entre paréntesis.
remove(): Elimina la clase que esté entre paréntesis.
item(): Devuelve la clase con el índice especificado.
contains(): Devuelve si un elemento tiene la clase especificada o no.
toggle(): Si el elemento tiene la clase especificada la elimina (como remove), y si no, la añade (como add). (MUY útil para botones como la hamburguesa del nav) (devuelve un boolean)
replace(): Cambia una clase por otra. (devuelve un boolean)


*/

let title = document.querySelector(".title");

title.classList.add("big", "oks");
title.classList.remove("big");

document.write(title.classList.item(3));
document.write(`<br>${title.classList.contains("title")}`);

title.classList.toggle("puede");
title.classList.replace("puede", "whose");

document.write("<br> <br> <br> <br>");


// OBTENCIÓN Y MODIFICACIÓN DE ELEMENTOS

/*

textContent: Sirve para obtener el texto que contiene un elemento, pero si contiene más HTML dentro, no lo leerá.

innerHTML: Devuelve todo el contenido del elemento, incluyendo el HTML. (probar con alert)
outerHTML: Devuelve toda la etiqueta, es decir, el texto, el HTML que esté dentro, y el propio HTML de la etiqueta sobre la que lo usamos. (probar con alert)

*/

let subtitle = document.querySelector(".subtitle");

document.write(subtitle.textContent);

document.write("<br>");

document.write(subtitle.innerHTML);
alert(subtitle.innerHTML);

document.write("<br>");

document.write(subtitle.outerHTML);
alert(subtitle.outerHTML);
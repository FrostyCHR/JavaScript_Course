//---------------------------------MOUSE EVENTS Y KEY EVENTS---------------------------------//

/*
MOUSE EVENTS:

click: Cuando se aprieta y se suelta el click en ese elemento.
mousedown: Cuando se aprieta el click, no importa donde se suelte.
mouseup: Cuando se suelta el click sobre el elemento. No importa el lugar en el que se haya clicado.

dblclick: Doble click. (2 clicks en menos de 500ms)

mouseover: Como :hover en CSS. (también si lo hacemos sobre un hijo)
mousemove: ¿?

mouseout: Al deshacer el hover.
mouseleave: ¿?

contextmenu: Al hacer click derecho.

*/


const dobleClick = document.querySelector(".doble-click");
dobleClick.addEventListener("dblclick", ()=>{
    alert("doble click");
});


const mouseOver = document.querySelector(".mouse-over");
mouseOver.addEventListener("mouseover", ()=>{
    alert("mouse over");
});

const mouseOut = document.querySelector(".mouse-out");
mouseOut.addEventListener("mouseout", ()=>{
    alert("mouse out");
});

const contextMenu = document.querySelector(".context-menu");
contextMenu.addEventListener("contextmenu", ()=>{
    alert("context menu");
});


/*
KEY EVENTS:

keydown: Cuando se presiona una tecla. (hay que tener habilidad para presionar solamente una vez y soltarla fuera sin que se escriban muchos caracteres)
keypress: Cuando se presiona y se suelta una tecla.
keyup: Cuando se suelta una tecla.

*/

const input = document.getElementById("JSkeytest");

input.addEventListener("keydown", ()=>{
    console.log("Se presionó una tecla.");
});

input.addEventListener("keypress", ()=>{
    console.log("Se presionó y se soltó una tecla.");
});

input.addEventListener("keyup", ()=>{
    console.log("Se soltó una tecla.");
});
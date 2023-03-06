//---------------------------------OBJECT WINDOW Y SCREEN---------------------------------//

/*

El objeto Window es el objeto con la jerarquía más alta de todo JavaScript, ya que incluso el DOM depende de él. (el que la tiene más grande, como !important en CSS)
Este objeto se refiere a la pestaña del navegador en la que te encuentras.

IMPORTANTE: Hay métodos que SOLAMENTE se pueden aplicar sobre variables que contengan una pestaña, como close().

Hereda las propiedades de EventTarget.

*/


// SCREEN Y SCROLL
/*

Object screen: (PERMITE trabajar directamente con funciones del S.O. y del hardware (ventanas de windows, pantalla))

screen: Coje el objeto screen. (La pantalla del dispositivo. (Probar mobile en console))
screenTop: Distancia en píxeles entre la parte superior de la ventana donde está abierta la web y el borde superior de la pantalla. (solo de lectura)
screenLeft: Igual que el anterior, pero por la izquierda. (solo de lectura)

Scroll:

scroll x: Devuelve la cantidad de píxeles que se ha hecho scroll en el eje X.
scroll y: Igual que el anterior, pero en el eje Y.
scroll(): Método que nos permite ir a una cierta parte del scroll. (valores absolutos)

Move and resize: (Por algún motivo no van)

moveTo:
moveBy:

resizeTo: 
resizeBy: 

*/

// PRUEBAS SCREEN

const screen = window.screen;

console.log(screen);
document.write(screen);

document.write("<br> <br>" + screenLeft + "<br>");
document.write(screenTop);

console.log(window.scrollX, window.scrollY);


// WINDOW
/*

open(): Abre una nueva pestaña en la dirección indicaca. (Como si fuese: <a> href="test" target="_blank">test </a>) DEVUELVE la pestaña que se abrió.
close(): Cierra la pestaña sobre la que ejecutamos el método.
closed: Dice si la pestaña está cerrada o no.
stop(): Para la carga de una web. (x que se ve después de presionar F5)

alert(): El que ya conocemos. (no hace falta window.)
prompt(): El mismo de siempre. (no hace falta window.)

print(): Abre la configuración de impresión de la página. (no hace falta window.)
confirm(): Muestra un mensaje con opción de confirmación y cancelación. Devuelve el valor seleccionado por el usuario. (no hace falta window.)

*/

// PRUEBAS 2

/* 

let statsER = window.open("https://www.youtube.com/watch?v=6kkEXZ8cLC4");
// Ahora statsER es una ventana, y podemos cerrarla.
statsER.close(); // Probar a comentar y pegar en la consola.

console.log(statsER.closed);

print();

window.confirm("¿Seguro?"); // ¿Por qué abre un about:blank? (Al parecer es por tener otras cosas antes)

*/
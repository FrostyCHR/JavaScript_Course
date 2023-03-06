//---------------------------------INTERFACE EVENTS Y TIMERS---------------------------------//
/*

INTERFACE EVENTS:

Están relacionados con la página en sí y con lo que el usuario ve e interactúa.

error: Ocurre cuando hay un error en la carga de un elemento multimedia. (no lo he podido probar porque carga demasiado rápido)
load: Ocurre cuando un elemento ha cargado.
beforeunload: Ocurre antes de que se descargue la página y, por lo tanto, se vaya a otro sitio web. (es muy difícil de ver, ya que al momento te vas del sitio)
unload: Una vez se ha descargado el sitio.
resize: Cuando se cambia la resolución. (también al poner el modo ventana siempre que cambie la resolución)
scroll: Cuando se hace scroll.
select: Para INPUTS o para TEXTAREAS. Cuando se selecciona un texto.

*/

addEventListener("load", ()=>{ // Cuando no hay nada nos referimos a window.
    console.log("Se ha cargado la página.");
});

addEventListener("resize", ()=>{
    console.log("Se ha cambiado la resolución.");
});

addEventListener("scroll", ()=>{
    console.log("Se ha hecho scroll.")
});

const input = document.getElementById("JSinput");

input.addEventListener("select", (e)=>{
    console.log(e);
    const label = document.getElementById("JSlabel");
    label.textContent=input.value.substring(e.target.selectionStart, e.target.selectionEnd);
});

/*

TIMERS:

Son funcionalidades que nos permiten ejecutar código tras o cada una cienta cantidad de tiempo. (sintaxis similar a los eventos)

setTimeout: Hace que ocurra una cierta función al pasar determinado tiempo.
clearTimeout: Cancela el anterior. (Parece que a pesar de estar fuera del timeout, sigue cancelándolo (sin eventos). Supongo que primero se carga todo el archivo y luego se ejecuta el timeout, es decir, se crea el timeout para cancelarse antes de ponerse a contar.)

setInterval: Igual que el anterior, pero es una especie de bucle.
clearInterval: Cancela el interval. (Hace falta guardar el setInterval() en una variable)

PUEDEN ejecutarse varios timeouts e intervalos a la vez.

*/

const button1 = document.getElementById("JSbutton-1");

button1.addEventListener("click", ()=>{
    setTimeout(() => {
        alert("Han pasado 3 segundos desde que me clicaste.");
    }, 3000); // Valor en ms. 
});


const button2 = document.getElementById("JSbutton-2");

let interval; // IMPORTANTE que se declare fuera de la función.
button2.addEventListener("click", ()=>{
    interval = setInterval(() => {
        alert("Esto se ejecuta cada 3 segundos.");
    }, 3000);
});

const stopInterval = document.getElementById("stopInterval");

stopInterval.addEventListener("click", ()=>{
    clearInterval(interval); // Para el intervalo.
});
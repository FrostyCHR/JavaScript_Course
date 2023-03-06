//---------------------------------OBJECT EVENT Y EVENT FLOW---------------------------------//

// OBJECT EVENT
// Es el ÚNICO parámetro que se puede incluir directamente en un Event Listener. (ver anteriores apuntes)

const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", (e) =>{ // e / evt / event
    console.log(e, e.target); // e es el evento que ha ocurrido y e.target es el elemento (HTML) que lo ha desencadenado.
    
    
    alert("Botón"); // Para la siguiente sección.
});


// EVENT FLOW
// Es la manera en la que se estructura la prioridad en los eventos.
/*

Event bubbling: De esta manera se ejecutan los eventos de más específicos (childs) a menos específicos (parents).
// Primero botón y luego contenedor. (al pulsar el botón, ya que este forma parte del contenedor al ser su hijo)

Event capturing: Lo contrario al anterior. Al poner "true" en un elemento, este gana toda la prioridad. (en caso de haber 3: true --> más específico --> especificidad intermedia) (si hay 3 y 2 de ellos con true: true menos específico --> true más específico --> más específico [se invierte])


e.stop propagation(): Hace que solamente se ejecute el evento con más prioridad en casos en los que por defecto ocurrirían varios.

*/

const container = document.querySelector(".container");
const containerUp = document.querySelector(".containerUp");

container.addEventListener("click", (e)=>{
    alert("Contenedor");
    e.stopPropagation(); // Hace que los siguientes eventos según el Event Flow no se ejecuten.
}, true) // El true hace que gane prioridad.

containerUp.addEventListener("click", (e)=>{
    alert("ContenedorUp");
},)
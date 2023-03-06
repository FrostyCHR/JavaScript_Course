//---------------------------------CONTROL DE FLUJO Y SENTENCIA SWITCH---------------------------------//
/*

CONTROL DE FLUJO:

Flujo: El flujo del programa es la manera (orden) en la que se ejecuta el código. (De arriba a abajo, excepto timers, events...)

Bloque: Un bloque es todo lo que hay dentro de unas llaves {}. Crean un nuevo ámbito de variables (mirar scope).

Sentencias controladoras de flujo: Son funcionalidades del lenguaje que nos permiten alterar el orden de ejecución del programa. Por ejemplo, si un if no se cumple, se saltaría todo su bloque. (if, else, while, for...)

*/


let nombre = "Pablo";

{
    let nombre = "Ernesto";
    /* alert(nombre); */ // Ernesto (scope);
};

if (2 < 1) {
    alert("Esto nunca ocurre."); // Al poner una condición (en este caso imposible) estamos alterando el flujo.
};


/*

Switch:

Es muy similar a else if. Realmente no es muy útil, ya que no podemos usar las siguientes funcionalidades: ||  &&  < > ...

*/


let expresión = "Rojo no";

switch (expresión){

    case "Verde":           // if (expresión == "Verde")
        alert("Naturaleza");
        break;
    case "Rojo":            // if (expresión == "Rojo")
        alert("Llama mucho la atención.");
        break;
    default:
        alert("No es nada de lo anterior."); // else

};
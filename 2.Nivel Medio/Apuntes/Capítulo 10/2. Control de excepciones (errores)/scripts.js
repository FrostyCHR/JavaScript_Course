//---------------------------------CONTROL DE EXCEPCIONES (ERRORES)---------------------------------//
/*

EXCEPCIONES:

Las excepciones son comportamientos no esperados de un código. Pueden ser creadas por JavaScript para avisar al desarrollador, o por el desarrollador para avisar a usuarios y a otros miembros del equipo.

Excepciones ECMAScript: Errores relacionados con JavaScript. Errores en la sintaxis, ejecución de funciones que en realidad son variables, variables no definidas...
DOMException y DOMError: Errores relacionados con el DOM. (Mirar documentación oficial)

*/

/*

TRY CHATCH:

Para manejar las excepciones existe una sentencia, try... catch. (no puede haber try sin catch o finally)
Try ejecuta un bloque. Si hay un error, lo pasa como parámetro en catch. Además, se desactivan los errores normales, por lo que podemos hacer lo que queramos con el error al estar guardado en una variable.

IMPORTANTE: Try y catch no sirven con los errores de sintaxis. Try SIEMPRE se ejecuta, sin tener en cuenta que hayan errores o no.


Tipos de Catch:

Catch incondicional: No contiene sentencias de control de flujo como if dentro.
Catch condicional: Sí que contiene condicionales.


Finally:

Se ejecuta sin importar que haya un error o no.
Tiene MUCHA prioridad. Es decir, puede "anular" que return acabe la función.

Throw:

Nos permite crear un error. Tanto dentro como fuera de try catch.
Podemos usar throw sobre un objeto, array o lo que queramos. Al ponerlo en un try, el parámetro error del catch será igual a lo que estuviese después del throw.

*/

try {

    let xd;
    xd();

} catch (error) {

    console.log(typeof error); // Typeof nos permite ver el tipo de dato. En este caso error es un objeto.
    document.write("Estimado caballero, lamento decirle que ha ocurrido un error.");

}

const pruebaFinally = () => {

    try {

        throw "Un error"; // Al poner throw no se ejecuta NADA que venga por detrás.

        return "try"; // La función acabaría en una situación normal, aunque haya un catch.

        alert("Pasamos el return del try."); // A pesar de que se ejecute finally, dentro de try llegamos únicamente hasta el return.

    } catch (error) {

        console.log(error); // Ni con finally ni sin él se ejecuta.

        return "Catch";

    } finally {

        return "Finally"; // Finally tiene más prioridad. Es decir, sobrescribe lo que hubiese antes.
        alert("Pasamos el return del finally"); // No llegamos hasta aquí.

    };
    
};

console.log(pruebaFinally());

/*

¿CUÁNDO USAR TRY CATCH?:

Se debe usar en proyectos grandes en los que no sea fácil detectar un error únicamente revisando el código.
También puede ser usado para avisar a otros desarrolladores.
¿Con await y async?

*/
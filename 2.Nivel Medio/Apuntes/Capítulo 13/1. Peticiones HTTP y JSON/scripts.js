//---------------------------------PETICIONES HTTP Y JSON---------------------------------//
/*

PETICIONES HTTP:

Una petición http es una pregunta que le hacemos a un servidor esperando algo como respuesta. No guardan información.

Cliente: Dispositivo a través del cual una persona está usando nuestra web. Se emiten peticiones.
Servidor: Ordenador muy potente que almacena y procesa datos. Se dan respuestas a las peticiones.


JAVASCRIPT OBJECT NOTATION (JSON):

Un JSON es un tipo de objeto en JavaScript que permite solucionar muchos problemas a la hora de enviar y recibir datos de un servidor.
Serializado: Es un JSON que tiene comillas simples al inicio y al final. Al quitarlas se vuelve un JSON normal. Es el que se usa al enviar y recibir datos.
Deserializado: Un JSON normal, sin comillas.

*/


// Objeto:
const objeto = {
    prop1: "val1",
    prop2: "val2"
};

// JSON deserializado:
const jsonDes = {
    "prop1": "val1",
    "prop2": "val2"
};

// JSON serializado:

const jsonSer = '{"prop1": "val1","prop2": "val2"}';


/*

JSON.stringify(): Permite serializar un JSON.
JSON.parse(): Hace todo lo contrario. Deserializa un JSON.

*/

const result = JSON.stringify(jsonDes);

console.log(typeof result, result);


const result2 = JSON.parse(jsonSer);

console.log(typeof result2, result2);

/*

Polyfill: 
Esto es un método escrito de manera explícita, si es que no existe en algunas versiones de algunos navegadores.
Por ejemplo, si el método stringify() de JSON no existe, podemos "crearlo" por nosotros mismos. Esto se llama Polyfill.

*/
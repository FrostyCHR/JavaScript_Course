//---------------------------------LIBRERÍA AXIOS---------------------------------//
/*

¿Qué es una librería?:

Es un archivo con un conjunto de funciones creadas por otro desarrollador con un fin específico. Por ejemplo, Axios sirve para enviar peticiones. El script se debe poner antes del código usual dentro del HTML para evitar llamar a funciones que no han sido creadas todavía.

Organización de las librerías:

Si es un código EXTREMADAMENTE corto, se pone directamente dentro de una etiqueta script en el head. (sin modularizar, menos de 10 líneas)
Normalmente van al final del body, antes del código que llame a esas funciones.
Si es una librería que recolecte datos, va en el head. Eso es para evitar perder los datos de usuarios que se vayan antes de que cargue el body.


Axios:

NO es nativo de JavaScript. Es la evolución de fetch basada en el objeto XMLHttpRequest.
Está basado en promesas, pero estas no están encapsuladas.
Por defecto funciona con el método GET y con el header que hemos visto anteriormente.
Para cambiar el método, hay que poner .method(). [.post()]
No hace falta serializar los JSON.


*/
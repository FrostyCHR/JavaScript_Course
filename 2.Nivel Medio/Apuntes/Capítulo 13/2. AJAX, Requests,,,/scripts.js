//---------------------------------AJAX, REQUESTS...---------------------------------//
/*

MUY IMPORTANTE: A partir de ahora, los apuntes irán en un archivo JavaScript como este, pero todas las pruebas que requieran de localhost estarán en su correspondiente carpeta en htcdocs.


AJAX significa: Asynchronous JavaScript and XML. No funciona en internet explorer.
La diferencia con peticiones "normales" es que no requieren que recarguemos la página.


OBJETO XMLHTTPREQUEST:

XMLHttpRequest: Es un objeto que nos permite hacer peticiones.

Métodos:

open(): Abre una petición Htpp.
send(): Envia la petición de open. Hasta ese momento, ni siquiera sale el archivo en network.

Propiedades:

readyState: Cómo se encuentra la petición. (ver abajo)
response: Lo que responde el servidor. Solo se puede usar si readyState es >= 3.
status: Código que indica lo que está ocurriendo con la petición. 
    404 = not found
    200 = todo ha ido bien
Hay muchísimos más.


Evento readystatechange: Se ejecuta cuando la propiedad readystate del objeto XMLHttpRequest cambia. Tiene 4 estados, numerados del 1 al 4.
1: La petición se creó correctamente. request.open()
2: La petición se envió correctamente. request.send()
3: La petición está siendo procesada.
4: El servidor ha enviado algo como respuesta. (puede ser un error)


Objeto ActiveXObject:

Es similar a XMLHttpRequest pero para internet explorer.

*/
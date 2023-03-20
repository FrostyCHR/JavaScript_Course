//---------------------------------FETCH---------------------------------//
/*

Fetch es otra manera de trabajar las peticiones en JavaScript diferente a AJAX. Significa "ir a buscar".

Por defecto, fetch trabaja con GET.
Funciona mediante PROMESAS y, por lo tanto, es asíncrono. Eso sí, están encapsuladas. (no se puede acceder a su valor normalmente)

Métoidos:

.text(): Desencapsula la promesa en un string, pero sigue siendo una promesa.
.json(): Igual que text, pero en JSON deserializado.
.blob(): No sé exactamente qué hace, pero funciona con imágenes.


Otros métodos que no sean GET:

Se debe añadir un objeto como segundo parámetro de la función fetch:
fetch("URL", {
    method: "",
    body: [lo que quieras enviar en JSON serializado],
    headers: {"Content-type": "application/json"}
})

*/
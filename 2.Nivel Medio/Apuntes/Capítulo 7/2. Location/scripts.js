//---------------------------------LOCATION---------------------------------//

// Location es una serie se propiedades relacionadas con la ruta en la que nos encontramos. (link)

/* (window.location.)

href: Devuelve la ruta en la que se encuentra el documento HTML. (lo que hay en la barra donde copiamos los links, URL)
hostname: Devuelve el dominio (youtube.com) y el subdominio (www.) del documento. También puede ser otra cosa como una ip.
pathname: Devuelve todo lo que hay en en href después del dominio.
protocol: http si no se sabe su seguridad, https si es seguro.
asign(): Te dirige a la página especificada. Como window.open, pero en la pestaña en la que te encuentras.

*/

document.write(window.location.href);
document.write("<br> <br>" + window.location.hostname); // [ip en este caso por no estar en ningún host (servidor)]
document.write("<br> <br>" + window.location.pathname);
document.write("<br> <br>" + window.location.protocol);
/* window.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location/reload'); CONSOLA */
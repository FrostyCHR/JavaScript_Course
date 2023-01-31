let socioProved = false;
let esSocio = false;


function socioSiONo (socio) {
    do {
        if (socio==="si") {
            esSocio=true;
            socioProved=true;
            return esSocio;
        } else if(socio==="no") {
            esSocio=false;
            socioProved=true;
            return esSocio;
        } else {
            alert("Escribe solo si o no.");
            var socio= prompt("¿Eres socio?");
        }
    } while (socioProved===false);
}

var socio= prompt("¿Eres socio?");

socioSiONo (socio);

var tiquet= prompt("¿Cuanto te has gastado?");

while (isNaN(tiquet)===true) {
    alert("Escribe solo numeros.");
    var tiquet= prompt("¿Cuanto te has gastado?");
}

let tiquetNuevo=0

function precio (tiquet) {
    if (esSocio===true) {
        if(tiquet>25 && tiquet<=50) {
            tiquetNuevo=tiquet-1;
            return tiquet;
        } else if (tiquet>50 && tiquet<=100) {
            tiquetNuevo= tiquet-tiquet*5/100;
            return tiquetNuevo;
        } else if (tiquet>100) {
            tiquetNuevo= tiquet-15;
            return tiquetNuevo;
        }
    } else if (esSocio===false) {
        if (tiquet>=100) {
            tiquetNuevo= tiquet-5;
            return tiquetNuevo;
        }
    } 
}

precio(tiquet)

document.write (`El precio a pagar es de ${tiquetNuevo}€.`);
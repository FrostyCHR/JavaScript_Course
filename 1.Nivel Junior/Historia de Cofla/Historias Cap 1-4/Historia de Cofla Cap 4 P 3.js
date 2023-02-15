const Inscribirse = (clase) => {
    let materias = {
        física : ["pepito", "armando", "josé", "maría"],
        mates : ["antonio", "fernando"],
        lengua : ["manolo", "juan", "pedro"],
        tecno : [],
    };
    
    let alumnos = materias[clase];

    if (alumnos===undefined){
        alert("Lo sentimos, no se ha encontrado la clase.")
    }

    let cantidadAlumnos=alumnos.length;

    if(cantidadAlumnos < "4") {
        alumnos.push("cofla");
        document.write(`Estos son los alumnos de ${clase}: ${alumnos}` );
            
    } else {
        alert(`Lo siento, todas las plazas de ${clase} están ocupadas.`);
        document.write(`Estos son los alumnos de ${clase}: ${alumnos}`);
            
    }
}

Inscribirse(prompt("¿En que clase se quiere incribir Cofla?"));
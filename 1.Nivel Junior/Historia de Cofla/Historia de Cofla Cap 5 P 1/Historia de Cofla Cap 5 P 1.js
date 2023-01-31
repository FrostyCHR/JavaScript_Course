let materias = {
    Mates: [23,25 ,78, 3, 4, "Mates"],
    Programación: [40,43, 96, 15,18, "Programación"],
    Carpintería: [7,15, 58, 0,12, "Carpintería"],
};

const aprueba = materias => {

    for (let asignatura in materias) {
        asignatura=materias[asignatura];
        console.log(asignatura[0]);
        let porcAsistencia = parseInt(asignatura[0])/parseInt(asignatura[1])*100;
        console.log(porcAsistencia);
        let puntuación = asignatura[2];
        let porcTrabajos = asignatura[3]/asignatura[4]*100;

        if(porcAsistencia>=90 && puntuación>=70 && porcTrabajos>=75) {
            document.write(`Felicidades alumno, has aprobado <b style= color:green>${asignatura[5]}</b>. <br>`)
        } else {
            document.write(`Alumno, has suspendido <b style= color:red>${asignatura[5]}</b>.`)
        }
    }

}

aprueba(materias);
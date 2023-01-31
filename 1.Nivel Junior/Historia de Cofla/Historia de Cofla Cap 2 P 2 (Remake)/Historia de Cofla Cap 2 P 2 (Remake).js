// Setup

let alumnos = [];
let cantidadAlumnos = prompt(`¿Cúantos alumnos hay en clase?`);
let dias = prompt(`¿Cúantos días quieres pasar la lista?`)

while (isNaN(cantidadAlumnos)==true){
    cantidadAlumnos = prompt(`¿Cúantos alumnos hay en clase? (Recuerda que solo puedes poner números)`);
}

while (isNaN(dias)==true){
    dias = prompt(`¿Cúantos días quieres pasar la lista?`);
}

for (let i = 0; i < cantidadAlumnos; i++) {
    let alumno = [prompt(`¿Cuál es el nombre del alumno ${i +1}?`), 0, 0]; // [Nombre, presencias, ausencias]
    alumnos.push(alumno);
}

// End Setup

const pasarLista = alumnos => {
    for (let i = 1; i<=dias; i++) { //Días
        for (let alumno in alumnos){ //Alumnos
            let presencia=prompt(`${alumnos[alumno][0]} ha venido a clase? (p = presente, a = ausente)`);
            if (presencia=="p") {
                alumnos[alumno][1]++;
            } else 
            if (presencia=="a"){
                alumnos[alumno][2]++;
            } else{
                alert(`Introduce solo p o a. Se contará como una ausencia.`);
                alumnos[alumno][2]++;
            }
        }
    }
    return alumnos;
}

const mostrarResultados = alumnos =>{
    for (let alumno in alumnos){
        let resultado;
        if ((alumnos[alumno][1]) / (alumnos[alumno][1] + alumnos[alumno][2]) >=0.9) {
            resultado=" puedes aprobar";
        } else{
            resultado=" has suspendido";
        }
        document.write(`${alumnos[alumno][0]}, has venido ${alumnos[alumno][1]} día/s y faltado ${alumnos[alumno][2]} día/s, por lo que ${resultado}. <br> <br>`)
    }
}

mostrarResultados(pasarLista(alumnos));
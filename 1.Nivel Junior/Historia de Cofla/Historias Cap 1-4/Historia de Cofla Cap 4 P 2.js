class Materia {
    constructor(asignatura, profesor, alumnos) {

        this.asignatura=asignatura;
        this.profesor=profesor;
        this.alumnos=alumnos;

    }

    InfoMateria (asig) {

        asig == this.asignatura 
        
        document.write(`<b> ${this.asignatura}: </b> <br> <br> Profesor: ${this.profesor} <br> Alumnos: ${this.alumnos}.`);
        
    }

}

const Mates = new Materia ("Mates", "Pedro Porro", ["Cofla", "Andrés", "María"]);
const Programación = new Materia ("Programación", "Raúl Hernandez", ["Cofla", "Andrés", "María"]);
const Carpintería = new Materia ("Carpintería", "Armando Paredes", ["José", "Andrés", "María"]);
const Lengua = new Materia ("Lengua", "Pedro Porro", ["Cofla", "Andrés", "María", "Morata"]);

let MateriaQueQuieresVer = prompt("¿Que materia quieres comprobar? Aptas: Mates, Programación, Carpintería y Lengua");

const VerInfo = (MateriaQueQuieresVer) => {
    if (MateriaQueQuieresVer== "Mates") {
        Mates.InfoMateria(Mates.asignatura);
    } else if (MateriaQueQuieresVer== "Programación") {
        Programación.InfoMateria(Programación.asignatura);
    } else if (MateriaQueQuieresVer== "Carpintería") {
        Carpintería.InfoMateria(Carpintería.asignatura);
    } else if (MateriaQueQuieresVer== "Lengua") {
        Lengua.InfoMateria(Lengua.asignatura);
    } else {
        alert("La asignatura no es correcta, reinténtalo por favor.");
    }
    
}
VerInfo(MateriaQueQuieresVer);

const ClasesAlumno = (alumno) => {
    let clasesAlumno = [];
    if(Mates.alumnos.includes(alumno)) {
        clasesAlumno.push(Mates);
    }
    if(Programación.alumnos.includes(alumno)) {
        clasesAlumno.push(Programación);
    }
    if(Carpintería.alumnos.includes(alumno)) {
        clasesAlumno.push(Carpintería);
    }
    if(Lengua.alumnos.includes(alumno)) {
        clasesAlumno.push(Lengua);
    }

    
    let Profes=[];
    for(clase in clasesAlumno) {
        Profes.push(clasesAlumno[clase].profesor);
    }

    let clasesAlumnoString=[];

    for(claseString in clasesAlumno) {
        clasesAlumnoString.push(clasesAlumno[claseString].asignatura);
    }
    

    document.write(`<br> <br> <br> <br> El alumno <b style=color:blue>${alumno} </b> asiste a las siguientes clases: <br> <br> <b> ${clasesAlumnoString}.</b> <br> Con los correspondientes profesores: <b>${Profes}.</b> <br> <br> Son un total de <b>${clasesAlumno.length}</b> clases. `);
}
ClasesAlumno("Cofla");
ClasesAlumno("María");
ClasesAlumno("Andrés");
ClasesAlumno("Morata");
ClasesAlumno("José");
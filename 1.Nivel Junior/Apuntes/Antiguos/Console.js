console.log("Message on the console :)");

// Escribe un mensaje en la consola.

console.clear();

// Elimina todo de la consola. La limpia.


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

console.table(Mates);

console.table([4,5,2,56,"g","sf"]);

// Nos crea una tabla para ver los valores de cierto objeto o array.

console.clear();

const saludo = (nombre) => {
    console.log("Hola " + nombre+".");
    console.count();
}

saludo("g");
saludo("ggads");
saludo("ythhtthgy");
saludo("hhtthgthg");
saludo();

console.countReset();
console.count();

// Nos sirve para contar sin necesidad de crear una variable para ello. CountReset lo reinicia.

console.clear();


console.group("Cosas");
console.log("gu");
console.log("ktkwer");
console.log("ggtjyku");
console.log("gg");
console.group("Otras cosas");
console.log("ww");
console.log("dgfqaf");
console.log("7523");
console.groupEnd();
console.log("ofaqoi");

// Como se ve en console, creamos grupos de elementos, donde podemos crear y acabar grupos dentro de otros grupos. GroupCollapsed comienza cerrado.

console.clear();

// Super útil. Nos sirve para saber cuanto tiempo transcurre entre varias partes de código.

console.time();
console.timeLog();
console.timeEnd();
//Class es como la fabrica de objetos. Lo de la derecha de constructor son las caracteristicas de los objetos de esa clase. 
//El this es para asignar que la altura del objeto a crear, por ejemplo, es la misma característica que la que ponemos en constructor.

class persona {
    constructor (altura, edad, nacionalidad, nombre) {
        this.altura=altura; // Aquí creamos los atributos del objeto, y le damos el valor (no tiene por qué llamarse igual que los parámetros del constructor).
        this.edad=edad;
        this.nacionalidad=nacionalidad;
        this.nombre=nombre;
        this.características=`Hola, me llamo ${this.nombre}, mido ${this.altura} cm, y soy ${this.nacionalidad}.`;
    }
    decirTodo () {
        document.write(this.características);
    }
}

// Hay un tipo de método, static, que se debe usar cuando no se use ninguna propiedad del objeto. Se debe añadir static al inicio.

//Decir this es como decir Chris, el this sustituye al objeto a crear.
//Los métodos (funciones en un objeto) solo pueden ser funciones normales no flecha.

const Chris = new persona (180, 14, "Español", "Christian");
const Abdel = new persona (170, 14, "Marroquí", "Abdel");


Chris.decirTodo();

//NO SE PUEDE tener un objeto con el mismo nombre que su clase.

document.write ("<br> <br> <br>");

//El extends es para heredar atributos de otra clase.
//Super es para copiar los atributos de la clase anteriormente mencionada.
//Los métodos también se copian.

class España extends persona {
    constructor(altura, edad, nacionalidad, nombre, características, tortilla_patata){
        super(altura, edad, nacionalidad, nombre, características);
        this.tortilla_patata=tortilla_patata
    }
}

const Paco= new España (165, 47, "Español", "Paco", "Con cebolla");
class celular {
    constructor (numeroCelu, color, peso, resoluciónPantalla, resoluciónCámara, RAM) {
        this.numeroCelu=numeroCelu
        this.color=color;
        this.peso=peso;
        this.resoluciónPantalla=resoluciónPantalla;
        this.resoluciónCámara=resoluciónCámara;
        this.RAM=RAM;
        this.prendido=false;
    }

    encender () {
        if (this.prendido==false) {
            alert("Celu prendido.");
            this.prendido=true;
        } else {
            alert("Ya está prendido.");
        }
        
    }

    apagar () {
        if (this.prendido==false) {
            alert("El celu ya está apagado.");
        } else {
            alert("Celu apagado.");
            this.prendido=false;
        }
    }
 
    reboot () {
        if (this.prendido==true) {
            alert("Reiniciando.");
        
        } else {
            alert("Está apagado, no se puede reiniciar.");
        }
    }

    foto () {
        
        if(this.prendido==true) {
            alert(`Foto hecha a una resolución de ${this.resoluciónCámara}`)
        } else {
            alert("No puedes hacer una foto con el celu apagado.");
        }
        
    }

    video () {
        
        if (this.prendido==true) {
            alert(`Grabando video a una resolución de ${this.resoluciónCámara}`)
        } else {
            alert("No puedes hacer un video con el celu apagado.");
        }
        
    }

    info() {
        document.write(` Specs celu ${this.numeroCelu}: <br> <br> Color:${this.color} <br> Peso:${this.peso} <br> Resolución de la pantalla:${this.resoluciónPantalla} <br> Resolución de la cámara: ${this.resoluciónCámara} <br> Memoria RAM: ${this.RAM} <br> <br> <br> <br>` )
    }
    
}

const celu1=new celular (1, "Negro", "180 g", "1080p", "10MP", "6GB");
const celu2=new celular (2, "Blanco", "220 g", "720p", "15MP", "3GB");
const celu3=new celular (3, "Azul", "204 g", "1080p", "20MP", "8GB");

celu1.info();
celu2.info();
celu3.info();



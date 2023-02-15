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

class CeluGamaAlta extends celular {
    constructor (numeroCelu, color, peso, resoluciónPantalla, resoluciónCámara, RAM, resoluciónCámaraExtra) {
        super(numeroCelu, color, peso, resoluciónPantalla, resoluciónCámara, RAM);
        this.resoluciónCámaraExtra=resoluciónCámaraExtra;
    }

    reconocimientoFacial() {
        if (this.prendido==true) {
            alert("Iniciando reconocimiento facial.");
        } else {
            alert("No puedes hacer eso con el celu apagado.");
        }
    }

    grabarSuperLento() {
        if (this.prendido==true) {
            alert("Grabando en cámara super lenta.");
        } else {
            alert("No puedes hacer eso con el celu apagado.");
        }
    }

    infoGamaAlta() {
        document.write(` Specs celu ${this.numeroCelu}: <br> <br> Color:${this.color} <br> Peso:${this.peso} <br> Resolución de la pantalla:${this.resoluciónPantalla} <br> Resolución de la cámara: ${this.resoluciónCámara} <br>  Resolución cámara extra: ${this.resoluciónCámaraExtra} <br> Memoria RAM: ${this.RAM}  <br> <br> <br> <br>` )
    }
    
}

const CeluAltaGama1= new CeluGamaAlta (1, "Marrón", "250g", "2160p","25MP", "10GB", "25MP");
const CeluAltaGama2= new CeluGamaAlta (2, "Rosado", "230g", "2160p","20MP", "12GB", "20MP");

CeluAltaGama1.infoGamaAlta();
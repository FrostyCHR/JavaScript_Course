class App {
    constructor (nºDescargas, puntuaciíon, peso) {
        this.nºDescargas=nºDescargas;
        this.puntuaciíon=puntuaciíon;
        this.peso=peso;
        this.instalada=false;
        this.abierta=false;
    }

    instalar () {
        if (this.instalada==false) {
            alert("App instalada correctamente.");
            this.instalada=true;
        } else {
            alert("App ya instalada.")
        }
        
        
    }

    desinstalar () {
        if (this.instalada==false) {
            alert("App ya desinstalada.")
            
        } else {
            alert("App desinstalada correctamente.");
        this.instalada=false;
        }
    }

    abrir () {
        if (this.instalada==true) {
            alert("Abriendo app.");
            this.abierta=true;
        } else {
            alert("Primero debes instalar la app.");
        }
    }

    cerrar () {
        if (this.abierta==true) {
            alert("Cerrando app.");
            this.abierta=false;
        } else {
            alert("Primero debes abrir la app.");
        }
    }

    showInfo() {
        return `Descargas: ${this,this.nºDescargas} <br> Puntuación: ${this.puntuaciíon} <br> Peso: ${this.peso} <br> <br> <br>`;
    }

}

const PokemonGO = new App ("20M", "4,5/5", "1,45GB",);

document.write(PokemonGO.showInfo());
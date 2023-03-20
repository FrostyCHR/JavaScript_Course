// Simulamos que este objeto es lo que pedimos al servidor.
const notasCofla = {

    Física: {
        Semestre1: 5,
        Semestre2: 9
    },
    Matemáticas: {
        Semestre1: 6,
        Semestre2: 3
    },
    Carpintería: {
        Semestre1: 4,
        Semestre2: 5
    },
    BBDD: {
        Semestre1: 8,
        Semestre2: 8.5
    },
    Química: {
        Semestre1: 7,
        Semestre2: 6.5
    },
    Programación: {
        Semestre1: 9,
        Semestre2: 8.7
    }

};


const askInfo = (subject) => {
    
    return new Promise((resolve, reject) => {
        let data;
        setTimeout(() => {
            
            data = notasCofla; // Simulamos que obtenemos el objeto de un servidor.
            resolve([data[subject].Semestre1, data[subject].Semestre2]); 
            // Los [] son porque si no no se puede acceder a una propiedad de un objeto a través del valor de una variable
    
        }, Math.random()*500);

    });

};

const showAsync = async () => {
    
    let resFísica = await askInfo("Física");
    let resMatemáticas = await askInfo("Matemáticas");
    let resCarpintería = await askInfo("Carpintería");
    let resBBDD = await askInfo("BBDD");
    let resQuímica = await askInfo("Química");
    let resProgramación = await askInfo("Programación");

    // Mostrar resultados.

    document.getElementById("JSfísicaRow").firstElementChild.nextElementSibling.innerHTML = resFísica[0];
    document.getElementById("JSfísicaRow").firstElementChild.nextElementSibling.nextElementSibling.innerHTML = resFísica[1];

    document.getElementById("JSmatemáticasRow").firstElementChild.nextElementSibling.innerHTML = resMatemáticas[0];
    document.getElementById("JSmatemáticasRow").firstElementChild.nextElementSibling.nextElementSibling.innerHTML = resMatemáticas[1];

    document.getElementById("JScarpinteríaRow").firstElementChild.nextElementSibling.innerHTML = resCarpintería[0];
    document.getElementById("JScarpinteríaRow").firstElementChild.nextElementSibling.nextElementSibling.innerHTML = resCarpintería[1];

    document.getElementById("JSBBDDRow").firstElementChild.nextElementSibling.innerHTML = resBBDD[0];
    document.getElementById("JSBBDDRow").firstElementChild.nextElementSibling.nextElementSibling.innerHTML = resBBDD[1];

    document.getElementById("JSquímicaRow").firstElementChild.nextElementSibling.innerHTML = resQuímica[0];
    document.getElementById("JSquímicaRow").firstElementChild.nextElementSibling.nextElementSibling.innerHTML = resQuímica[1];

    document.getElementById("JSprogramaciónRow").firstElementChild.nextElementSibling.innerHTML = resProgramación[0];
    document.getElementById("JSprogramaciónRow").firstElementChild.nextElementSibling.nextElementSibling.innerHTML = resProgramación[1];

};

showAsync();
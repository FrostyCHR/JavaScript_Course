let nombre=prompt("¿Cómo te llamas?");

const asistencia = ()=> {
    let faltas=0;
    for (i=0; i<30; i++) {
        let viniste=prompt("Escribe p (presente) o a (ausente)");
        if (viniste==="a") {
            faltas++
        }
    }
    return faltas

}

const reprobado = (x)=> {
    
    document.write(`Hola, ${nombre}. Viniste ${30-x} dias, y faltaste ${x} dias, por lo tanto `)
    
    if (x>=3) {
        document.write("estás reprobado.")
    } else {
        document.write("puedes aprobar.")
    }
}

reprobado(asistencia())
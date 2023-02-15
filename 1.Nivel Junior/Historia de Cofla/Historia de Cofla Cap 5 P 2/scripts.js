/*

34 min / dia: Tareas del hogar.
4 horas / dia: Trabajar.
1 h 42 min / dia: Trabajos prácticos.
1 h 42 min / dia: Estudiar.

*/

let tareas = "Tareas del hogar: 34 minutos."
let trabajo = "Trabajar: 4 horas."
let prácticas = "Trabajos prácticos: 1 hora 42 minutos."
let estudio = "Estudiar: 1 hora 42 minutos."

for (let i=0; i<2; i++){ // Semanas
    console.group(`Semana ${i+1}`);
    for (let i=0; i<7; i++){ // Días
        console.groupCollapsed(`Día ${i+1}`);
        console.log(tareas);
        console.log(trabajo);
        console.log(prácticas);
        console.log(estudio);
        console.groupEnd();
    }
    console.groupEnd();
}
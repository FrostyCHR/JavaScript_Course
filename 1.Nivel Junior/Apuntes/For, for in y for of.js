for (let i=0; i<20; i++) {
    if (i==12) {
        //podemos poner i++
        continue
    }
    
    document.write(i + "<br>");
}


let amigos= ["pedro", "paco", "fernando", "carlos"]

for(a in amigos) {
    document.write(a + "<br>")
}

document.write("<br>" + "<br>")

for(a of amigos) {
    document.write(a + "<br>")
}

//Por lo tanto, for in es para saber la posición (de la variable, en este caso a), y for of para saber lo que hay escrito (en este caso en a).
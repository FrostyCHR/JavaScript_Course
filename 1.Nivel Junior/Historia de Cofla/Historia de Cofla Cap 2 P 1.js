const dejarPasar = ()=> {
    party=0;
    let gratis = true;
    while (party<3) {
        let edad= prompt("¿Cuantos años tienes?");
        if (edad>=18) {
            if (gratis===true) {
                document.write("Puedes entrar, ¡y encima gratis!" + "<br>");
                gratis=false
            } else {
                document.write("Puedes entrar, pero pagando."+ "<br>");
            }
        } else {
            document.write("Sorry bro, no puedes entrar."+ "<br>")
        }
        party++
    }
    

}


dejarPasar()
let CiudadesQueHeEstado= ["Barcelona", "Madrid", "París"];
let CiudadesPiola=["Londres", "Tokyo", CiudadesQueHeEstado,"New York" ];


BucleTocho:
for (ciudad of CiudadesPiola) {
    
    if (ciudad==CiudadesQueHeEstado) {
        
        BucleChico:
        for(ciudad of CiudadesQueHeEstado) {
            document.write(ciudad + "<br>");
            break BucleChico;
        }

    } else {
        document.write(ciudad + "<br>");
    }

   
}
let Dinero = prompt("¿Cuanto dinero tienes?");

if (Dinero < 0.6) {
    document.write("No te alcanza para nada pa.");
} else if (Dinero < 1 && Dinero >= 0.6) {
    document.write("Puedes comprar el Palito de helado de agua." );
    let cambio = Dinero - 0.6;
    document.write(" Te sobra " + cambio);
} else if (Dinero < 1.6 && Dinero >= 1) {
    document.write("Puedes comprar el Palito de helado de crema." );
    let cambio = Dinero - 1;
    document.write(" Te sobra " + cambio);
} else if (Dinero < 1.7 && Dinero >=1.6){
    document.write("Puedes comprar el Bombón helado heladix." );
    let cambio = Dinero - 1.6
    document.write(" Te sobra " + cambio);
} else if (Dinero >=1.7 && Dinero<1.8  ) {
    document.write("Puedes comprar el Bombón helado heladovich." );
    let cambio = Dinero - 1.7
    document.write(" Te sobra " + cambio);
} else if (Dinero >= 1.8 && Dinero < 2.9) {
    document.write("Puedes comprar el Bombón helado helardo." );
    let cambio = Dinero - 1.8
    document.write(" Te sobra " + cambio);
} else if (Dinero >= 2.9) {
    document.write("Puedes comprar el Potecito de helado con confites y el pote de 1/ KG." );
    let cambio = Dinero - 2.9
    document.write(" Te sobra " + cambio);
};


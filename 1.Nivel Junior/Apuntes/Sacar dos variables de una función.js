const comprobar= (x, y)=> {
    while (isNaN(x)===true || isNaN(y)===true) {
        alert("Escribe solo numeros.");
        x =  prompt("Escribe un numero. Si vas a potenciar, este será la base. Si vas a usar una raíz, este será el interior del radicando.");
        y =  prompt("Escribe otro numero. Si vas a potenciar, este será el exponente. Si vas a usar una raíz, pon 0.");
    }

    return [x,y];
}

let x = "hehe";
let y = 56;

let Comprobación = comprobar(x,y);

document.write("Array con ambos valores: <b>"+Comprobación+"</b> <br> <br>");
document.write("Valor 1: <b>"+Comprobación[0]+"</b> <br> <br>")
document.write("Valor 2: <b>"+Comprobación[1]+"</b> <br> <br>")
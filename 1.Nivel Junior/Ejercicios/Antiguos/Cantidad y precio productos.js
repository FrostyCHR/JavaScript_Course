var cantidadRefresco = prompt ("¿Cuantos refrescos vas a comprar?")
var cantidadCerveza = prompt ("¿Cuantas cervezas vas a comprar?")
var cantidadPatata = prompt ("¿Cuantas patatas vas a comprar?")

while (isNaN(cantidadRefresco)===true || isNaN(cantidadCerveza)===true || isNaN(cantidadPatata)===true) {
    alert("Escribe solo numeros.")
    var cantidadRefresco = prompt ("¿Cuantos refrescos vas a comprar?")
    var cantidadCerveza = prompt ("¿Cuantas cervezas vas a comprar?")
    var cantidadPatata = prompt ("¿Cuantas patatas vas a comprar?")
}

var resultado = cantidadRefresco*1 + cantidadCerveza*2.2 + cantidadPatata*5

document.write ("Te vas a gastar "+resultado+" euro(s).")

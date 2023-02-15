var prueba1 = prompt ("Escribe un numero")
var prueba2 = prompt ("Escribe otro numero")
var prueba3 = prompt ("Escribe otro numero")

var escribir_prueba_1 = 0
var escribir_prueba_2 = 0
var escribir_prueba_3 = 0

var Los_numeros_1_y_2_son_iguales_y_el_3_es_menor = 0
var Los_numeros_1_y_3_son_iguales_y_el_2_es_menor = 0
var Los_numeros_2_y_3_son_iguales_y_el_1_es_menor = 0

var Los_tres_numeros_son_iguales = 0

// se crean las variables

if (prueba1>prueba2) {
    if (prueba1>prueba3) {
        escribir_prueba_1++
    } else {
        if (prueba1<prueba3) {
            escribir_prueba_3++
        }
    }
} else {
    if (prueba2>prueba3) {
        if(prueba1===prueba2) {
            Los_numeros_1_y_2_son_iguales_y_el_3_es_menor++
        } else {
            escribir_prueba_2++
        }
        
    } else {
        if (prueba2<prueba3) {
            escribir_prueba_3++
        }
    }
}

// a partir de aquí solo si dos numeros son iguales

if (prueba1===prueba2) {
    if (prueba1>prueba3) {
        Los_numeros_1_y_2_son_iguales_y_el_3_es_menor++
    } else {
        if (prueba3>prueba1) {
            escribir_prueba_3++
        } else {
            Los_tres_numeros_son_iguales++
         
        }
    }
}


if (prueba1===prueba3) {
    if (prueba1>prueba2) {
        Los_numeros_1_y_3_son_iguales_y_el_2_es_menor++
    } else {
        if (prueba2>prueba1) {
            escribir_prueba_2++
        } else {
            Los_tres_numeros_son_iguales++
        }
    }
}

if (prueba2===prueba3) {
    if (prueba1<prueba2) {
        Los_numeros_2_y_3_son_iguales_y_el_1_es_menor++
    } else {
        if (prueba1>prueba2) {
            escribir_prueba_1++
        } else {
            Los_tres_numeros_son_iguales++
        }
    }
}

// ya se ha hecho el recuento

if (escribir_prueba_1 >= 1) {
    document.write (prueba1, " " )
}

if (escribir_prueba_2 >= 1) {
    document.write (prueba2)
}

if (escribir_prueba_3 >= 1) {
    document.write (prueba3)
}

if (Los_numeros_1_y_2_son_iguales_y_el_3_es_menor >= 1) {
    document.write ("Los numeros 1 y 2 son iguales, y el 3 es menor")
}

if (Los_numeros_1_y_3_son_iguales_y_el_2_es_menor >= 1) {
    document.write("Los numeros 1 y 3 son iguales, y el 2 es menor")
}

if (Los_tres_numeros_son_iguales >= 1) {
    document.write("Los tres numeros son iguales ") ;
}

if (Los_numeros_2_y_3_son_iguales_y_el_1_es_menor) {
    document.write ("Los numeros 2 y 3 son iguales, y el 1 es menor ")
}

// ya se han escrito los resultados
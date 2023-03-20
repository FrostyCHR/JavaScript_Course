//---------------------------------¿CUÁNDO ALGO SE VUELVE OBSOLETO?---------------------------------//
/*

¿Cuándo hay algo obsoleto?:

-Nuevas maneras de hacer lo mismo.
-Maneras más eficientes.
...


Razones por las que no hay que usar código obsoleto:

-Malgasta recursos.
-Es más propenso a tener bugs.
-Excesivamente largo en cuanto a caracteres.
-El SEO puede perjudicarnos.
-No todos los navegadores lo soportan.
-Directamente fue eliminado del lenguaje y no funciona.


¿Cómo saber si algo está obsoleto?:

-Mirar que no use métodos, propiedades, objetos, librerías o metodologías obsoletas.
-Para lo anterior hay que mirar la documentación oficial. (w3schools, developer.mozilla)


Ejemplo:

En lugar de añadir muchos elementos a un contenedor mediante appendChild(), es mejor añadirlos a un documentFragment para luego introducir el fragmento como hijo, usando el método una única vez sobre el contenedor y ahorrando muchos recursos.


Muchos elementos obsoletos son métodos que crean HTML como string y no como objeto [objeto: createElement()] o elementos que han canviado de función a método o viceversa.

*/
//STRINGS => cadenas de textos
//En JavaScript todo es un objeto

/* String — Cadena de caracteres

El objeto String se utiliza para representar y manipular una secuencia de caracteres.

Descripción

Las cadenas son útiles para almacenar datos que se pueden representar en forma de texto. Algunas de las operaciones más utilizadas en cadenas son verificar su length, para construirlas y concatenarlas usando operadores de cadena + y +=, verificando la existencia o ubicación de subcadenas con indexOf() o extraer subcadenas con el método substring(). */

//Los strings tienen propiedades y metodos

//LAs propiedades son los atributos de un objeto que te va dar informacion del objeto por ejemplo su longitud string.length().
// son caracteristicas que estan describiendo o definiendo algo del objeto

// los metodos son acciones que el objeto hace
 

//la difrencia entre propiedad y metodo es que todos los metodos terminan con ( ) y dentro de los aprentesis puede recibir ciertos parametros para poder trabajar

//Cadenas de texto = Strings
//puede usarce comillas simples o dobles
let nombre = "Sebastian";
let apellido = "Carballo"
//utilizamos la plabra reservada NEW que es un operador.
//NEW nos permite crear un objeto nuevo de un cierto tipo de dato
let saludo = new String ("Hola Mundo");

// una manera mas formal de declarar un string es con su constructor con el objeto String

console.log(nombre,apellido,saludo);
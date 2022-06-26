console.log("=======Strings=========");

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
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// una manera mas formal de declarar un string es con su constructor con el objeto String

console.log(nombre,apellido,saludo);
/* 
Sebastian Carballo 
String { "Hola Mundo" }
​
0: "H"
​
1: "o"
​
2: "l"
​
3: "a"
​
4: " "
​
5: "M"
​
6: "u"
​
7: "n"
​
8: "d"
​
9: "o"
​
length: 10
​
<prototype>: String { "" } 
 *///este es el resultado ya que usamos el constructor string

 //para saber cuantos caracteres tienen stas cadenas hacemos .length

 console.log("==Propiedad length==");
 console.log(nombre.length,apellido.length,saludo.length);//propiedad lenght

 //Metodos
//toLowerCase convierte todo a minusculas
//toUpperCase convierte todo a mayusculas
 console.log("==Metodos==");
 console.log(nombre.toLowerCase(),apellido.toUpperCase(),saludo);


 //metodo includes
 /* El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda. */

 console.log(lorem.includes("amet"));
 console.log(lorem.includes("seba"));

 //metodo .trim
 /* el método trim( ) elimina los espacios en blanco en ambos extremos del string. Los espacios en blanco en este contexto, son todos los caracteres sin contenido (espacio, tabulación, etc.) y todos los caracteres de nuevas lineas (LF,CR,etc.). */

 console.log(lorem.trim());

 //Metodo split
 /* El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas. */

 console.log(lorem.split(" "));//debemos darle un separador
 console.log(lorem.split(","));//debemos darle un separador
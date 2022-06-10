//tipos de operadores

/* operadores */
/* Aritmeticos + - * / % () */

let a = 5 + 5 - 10 * 3;
//respeta las regla de los signos
let b = 5 + (5 - 10) * 3;

let modulo = 5/2; //2.5
let modulo2= 5%2; //1
//Este oeprador aritmetico se llama modulo y lo que hace es devolvernos el reciduo de un adivision

//operadores relacionales
// >, <, >=, <=, ==, ===, !=, !== ,
/* Estos operadores nos poermiten comparar cietos valores  */

console.log(a);
console.log(b);
console.log(modulo);
console.log(modulo2);
console.log("operadores relacionales");
console.log(8 > 9);//falso esto en javascript es una condicion y la misma no se cumple
console.log(9 > 8);//la condicion se cumple
console.log(8 >= 9);//operador compuesto 
console.log(9 >= 8);
console.log(7 < 7); //false
console.log(7 <= 7);//true

/* 
= 1 igual ees asignacion
a = 5;
== 2 iguales es comparacion de valores 
=== 3 iguales es comparacion de tipo de dato y valor
 */
//La buena practica dice que utilisemos la compracion triple

console.log(7 ==7);//true
console.log("7" == 7);//true
console.log(0 == false);//true//Cuando usamos 2 iguales solo estamos comparando los valores

console.log(7 ===7);//true
console.log("7" === 7);//true
console.log(0 === false);//true//

//operadores de Incremento y Decremento

//Incremento
let i = 1;
i = i + 2;
console.log(i);
//Esto tambien se puede expresar de esat manera
i += 3;
console.log(i);

//Decremento

i -= 3;
console.log(i);

i*=3;
console.log(i);
//Tenemos dos casos especiales
//Que es cuando vamos aumentando y disminuyendo en un solo valor por cada vez y se conoce como
//Operador unario

//Operador unario
i++;
console.log(i);//ASi se recomienda usar
//primero el nombre la de la variable y luego aumentar en 1
i--;
console.log(i);

//Operadores logicos
//Principalmente tenemos 3 tipos

//  - ! - Not - (la negacion mejor conocido como Not)
//Niega, es decir lo que es verdadero lo vuelve falso y viceversa
//  ||- Or (el O mejor conocido como or)
//Cuando tengo dos o mas condiciones con que una se cumpla, es decir sea verdadera el OR  sera verdadero
//  && - && And(el and o i)
//Cuando tengo 2 o màs condiciones todas tienen que cumplirse es decir ser verdaderas, para que AND se valide

console.log(true);
console.log(!true);
console.log(false);
console.log(!false);
console.log((9 === 9) || ("9" === 9));
console.log((9 === 9) && ("9" === 9));



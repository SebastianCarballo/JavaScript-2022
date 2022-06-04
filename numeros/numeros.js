//Numeros
//En javascript simplemente tenemos numeros

let a = 2;
//tambien podriamos definirlo con su constructor
let b = new Number(1);
let c = 7.19;
let d = "5.6"

console.log(a,b);
/* El método toFixed() formatea un número usando notación de punto fijo.
tambien nos dice cuantos numeros decimales va tenr un valor numerico
*/
console.log(c.toFixed(1));
console.log(c.toFixed(5));


//parseInt()
/* Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada. */

console.log(parseInt(c));
//Este parseInt es muy importante,


/* parseFloat()

La función parseFloat() analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante. */
console.log(parseFloat(c));

//typeof
//Este metodo nos dice de que naturaleza es una varianble
console.log();
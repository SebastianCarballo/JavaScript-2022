//Booleanos 
//estos  valores tebnemos dos true & false;

let verdadero = true;
let falso = false;
//podemos crear operadores booleanos a partir de su constructores,pero no es lo optimo
let v = Boolean(true);
let f = Boolean(false);

//si queremos ver el tipo de dato que es usamos operador typeof

console.log(verdadero,falso);
console.log("====typeof===");
console.log(typeof verdadero, typeof falso);

//Existen valores que no son ni verdaderos ni falsos, pero tienden a ser valores verderos o falsos
//Estos valores se llaman truty y falsy

//Valores TRUTY
/* En JavaScript , un valor verdadero  es un valor que se considera   true/verdadero cuando es evaluado en un contexto booleano . Todos los valores son verdaderos a menos que se definan como falso (es decir, excepto  false, 0, "", null, undefined, y NaN). */
/* 
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
 */

//Valores FALSY
/* Un valor falso (a veces escrito falsey ) es un valor que se considera falso cuando se encuentra en un contexto booleano . */
/* 
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("") 
*/

/* El operador lógico AND, && */
/* 
false && "dog"
// ↪ false

0 && "dog"
// ↪ 0
 */

console.log(Boolean(0));//Tiende a => false
console.log(Boolean(-1));//Tiende a => true
console.log(Boolean(""));// tiende a => false
console.log(Boolean(" "));// Tiende a => true
console.log(Boolean(true));// Tiende a => true
console.log(Boolean(Infinity));//Tiende a => 

 
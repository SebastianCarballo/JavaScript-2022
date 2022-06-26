//VARIABLES
//Una variable en javascript es un espacio en la memoria de la pc, donde podemos almacenar datos.
//(Primitivos:string,number,boolean,null,undefined,Nan)
//(Compuestos: objetos{},arrays[],functions(),Class{},etc)

//Declaracion de variables

var hola = "Hola Mundo"
console.log(hola);


//la variables en los lenguajes de programacion tienen un ambito de existencia, lo que se conoce como los scoupe de las variables.
//javascript antes de ES6 tenia el scoupe global(el alcance de todo el documento) y un scoupe funcional.

//Ambito de bloque
//if(){
    //var a = 3;//se supone que este es   el ambito de la variable
//}
// aca directamente la variable tiene alcanze gloval,
//Esto se lo conoce como elevacion o hoisting, se concidera una mala practica
//Esto cambio con ES6
//Teniendo ambitos de bloques


//Para que esto funcione tenemos que declarar las variables con let.

let hello = "Hello World";
console.log(hello);

//tenemos que entender que si  declaramos una variable con la palabra reservada VAR , la variable va ser de ambito global, en cambio si delcaramos una variable con la palabra servada LET la variable va ser de ambito de bloque
//usar var es una mala practica

//el objeto donde se almacena el ambito global, es el objeto window
//El objeto windows es el que mapea toda la ventana del navegador para javascript

console.log(window);
console.log(window.hola);
console.log(window.hello);// da undefined por el let que solo permite que la varible sea del bloque donde fue definido

//Ambito de bloque
//Un bloque en javascript es lo que esta separado por llaves

//ejempolo de malapractica var
//el console.log nos permite imprimir en consola
console.log("============var============");
var musica = "Rock";
console.log("Variable Musica antes del Bloque = ", musica);
//Esto es un bloque
{
    var musica = "pop";
    console.log("Variable Musica dentro del Bloque = ", musica);
}
console.log("Variable Musica despues del Bloque = ", musica);//pop
//aca aparece el concepto de hoisting o elevacion

console.log("============let============");

let musica2 = "Rock";
console.log("Variable Musica antes del Bloque = ", musica2);
//Esto es un bloque
{
    let musica2 = "pop";
    console.log("Variable Musica dentro del Bloque = ", musica2);
}
console.log("Variable Musica despues del Bloque = ", musica2);//pop

//en node.js el objeto global se llama global
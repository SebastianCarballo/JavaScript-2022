/* Estructura de control */
//Es aquel mecanismo que permite controlar el flujo de tu programacion 

/* Estructuras secuenciales: son aquellas linAes que se ejecutan una despues de la otra */

/* Estructura condicionales  */
//Son aquellas que dependiendo de la evaluacion de una condicion, hacemos ciertas acciones u otras 

/* loops y estructuras repetitivas */

/* CONDICIONALES */

/* IF - ELSE */
//Es una estructura de programacion que me permite tomar una decicion
// y si esta se cumple, entonces mostrar en la pantalla o ejecutar ciertas acciones

//por ejemplo la mayoria de edad

//Entonce aca podriamos tomar una decicion
//podriamos hacer una EVALUACION 

let edad = 17;

if(edad > 17){
    console.log("Sos mayor de edad");
}else{
    console.log("Sos menor de edad");//Este va ser el mensaje, por que 17  no es mayor a 17
}
//Aca tenemos dos formas de solucionarelo

if(edad >= 17){
    console.log("Sos mayor de edad");//Este va ser el mensaje, por un error de logica
}else{
    console.log("Sos menor de edad");
}

if(edad >= 18){
    console.log("Sos mayor de edad");
}else{
    console.log("Sos menor de edad");//Este vas er el mensaje, ya que la edad es 17
}

//Tambien se podria solucionar cambiando la logica, cambiando los valores

if(edad < 18){
    console.log("Sos menor de edad");//Este vas er el mensaje, ya que la edad es 17
}else{
    console.log("Sos mayor de edad");
}

if(edad <= 17){//operador compuesto <=
    console.log("Sos menor de edad");//Este vas er el mensaje, ya que la edad es 17
}else{
    console.log("Sos mayor de edad");
}


//ejmplo de practica

/* ¿Que pasaria si tuvieramos un 3er caso? */

/* if-else-if-else */

/* 
DejameDormir 0hrs - 5hrs
BuenosDias 6hrs - 11hrs
BuenasTardes 12hrs - 18hrs
BuenasNoches 19hrs - 23hrs
*/

let hora = 20;

if(hora >= 0 && hora <= 5){
    console.log("Dejame dormir");
}else if( hora >= 6 && hora <= 11){//anidamos if else
    console.log("Buenos dias");
}else if(hora >= 12 && hora <= 18){
    console.log("Buenas tardes");
}else{
    console.log("Buenas noches");
}

if(hora > 0 && hora < 6){
    console.log("Dejame dormir");
}else if( hora > 5 && hora < 12){//anidamos if else
    console.log("Buenos dias");
}else if(hora > 11 && hora < 19){
    console.log("Buenas tardes");
}else{
    console.log("Buenas noches");
}


//Simplificacion de un if-else
//Operador Ternario
//Como su operador lo dice tiene tres partes

/* Operador Ternario
Cuenta con una (condicion), que si esa condicion se cumple a verdadero sigue un signo de ? y la linea de codigo a ejutar si la condicion se cumple a verdadero: y luego la linea que quieras que se ejecute si la condion es falsa 

Operador Ternario(condicion) ? verdadero: falsa

En un operador ternario solo puedes ejucutar una linea de codigo

*/

console.log("Operador Ternario");

let eresMayor = (edad >= 18)? "Eres mayor de edad":"Eres menor de edad";
console.log(eresMayor);


//Estructura de control switch
//swith-case
//Nos va servir cuando nosotros tengamos que evaluar diferentes situaciones o valores para una  misma variable

/* 
domingo-0
lunes-1
martes-2
miercoles-3
jueves-4
viernes-5
sabado-6
domingo-7
*/

let dia =2;

switch (dia) {
    case 0://Casos = case   value = valor
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;

    default:
        console.log("El dia no existe");
        break;
}
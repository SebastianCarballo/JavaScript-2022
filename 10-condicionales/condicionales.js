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

//Funciones
//¿Que son las funciones?
//Una funciones es simplemente un bloque de codigo autocontenido, es decir que tiene su propoio contenido, intependienta a el scopue o al ambito global.
//Se definen 1 sola  vez y se pueden ejecutar en cualquier momento, es decir, es un pequeño fracmento que nosotros vamola declsarar una vez y reutilizar tantas veces como sea necesario
//Una funcion puede o no recibir parametros, los parametros son los datos que rtecibe una funcion separados por comas.
//una funcion tambien puede devolver avlores dependiendo cual sea el caso.
//las funciones en javascript son un tipo de dato muy especial, tambien se consideran objetos.
//Las funciones son muy poderosas en javascript por que las podemnos asignar como valor, podemos retornar la ejecucion de una funcion adicional 
//desde ES6 tenemos muchas caracteristicas interesantes por ejemplo las funciones flechas o arrow functions

//Tenemos dos tipos de funciones 
//Las funciones declaradas y
//Las funciones expresadas

//Funcion Declarada
//para declarar una funcion declarada utilizamos la palanbra reservada funtion nombre de la funcion () y {} y dentro de las llaves va el cuerpo de la funcion 

function estoEsUnaFunction(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
    
}
//Esat funcion ya esta declarada esperando ser llamada, ser invocada, entonces la mandamos a llamar




//Invocacion de funcion
/* estoEsUnaFunction();
estoEsUnaFunction();
estoEsUnaFunction();
estoEsUnaFunction(); */
//un parentesis en unja funcion significa que se va ejecutar
function unaFuncionQueDevuelveValor(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
    return "La funcion ha retornado una Cadena de texto"
}

let valorDeFuncion = 
unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);
//Cuando una funcion devuelve valor devemos utilizar una palabra reservada que se llama "return",
//una funcion puede devolver cualquier tipo de datos, ya sea primitivo o compuesto

// == importante
/* Cuando una funcion dentro del cuerpo de la misma funcion tiene la palabra "return" en ese momento ignora todas las lineas de codigo  que sobran y retorna solo ese valor como valor de la funcion,
todo lo que esta antes del return se ejecuta y todo lo que esat despues se ignora
con el return se detiene la ejecucion de la funcion */

//Una funcion recibe valores
//parametros

function saludar(nombre = "Desconocido",edad = 0){//Estos son los parametros de una funcion
console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("Benjamin",5);
saludar();

//Funciones declaradas vs funciones Expresadas

funcionDeclarada();//Esto es hoisting
//Esto sucede con funciones declaradas

function funcionDeclarada(){
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada.");
}

funcionDeclarada();

//existe  otra manera de declara las funciones y es utilizar las funciones como expresiones, es decir crear una funcion y asignarsela dinamicamente a una variable.


//Usamos const por que le valor de esta contante no va cambiar
//Cuando creamos funciones expresadas lo mas recomedable es usar const y no let 

//Funcion anonima
//una funcion que no tiene nombre
const funcionExpresada = function (){
    console.log("Esto es una funcion expresada, es decir una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion  JS nos dira 'cant access lexical declaration funcionExpresada before initialization'.");
} 
//Aca ya no es necesario poner el nombre de la funcion por que ya el nombre es el que le dimos a la variable 
funcionExpresada();

//Ser ordenados en el codigo
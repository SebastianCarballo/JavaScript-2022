//array - arreglo
/* Array

El objeto Array de JavaScript es un objeto global que es usado en la construcción de arrays, que son objetos tipo lista de alto nivel.
Descripción
Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. Dado que la longitud de un array puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los arrays de JavaScript sean densos; esto depende de cómo el programador elija usarlos. En general estas características son cómodas, pero si, en su caso particular, no resultan deseables, puede considerar el uso de arrays con tipo.

 */

//tenemos difrentes manera de declarar arrays
//Un arreglo no es mas que una coleccion de elementos, que pueden ser de diferente tipo
const a = [];
const b = [1,true,"Hola",["A","B","C",[1,2,3]]];
console.log(a);
console.log(b);
console.log(b[2]);
console.log(b[0]);
console.log(b[3][2]);
console.log(b[3][3][0]);


//Otra forma de crear arreglos

const c = Array.of("X","Y","Z",9,8,7);
console.log(c);

//OTRA FOrma por ejemplo en tu ecommers tienes 1000 productos
//Metodos contructor de arrays
const d = Array(100).fill(false);
console.log(d);

//IMportante los arreglo van a empezar en la pocision numero 0

//Practicas que ya no se usan

const e = new Array();
console.log(e);

const f = new Array(1,2,3,true,false);
console.log(f);

//Los array tienen propñiedades y metodos
//propiedades .length()

const colores = ["Rojo","Verde","azul"];
console.log(colores);
//para agregar un nuevo elemento tenemos el metodo push
//push siempre lo va poner al final
colores.push("Negro");
console.log(colores);

//MEtodo .Pop()
//Quita el ultimo elemento del array
colores.pop()
console.log(colores);

///los arreglos tienen una gran cantidad de metodos

//metodo for Each
//Este metodo nos permite ejecutar una funcion por cada uno de los elementos que tenga el arreglo

colores.forEach(function (el, index){
    console.log(`<li id="${index}>${el}</li>`);
});

//con el metodo forEach podemos recorrer el valor con el primer parametro que generalmente se le ponenelement o el y el segundo parametro es el indice que ocupa cada elemento dentro del array
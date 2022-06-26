console.log("=============== Variable const ===================");

//CONSTANTE => cosnt

//const nos va permitir crear variables

const PI = 3.1416;
// PI = 3.16 // no se puede asignar otto valor a las contantes
console.log(PI);

//¿CUando usaremos const?
//Vamos usar const cuando sepamos que el valor de nuestra variable no va cambiar, va ser constante en la ejecucion del programa

// otra caracteristica es que no podemos tener contantes vacias
// const NOMBRE;
//con let y con var si se puede
let casa;
casa = "mi-casa"
var auto;

//Const como su nombre lo dice es un valor constante

//En las contantes no podemso redefinir un valor a una variable ya que son valores primitivos , pero si se puede en los valores compuestos

//Un objeto es una coleccion de atributos y valores

const objeto = {
    nombre: "Sebastian",
    edad: 27,
}

//Un arreglo es una coleccion de datos

const colores = ["blanco","negro","azul"]

//Vemos objetos y array para entender que una variable no funciona de la misma forma para objetos primitivos como para objetos compuestos

console.log(objeto,colores);
console.log(objeto);
console.log(colores);

//para crear una nueva propiedad al objeto accedemos con el punto

objeto.correo = "sebastiancarballo.sc.sc@gmail.com";
//para agrgar un color usamos .push
colores.push("naranja");
console.log(objeto);
console.log(colores);

//una contante no va cmbair pero depoende el tipo de dato primitivos o compuestos
// en los valores compuestos no accedemos a los valores como tal, si no  a una referencia de ese valor 
// const nos permite agregar mas propiedades al objeto por que para javascript el valor del objeto no a cambiado sigue siendo un objeto

// demos saber que si declaramos valores primitivos con const estos valores no se van a poder modificar.
//pero si lo vamosa  poder hacer con los valores compuestos

//los objetos y los arreglos son como los seres humanos estan en constante cambio
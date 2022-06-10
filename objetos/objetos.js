//Objetos
//Son una parte muy importante de javascript 
//por eso la frace en javascript todo es un objeto

//ESta manera ya no se usa
//Estamos utilizando el metodo constructor
let a = new String();
console.log(a);

//podemos usar contantes para definir objetos

const b = {

}
console.log(b);

//Podemos crear obejetos basandonos en el prototipo objet
//pero ya no se usa

const c = new Object();

//Un objeto es una coleccion de llaves valores

const seba = {
    nombre: "Sebastian",
    apellido: "Carballo",
    edad: 27,
    pasatiempos:["Correr","Escuchar musica","Investigar"],
    soltero: true,
    contacto:{
        email: "Tanot@gmail.com",
        telefono: 54678893,  
    },
    saludar: function (){
        console.log("Hola")
    },
    decirMiNombre:function(){//cuando queramos usar una propiedad dentro del objeto podemos usar la palabra this
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes llamar al ${this.contacto.telefono}`);//this=este
    }
}
//la palabra this va ser referenica al objeto en que se encuentra, hace referenica al mismo objeto
console.log(seba);

//Un objeto puede tener diferentes propiedades y valores

//Podemos hacer que un objeto tenga como valor de una llave cualquier tipo de dato incluso una funcion 

//Como accedemos a estos valores?
//REcuerden que cuando hablamos de tipode de datos compuestos no ACCEdemos directamente a su valor si no directamente a una referencia
//Mientras que en los arreglos jugavamos con la notacion de los corchetes,fijense que en los objetos tambien  podemos jugar con la notacion de los corchetes, poero es mas usada la notacion del punto

console.log(seba["nombre"]);//Esata notacion no es muy utilizada
console.log(seba["apellido"]);

//La forma mejor aceptada es accediendo atravez de la notacion del punto
//Cuanto ponemos un punto estamos diciendo que se obejto bvariable queremos acceder a ciertas propiedades o metodos que tiene 
console.log("Notacion del punto");
console.log(seba.apellido);
console.log(seba.nombre);
console.log(seba.edad);
console.log(seba.pasatiempos);
console.log(seba.pasatiempos[1]);
console.log(seba.contacto);
console.log(seba.contacto.telefono);
seba.saludar();
seba.decirMiNombre();
//los atributos no son mas que variable que tiene dentro un objeto
/* dentro de un objeto a las variables se le van a llamar atributos/propiedades*/
/* y a las funciones se leas llama metodos   */

//Un objeto es una coleccion de pares llaves y valores

console.log(Object.keys(seba));
console.log(Object.values(seba));
console.log(seba.hasOwnProperty("nombre"));
console.log(seba.hasOwnProperty("nacimiento"));
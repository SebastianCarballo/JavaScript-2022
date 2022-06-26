console.log("==Template String==");

//Template Strings
//Plantillas literales (plantillas de cadenas)

//veremos dos caracteristicas de las cadenas de texto
//Concatenacion
//Interpolacion
//Concatenacion

//Utilizamnos el simbolo de la suma para concatenar


let miNombre = "Sebastian";
let miApellido = "Carballo";
let miSaludo = "Hola mi nombre es " + miNombre + " " + miApellido

console.log(miSaludo);
//Este paso es demaciado largo, es cansador 

//Interpolacion de variables
// iterpolar significa meter dentro de una cadena de texto el valor dinamicamente de una variable
// para hacer interpolacion debemos usar comillas invertidas llamadas bastiks
console.log("==Concatenacion de strings==");
console.log();
let saludo3 = `Hola mi nombre es ${miNombre} ${miApellido}`
console.log(saludo3);

//podemos usar concatenacion para generare codido dinamicamente con html

/* let ul = "<ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>Invierno</li>
</ul>
"  *///Esto da errores

let ul = "<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>"  
console.log(ul);

let ul2 = `
<ul>
    <li>Primavera<li>
    <li>Verano</li>
    <li>Otoño<li>
    <li>Invierno</li>
</ul>
`
console.log(ul2);


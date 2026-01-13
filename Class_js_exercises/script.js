// let name=prompt("Ingrese su nombre: ")
// let age=prompt("Ingrese su edad: ")
// let city= prompt("Ingrese su ciudad: ")

// alert(`Su nombre es ${name}, Su edad es ${age} y su ciudad es ${city}`)

// let dato = prompt("Ingrese un numero: ")

// if (dato>30){
//     console.log("El dato es mayor de 30 ")
// } else{
//     console.log("El dato es menor de 30")
// }

// const fechaActual= new Date()

// let date=parseInt(prompt("Ingrese su año de nacimiento: "))
// const year= fechaActual.getFullYear()

// let resta = year - date
// alert(`Tu edad es: ${resta} `)

// let num=10
// if(num< 8){
//     console.log("es menor que 8")
// } else if(num<20){
//     console.log("es menor que 20")
// } else{
//     console.log("es mayor que 20")
// }

//condicional and
// let num =5;
// if (num >=8 && num <20){
//     console.log("el numero esta entre 8 y 20")
// }

//condicional or
// let num = 5;
// if (num >= 8 || num < 20) {
//     console.log("el numero esta entre 8 y 20");
// }

//otra forma de usar condicionales
//

//funciones
// let result
// const sumar =(num1,num2) =>{
//     console.log("esto sirve para sumar")
//     return num1+num2
// }

// result= sumar(2,4)
// console.log(result)


//switch para validaciones
//se utiliza cuando tengo que usar varios elif

// let stateUser = "active"
// let msn;
// switch (stateUser){
//     case "active":
//         msn="el usuario puede ingresar"
//         break
//     case "noActive":
//         msn="el usuario no puede ingresar"
//         break
//     case "deleted":
//         msn="el usuario se retiro"
//         break
//     default:
//         msn="el usuario no tiene estado"
//         break
// }

//ejercicio de clase
// //crea un formulario con 5 campos numéricos (una nota por cada uno) y un botón “Calcular Promedio”. Al hacer clic:
// Una función debe tomar los valores, sumarlos en un for.
// Calcular el promedio y mostrarlo en el DOM.
// Usar una condicional para mostrar si el estudiante aprobó (promedio ≥ 3.0) o reprobó.
// usar validación de solo numeros en los campos de las notas.


//opcion donde ya se ingresa el promedio de notas
// function pedirNota(mensaje){
//     let nota
//     do {
//         nota=parseFloat(prompt(mensaje))
//     }while(isNaN(nota))
//         return nota
// }

// let notaUsuario1= pedirNota("Ingrese el promedio de nota del estudiante 1 (entre 0 y 5): ")
// let notaUsuario2 = pedirNota("Ingrese el promedio de nota del estudiante 2 (entre 0 y 5): ")
// let notaUsuario3 = pedirNota("Ingrese el promedio de nota del estudiante 3 (entre 0 y 5): ")
// let notaUsuario4 = pedirNota("Ingrese el promedio de nota del estudiante 4 (entre 0 y 5): ")
// let notaUsuario5 = pedirNota("Ingrese el promedio de nota del estudiante 5 (entre 0 y 5): ")

// if(notaUsuario1 >= 3 ){
//     console.log(notaUsuario1)
//     console.log("El usuario 1 aprobo")
// }else{
//     console.log("El usuario 1 reprobo")
// }

// if (notaUsuario2 >= 3) {
//     console.log(notaUsuario2);
//     console.log("El usuario 2 aprobo");
// }else{
//     console.log("El usuario 2 reprobo")
// }

// if (notaUsuario3 >= 3) {
//     console.log(notaUsuario3);
//     console.log("El usuario 3 aprobo");
// } else {
//     console.log("El usuario 3 reprobo");
// }

// if (notaUsuario4 >= 3) {
//     console.log(notaUsuario4);
//     console.log("El usuario 4 aprobo");
// } else {
//     console.log("El usuario 4 reprobo");
// }

// if (notaUsuario5 >= 3) {
//     console.log(notaUsuario5);
//     console.log("El usuario 5 aprobo");
// } else {
//     console.log("El usuario 5 reprobo");
// }

//opcion donde se piden las notas al usuario, agregandolas a una lista

//notas = []

//CICLO FOR

// for (let i = 0; i<10; i++){
//     console.log(i);

// }

 //const fruits =["manzana","pera","banano","mora","lulo"]
// console.log(fruits.length) // permite saber la cantidad de elementos del array
// for (let i =0; i< fruits.length; i++){
//     console.log(`la fruta es ${fruits[i]}`)
// }
// otra forma utilizando la misma lista evitando que imprima la mora
// for(let fruit of fruits){
//     if (fruit != "mora"){
//     console.log(`me gusta la ${fruit}`);
//     }

// }

//CICLO WHILE
// let contador=0
// while(contador<5){
//     console.log(contador);
//     contador++;
// }
//const fruits =["manzana","pera","banano","mora","lulo"]
//console.log(fruits[4]); permite acceder a la posicion 4"mora"
//.push permite agregar como .append en python
//fruits.push("granadilla")//agrega la granadilla al final del array
//.pop elimina el ultimo elemento del array
//fruits.pop()//elimina la fruta granadilla
//.unshift agrega un elemento al inicio del array
//.shift elimina el primer elemento del array
//.indexOf("nombre del elemento") permite saber en que posicion se encuentra el valor escrito
//.includes("nombre del elemento") verifica si existe el elemento en el array

//Metodos de iteración
// forEach() - ejecutar función para cada elemento
let numeros = [1, 2, 3, 4, 5];
// numeros.forEach(function(numero) {      //crea un iterador llamado numero que recorrera cada elemento del array
//     console.log(numero * 2);  //multiplica cada elemento de la lista *2
// });

// // map() - crear nuevo array transformado
//let duplicados = numeros.map(num => num * 2); //permite crear un nuevo array en este caso duplicando sus elementos 
//console.log(duplicados); // [2, 4, 6, 8, 10]

// // filter() - filtrar elementos
// let mayoresQue2 = numeros.filter(num => num > 2); //filtra los elementos del array para buscar los mayores de 2
// console.log(mayoresQue2); // [3, 4, 5]

// // find() - encontrar el primer elemento que cumple condición
// let encontrado = numeros.find(num => num > 3); //busca en el array el primer numero mayor que 3 
// console.log(encontrado); // 4

// // reduce() - reducir a un solo valor
// let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
// console.log(suma); // 15
//ejemplo
// let suma =numeros.reduce((a,b)=>a+b)
// console.log(suma);


// // some() - verifica si al menos uno cumple
// let hayMayoresQue4 = numeros.some(num => num > 4);
// console.log(hayMayoresQue4); // true

// // every() - verifica si todos cumplen
// let todosMayoresQue0 = numeros.every(num => num > 0);
// console.log(todosMayoresQue0); // true

// //Métodos de Modificación

let letras = ['a', 'b', 'c', 'd', 'e'];

// // slice() - extraer porción (no modifica original)
//let porcion = letras.slice(1, 4); //extrae los elementos entre la posicion 1 y 4 
//console.log(porcion); // ['b', 'c', 'd']
// console.log(letras); // ['a', 'b', 'c', 'd', 'e']

// // splice() - eliminar/agregar elementos (modifica original)
// letras.splice(2, 1, 'x', 'y'); // desde índice 2, eliminar 1, agregar 'x' y 'y' // desde la posicion "x" quiero que elimines "x" numero de elementos del array y agregues lo que te copie
//console.log(letras); // ['a', 'b', 'x', 'y', 'd', 'e']

// // concat() - unir arrays
// let array1 = [1, 2];
// let array2 = [3, 4];
// let unidos = array1.concat(array2);
// console.log(unidos); // [1, 2, 3, 4]

// // join() - convertir a string
// let palabras = ["Hola", "mundo", "JS"];
// let frase = palabras.join(" ");
// console.log(frase); // "Hola mundo JS"

// // reverse() - invertir array
// let nums = [1, 2, 3];
// nums.reverse();
// console.log(nums); // [3, 2, 1]

// // sort() - ordenar
//let desordenado = [3, 1, 4, 1, 5];
//desordenado.sort(); //solo funciona si los numeros solo tienen un decimal, pues solo tiene en cuenta el orden para el primer decimal del numero 
//console.log(desordenado); // [1, 1, 3, 4, 5]


// // sort con función comparadora (para números)
// let numeros2 = [10, 5, 40, 25, 1000, 1];
// numeros2.sort((a, b) => a - b);  //esto permite que tome encuenta todos los decimales del numero
// console.log(numeros2); // [1, 5, 10, 25, 40, 1000]

//Arrays Multidimensionales

// Array de arrays (matriz)
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][0]); // 1
console.log(matriz[1][2]); // 6
console.log(matriz[2][1]); // 8

// Recorrer matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}
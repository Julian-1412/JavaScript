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
//let numeros = [1, 2, 3, 4, 5];
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

//let letras = ['a', 'b', 'c', 'd', 'e'];

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
// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matriz[0][0]); // 1
// console.log(matriz[1][2]); // 6
// console.log(matriz[2][1]); // 8

// // Recorrer matriz
// for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//         console.log(matriz[i][j]);
//     }
// }

// .map  retorna un nuevo Array modificado

// const numbers = [1,2,3,4,5]
// const doubles = numbers.map((num)=>num*8)
// console.log(doubles);

// //.for each

// numbers.forEach((number)=> {
//     console.log(`El doble es ${number*2}`)
// })

// const coders=[
//     {name: 'Edwin', cohort:1},
//     {name: 'Milton', cohort:2},
//     {name: 'Javier', cohort:3}
// ];
// coders.forEach((coder)=>{
//     const message = `Hola ${coder.name} pertenece a ${coder.cohort}`
//     console.log(message);

// })

//for...of

//Teoría
//for...of recorre los valores de estructuras iterables como arrays, strings, sets y maps.

// Ejemplo
// const developers = ['Antony', 'Kevin', 'Robin'];

// for (const dev of developers) {
//   console.log(dev);
// }

//for in para acceder a un diccionario
//for...in
//Teoría
//for...in recorre las claves de un objeto. No se recomienda usarlo con arrays.

//Ejemplo
// const teamLeader = {
//   name: 'Antony',
//   language: 'JavaScript'
// };

// for (const key in teamLeader) {
//   console.log(`${key}: ${teamLeader[key]}`);
// }

// const user ={
//     name: "Kevin",
//     lastName: "Restrepo",
//     age: 19,
//     email: "kevin@correo.com",
//     address:{
//         street: "avenida siempre viva",
//         number: 123,
//         city: "Medellin"
//     }
// }
// console.log(Object.keys(user))
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const arrayKeys = Object.values(user)
// console.log(arrayKeys[2])  // imprimira: 19

//console.table() permite imprimir un array u objeto en forma de tabla

//Metodos comunes para strings:

// toUpperCase(): Convierte el texto a mayúsculas
// const name2= "David Henao"
// const upperCase = name2.toUpperCase()
// console.log(upperCase);
// toLowerCase(): Convierte el texto a minúsculas
// const name3 = "David Henao";
// const upperCase2 = name3.toLowerCase()
// console.log(upperCase2);

// trim(): Elimina espacios en blanco al inicio y al final
// const name2 = " David Henao ";
// const trim =  name2.trim()
// console.log(trim);

// split(): Divide el string en un array según un separador
//const name3 = "David Henao";
// slice(): Extrae una parte del string
//const name3 = "David Henao";
// substring(): Similar a slice, extrae caracteres entre dos índices
//const name3 = "David Henao";
// replace(): Reemplaza la primera coincidencia de un texto
//const name3 = "David Henao";
// replaceAll(): Reemplaza todas las coincidencias de un texto
//const name3 = "David Henao";
// includes(): Verifica si contiene un texto específico
//const name3 = "David Henao";
// startsWith(): Verifica si comienza con un texto específico
//const name3 = "David Henao";
// endsWith(): Verifica si termina con un texto específico
// indexOf(): Devuelve la posición de la primera coincidencia
// charAt(): Devuelve el carácter en una posición específica
// repeat(): Repite el string n veces
// padStart(): Rellena el inicio hasta alcanzar una longitud
// padEnd(): Rellena el final hasta alcanzar una longitud

//ejercicio de clase imprimir por separado y en español la fecha del dia

// console.log(new Date)  // imprime la fecha actual
// const currentDate = new Date
// const year= currentDate.getFullYear()
// const time = currentDate.toLocaleTimeString()
// const day= currentDate.getDate()
// const month=currentDate.getMonth()
// const weekDays={
//     1: "Lunes",
//     2: "Martes",
//     3: "Miercoles",
//     4: "Jueves",
//     5: "Viernes",
//     6: "Sabado",
//     0: "Domingo"
// }
// const months = {
//     0: "Enero",
//     1: "Febrero",
//     2: "Marzo",
//     3: "Abril",
//     4: "Mayo",
//     5: "Junio",
//     6: "Julio",
//     7: "Agosto",
//     8: "Septiembre",
//     9: "Octubre",
//     10: "Noviembre",
//     11: "Diciembre",
// };
// const dayOfWeek= new Date().getDay()
// const currentDay= weekDays[dayOfWeek]
// const convertMonth= new Date().getMonth()
// const currentMonth= months[convertMonth]

// console.log(`La fecha de hoy es ${currentDay}  ${day} de  ${currentMonth} de ${year} y la hora es ${time}`);

// //funcion para manipular el dom
// const button = document.getElementById("buttonTime");
// button.addEventListener('click',function(){
// const currentDate = new Date
// const year= currentDate.getFullYear()
// const time = currentDate.toLocaleTimeString()
// const day= currentDate.getDate()
// const month=currentDate.getMonth()
// const weekDays={
//     1: "Lunes",
//     2: "Martes",
//     3: "Miercoles",
//     4: "Jueves",
//     5: "Viernes",
//     6: "Sabado",
//     0: "Domingo"
// }
// const months = {
//     0: "Enero",
//     1: "Febrero",
//     2: "Marzo",
//     3: "Abril",
//     4: "Mayo",
//     5: "Junio",
//     6: "Julio",
//     7: "Agosto",
//     8: "Septiembre",
//     9: "Octubre",
//     10: "Noviembre",
//     11: "Diciembre",
// };
// const dayOfWeek= new Date().getDay()
// const currentDay= weekDays[dayOfWeek]
// const convertMonth= new Date().getMonth()
// const currentMonth= months[convertMonth]

// const message =(`La fecha de hoy es ${currentDay}  ${day} de  ${currentMonth} de ${year} y la hora es ${time}`);
// const info = document.getElementById("new_info")
// info.textContent=message;
// })

// //importando funciones de otro documento
// import { saludar, upperCase } from "./utils.js"
// saludar()

// //otra forma de importar
// let name = "julian";
// console.log(upperCase(name));

//importando api del clima
import { getWeather } from "./services/weather.js";

const getResult = async () => {
  const result = await getWeather(city);
  console.log(result);
};
let city = "";

const cityNameInput = document.getElementById("cityName");
const button = document.getElementById("button");

cityNameInput.addEventListener("input", (e) => {
  city = e.target.value;
});

button.addEventListener("click", () => {
  console.log("Se hizo click");
  getResult();
});

//funcion dentro de otra funcion (closure)
// function crearMultiplicador(mul){ //mul toma el valor de 8 o 2  en linea 507 y 508
//     return function(num){ //num toma el valor de 100 o 20 en lienas 510 y 511
//         return mul*num
//     }
// }

// const multiplicadorPor8=crearMultiplicador(8)
// const multiplicadorPor2=crearMultiplicador(2)

// console.log(multiplicadorPor8(100));
// console.log(multiplicadorPor2(20));

//callback funcion que se pasa como argumento a otra funcion
// function saludarOtrafuncion(name,callback){
//     console.log(`Hola ${name}`);

//     callback(2,4)
// }

// saludarOtrafuncion("Julian", function(a,b){
//     console.log(a+b);

// })

// const numbers=[1,2,3,9,8,7,0];

// numbers.forEach((number)=>{
//     console.log(number*100);

// })

//This en funciones

// const objeto={
//     name: "Hugo",
//     lastname: "Mbappe",
//     isActive:true,
//     saludar:function(){
//         console.log(`Hello ${this.name}`); //opcion con this
//         return "desde js"
//     }

// }
// console.log(objeto.lastname)
// console.log(objeto.saludar());

//crear una promesa

// let promesa = new Promise((resolve, reject) => {
//     let falla = true;

//     if (falla) {
//     // Solo debes llamar a la función reject y pasarle el motivo
//     reject("Error: la operación falló");
//     } else {
//         setTimeout(() => {
//         resolve([
//             { name: "esteban", lastname: "perez" },
//             { name: "esteban", lastname: "perez" },
//             { name: "esteban", lastname: "perez" },
//         ]);
//         }, 3000);
//     }
// });

// promesa
// .then((resp) => {
//     console.log(resp);
// })
// .catch((err) => {
//     // Ahora el catch recibe el mensaje del reject
//     console.error(err);
// });
//Manipulacion del DOM
//innerHTML permite insertar html que no existe aun

// const container = document.getElementById("list")
// button.addEventListener("click", ()=>{
//     container.innerHTML = "<ul> <li>pera</li> <li>manzana</li> <li>banano</li></ul>";
// })
// //outerHTMl reemplaza un elemento completo

// const btn2 = document.getElementById("btn2");

// btn2.addEventListener("click", () => {
//   btn2.outerHTML = "se borro la lista";
// });

//aplicacion de estilos desde js opcion 1
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
btn2.style.backgroundColor = "blue";
btn2.style.color = "white";
btn2.style.borderRadius="15px"
btn2.style.fontSize= "30px";
btn2.style.cursor="pointer"
});

//1. Métodos estándar para Atributos
// Estos métodos funcionan con cualquier atributo que veas en una etiqueta HTML (como id, src, href, type, data-*, etc.).

// getAttribute('nombre'): Obtiene el valor del atributo.

// setAttribute('nombre', 'valor'): Crea o actualiza el atributo.

// hasAttribute('nombre'): Devuelve true si el atributo existe.

// removeAttribute('nombre'): Elimina el atributo por completo.
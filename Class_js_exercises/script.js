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
    
const fruits =["manzana","pera","banano","mora","lulo"]
//console.log(fruits[4]); permite acceder a la posicion 4"mora"
//.push permite agregar como .append en python
fruits.push("granadilla")//agrega la granadilla al final del array
//.pop elimina el ultimo elemento del array
fruits.pop()//elimina la fruta granadilla
//.unshift agrega un elemento al inicio del array
//.shift elimina el primer elemento del array
//.indexOf("nombre del elemento") permite saber en que posicion se encuentra el valor escrito
//.includes("nombre del elemento") verifica si existe el elemento en el array


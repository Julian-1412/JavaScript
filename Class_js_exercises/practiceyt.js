// for(let num=1; num <11; num++ ){ //itera de uno a 10 
//     console.log(num);
    
//}
// for(let num=10; num>=0; num--){ //itera desde 10 hasta cero 
//     if(num===0){
//         console.log("Despegando...");
        
//     }else{
//         console.log(`Faltan ${num} segundos para despegar`);
        
//     }
// }  
// Reto: El FizzBuzz simplificado Escribe un bucle que cuente del 1 al 15 y:

// Si el número es par, imprime: "El número [X] es par".

// Si el número es impar, imprime: "El número [X] es impar".
// for(let num=1; num <=15; num++){
//     if(num%2===0){
//         console.log(`El numero: ${num}, es un numero par `);
        
//     }else{
//         console.log(`El numero: ${num}, es un numero impar`);
        
//     }
// }
//crea una funcion que sume dos parametros

// function sumar(a,b){
//     let result= a+b
//     console.log(result);
//     return result;
// }

// sumar(1000,2)

//Nuevo Reto:Crea una función llamada sumarPares que reciba un número (llamémoslo limite). La función debe sumar todos los números pares que existan desde el 1 hasta ese limite y devolver el resultado total.Ejemplo: Si llamo a sumarPares(6), debería sumar 2 + 4 + 6 y devolver 12


// function sumarPares(limite){
//     let sumaTotal=0
//     for(let num=1 ; num<=limite; num++){
//         if(num%2===0){
//             sumaTotal=sumaTotal+num
            
//         }
//     }
//     console.log(`La suma de los numeros pares del numero ingresado ${limite}, es igual a ${sumaTotal}`); 
//     return sumaTotal   
// }

// sumarPares(6)

//continue & break para imprimir solo numeros impares parando en maximo 20

for(let num= 1; num<40; num++){
    const numPar= num%2===0
    if(numPar){
        continue
    }
console.log(`El numero ${num}, es impar.`);
    if(num===19){
        break
    }
    }

//ciclo for dentro de  otro ciclo for(anidados) para multiplicar por 10
for(let num1=1;num1<=10;num1++){
    for(let num2=1; num2<=10; num2++){
        operacion=num1*num2
        console.log(`Esta tabla de multiplicar arroja el siguiente resultado: ${num1} * ${num2} es igual a: ${operacion}`);
        
    }
}
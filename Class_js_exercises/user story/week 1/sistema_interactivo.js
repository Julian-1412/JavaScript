let name= prompt("Ingresa tu nombre: ")
let age= parseInt(prompt("Ingresa tu edad: "))
if (isNaN(age) || age<0){
    console.error("Error. Por favor ingresa una edad valida en numeros")
}else if (age<18){
    console.log(`"Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!"`);
    
}else{
    console.log(`Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!"`)
}


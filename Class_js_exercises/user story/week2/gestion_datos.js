//Task 1
const objects = { //object creation

p1: {id: 1, nombre : "cuaderno", precio: 12000},
p2: {id: 2, nombre: "libro", precio : 18000 },
p3: {id: 3, nombre: "cartuchera", precio: 7500},
p4: {id: "cuatro", nombre: "", precio: 7500}

}

//Task 2
/*Uso de Set en JavaScript:
Crea un Set con una lista de números que incluya valores repetidos.
Imprime en consola el contenido del Set para mostrar cómo elimina los duplicados automáticamente.
Agrega un nuevo número al Set utilizando el método .add().
Verifica si un número específico existe dentro del Set con .has().
Elimina un número del Set con .delete().
Recorre el Set utilizando un for…of para mostrar cada valor.*/
let setList = new Set ([ 1,2,5,7,10,5,4,6,7,8,8,9,3,2,5,10,4,3]) //avoid the addition for repeated numbers
console.log(setList);
setList.add(4)
setList.add(22)
setList.add(11)
console.log(setList);//print de addition for 22 and 11
console.log(setList.has(8)); // true result
setList.delete(10) // delete number 10 from setList
console.log(setList);
for (const number of setList){ //number iterates on setList
    console.log(number);

}

//Task 3
//3. Creación de un Map:
// Crea un Map que relacione la categoría del producto (clave) con el nombre del producto (valor).
// Asegúrate de que el Map refleje correctamente la información adicional de cada producto.


const objectsMap = new Map()  //allows to add category for name
objectsMap.set("papeleria", objects.p1.nombre)
objectsMap.set("libreria", objects.p2.nombre)
objectsMap.set("utiles", objects.p3.nombre)

console.log(objectsMap);

//Task 4
// 4. Iteración sobre las estructuras de datos:
// Recorre e imprime los datos en la consola:
// Usa for…in para listar propiedades y valores del objeto.
// Usa for…of para recorrer el Set.
// Usa forEach() para recorrer el Map y mostrar claves y valores de forma descriptiva.

for (const key in objects){ //for in allows to cath de key in an object
    const product= objects[key]//allows to go inside in the key to see the value 
    console.log(`${key}: ${product.id}, ${product.nombre}, ${product.precio}`);

}

for (const set of setList){//for of allows to iterate in an array
    console.log(set);
    
}

objectsMap.forEach((product, category)=>{//allows to see each category created with Map
    console.log(`la categoria es: ${category}, y el producto es : ${product}`);
    
})

//Task 5
// Validación y pruebas:
// Implementa validaciones para asegurar que cada producto tenga id, nombre y precio válidos.
// Realiza pruebas mostrando:
// Lista completa de productos (objeto)
// Lista de productos únicos (Set)
// Categorías y nombres de productos (Map)

let objectsValid= Object.values(objects)
objectsValid.forEach((product)=>{
    if (product.nombre==="" || product.precio<0){
        console.log(`El producto con id: ${product.id}, contiene datos errados`);
    }else{
        console.log(`El producto: ${product.nombre} es permitdo`);
        
    }
        
})
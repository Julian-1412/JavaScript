//Task 1 
const objects = { //object creation

p1: {id: 1, nombre : "cuaderno", precio: 12000},
p2: {id: 2, nombre: "libro", precio : 18000 },
p3: {id: 3, nombre: "cartuchera", precio: 7500}
}

//Task 2
/*Uso de Set en JavaScript:
Crea un Set con una lista de números que incluya valores repetidos.
Imprime en consola el contenido del Set para mostrar cómo elimina los duplicados automáticamente.
Agrega un nuevo número al Set utilizando el método .add().
Verifica si un número específico existe dentro del Set con .has().
Elimina un número del Set con .delete().
Recorre el Set utilizando un for…of para mostrar cada valor.*/
let setList = new Set ([ 1,2,5,7,10,5,4,6,7,8,8,9,3,2,5,10,4,3])
console.log(setList);
setList.add(4)
setList.add(22)
setList.add(11)
console.log(setList);
setList.has(11)
console.log(setList);




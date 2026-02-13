//crear una funcion que retorne la palabra invertida
// class Invertir{
//     constructor(palabra){
//         this.palabra=palabra
//     }
//     invertirPalabra(){
//         let palabraInvertida=""
//         for(let i=this.palabra.length-1; i>=0; i--){
//             palabraInvertida+=this.palabra[i]
//         }
//         return palabraInvertida
//     }
// }
// const invertir=new Invertir("Hola Mundo")
// console.log(invertir.invertirPalabra()) 

//crear una funcion que busque un numero en un array del uno al 10

// class BuscarNumero{
//     constructor(numero){
//         this.numero=numero
//     }
//     buscarNumero(){
//         const lista=[1,2,3,4,5,6,7,8,9,10]
//         for(let i=0; i<lista.length; i++){
//             if(lista[i]===this.numero){
//                 return `El numero ${this.numero} se encuentra en la lista`
//             }
//         }
//         return `El numero ${this.numero} no se encuentra en la lista`
//     }
// }
// const buscarNumero=new BuscarNumero(7)
// console.log(buscarNumero.buscarNumero())

//busqueda binaria con un array ordenado de 1 al 10

class BusquedaBinaria{
    constructor(numero){
        this.numero=numero
    }
    busquedaBinaria(){
        const lista=[1,2,3,4,5,6,7,8,9,10]
        let inicio=0
        let fin=lista.length-1
        while(inicio<=fin){
            let medio=Math.floor((inicio+fin)/2)
            if(lista[medio]===this.numero){
                return `El numero ${this.numero} se encuentra en la lista`
            }else if(lista[medio]<this.numero){
                inicio=medio+1
            }else{
                fin=medio-1
            }
        }
        return `El numero ${this.numero} no se encuentra en la lista`
    }
}
const busquedaBinaria=new BusquedaBinaria(2)
console.log(busquedaBinaria.busquedaBinaria())  
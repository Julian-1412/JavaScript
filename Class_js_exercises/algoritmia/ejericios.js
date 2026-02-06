//crear una funcion que retorne la palabra invertida
class Invertir{
    constructor(palabra){
        this.palabra=palabra
    }
    invertirPalabra(){
        let palabraInvertida=""
        for(let i=this.palabra.length-1; i>=0; i--){
            palabraInvertida+=this.palabra[i]
        }
        return palabraInvertida
    }
}
const invertir=new Invertir("Hola Mundo")
console.log(invertir.invertirPalabra()) 
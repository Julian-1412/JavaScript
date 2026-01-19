const title= document.getElementById("title")
const bio=document.getElementById("bio")
const button=document.getElementById("btn")
const card= document.getElementsByClassName("card")
const link= document.getElementsByTagName("a") //otra forma de llamar archivos con el nombre origial de la etiqueta html

button.addEventListener("click",()=>{
    title.textContent="Se nos fue el titulo" //cambia el titulo definido previamente en html
    bio.textContent="Se nos perdio la biografia"//cambia el parrafo definido previamente en el html
    card[0].classList.toggle("toogle")// permite modificar por completo las propiedades "css" definidas incialmente en el documento styles
    link[0].setAttribute("href", "https://aprendejavascript.org")//permite modificar el atrbuto de una etiqueta desde JS
    link[0].setAttribute("target","_blank");
})
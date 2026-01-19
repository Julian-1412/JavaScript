// Mini reto 2: TODO List (CRUD)
// Objetivo
// Crear una lista de tareas donde puedas:

// Create (crear tareas)
// Read (ver tareas)
// Update (editar tareas)
// Delete (eliminar tareas)
// Requisitos HTML
// <h2>Todo List</h2>
// <input type="text" id="taskInput" placeholder="Nueva tarea">
// <button id="addTask">Agregar</button>

// <ul id="taskList"></ul>
// Requisitos JavaScript
// Al hacer click en Agregar:
// Crear un <li> con el texto del input
// Agregar botones Editar y Eliminar
// Editar:
// Cambiar el texto usando prompt() y textContent
// Eliminar:
// Eliminar el <li> usando remove()
// Usar:
// createElement
// appendChild
// classList
// Eventos click
// Extra (opcional)
// Marcar tarea como completada con classList.toggle("done")
// Guardar las tareas en localStorage

//traemos a js las etiquetas html para ser manipuladas

const input = document.getElementById("taskInput");
const add = document.getElementById("addTask");
const list = document.getElementById("taskList");

//vamos a capturar el click en el input
add.addEventListener("click",()=>{
    const inputText = input.value//obtiene el valor del input es necesario el .value
    if(inputText===""){
        alert("Escribe algo primero")
        return
    }

    //creamos el li
const li= document.createElement("li")
li.textContent=inputText

//creamos el boton eliminar
const deleteBtn= document.createElement("button")
deleteBtn.textContent="Eliminar" //da nombre al boton eliminar
deleteBtn.onclick= ()=> li.remove()  //elimina a li onclick ejecuta una funcion cuando es clickeado el boton

//creamos el boton editar
const editBtn=document.createElement("button")
editBtn.textContent="Editar"
editBtn.onclick= ()=>{
    const newText=prompt("Ingrese el nuevo nombre de la tarea: ", li.firstChild.textContent) //modifica el li y con firstchild captura el primer elemento que se esta editando 
    if(newText){  //permite validar que el usuario si escribio algo, no preciona cancelar o dejo el campo vacio
        li.firstChild.textContent=newText
    }
}

//Marcar como completado 
li.addEventListener("click", (e)=>{
    //solo tacha si se hace click en el texto, no en los botones
    if(e.target===li){
        li.classList.toggle("done")//vinculado con el css para modificar las propiedades 
    }
})
//unir todo y mostrarlo
li.appendChild(editBtn)
li.appendChild(deleteBtn)
list.appendChild(li)
//limpiar el input
input.value=""

})






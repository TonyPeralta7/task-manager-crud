let tasks = []

function renderTasks(){

const list = document.getElementById("taskList")
list.innerHTML=""

tasks.forEach((task,index)=>{

const li=document.createElement("li")

li.innerHTML=`
${task}
<button onclick="editTask(${index})">Editar</button>
<button onclick="deleteTask(${index})">Eliminar</button>
`

list.appendChild(li)

})

}
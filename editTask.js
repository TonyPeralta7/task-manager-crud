function editTask(index){

let newTask=prompt("Editar tarea",tasks[index])

if(newTask){

tasks[index]=newTask
renderTasks()

}

}
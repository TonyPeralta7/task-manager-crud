function createTask(){

const input=document.getElementById("taskInput")
const task=input.value

if(task==="") return

tasks.push(task)

input.value=""

renderTasks()

}
const input = document.querySelector("input");
const textArea = document.querySelector("textarea");
const addButton = document.querySelector(".addbutton");
const list = document.querySelector(".task-list");
const counter=document.querySelector(".char-count");
const errorMsg = document.querySelector(".error-msg");


let todos=[];//stores todo

//TodoCheck function
function todoCheck(){
input.value = input.value.slice(0, 20);
const value=input.value.trim();
const length=value.length;
let sizeGuide="";
errorMsg.textContent="";
if (value===""){
errorMsg.textContent="Todo cannot be Empty";
counter.textContent = "0/20";
counter.style.color="red";  
errorMsg.style.color="red";
addButton.disabled=true;
return
}
 if (length <= 10 ) {
    sizeGuide = "Good";
    counter.style.color = "green";
}
else if (length <= 20 ) {
    sizeGuide = "Almost full";
    counter.style.color = "orange";
}
addButton.disabled =false;
counter.textContent=`${length}/20  ${sizeGuide}`;
}

input.addEventListener("input",todoCheck);

//RenderTodo function
function renderTodos() {
list.innerHTML=""

todos.forEach(todo=>{
const li = document.createElement("li"); 
li.classList.add("list");

const deleteButton = document.createElement("button"); 
deleteButton.onclick = () => deleteTodo(todo.id);
deleteButton.classList.add("delete-button")
deleteButton.textContent = "Delete";


const editButton = document.createElement("button");
editButton.onclick = () => editTodo(todo.id); 
editButton.classList.add("edit-button")
editButton.textContent = "Edit";

const task=document.createElement("div");
task.classList.add("task-text");
task.textContent=todo.task;

const notes=document.createElement("div");
notes.classList.add("notes-text")
notes.textContent=todo.note;

const content = document.createElement("div");
content.classList.add("todo-content")
content.append(task, notes);
// notes.style.display = "none";
// content.addEventListener("click",()=>{
// notes.style.display=(notes.style.display!=="none")?"none":"block";
// })
content.addEventListener("click", () => {
    if (!todo.note) return;
    todo.isOpen = !todo.isOpen;
    renderTodos();
});

if (!todo.isOpen) {
    notes.classList.add("hidden");
}

li.append(content, deleteButton, editButton);
list.append(li);
})

}
//Edit Todo function
function editTodo(id) {
    const todo = todos.find(
    todo => todo.id === id);

const editTasks=prompt("Edit task",todo.task);
const editNotes=prompt("Edit notes",todo.note);

if (editTasks?.trim()) {
    todo.task = editTasks.trim();
}

if (editNotes !== null) {
    todo.note = editNotes.trim();
}   

renderTodos();
}
//Delete Todo function
function deleteTodo(id) {
 todos = todos.filter   (
    todo => todo.id !== id
);
renderTodos();
}
//addButton
addButton.addEventListener("click",addTodo);

function addTodo() {
const task=input.value.trim();
if(!task){
return
}
todos.push({
id:Date.now(),
task,
note:textArea.value,
isOpen: false
});

renderTodos();
input.value = "";
textArea.value = "";
counter.textContent = "0/20";
counter.style.color = "#666";
addButton.disabled = true;
}
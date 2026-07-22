//Imports

import{
    input,
    textArea,
    addButton,
    list,
    counter,
    errorMsg
} from './Dom.js';

import { state } from "./state.js";

//Render todos
function renderTodos() {

list.innerHTML=""
const activeTodos = state.todos
    .filter(todo => !todo.completed)
    .toReversed();

const completedTodos = state.todos
    .filter(todo => todo.completed)
    .toReversed();

const orderedTodos = [
    ...activeTodos,
    ...completedTodos
];

orderedTodos.forEach(todo=>{
    const li = document.createElement("li"); 
    li.classList.add("task-item");

    const deleteButton = document.createElement("button"); 

    deleteButton.onclick = () => deleteTodo(todo.id);
    deleteButton.classList.add("delete-button")
    deleteButton.textContent = "Delete";

    const doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCheckbox.checked = todo.completed;
    doneCheckbox.classList.add("done-checkbox");

doneCheckbox.addEventListener("change", () => {
    doneTodo(todo.id);
});

const editButton = document.createElement("button");

editButton.onclick = () => editTodo(todo.id); 
editButton.classList.add("edit-button");
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

content.addEventListener("click", () => {
    if (!todo.note) return;
    todo.isOpen = !todo.isOpen;
    renderTodos();
});

if(todo.completed){
   notes.classList.add("completed");
   task.classList.add("completed");
}

if (!todo.isOpen) {
    notes.classList.add("hidden");
}

li.append(doneCheckbox,content, deleteButton, editButton);

list.append(li);

})


localStorage.setItem("Todos",JSON.stringify(state.todos));
}

//Edit Todo function

function editTodo(id) {
    const todo = state.todos.find(
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
state.todos = state.todos.filter   (
    todo => todo.id !== id
);
renderTodos();
}

function doneTodo(id){

    const todo = state.todos.find(
    todo => todo.id === id
);
    if(todo){
    todo.completed=!todo.completed;
    }
    renderTodos();
}

function addTodo() {

const task=input.value.trim();
if(!task){
return
}

state.todos.push({
id:Date.now(),
task,
note:textArea.value,
isOpen: false,
completed:false
});

renderTodos();
input.value = "";
textArea.value = "";
counter.textContent = "0/20";
counter.style.color = "#666";
addButton.disabled = true;
completed:false;
}

export{
addTodo,
deleteTodo,
editTodo,
renderTodos
}
//imports
import{
    input,
    textArea,
    addButton,
    list,
    counter,
    errorMsg
} from './Dom.js';

import { state } from "./state.js";

const savedTodos = localStorage.getItem("Todos");

if(savedTodos)
    {state.todos=JSON.parse(savedTodos);}

import { addTodo,deleteTodo,editTodo,renderTodos} from './todoedit.js';

renderTodos();

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

//********************    Check *******************/

input.addEventListener("input",todoCheck);

//addButton

addButton.addEventListener("click",addTodo);

input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        e.preventDefault();
        addTodo();
}

});
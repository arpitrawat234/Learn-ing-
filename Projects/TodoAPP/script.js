const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const list = document.querySelector(".task-list");
const counter=document.querySelector(".char-count");
const errorMsg = document.querySelector(".error-msg");

input.addEventListener("input",()=>{
input.value = input.value.slice(0, 30);

const length=input.value.length;

let sizeguide="";

errorMsg.textContent="";
if (input.value.trim()==""){
errorMsg.textContent="Todo cannot be Empty";
counter.style.color="red";  
errorMsg.style.color="red";
button.disabled=true;
return
}

else if (length === 0) {
    sizeguide = "";
    counter.style.color = "#666";
}
else if (length <= 10 ) {
    sizeguide = "Good";
    counter.style.color = "green";
}
else if (length <= 20 ) {
    sizeguide = "Almost full";
    counter.style.color = "orange";
}


    button.disabled = (length === 0 || length > 20);
counter.textContent=`${length}/20  ${sizeguide}`;
});

button.addEventListener("click", () => {

    const taskText = input.value;
    const notesText = textarea.value;

    if (taskText === "") return;

    // main container
    const li = document.createElement("li");
    li.classList.add("task-item");

    // task text
    const task = document.createElement("div");
    task.classList.add("task-text");
    task.textContent = taskText;

    // notes
    const notes = document.createElement("div");
    notes.classList.add("notes-text");
    notes.textContent = notesText;
    notes.style.display = "none";

    // toggle notes

    li.addEventListener("click", () => {
        notes.style.display =
            notes.style.display === "none" ? "block" : "none";
    });

    
//Editing button


const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-button");
editBtn.addEventListener("click", (e) => {
    e.stopPropagation();
const newTask=prompt("Enter your todo");
if(newTask!==null && newTask.trim()!==""){
    task.textContent=newTask;
}
const newNote=prompt("Enter your new notes");
if(newNote!==null && newNote.trim()!==""){
    notes.textContent=newNote;
}
});

    // delete button
    
const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-button");


deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); 
        if (confirm("Delete this task?")) {
            li.remove();
        }
    });


// create the todo task
const content = document.createElement("div");
content.classList.add("content");

content.append(task, notes);

const actions = document.createElement("div");
actions.classList.add("actions");

actions.append(editBtn, deleteBtn);
li.append(content, actions);
list.append(li);

// REORDER BUTTON
//  const reorderBtn = document.createElement("button");
//     reorderBtn.textContent = "";
//     reorderBtn.classList.add("reorder-button");
//it will be added i promise lol



//reset input values
    counter.textContent = "0/20";
    counter.style.color = "#666";
    input.value = "";
    textarea.value = "";

});
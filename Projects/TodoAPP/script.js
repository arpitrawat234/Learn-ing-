const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const list = document.querySelector(".task-list");

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
    task.addEventListener("click", () => {
        notes.style.display =
            notes.style.display === "none" ? "block" : "none";
    });

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("note-button");

    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // 🔥 IMPORTANT
        if (confirm("Delete this task?")) {
            li.remove();
        }
    });

    li.append(task, notes, deleteBtn);
    list.append(li);

    input.value = "";
    textarea.value = "";
});
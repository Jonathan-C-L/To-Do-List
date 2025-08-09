import { createNewContainer, createNewElement } from "../lib/lib.js";

export { todoItems };

function todoItems(){
    const newTodo = createTodoItem(JSON.parse(localStorage.getItem("Todo #1")));

    const content = document.querySelector(".content");
    content.appendChild(newTodo);
}
function createTodoItem(todoObject){
    const todo = createNewElement("div", "todo");
    const notes = createNewElement("div", "notes");
    const date = createNewElement("div", "date");

    // adding info parsed from the object to the new nodes
    todo.textContent = todoObject.todo;
    notes.textContent = todoObject.notes;
    date.textContent = todoObject.date;

    return createNewContainer("todo-item", [todo, notes, date]);   
}

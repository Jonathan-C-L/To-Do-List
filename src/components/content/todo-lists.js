import { createNewContainer, createNewElement } from "../lib/lib.js";

export { renderTodoCards, createTodo };

function renderTodoCards(){
    let cardArray = [];
    
    for(let i = 1; i <= localStorage.length; i++){
        const newTodo = createTodoCard(JSON.parse(localStorage.getItem(`Todo #${i}`)));
        cardArray.push(newTodo);
    }

    return createNewContainer("todo-cards", cardArray);

}
function createTodoCard(todoObject){
    const todo = createNewElement("div", "todo");
    const notes = createNewElement("div", "notes");
    const date = createNewElement("div", "date");

    // adding info parsed from the object to the new nodes
    todo.textContent = todoObject.todo;
    notes.textContent = todoObject.notes;
    date.textContent = todoObject.date;

    return createNewContainer("todo-card", [todo, notes, date]);   
}
function createTodo(){
    const todo = document.querySelector(".todo-input");
    const notes = document.querySelector(".notes-input");
    const date = document.querySelector(".date-input");

    // new to do list object
    const newTodo = {
        todo: todo.value,
        notes: notes.value,
        date: date.value
    };

    localStorage.setItem(`Todo #${localStorage.length + 1}`, JSON.stringify(newTodo));

    // reset after submission
    todo.value = "";
    notes.value = "";
    date.value = "";
}
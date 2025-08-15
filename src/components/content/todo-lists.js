import { createNewContainer, createNewElement } from "../lib/lib.js";

export { todoCards, createTodo, removeTodo };

function todoCards(){
    let cardArray = [];
    
    for(let i = 0; i < localStorage.length; i++){
        const newTodo = createTodoCard(JSON.parse(localStorage.getItem(`Todo #${i}`)), i);
        cardArray.push(newTodo);
    }

    return cardArray; 
}
function createTodoCard(todoJSON, index){
    const todo = createNewElement("div", "todo");
    const notes = createNewElement("div", "notes");
    const date = createNewElement("div", "date");

    // adding info parsed from the object to the new nodes
    todo.textContent = todoJSON.todo;
    notes.textContent = todoJSON.notes;
    date.textContent = todoJSON.date;

    return createNewContainer("todo-card", [todo, notes, date], index);   
}
function createTodo(){
    const todo = document.querySelector(".todo-input");
    const notes = document.querySelector(".notes-input");
    const date = document.querySelector(".date-input");

    // new to do todo object
    const newTodo = {
        todo: todo.value,
        notes: notes.value,
        date: date.value
    };

    localStorage.setItem(`Todo #${localStorage.length}`, JSON.stringify(newTodo));

    // reset after submission
    todo.value = "";
    notes.value = "";
    date.value = "";
}
function removeTodo(keyNumber){
    let temp = [];
    for(let i = 0; i < localStorage.length; i++){
        if(i == keyNumber)
            localStorage.removeItem(`Todo #${i}`);
        /* LAST WORKED ON PROBLEM HERE */
        temp.push(localStorage.getItem(`Todo #${i}`));

    }
    localStorage.clear();
    temp.forEach((e, index)=>{
        localStorage.setItem(`Todo #${index}`, e);
    });
}

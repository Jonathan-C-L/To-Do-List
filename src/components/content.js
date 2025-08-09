import { newListButton, modalDialog } from "./content/add-list.js";
import { addGlobalEventListener } from "./lib/lib.js";
import { todoItems } from "./content/todo-lists.js"; 

export { Content };

// dom element
const content = document.querySelector(".content");

function Content(){
    const listButton = newListButton();
    content.appendChild(listButton);
    const modal = modalDialog();
    content.appendChild(modal);

    todoItems();
    eventHandlers();
}
function eventHandlers(){
    const content = document.querySelector(".content");
    const modal = document.querySelector(".new-list-modal");
    // content event listener - contains lists and add new list button
    addGlobalEventListener("click", ".content div, button, button>img", content, (e)=>{
        if(buttonCheck(e, "add-new-list")){
            modal.showModal();
        }
    });
    
    // dialog event listener for all buttons within the modal dialog
    addGlobalEventListener("click", "dialog button", modal, (e)=>{
        if(buttonCheck(e, "modal-cancel")){
            modal.close(); 
        } 
        if(buttonCheck(e, "modal-submit")){

            createTodo();
            modal.close();
        }
    });
}
// helper function
function buttonCheck(e, selector){
    return e.target.classList.contains(selector);
}
function createTodo(){
    const todo = document.querySelector(".todo");
    const notes = document.querySelector(".notes");
    const date = document.querySelector(".date");

    // new to do list item
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
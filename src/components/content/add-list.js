import { createNewContainer, createNewElement } from "../lib/lib.js";
import plusSign from "../../assets/plus.png";

export { newListButton, modalDialog };

function newListButton(){
    const listButton = createNewElement("img", "plus-sign");
    listButton.src = plusSign;

    const newListButton = createNewElement("button", "add-new-list");
    newListButton.appendChild(listButton);

    return newListButton;
}
function modalDialog(){
    // element creation
    const modal = createNewElement("dialog", "new-list-modal");
    const title = createNewElement("div", "modal-title");
    const cancel = createNewElement("button", "modal-cancel");
    const todoTitle = createNewElement("div", "todo-title");
    const todoInput = createNewElement("input", "input", "todo");
    const notesTitle = createNewElement("div", "todo-title");
    const notesInput = createNewElement("textarea", "input", "notes");
    const dateTitle = createNewElement("div", "todo-title");
    const dateInput = createNewElement("input", "input", "date");
    const submit = createNewElement("button", "modal-submit");

    // input type declarations
    dateInput.type = "date";
    todoInput.type = "text";

    // text inputs
    todoTitle.textContent = "To Do:";
    notesTitle.textContent = "Notes:";
    dateTitle.textContent = "Date:";
    title.textContent = "Create List";  
    cancel.textContent = "Cancel";
    submit.textContent = "Submit";  

    const info = createNewContainer("todo-info", [todoTitle, todoInput, notesTitle, notesInput, dateTitle, dateInput]);

    appendAll(modal, title, info, cancel, submit);

    return modal;
}
// could be a lib function for adding all child nodes to a parent
function appendAll(parent, ...children){
    for(let child of children){
        parent.appendChild(child);
    }
}
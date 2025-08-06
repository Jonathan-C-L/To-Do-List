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
    const modal = createNewElement("dialog", "new-list-modal");
    const title = createNewElement("h1", "modal-title");
    const cancel = createNewElement("button", "modal-cancel");
    const todoTitle = createNewElement("h3", "todo-title");
    todoTitle.textContent = "To Do:";
    const todoInput = createNewElement("input", "input", "todo");
    todoInput.type = "text";
    const notesTitle = createNewElement("h3", "todo-title");
    notesTitle.textContent = "Notes:";
    const notesInput = createNewElement("textarea", "input", "notes");
    const dateTitle = createNewElement("h3", "todo-title");
    dateTitle.textContent = "Date:";
    const dateInput = createNewElement("input", "input", "date");
    dateInput.type = "date";
    // const info = createNewElement("input", "todo-info");
    // info.type = "text";

    const submit = createNewElement("button", "modal-submit");
    title.textContent = "Create List";  
    submit.textContent = "Submit";  
    cancel.textContent = "Cancel";

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
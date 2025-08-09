import { createNewContainer, createNewElement, appendAll } from "../lib/lib.js";
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
    const modal = createModalElements();

    appendAll(modal.dialog, modal.title, modal.info, modal.cancel, modal.submit);

    return modal.dialog;
}

// abstracted away the dom element creations and manipulations and returned the elements in an object
function createModalElements(){
    // element creation
    const modal = createNewElement("dialog", "new-list-modal");
    const title = createNewElement("div", "modal-title");
    const cancel = createNewElement("button", "modal-cancel");
    const todoTitle = createNewElement("div", "todo-title");
    const todoInput = createNewElement("input", "todo-input");
    const notesTitle = createNewElement("div", "todo-title");
    const notesInput = createNewElement("textarea", "notes-input");
    const dateTitle = createNewElement("div", "todo-title");
    const dateInput = createNewElement("input", "date-input");
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

    return {
        dialog: modal,
        title: title,
        info: info,
        cancel: cancel,
        submit: submit,
    };
}
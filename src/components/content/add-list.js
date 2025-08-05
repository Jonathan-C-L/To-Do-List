import { createNewContainer, createNewElement } from "../lib/lib.js";
import plusSign from "../../assets/plus.png";

export { newListButton, modalDialog };

function newListButton(){
    const listButton = document.createElement("img");
    listButton.src = plusSign;
    listButton.classList.add("plus-sign");
    const images = [listButton];

    const newListButton = createNewContainer("add-new-list", images);

    return newListButton;
}
function modalDialog(){
    const modal = createNewElement("dialog", "new-list-modal");
    const title = createNewElement("h1", "title");
    const cancel = createNewElement("button", "modal-cancel");
    const add = createNewElement("button", "modal-add");
    const textInput = createNewElement("input", "todo-name");
    const submit = createNewElement("button", "modal-submit")
    add.textContent = "Add New Item";
    title.textContent = "Create List";  
    submit.textContent = "Submit";  
    cancel.textContent = "Cancel";

    appendAll(modal, title, textInput, add, cancel, submit);

    return modal;
}
// could be a lib function for adding all child nodes to a parent
function appendAll(parent, ...children){
    for(let child of children){
        parent.appendChild(child);
    }
}
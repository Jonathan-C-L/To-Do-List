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
    const modal = document.createElement("dialog");
    const title = document.createElement("h1");
    const cancel = document.createElement("button");
    const add = document.createElement("button");
    const textInput = document.createElement("input");
    add.classList.add("add");
    cancel.classList.add("cancel");
    add.textContent = "+";
    title.textContent = "Create List";    
    cancel.textContent = "Cancel";


    modal.appendChild(title);
    modal.appendChild(textInput);
    modal.appendChild(add);
    modal.appendChild(cancel);

    return modal;
}
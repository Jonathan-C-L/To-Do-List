import { createNewContainer, createNewDiv } from "../lib/lib.js";
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
    cancel.classList.add("cancel");
    title.textContent = "Add List Item";    
    cancel.textContent = "Cancel";



    modal.appendChild(title);
    modal.appendChild(cancel);

    return modal;
}
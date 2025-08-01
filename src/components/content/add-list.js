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
    title.textContent = "Title";
    modal.appendChild(title);

    return modal;
}
import { createNewContainer, createNewDiv } from "../lib/lib.js";
import plusSign from "../../assets/plus.png";

export { newListButton };

function newListButton(){
    const listButton = document.createElement("img");
    listButton.src = plusSign;
    listButton.classList.add("plus-sign");
    const images = [listButton];

    const newListButton = createNewContainer("add-new-list", images);

    return newListButton;
}
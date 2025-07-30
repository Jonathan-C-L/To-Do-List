import { newListButton } from "./content/add-list.js";

export { Content };

const content = document.querySelector(".content");

function Content(){
    const listButton = newListButton();
    content.appendChild(listButton);
}
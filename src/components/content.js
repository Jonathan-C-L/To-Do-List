import { newListButton, modalDialog } from "./content/add-list.js";
import { addGlobalEventListener } from "./lib/lib.js";

export { Content };

const content = document.querySelector(".content");

function Content(){
    const listButton = newListButton();
    content.appendChild(listButton);
    const modal = modalDialog();
    content.appendChild(modal);

    eventHandlers();
}
function eventHandlers(){
    const parent = document.querySelector(".content");
    const modal = document.querySelector("dialog");

    addGlobalEventListener("click", ".add-new-list", parent, (e)=>{modal.showModal()});
}
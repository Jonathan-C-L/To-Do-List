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
    const content = document.querySelector(".content");
    const modal = document.querySelector("dialog");
    const modalClose = document.querySelector("dialog button");

    addGlobalEventListener("click", ".add-new-list", content, (e)=>{modal.showModal();});
    addGlobalEventListener("click", "dialog button", modal, (e)=>{
        if(e.target.classList.contains("cancel")){
            modal.close(); 
        } 

    });
}
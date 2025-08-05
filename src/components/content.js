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
    const modal = document.querySelector(".new-list-modal");
    // content event listener - contains lists and add new list button
    addGlobalEventListener("click", ".add-new-list", content, (e)=>{
        modal.showModal();
    });
    
    // dialog event listener for all buttons within the modal dialog
    addGlobalEventListener("click", "dialog button", modal, (e)=>{
        if(buttonCheck(e, "modal-cancel")){
            modal.close(); 
        } 
    });
}
function buttonCheck(e, selector){
    return e.target.classList.contains(selector);
}
function newTodo(){

}
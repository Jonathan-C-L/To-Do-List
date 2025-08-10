import { newListButton, modalDialog } from "./content/add-list.js";
import { addGlobalEventListener, createNewContainer, resetContainer } from "./lib/lib.js";
import { renderTodoCards, createTodo } from "./content/todo-lists.js";

export { Content };

// dom element
const content = document.querySelector(".content");

function Content(){
    const todoCards = renderTodoCards();
    const cardContainer = createNewContainer("cards", [todoCards]);
    content.appendChild(cardContainer);
    
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
    addGlobalEventListener("click", ".content div, button, button>img", content, (e)=>{
        if(buttonCheck(e, "add-new-list")){
            modal.showModal();
        }
    });
    
    // dialog event listener for all buttons within the modal dialog
    addGlobalEventListener("click", "dialog button", modal, (e)=>{
        if(buttonCheck(e, "modal-cancel")){
            modal.close(); 
        } 
        if(buttonCheck(e, "modal-submit")){

            createTodo();
            resetContainer(".cards");

            const todoCards = renderTodoCards();
            const cardContainer = document.querySelector(".cards");
            cardContainer.appendChild(todoCards);

            modal.close();
        }
    });
}
// helper function
function buttonCheck(e, selector){
    return e.target.classList.contains(selector);
}

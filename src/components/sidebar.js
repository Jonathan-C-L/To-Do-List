import { renderTimeRange } from "./sidebar/time-range.js";
import { renderTodoCards } from "./content.js";
import { createNewElement, addGlobalEventListener } from "./lib/lib.js";
import { changeHeader } from "./header.js";
import iconImage from "../assets/icon.png";

export { Sidebar };

const sidebar = document.querySelector(".sidebar");

function Sidebar(){
    const timeRange = renderTimeRange();
    const icon = createIcon(iconImage);
    
    sidebar.appendChild(icon);
    sidebar.appendChild(timeRange);
    
    eventHandlers();
}
function eventHandlers(){
    const parent = document.querySelector(".sidebar");

    addGlobalEventListener("click", ".time-range>button", parent, (e)=>{
        changeHeader(e);
        renderTodoCards(e.srcElement.outerText);
    });
}
function createIcon(image){
    const newProfilePic = createNewElement("div", "icon");

    newProfilePic.style.backgroundImage = `url(${image})`;

    return newProfilePic;
}
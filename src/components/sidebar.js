import { renderProfile } from "./sidebar/profile.js";
import { renderTimeRange } from "./sidebar/time-range.js";
import { renderTodoCards } from "./content.js";
import { createNewElement, addGlobalEventListener } from "./lib/lib.js";
import { changeHeader } from "./header.js";

export { Sidebar };

const sidebar = document.querySelector(".sidebar");

function Sidebar(){
    const profile = renderProfile();
    const timeRange = renderTimeRange();

    sidebar.appendChild(profile);
    sidebar.appendChild(timeRange);
    
    eventHandlers();
}
function eventHandlers(){
    const parent = document.querySelector(".sidebar");
    const selectedTimeRange = document.querySelector("header");

    addGlobalEventListener("click", ".time-range>button", parent, (e)=>{
        changeHeader(e);
        renderTodoCards(selectedTimeRange.textContent);
    });
}

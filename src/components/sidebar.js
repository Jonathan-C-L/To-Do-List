import { renderProfile } from "./sidebar/profile.js";
import { renderTimeRange } from "./sidebar/time-range.js";
import { createNewElement, addGlobalEventListener } from "./lib/lib.js";
import { changeHeader } from "./header.js"
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

    addGlobalEventListener("click", ".time-range>div>div", parent, (e)=>{changeHeader(e);});
}

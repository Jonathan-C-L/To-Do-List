import { renderProfile } from "./sidebar/profile.js";
import { renderTimeRange } from "./sidebar/time-range.js";
import { renderLists } from "./sidebar/lists.js";
import { createNewDiv, addGlobalEventListener } from "./lib/lib.js";
import { changeHeader, loadHeader } from "./header.js"
export { Sidebar };

const sidebar = document.querySelector(".sidebar");

function Sidebar(){
    const profile = renderProfile();
    const timeRange = renderTimeRange();
    const lists = renderLists();
    const listTitle = createNewDiv("list-title");
    listTitle.textContent = "My lists";

    sidebar.appendChild(profile);
    sidebar.appendChild(timeRange);
    sidebar.appendChild(listTitle);
    sidebar.appendChild(lists);
    eventHandlers();
}
function eventHandlers(){
    const parent = document.querySelector(".sidebar");

    addGlobalEventListener("click", ".time-range>div>div", parent, (e)=>{changeHeader(e);});
}

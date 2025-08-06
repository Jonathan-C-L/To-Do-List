import { renderProfile } from "./sidebar/profile.js";
import { renderTimeRange } from "./sidebar/time-range.js";
// import { renderLists } from "./sidebar/lists.js";
import { createNewElement, addGlobalEventListener } from "./lib/lib.js";
import { changeHeader } from "./header.js"
export { Sidebar };

const sidebar = document.querySelector(".sidebar");

function Sidebar(){
    const profile = renderProfile();
    const timeRange = renderTimeRange();
    //// for future version with list categories
    // const lists = renderLists();
    // const listTitle = createNewElement("div", "list-title");
    // listTitle.textContent = "My lists";

    sidebar.appendChild(profile);
    sidebar.appendChild(timeRange);
    //// for future version with list categories
    // sidebar.appendChild(listTitle);
    // sidebar.appendChild(lists);
    eventHandlers();
}
function eventHandlers(){
    const parent = document.querySelector(".sidebar");

    addGlobalEventListener("click", ".time-range>div>div", parent, (e)=>{changeHeader(e);});
}

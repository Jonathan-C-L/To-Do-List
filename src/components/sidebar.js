import { renderProfile } from "./sidebar/profile.js";
import { renderTimeRange } from "./sidebar/time-range.js";
import { renderLists } from "./sidebar/lists.js";
import { createNewDiv } from "./lib/lib.js";
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
}

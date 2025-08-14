import { renderProfile } from "./sidebar/profile.js";
import { createNewElement, resetContainer } from "./lib/lib.js";

export { changeHeader, Header }; 

function changeHeader(event){
    renderHeader(event.srcElement.outerText);
}
function Header(){
    renderHeader("All");
}
function renderHeader(filter){
    resetContainer("header");
    const header = document.querySelector("header");
    const title = createNewElement("div", "filter");
    title.textContent = filter
    const profile = renderProfile();
    header.appendChild(title);
    header.appendChild(profile);
}
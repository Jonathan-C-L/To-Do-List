export { changeHeader, Header }; 

function changeHeader(event){
    const header = document.querySelector("header");
    header.textContent = event.srcElement.outerText;
}
function Header(){
    const header = document.querySelector("header");
    header.textContent = "Today";
}

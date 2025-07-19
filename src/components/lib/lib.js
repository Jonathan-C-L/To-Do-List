export { ResetContainer, addGlobalEventListener, CreateContainer };

function ResetContainer(containerID){
    const container = document.querySelector(containerID);

    container.innerHTML = "";
}
// event delegation function
function addGlobalEventListener(type, selector, parent = document, callback){

    parent.addEventListener(type, e =>{
        if(e.target.matches(selector)){
            callback(e);
        }
    });
}
function CreateContainer(){
    const container = document.createElement("div");
    container.classList.add("container");

    return container;
}
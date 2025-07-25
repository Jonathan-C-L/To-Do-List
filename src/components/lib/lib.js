export { resetContainer, addGlobalEventListener, createNewContainer, createNewDiv };

function resetContainer(containerID){
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
function createNewContainer(name, items){
    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add(name);

    items.forEach(element => {
        container.appendChild(element);
    });

    return container;
}
function createNewDiv(name){
    const newDiv = document.createElement("div");
    newDiv.classList.add(name);

    return newDiv;
}

export { resetContainer, addGlobalEventListener, createNewContainer, createNewElement, appendAll};

function resetContainer(containerID){
    const container = document.querySelector(containerID);

    // only clears if the dom element exists
    if(container == null){
        return;
    }

    container.innerHTML = "";

}
// event delegation function -> applies to parent container and use 'e' to selector specific elements within
function addGlobalEventListener(type, selector, parent = document, callback){

    parent.addEventListener(type, e =>{
        if(e.target.matches(selector)){
            callback(e);
        }
    });
}
// creates a new container and iterates through the array of child nodes
function createNewContainer(name, children){
    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add(name);

    // check to see if an nodes are in an array to iterate through
    if(Array.isArray(children)){
        children.forEach(child =>{
            container.appendChild(child);
        });
    }

    return container;
}
// using the rest parameter (...) to treat an indefinite number of arguments as an array
function createNewElement(type, ...names){
    const newElement = document.createElement(type);
    for(let name of names){
        newElement.classList.add(name);
    };

    return newElement;
}
// appends all nodes into the parent node
function appendAll(parent, ...children){
    for(let child of children){
        parent.appendChild(child);
    }
}

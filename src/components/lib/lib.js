export { resetContainer, addGlobalEventListener, createNewContainer, createNewDiv };

function resetContainer(containerID){
    const container = document.querySelector(containerID);

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
function createNewContainer(name, elements){
    const container = document.createElement("div");
    container.classList.add("container");
    container.classList.add(name);

    if(Array.isArray(elements)){
        elements.forEach(e =>{
            container.appendChild(e);
        });
    }

    return container;
}
// using the rest parameter (...) to treat an indefinite number of arguments as an array
function createNewDiv(...names){
    const newDiv = document.createElement("div");
    for(let name of names){
        newDiv.classList.add(name);
    };

    return newDiv;
}

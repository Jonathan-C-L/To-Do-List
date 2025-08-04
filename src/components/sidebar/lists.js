import { createNewContainer, createNewElement } from "../lib/lib.js";
export { renderLists };

// list class
class List{
    constructor(category){
        this.category = category;
        this.todo = [];
    }
    addListItem(item, date, description = "", complete = false){
        this.todo.push({item, date, description, complete});
    }
    showListItems(){
        console.log(this.category);
        this.todo.forEach((e, index) =>{
            console.log(e);
            console.log(index);
        });
    }
}

// test data for the list objects and data
const list1 = new List("Personal");
const list2 = new List("Volleyball");
const list3 = new List("School");

// data store for list objects
const lists = [list1, list2, list3];

// functions
function renderLists(){
    let listElements = [];
    lists.forEach(e =>{
        let newList = createNewElement("div", e.category);
        const category = createNewElement("div", "category");
        category.textContent = e.category;
        newList.appendChild(category);
        listElements.push(newList);
    });

    return createNewContainer("lists", listElements);
}
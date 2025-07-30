import { createNewContainer, createNewDiv } from "../lib/lib.js";
export { renderLists };

// data store for list objects
const lists = [];

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

lists.push(list1, list2, list3);

// functions
function renderLists(){
    const items = [];

    lists.forEach(e =>{
        let item = createNewDiv(e.category);
        const category = document.createElement("div");
        category.textContent = e.category;
        item.appendChild(category);
        items.push(item);
    });

    return createNewContainer("lists", items);
}

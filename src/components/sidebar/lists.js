import { CreateNewContainer, CreateNewDiv } from "../lib/lib.js";
export { RenderLists };

const lists = [];
const sidebar = document.querySelector(".sidebar");

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

const list1 = new List("Personal");
const list2 = new List("Volleyball");
const list3 = new List("School");

lists.push(list1, list2, list3);

function RenderLists(){
    const items = [];

    lists.forEach(e =>{
        let item = CreateNewDiv(e.category);
        const category = document.createElement("h1");
        category.textContent = e.category;
        item.appendChild(category);
        items.push(item);
    });

    const title = document.createElement("h1");
    title.textContent = "LISTS";
    const listContainer = CreateNewContainer("LISTS", items);
    sidebar.appendChild(title);
    sidebar.appendChild(listContainer);
}

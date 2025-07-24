import { CreateNewContainer, CreateNewDiv } from "../lib/lib.js";
export { Lists };

class List{
    constructor(category){
        this.category = category;
        this.todo = [];
    }
    addListItem(item, date, description = "", complete = false){
        this.todo.push({item, date, description, complete});
    }
    showListItems(){
        this.todo.forEach((e, index) =>{
            console.log(e);
            console.log(index);
        });
    }
}

function Lists(){
    const test = new List("Programming");
    test.addListItem("Javascript", "2025-07-20", "Learn classes in JS", false);
    test.showListItems();

}
function CreateNewList(category, todo){
    const newList = new List(category);
    todo.forEach(e =>{
        // create new todo item and append into list
        CreateNewDiv(e);
    });
    // append entire list 
}


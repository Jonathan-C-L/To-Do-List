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
        this.todo.forEach(e =>{
            console.log(e.item);
            console.log(e.date);
            console.log(e.description);
            console.log(e.complete);
        });
    }
}


function Lists(){
    const test = new List("Programming");
    test.addListItem("Javascript", "2025-07-20", "Learn classes in JS", false);
    test.showListItems();

}

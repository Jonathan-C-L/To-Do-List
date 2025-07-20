export { Profile };
import { CreateNewContainer, CreateNewDiv } from "../lib/lib.js"
import profilePicture from "./profile-pic/profile.jpg";
import defaultPicture from "./profile-pic/default.jpg";

// variables
const sidebar = document.querySelector(".sidebar");

// user class
class User {
    constructor(name, picture = undefined){
        this.name = name;
        this.picture = picture;
    }
}

// test user
const Jon = new User("Jonathan Le", profilePicture);

function Profile(){
    const userInfo = [CreateProfilePicture(Jon.picture), CreateUserName(Jon.name)];
    const profileContainer = CreateNewContainer("profile", userInfo);

    sidebar.appendChild(profileContainer);
}
function CreateProfilePicture(picture){
    const newProfilePic = CreateNewDiv("profile-pic");
    // chooses default image if user does not provide one
    if(picture != undefined){
        newProfilePic.style.backgroundImage = `url(${picture})`;
    }
    else{
        newProfilePic.style.backgroundImage = `url(${defaultPicture})`;
    }

    return newProfilePic;
}
function CreateUserName(name){
    const newUserName = CreateNewDiv("username")
    newUserName.textContent = name;    

    return newUserName;
}
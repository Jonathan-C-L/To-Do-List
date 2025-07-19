export { Profile };
import { CreateContainer } from "../lib/lib.js"
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
    const profileContainer = CreateContainer();
    profileContainer.classList.add("profile");
    const profilePic = CreateProfilePicture(Jon.picture);
    const userName = CreateUserName(Jon.name);
    profileContainer.appendChild(profilePic);
    profileContainer.appendChild(userName);
    sidebar.appendChild(profileContainer);
}
function CreateProfilePicture(picture){
    const newProfilePic = document.createElement("div");
    newProfilePic.classList.add("profile-pic");
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
    const newUserName = document.createElement("div");
    newUserName.classList.add("username");
    newUserName.textContent = name;    

    return newUserName;
}
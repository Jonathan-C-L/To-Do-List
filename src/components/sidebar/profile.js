export { renderProfile };
import { createNewContainer, createNewDiv } from "../lib/lib.js"
import profilePicture from "./profile-pic/profile.jpg";
import defaultPicture from "./profile-pic/default.jpg";

// user class
class User {
    constructor(name, picture = undefined){
        this.name = name;
        this.picture = picture;
    }
}

// test user
const Jon = new User("Jonathan Le", profilePicture);

function renderProfile(){
    const userInfo = [createProfilePicture(Jon.picture), createUserName(Jon.name)];
    const profileContainer = createNewContainer("profile", userInfo);

    return profileContainer;
}
function createProfilePicture(picture){
    const newProfilePic = createNewDiv("profile-pic");
    // chooses default image if user does not provide one
    if(picture != undefined){
        newProfilePic.style.backgroundImage = `url(${picture})`;
    }
    else{
        newProfilePic.style.backgroundImage = `url(${defaultPicture})`;
    }

    return newProfilePic;
}
function createUserName(name){
    const newUserName = createNewDiv("username")
    newUserName.textContent = name;    

    return newUserName;
}
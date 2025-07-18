export { Profile };

// variables
const sidebar = document.querySelector(".sidebar");
const profileContainer = document.createElement("div");
profileContainer.classList.add("profile container");

// user class
class User {
    constructor(name, picture){
        this.name = name;
        this.picture = picture;
    }
}

const Jon = new User("Jon", "./profile-pic/profile.jpg");

function Profile(){
    // reset incase there's an update
    profileContainer.innerHTML = "";

    const profilePic = CreateProfilePicture(Jon.picture);
    const userName = CreateUserName(Jon.name);

    profileContainer.appendChild(profilePic);
    profileContainer.appendChild(userName);
}
function CreateProfilePicture(picture){
    const newProfilePic = document.createElement("div");
    newProfilePic.classList.add("profile-pic");
    newProfilePic.style.backgroundImage = `url(${picture})`;

    return newProfilePic;
}
function CreateUserName(name){
    const newUserName = document.createElement("div");
    newUserName.classList.add("user-name");    

    return newUserName;
}
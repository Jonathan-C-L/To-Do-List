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

function Profile(){
    // reset incase there's an update
    profileContainer.innerHTML = "";

    const profilePic = CreateProfilePicture()
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
const menuIcon = document.getElementById("icon-menu-bars");
const nav = document.getElementById("nav");
const profile = document.getElementById("icon-profile");
const gallery = document.getElementById("icon-camera");
const social = document.getElementById("icon-social-profile");
const closeBtn =  document.getElementById("close-btn");


const menuDisplay = () => {
   nav.style.display = "flex";
}

const menuHide = () => {
    nav.style.display = "none";
}


menuIcon.addEventListener("click", menuDisplay);
closeBtn.addEventListener("click", menuHide);
profile.addEventListener("click", menuHide);
gallery.addEventListener("click", menuHide);

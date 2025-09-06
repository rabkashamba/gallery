const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");
const main = document.getElementById("main");



const menuDisplay = () => {
   nav.style.display = "flex";
   main.addEventListener("click", menuHide);
}

const menuHide = () => {
    nav.style.display = "none";
}


menuIcon.addEventListener("click", menuDisplay);
nav.addEventListener("click", menuHide);

const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");
const main = document.getElementById("main");
const menuList = document.getElementById("menu-list");
const closeBtn =  document.getElementById("close-btn");


const menuDisplay = () => {
   nav.style.display = "flex";
   main.addEventListener("click", menuHide);
}

const menuHide = () => {
    nav.style.display = "none";
}


menuIcon.addEventListener("click", menuDisplay);
closeBtn.addEventListener("click", menuHide);
menuList.addEventListener("click", menuHide);

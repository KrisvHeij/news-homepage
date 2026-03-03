const btn = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const menuImg = document.querySelector("#menu-button img");
const darkBg = document.querySelector(".bg-darken");

// Open & close menu
btn.addEventListener("click", ()=> {
  menu.classList.toggle("menu-show");
  darkBg.classList.toggle("visually-hidden");
  
  if (menu.classList.contains("menu-show")) {
    btn.setAttribute("aria-expanded", "true");
    menuImg.src = "./assets/images/icon-menu-close.svg";
  } else {
    btn.setAttribute("aria-expanded", "false");
    menuImg.src = "./assets/images/icon-menu.svg";
  }
})
// Hamburger Menu
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-list ul");

function active() {
  mobile_menu.classList.toggle("active");
}

// Theme switch
const body = document.querySelector("body");
function toggleTheme() {
  body.classList.toggle("light-theme");
}

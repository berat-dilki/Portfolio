// Hamburger Menu
const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-list ul");

const menu_item = document.querySelector(".header .nav-list ul li a");

function active() {
  mobile_menu.classList.toggle("active");
}

// Theme switch
const body = document.querySelector("body");
function toggleTheme() {
  body.classList.toggle("theme");
}

// closes hamburger menu upon link click
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

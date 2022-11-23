// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const mobile_menu = document.querySelector(".header .nav-list ul");
function active() {
  mobile_menu.classList.toggle("active");
}

// Theme switch
const body = document.querySelector("body");
const ul = document.getElementById("ul");
function toggleTheme() {
  body.classList.toggle("theme");
}

// closes hamburger menu upon link click
const menu_item = document.querySelectorAll(".anchor");
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// Scroll effect for navbar background
document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 100) {
    header.style.backgroundColor = "#262931";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// scroll effect for navbar background (light mode)

// const page = document.getElementById("body");
// let lightMode = header.classlist.contains(".theme");
// header.style.backgroundcolor = lightMode ? "#E5DDDB" : "#262931";

// document.addEventListener("scroll", () => {
//   let lightMode = header.classlist.contains(".theme");
//   let scroll_position = window.scrollY;

//   if (scroll_position > 100) {
//     header.backgroundcolor = lightMode ? "#E5DDDB" : "#262931";
//   } else {
//     header.backgroundcolor = "transparent";
//   }
// });

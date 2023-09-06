/// Hamburger Menu Control

const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("menu")


function toggleMenu() {
  if (menu.style.display === 'none') {
    menu.style.display = 'flex'
  } else {
    menu.style.display = 'none'
  }
}

var prevScrollpos = window.scrollY;

window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-4rem";
  }
  prevScrollpos = currentScrollPos;
}
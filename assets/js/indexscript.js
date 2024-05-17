'use strict';

/**
 * navbar toggle
 */    

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


document.addEventListener("DOMContentLoaded", function() {
  var loader = document.getElementById("loader");
  var loaderShown = sessionStorage.getItem("loaderShown");
  
  if (!loaderShown) {
      setTimeout(function() {
          loader.style.display = "none";
          sessionStorage.setItem("loaderShown", true);
      }, 4000); // Adjust the time as needed
  } else {
      loader.style.display = "none";
  }
});








swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()

    window.onscroll = function() {
        // Check if the user has scrolled to the bottom of the page
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // If scrolled to the bottom, refresh the page
            window.location.reload();
        }
    };












// main.js — basic interactions for Rise Nurse Collective

document.addEventListener("DOMContentLoaded", function () {
    // Mobile nav toggle
    const toggle = document.querySelector(".mobile-toggle");
    const header = document.querySelector("header");
  
    if (toggle && header) {
      toggle.addEventListener("click", function () {
        document.body.classList.toggle("nav-open");
      });
    }
  
    // Dynamic year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
  
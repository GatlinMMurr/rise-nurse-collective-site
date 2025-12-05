// main.js — navigation, footer year, parallax, interactions

document.addEventListener("DOMContentLoaded", function () {
    // Mobile nav toggle
    const toggle = document.querySelector(".mobile-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        document.body.classList.toggle("nav-open");
      });
    }
  
    // Dynamic year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Smooth scroll from scroll hint + anchor buttons
    const scrollHint = document.querySelector(".scroll-hint");
    const howSection = document.querySelector("#how-it-works");
    if (scrollHint && howSection) {
      scrollHint.addEventListener("click", () => {
        howSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  
    // Enable smooth scroll for any in-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", e => {
        const targetId = link.getAttribute("href");
        if (targetId.length > 1) {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  
    // Simple parallax system: elements with [data-parallax="speed"]
    const parallaxEls = Array.from(document.querySelectorAll("[data-parallax]"));
    if (parallaxEls.length) {
      const handleParallax = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        parallaxEls.forEach(el => {
          const speed = parseFloat(el.getAttribute("data-parallax")) || 0.3;
          const offset = scrollY * speed;
          el.style.transform = `translateY(${offset * -1}px)`;
        });
      };
  
      handleParallax();
      window.addEventListener("scroll", handleParallax);
    }
  });
  
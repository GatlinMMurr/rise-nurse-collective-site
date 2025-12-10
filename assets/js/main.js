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
  // Multi-step wizard logic
document.addEventListener("DOMContentLoaded", () => {
  const steps = Array.from(document.querySelectorAll(".wizard-step"));
  const nextBtns = document.querySelectorAll(".wizard-next");
  const backBtns = document.querySelectorAll(".wizard-back");
  const progressBar = document.getElementById("wizardProgress");

  let currentStep = 0;

  function updateStep() {
    steps.forEach((step, index) => {
      step.classList.toggle("active", index === currentStep);
    });

    // Update progress bar
    const progressPercent = ((currentStep + 1) / steps.length) * 100;
    progressBar.style.width = progressPercent + "%";
  }

  nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
      }
    });
  });

  backBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        updateStep();
      }
    });
  });

  updateStep();
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");

    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // If you want only one open at a time:
      items.forEach(i => i.classList.remove("open"));

      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });
});
/* TEAM MEMBER "READ MORE" TOGGLE */
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".team-readmore");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const bio = btn.previousElementSibling;

      bio.classList.toggle("collapsed");

      if (bio.classList.contains("collapsed")) {
        btn.textContent = "Read More";
      } else {
        btn.textContent = "Read Less";
      }
    });
  });
});

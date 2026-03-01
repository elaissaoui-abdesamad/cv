// Année auto
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reveal animation (safe + fallback)
const items = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.12 });

  items.forEach((el) => observer.observe(el));
} else {
  // vieux navigateurs: on affiche tout
  items.forEach((el) => el.classList.add("show"));
}

// Scroll doux
document.documentElement.style.scrollBehavior = "smooth";

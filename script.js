// année auto
document.getElementById("year").textContent = new Date().getFullYear();

// reveal animation simple
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// scroll doux
document.documentElement.style.scrollBehavior = "smooth";

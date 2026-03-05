// script.js — Dolapo Tej Portfolio

// Intersection Observer for fade-up animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

// Smooth scroll for CTA button
document.querySelector(".hero__cta")?.addEventListener("click", () => {
  const projects = document.getElementById("projects");
  if (projects) {
    projects.scrollIntoView({ behavior: "smooth" });
  }
});

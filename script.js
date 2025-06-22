const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");
const backToTop = document.getElementById("backToTop");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Back to top
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Active link highlight on scroll
window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Force scroll to top when user refreshes the page
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

// Force scroll to top on refresh
window.onload = function () {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 10);
};

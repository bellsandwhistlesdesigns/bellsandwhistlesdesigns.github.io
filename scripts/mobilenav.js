console.log("mobilenav.js is working");

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  // Toggle menu open/close
  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // prevents immediate outside click close
    nav.classList.toggle("open");

    toggle.setAttribute(
      "aria-expanded",
      nav.classList.contains("open")
    );
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("open") &&
      !nav.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  //Close when clicking a nav link
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});

console.log("mobilenav.js is working");


document.addEventListener("DOMContentLoaded", () => {
	const toggle = document.querySelector(".navToggle");
	const nav = document.querySelector(".nav-links");

	if (toggle && navLinks) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("active");
		});
	}
});

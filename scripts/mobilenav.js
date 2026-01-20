console.log("mobilenav.js is working");
document.addEventListener("DOMContentLoaded", () => {
	const toggle = document.getElementById("navToggle");
	const nav = document.getElementById("nav");

	toggle.addEventListener("click", () => {
		nav.classList.toggle("open");
		toggle.setAttribute(
		"aria-expanded",
		nav.classList.contains("open")
		);
	});
});

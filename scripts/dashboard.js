//dashboard.js
console.log("dashboard.js is working");
document.addEventListener("DOMContentLoaded", () => {
	const currentUser = JSON.parse(localStorage.getItem("currentUser"));
	
	const logoutBtn = document.getElementById("logout-item");

		// Show or hide logout button globally
	if (logoutBtn) {
		if (currentUser) {
			logoutBtn.style.display = "inline-block";

			logoutBtn.addEventListener("click", () => {
				localStorage.removeItem("currentUser");
				window.location.href = "login.html";
			});
		} else {
			logoutBtn.style.display = "none";
		}
	}

	// Page-specific logic (only runs if elements exist)
	const dashboardHeader = document.querySelector("h2.dashboard-title");
	if (dashboardHeader && currentUser) {
		dashboardHeader.textContent = `Welcome back, ${currentUser.username}`;
	}
	
});

//dashboard.js
console.log("dashboard.js is working");
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const logoutItem = document.getElementById("logout-item");
  const logoutBtn = document.getElementById("logout-btn");

  // Show logout only if logged in
  if (currentUser && logoutItem) {
    logoutItem.style.display = "block";
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("currentUser");
      window.location.href = "login.html";
    });
  }

	// Page-specific logic (only runs if elements exist)
	const dashboardHeader = document.querySelector("h2.dashboard-title");
	if (dashboardHeader && currentUser) {
		dashboardHeader.textContent = `Welcome back, ${currentUser.username}`;
	}
	
});

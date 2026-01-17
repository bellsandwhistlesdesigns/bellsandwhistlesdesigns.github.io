//dashboard.js
console.log("dashboard.js is working");
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const logoutItem = document.getElementById("logoutItem");
  const logoutBtn = document.getElementById("logoutBtn");

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

	// Page-specific logic 
	const dashboardHeader = document.querySelector("h2.dashboard-title");
	if (dashboardHeader && currentUser) {
		dashboardHeader.textContent = `Welcome back, ${currentUser.username}`;
	}
	
});

//dashboard.js
console.log("dashboard.js is working");

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

	/* =========================
     PAGE-SPECIFIC LOGIC
     ========================= */
  const dashboardHeader = document.querySelector("h2.dashboard-title");
  if (dashboardHeader && currentUser) {
    dashboardHeader.textContent = `Welcome back, ${currentUser.username}`;
  }
});

// logout.js

console.log("logout.js is working");

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const logoutBtn = document.getElementById("logoutBtn");

  if (currentUser && logoutBtn) {
    logoutBtn.classList.remove("hidden");

    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("currentUser");
      window.location.href = "login.html";
    });
  }
  
});
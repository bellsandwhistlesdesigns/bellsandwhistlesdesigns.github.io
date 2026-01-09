document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("resetForm");
	const message = document.getElementById("reset-message");
	
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		
		const identifier = document.getElementById("reset-username").value.trim();
		const newPassword = document.getElementById("new-password").value;
		
		let users = JSON.parse(localStorage.getItem("users")) || [];
		
		const userIndex = users.findIndex(
			u => u.username === identifier || u.email === identifier
		);
		
		if (userIindex === -1) {
			message.textContent = "Sorry, user not found";
			message.style.color = "red";
			return;
		}
		
		users[userIindex].password = newPassword;
		localStorage.setItem("users", JSON.stringify(users));
		
		message.textContent = "Password successfully reset, heading back to login!";
		message.style.color = "green";
		
		setTimeout(() => {
			window.location.href = "login.html";
		}, 1500);
	});
});
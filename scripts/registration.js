// Deez registration.js
document.addEventListener("DOMContentLoaded", () => {
	console.log("registration.js is working");
	const registerForm = document.getElementById("registerForm");
	const message = document.getElementById("register-message");
	
	registerForm.addEventListener("submit", (event) => {
		event.preventDefault();
		
		const username = document.getElementById("new-username").value.trim();
		const email = document.getElementById("email").value.trim();
		const password = document.getElementById("new-password").value.trim();
		const confirmPassword = document.getElementById("confirm-password").value.trim();
		
		message.classList.remove("success", "error");
		
		if (!username || !email || !password || !confirm-password) {
			message.textContent = "You must fill out all the fields";
			message.classList.add("error");
			message.style.display = "block";
			return;
		}
		
		if (password !== confirmPassword) {
			message.textContent = "Your passwords do not match!";
			message.classList.add("error");
			message.style.display = "block";
			return;
		}
		
		const joinDate = new Date().toISOString().split("T")[0];
		
		saveUser(username, email, password, joinDate,);
		
		console.log("User saved:", { username, email, password, joinDate });
		
		message.textContent = "Your account was created successfully";
		message.classList.add("success");
		message.style.display = "block";
		
		setTimeout(() => {
			window.location.href = "login.html";
		}, 1500);
	});
});
	
		
	
		
		
			

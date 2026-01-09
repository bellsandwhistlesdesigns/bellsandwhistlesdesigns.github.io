//Deez login.js 

document.addEventListener("DOMContentLoaded", () => { 
	console.log("login.js is working");
	const loginForm = document.getElementById("loginForm");
	const message = document.getElementById("login-message");
		
	loginForm.addEventListener("submit", (event) => {
		event.preventDefault();
		
		const username = document.getElementById("username").value.trim();
		const password = document.getElementById("password").value.trim();
		
		message.classList.remove("success", "error");
		
		const user = findUser(username, password);
		console.log("trying to log in with:", { username, password });
		console.log("Found user:", user);
		
		if (user) {
			
			localStorage.setItem("currentUser", JSON.stringify(user));
			message.textContent = "Successful Login, redirecting...";
			message.classList.add("success");
			message.style.display = "block";
						
			setTimeout(() => {
				console.log("Redirecting to Dashboard...");
				window.location.href = "dashboard.html";
			}, 1500);
		} else {
			message.textContent = "Error, not the right username or password.";
			message.classList.add("error");
			message.style.display ="block";
		}
	});
});
		
	
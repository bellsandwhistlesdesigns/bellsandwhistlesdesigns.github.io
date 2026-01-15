console.log("database.js is working");

// Check if users exist in localStorage, if not, create a default admin
if (!localStorage.getItem("users")) {
	localStorage.setItem("users", JSON.stringify([
    { username: "admin", email: "admin@example.com", password: "password123" }
  ]));
}
// saving a user into localStorage
function saveUser(username, email, password, joinDate) {
	const users = JSON.parse(localStorage.getItem("users")) || [];
	users.push({ username, email, password, joinDate });
	localStorage.setItem("users", JSON.stringify(users));
}
function findUser(usernameOrEmail, password) {
	const users= JSON.parse(localStorage.getItem("users")) || [];
	return users.find(user =>
		(user.username === usernameOrEmail || user.email === usernameOrEmail) &&
		user.password === password
	);
}
// This all works.
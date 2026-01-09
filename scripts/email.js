
console.log("email.js is working");
	const user = "douglasmoth";
	const domain = "outlook.com";
	const emailLink = document.getElementById("email");
		emailLink.innerHTML = `<a href="mailto:${user}@${domain}">Contact me today</a>`;
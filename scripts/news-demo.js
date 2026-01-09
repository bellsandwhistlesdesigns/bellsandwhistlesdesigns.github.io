console.log("news-demo.js is working");
document.addEventListener("DOMContentLoaded", () => {
	const fetchBtn = document.getElementById("fetchNewsBtn");
	const queryInput = document.getElementById("newsQuery");
	const resultsContainer = document.getElementById("news-results");
	const status = document.getElementById("news-status");

	// Mock NewsAPI-style response
	const mockResponse = {
		status: "ok",
		articles: [
			{
				title: "Web Development Trends in 2026",
				description: "A look at modern frontend and API-driven development trends.",
				url: "https://example.com/article1"
			},
			{
				title: "Why RESTful APIs Still Matter",
				description: "How REST continues to power modern applications.",
				url: "https://example.com/article2"
			},
			{
				title: "Building UI from JSON Data",
				description: "Best practices for rendering API responses dynamically.",
				url: "https://example.com/article3"
			}
		]
	};

	fetchBtn.addEventListener("click", () => {
		const query = queryInput.value.trim();

		resultsContainer.innerHTML = "";
		status.textContent = "Fetching news articles...";

		// Simulate API delay
		setTimeout(() => {
			status.textContent = "";

			if (!query) {
				status.textContent = "Please enter a search term.";
				return;
			}

			mockResponse.articles.forEach(article => {
				const card = document.createElement("div");
				card.className = "news-card";

				card.innerHTML = `
					<h3>${article.title}</h3>
					<p>${article.description}</p>
					<a href="${article.url}" target="_blank" rel="noopener noreferrer">
						Read more →
					</a>
				`;

				resultsContainer.appendChild(card);
			});
		}, 800);
	});
});

// news-demo //

console.log("news-demo.js is working");

document.addEventListener("DOMContentLoaded", () => {
	const fetchBtn = document.getElementById("fetchNewsBtn");
	const queryInput = document.getElementById("newsQuery");
	const resultsContainer = document.getElementById("news-results");
	const status = document.getElementById("news-status");

 	const API_BASE = window.location.hostname.includes("netlify.app")
  	? "/.netlify/functions/news"
  	: null;

	fetchBtn.addEventListener("click", async () => {
  	fetchBtn.disabled = true;
  	fetchBtn.textContent = "Fetching…";

  	try {
    	const query = queryInput.value.trim();

    if (!query) {
      	status.textContent = "Please enter a search term.";
      	return;
    }

    if (!API_BASE) {
      	status.textContent = "Live API demo available on the hosted site.";
      	return;
    }

    status.textContent = "Fetching news articles…";

    const response = await fetch(
      	`${API_BASE}?q=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
     	throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    status.textContent = "";

    if (!data.articles || data.articles.length === 0) {
      	status.textContent = "No articles found.";
      	return;
    }

    resultsContainer.innerHTML = "";

    data.articles.forEach(article => {
      	const card = document.createElement("div");
      	card.className = "news-card";
      	card.innerHTML = `
        	<h3>${article.title}</h3>
        	<p>${article.description || ""}</p>
        	<a href="${article.url}" target="_blank" rel="noopener noreferrer">
          	Read more →
        	</a>
      	`;
     	resultsContainer.appendChild(card);
    });
  } catch (err) {
    	status.textContent = "Error fetching articles. Check console for details.";
    	console.error(err);
  } finally {
    setTimeout(() => {
      	fetchBtn.disabled = false;
      	fetchBtn.textContent = "Fetch News";
    }, 5000);
  }
});
});

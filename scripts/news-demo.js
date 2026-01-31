console.log("news-demo.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.getElementById("fetchNewsBtn");
  const queryInput = document.getElementById("newsQuery");
  const resultsContainer = document.getElementById("news-results");
  const status = document.getElementById("news-status");

  // Detect mobile (used only for messaging / awareness)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  fetchBtn.addEventListener("click", async () => {
    const query = queryInput.value.trim();

    // Reset UI
    resultsContainer.innerHTML = "";
    status.textContent = "Fetching news articles…";

    if (!query) {
      status.textContent = "Please enter a search term.";
      return;
    }

    try {
      // Call Netlify serverless function (API key lives there)
      const response = await fetch(
        `/.netlify/functions/news?q=${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        throw new Error("Serverless function request failed");
      }

      const data = await response.json();
      const articles = data.articles;

      if (!articles || articles.length === 0) {
        status.textContent = "No articles found.";
        return;
      }

      status.textContent = "";

      articles.forEach(article => {
        const card = document.createElement("div");
        card.className = "news-card";

        const title = article.title || "Untitled article";
        const description = article.description || "No description available.";
        const url = article.url || "#";

        card.innerHTML = `
          <h3>${title}</h3>
          <p>${description}</p>
          <a href="${url}" target="_blank" rel="noopener noreferrer">
            Read more →
          </a>
        `;

        resultsContainer.appendChild(card);
      });

    } catch (error) {
      console.error("News fetch error:", error);

      status.textContent = isMobile
        ? "Unable to load live articles on mobile at the moment."
        : "Error fetching articles. Please try again.";
    }
  });
});

// news-demo.js

console.log("news-demo.js is working");

document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.getElementById("fetchNewsBtn");
  const queryInput = document.getElementById("newsQuery");
  const resultsContainer = document.getElementById("news-results");
  const status = document.getElementById("news-status");

  const isGitHubPages = window.location.hostname.includes("github.io");
  const isNetlify = window.location.hostname.includes("netlify.app");
  const liveDemoUrl = "https://dapper-raindrop-17978a.netlify.app/restfulapi";

  /* -------------------------------
     GitHub Pages behavior
  -------------------------------- */
  if (isGitHubPages) {
    fetchBtn.textContent = "View Live API Demo";
    fetchBtn.addEventListener("click", () => {
      window.open(liveDemoUrl, "_blank", "noopener,noreferrer");
    });

    status.textContent =
      "Live API demo is hosted separately to manage serverless usage.";
    return;
  }

  /* -------------------------------
     Netlify pause switch
  -------------------------------- */
  const netlifyPaused = true; // flip to false after credit reset

  if (isNetlify && netlifyPaused) {
    fetchBtn.disabled = true;
    fetchBtn.textContent = "API Demo Temporarily Paused";
    status.textContent =
      "High traffic temporarily exhausted serverless credits. Demo will resume after reset.";
    return;
  }

  /* -------------------------------
     Live API logic
  -------------------------------- */
  const API_BASE = "/.netlify/functions/news";

  fetchBtn.addEventListener("click", async () => {
    const query = queryInput.value.trim();

    if (!query) {
      status.textContent = "Please enter a search term.";
      return;
    }

    fetchBtn.disabled = true;
    fetchBtn.textContent = "Fetching…";
    status.textContent = "Fetching news articles…";

    try {
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
      status.textContent =
        "Error fetching articles. Check console for details.";
      console.error(err);
    } finally {
      setTimeout(() => {
        fetchBtn.disabled = false;
        fetchBtn.textContent = "Fetch News";
      }, 5000);
    }
  });
});

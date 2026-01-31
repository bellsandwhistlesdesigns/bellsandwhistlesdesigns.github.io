console.log("news-demo.js is working");

document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.getElementById("fetchNewsBtn");
  const queryInput = document.getElementById("newsQuery");
  const resultsContainer = document.getElementById("news-results");
  const status = document.getElementById("news-status");

  // ===== CONFIG =====
  const NEWSAPI_KEY = "20b2411f80db4714b6b75a56031369a0";
  const LOCAL_API_URL = "http://localhost:3000/articles"; 
  // ===== HELPER: Detect if mobile =====
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  fetchBtn.addEventListener("click", async () => {
    const query = queryInput.value.trim();
    resultsContainer.innerHTML = ""; // clear previous results
    status.textContent = "Fetching news articles...";

    if (!query) {
      status.textContent = "Please enter a search term.";
      return;
    }

    try {
      let articles = [];

      // ===== If mobile, use NewsAPI only =====
      if (isMobile) {
        const newsAPIUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&pageSize=10&apiKey=${NEWSAPI_KEY}`;
        const response = await fetch(newsAPIUrl);
        if (!response.ok) throw new Error("Failed to fetch NewsAPI");
        const data = await response.json();
        articles = data.articles;
      } else {
        // ===== Desktop: try NewsAPI first, fallback to local =====
        try {
          const newsAPIUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&pageSize=10&apiKey=${NEWSAPI_KEY}`;
          const response = await fetch(newsAPIUrl);
          if (response.ok) {
            const data = await response.json();
            articles = data.articles;
          }
        } catch (err) {
          console.warn("NewsAPI fetch failed, using local fallback");
        }

        // Fallback to local JSON if no articles
        if (!articles || articles.length === 0) {
          const localResponse = await fetch(LOCAL_API_URL);
          const localData = await localResponse.json();
          articles = localData.filter(article =>
            article.title.toLowerCase().includes(query.toLowerCase())
          );
        }
      }

      // ===== Display results =====
      if (!articles || articles.length === 0) {
        status.textContent = "No articles found.";
        return;
      }

      status.textContent = "";
      articles.forEach(article => {
        const card = document.createElement("div");
        card.className = "news-card";

        const title = article.title || "No title";
        const description = article.description || "";
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

    } catch (err) {
      console.error(err);
      status.textContent = "Error fetching articles. Check console for details.";
    }
  });
});

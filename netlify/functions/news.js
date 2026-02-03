// netlify/functions/news.js

const CACHE_TTL = 1000 * 60 * 10; // 10 minutes
const cache = new Map();

const RATE_LIMIT_WINDOW = 10_000; // 10 seconds
let lastRequestTime = 0;

const now = Date.now();
if (now - lastRequestTime < RATE_LIMIT_WINDOW) {
  return {
    statusCode: 429,
    body: JSON.stringify({ error: "Too many requests" })
  };
}
lastRequestTime = now;

export async function handler(event) {
  try {
    const rawQuery = event.queryStringParameters?.q || "technology";
    const query = rawQuery.trim().toLowerCase();

    // Check cache
    const cached = cache.get(query);
    const now = Date.now();

    if (cached && now - cached.timestamp < CACHE_TTL) {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "X-Cache": "HIT"
        },
        body: JSON.stringify(cached.data)
      };
    }

    // Fetch fresh data
    const API_KEY = process.env.CURRENTS_API_KEY;
    const url = `https://api.currentsapi.services/v1/search?keywords=${encodeURIComponent(
      query
    )}&language=en&apiKey=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Store in cache
    cache.set(query, {
      timestamp: now,
      data
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=600"
      },
      body: JSON.stringify({
        articles: data.news || []
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}

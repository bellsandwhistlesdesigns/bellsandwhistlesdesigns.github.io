// netlify/functions/news.js

console.log("netlify/function/news.js is working");

const CACHE_TTL = 1000 * 60 * 10; // 10 minutes
const cache = new Map();

export async function handler(event) {
  try {
    const query = event.queryStringParameters?.q || "technology";

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
        "X-Cache": "MISS"
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}

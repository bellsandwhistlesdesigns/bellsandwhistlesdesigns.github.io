const CACHE_TTL = 1000 * 60 * 10; // 10 minutes
const cache = new Map();

export async function handler(event) {
  try {
    const rawQuery = event.queryStringParameters?.q || "technology";
    const query = rawQuery.trim().toLowerCase();

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

    const API_KEY = process.env.CURRENTS_API_KEY;
    if (!API_KEY) {
      throw new Error("Missing API key");
    }

    const apiUrl = `https://api.currentsapi.services/v1/search?keywords=${encodeURIComponent(
      query
    )}&language=en&apiKey=${API_KEY}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Upstream API error: ${response.status}`);
    }

    const apiData = await response.json();

    const normalized = {
      articles: apiData.news || []
    };

    cache.set(query, {
      timestamp: now,
      data: normalized
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "X-Cache": "MISS"
      },
      body: JSON.stringify(normalized)
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}

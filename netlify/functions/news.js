export async function handler(event) {
  const query = event.queryStringParameters?.q || "technology";

  const API_KEY = process.env.CURRENTS_API_KEY;

  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing API key" })
    };
  }

  const url = `https://api.currentsapi.services/v1/search?keywords=${encodeURIComponent(
    query
  )}&language=en&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const text = await response.text();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: text })
      };
    }

    const data = await response.json();

    // Normalize response to match your frontend
    const articles = (data.news || []).map(article => ({
      title: article.title,
      description: article.description || "No description available.",
      url: article.url
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ articles })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}

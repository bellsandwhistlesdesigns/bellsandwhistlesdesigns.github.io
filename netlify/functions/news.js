// news.js set up with Netlify 

export async function handler(event) {
	try {
		const query = event.queryStringParameters.q || "technology";
		const apiKey = process.env.CURRENTS_API_KEY;

		if (!apiKey) {
			return {
				statusCode: 500,
				body: JSON.stringify({ error: "API key missing" })
			};
		}

		const url = `https://api.currentsapi.services/v1/search?keywords=${encodeURIComponent(
			query
		)}&language=en&apiKey=${apiKey}`;

		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Currents API error: ${response.status}`);
		}

		const data = await response.json();

		// Normalize response for frontend
		const articles = (data.news || []).map(article => ({
			title: article.title,
			description: article.description || "No description available.",
			url: article.url
		}));

		return {
			statusCode: 200,
			headers: {
				"Cache-Control": "public, max-age=600" // cache for 10 min
			},
			body: JSON.stringify({ articles })
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				error: "Failed to fetch articles",
				details: error.message
			})
		};
	}
}

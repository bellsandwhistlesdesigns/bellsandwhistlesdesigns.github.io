// Quote of the Day
	const quotes = [
	"Keep pushing forward",
	"Code. Debug. Repeat.",
	"Small steps lead to big progress.",
	"Believe in yourself and build it!",
	"Every bug is a step closer to mastery",
	"Dream it. Code it. Ship it.",
	"Stay curious, keep learning, read books",
	"The best way to predict the future is to invent it.",
    "Code is read more often than it is written.",
    "Make it work, make it right, make it fast.",
    "Simplicity is the soul of efficiency.",
    "Good software feels obvious in hindsight.",
    "The best interfaces disappear.",
    "Small improvements compound over time.",
    "Clarity beats cleverness.",
    "Build it so the next person understands it.",
    "Design is how it works, not just how it looks.",
    "If it’s hard to change, it’s hard to trust.",
    "Good defaults make good experiences.",
    "Solve the problem, not just the symptom.",
    "Consistency is a feature.",
    "The best code explains itself.",
    "Progress is better than perfection.",
    "Software is a conversation with the future.",
    "Every decision is part of the UX.",
    "Maintenance is a feature, not an afterthought.",
    "Readable code is a form of respect.",
    "Constraints make better solutions.",
    "Software is never finished, only refined.",
    "Understanding the problem is half the solution.",
    "Every interaction teaches the user something.",
    "Good UX removes questions before they’re asked.",
    "State is where bugs like to hide.",
    "Clean architecture makes bugs easier to find."
	];
const quoteEl = document.getElementById("quoteOfDay");
const newQuoteBtn = document.getElementById("newQuoteBtn");

const today = new Date().toISOString().split("T")[0];

function getStoredQuote() {
    const storedDate = localStorage.getItem("quoteDate");
    const storedIndex = localStorage.getItem("quoteIndex");

    if (storedDate === today && storedIndex !== null) {
    return quotes[storedIndex];
    }

     return null;
}

function setNewDailyQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    localStorage.setItem("quoteIndex", index);
    localStorage.setItem("quoteDate", today);
    return quotes[index];
}

function renderQuote() {
    const quote = getStoredQuote() || setNewDailyQuote();
    quoteEl.textContent = quote;
}

// Initial render
document.addEventListener("DOMContentLoaded", renderQuote);

// Optional manual override
newQuoteBtn.addEventListener("click", () => {
    quoteEl.classList.remove("fade-in");
    void quoteEl.offsetWidth;
    quoteEl.classList.add("fade-in");

    const index = Math.floor(Math.random() * quotes.length);
    localStorage.setItem("quoteIndex", index);
    localStorage.setItem("quoteDate", today);
    quoteEl.textContent = quotes[index];
});
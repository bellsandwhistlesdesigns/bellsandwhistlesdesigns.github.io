// Quote of the Day
	const quotes = [
	"Progress comes one thoughtful step at a time.",
    "Write today what you wish you could read tomorrow.",
    "Curiosity fuels every great creation.",
    "Mistakes are just hidden lessons waiting to be discovered.",
    "Focus on clarity, the rest will follow.",
    "Build with intention, not just habit.",
    "Every line of effort leaves a mark.",
    "Simplify until it makes sense to everyone.",
    "Change is the only constant worth mastering.",
    "Solve the problem the way you wish someone would solve it for you.",
    "Consistency compounds like interest over time.",
    "Good work speaks quietly but carries far.",
    "Every challenge is an invitation to grow.",
    "Ideas are seeds; action is the sunlight.",
    "The best solutions come from asking better questions.",
    "Don’t just finish tasks, refine them.",
    "A small insight today can prevent a big mistake tomorrow.",
    "Efficiency begins with understanding.",
    "Mistakes reveal the gaps you need to close.",
    "Every attempt is a step closer to mastery.",
    "Thoughtful effort beats rushed perfection.",
    "Design for understanding, not for applause.",
    "Every problem solved teaches the next one.",
    "Growth is a series of small, deliberate steps.",
    "Complexity hides in plain sight, clarity reveals it.",
    "What you create today, shapes tomorrow’s expectations.",
    "Satisfaction comes from solving, not just completing.",
    "Pay attention to the details; they become the story.",
    "A clear mind writes clear code.",
    "Every effort adds value, even if invisible at first.",
    "Learn enough to know what to question.",
    "Good work is invisible when it works, obvious when it fails.",
    "Persistence turns ideas into reality.",
    "Reflection transforms experience into wisdom.",
    "The code you write at 2 AM often carries the lessons of a full day’s thought.",
    "Creativity isn’t a spark! It’s a river. Sometimes slow, sometimes roaring, but always moving.",
    "Every bug you fix is a reminder that mastery comes from persistence, not speed.",
    "The longest nights produce the clearest insights.",
    "Your keyboard is a canvas; every function is a brushstroke of intent.",
    "Ideas need both caffeine and patience to turn into something real.",
    "Progress isn’t measured in hours, it’s measured in what survives the test of time.",
    "Great solutions often hide behind lines of trial and error.",
    "When everyone else sleeps, the quietest lines of code speak the loudest.",
    "Creativity thrives in constraint, elegance emerges from limits.",
    "Each commit is a breadcrumb on the trail of growth.",
    "Motivation fades, but discipline writes the story of achievement.",
    "Debugging is just conversation with your past self.",
    "Every crash teaches humility, every fix builds confidence.",
    "The glow of your screen is the shadow of your ambition.",
    "You don’t finish work. You evolve it, one iteration at a time.",
    "Even small victories late at night feel monumental.",
    "Code, like art, carries a piece of your mind in every line.",
    "Long hours are the quiet architects of great breakthroughs.",
    "The night may be silent, but ideas are loud if you listen.",
    "Persistence turns confusion into clarity, frustration into creation.",
    "Creativity is chasing a thought before it disappears, often in the quiet hours.",
    "Every function, every variable, every decision is part of a story you’re telling the world.",
    "Sleep can wait; the pursuit of understanding never does.",
    "A long day of work is only exhausting if you forget why you started.",
    "Innovation doesn’t knock politely; it whispers when you’re deep in the flow.",
    "The darkest hours are often when the brightest ideas ignite. **My Favourite**",
    "Progress is invisible most of the time, until one day it isn’t.",
    "Your portfolio isn’t just work, it’s proof of every late night and early morning.",
    "What feels tedious today becomes the foundation of mastery tomorrow.",
    "Even the smallest improvements compound when made consistently.",
    "Long nights sharpen focus, not just code.",
    "Ideas are born messy; refinement turns them into brilliance.",
    "Creativity, like code, often lives in the spaces between structure and chaos."
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
// developer challenge.js 

console.log("dev-challenge.js is working");

let currentQuestionIndex = 0;
let score = 0;

let currentShuffeldAnswers = [];


const questionBank = [
{
    question:
    "Which language runs natively in every modern web browser?",

    answers: [
        "Python",
        "Java",
        "JavaScript",
        "C++"
    ],

    correct: 2
},

{
    question:
    "What does CSS stand for?",

    answers: [
        "Computer Style System",
        "Cascading Style Sheets",
        "Creative Styling Syntax",
        "Code Styling Software"
    ],

    correct: 1
},

{
    question:
    "Which company created React?",

    answers: [
        "Google",
        "Microsoft",
        "Meta",
        "Apple"
    ],

    correct: 2
},

{
    question:
    "What does API stand for?",

    answers: [
        "Application Programming Interface",
        "Advanced Program Integration",
        "Application Process Internet",
        "Automated Programming Input"
    ],

    correct: 0
},

{
    question:
    "Which planet is known as the Red Planet?",

    answers: [
        "Venus",
        "Mars",
        "Jupiter",
        "Saturn"
    ],

    correct: 1
},

{
    question:
    "How many bits make one byte?",

    answers: [
        "4",
        "8",
        "16",
        "32"
    ],

    correct: 1
},

{
    question:
    "Which database type stores information as documents?",

    answers: [
        "Relational",
        "Graph",
        "Document",
        "Spreadsheet"
    ],

    correct: 2
},

{
    question:
    "What does HTML primarily define?",

    answers: [
        "Logic",
        "Structure",
        "Database Queries",
        "Server Security"
    ],

    correct: 1
},

{
    question:
    "Which animal is known as the fastest land animal?",

    answers: [
        "Lion",
        "Cheetah",
        "Horse",
        "Falcon"
    ],

    correct: 1
},

{
    question:
    "What does 'responsive design' mean?",

    answers: [
        "A website reacts to errors",
        "A website adapts to different screen sizes",
        "A website loads instantly",
        "A website uses animations"
    ],

    correct: 1
},

{
    question:
    "Which Git command downloads a repository?",

    answers: [
        "git push",
        "git merge",
        "git clone",
        "git commit"
    ],

    correct: 2
},

{
    question:
    "Which technology is used to create the structure of a webpage?",

    answers: [
        "CSS",
        "HTML",
        "SQL",
        "Python"
    ],

    correct: 1
},

{
    question:
    "What is the largest ocean on Earth?",

    answers: [
        "Atlantic",
        "Indian",
        "Pacific",
        "Arctic"
    ],

    correct: 2
},

{
    question:
    "What year was the first iPhone released?",

    answers: [
        "2005",
        "2007",
        "2010",
        "2012"
    ],

    correct: 1
},

{
    question:
    "Which company developed TypeScript?",

    answers: [
        "Google",
        "Microsoft",
        "Amazon",
        "IBM"
    ],

    correct: 1
}

];

// Shuffle Questions
function shuffle(array) {

    return [...array].sort(
        () => Math.random() - 0.5
    );

}

const questions =
    shuffle(questionBank)
    .slice(0, 10);

console.log(
    `Challenge generated with ${questions.length} questions`
);

const questionElement =
    document.getElementById("question");

const answersContainer =
    document.getElementById("answers");

const nextButton =
    document.getElementById("next-btn");


function showQuestion() {

    answersContainer.innerHTML = "";

    const currentQuestion =
        questions[currentQuestionIndex];

    questionElement.textContent =
        currentQuestion.question;

    currentShuffledAnswers =
        currentQuestion.answers
        .map((answer, index) => ({
            text: answer,
            originalIndex: index
        }))
        .sort(() => Math.random() - 0.5);

    currentShuffledAnswers.forEach(
        (answerData) => {

            const button =
                document.createElement("button");

            button.textContent =
                answerData.text;

            button.classList.add(
                "answer-btn"
            );

            button.addEventListener(
                "click",
                () => selectAnswer(
                    answerData.originalIndex
                )
            );

            answersContainer.appendChild(
                button
            );

        }
    );

    nextButton.style.display = "none";
}
function selectAnswer(selectedIndex) {

    const currentQuestion =
        questions[currentQuestionIndex];

    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );

    buttons.forEach(
        (button, index) => {

            button.disabled = true;

            const answerData =
                currentShuffledAnswers[index];

            const isCorrect =
                answerData.originalIndex ===
                currentQuestion.correct;

            const isSelected =
                answerData.originalIndex ===
                selectedIndex;

            if (isCorrect) {

                button.classList.add(
                    "correct"
                );

            }
            else if (isSelected) {

                button.classList.add(
                    "wrong"
                );

            }

        }
    );

    if (
        selectedIndex ===
        currentQuestion.correct
    ) {

        score++;

    }

    nextButton.style.display = "block";
}
nextButton.addEventListener(
    "click",
    () => {

        currentQuestionIndex++;

        if(
            currentQuestionIndex <
            questions.length
        ) {

            showQuestion();

        } else {

            showResults();

        }

    }
);
function showResults() {

    const rank = getRank(score);

    const currentUser =
    JSON.parse(
        localStorage.getItem(
            "currentUser"
        )
    );

if(currentUser) {

    const challengeData = {

        score,
        total: questions.length,

        percentage:
            Math.round(
                (score / questions.length) * 100
            ),

        rank,

        completed:
            new Date()
            .toLocaleDateString()

    };

    const existingData =
        JSON.parse(
            localStorage.getItem(
                `challengeData_${currentUser.username}`
            )
        );

    if(
        !existingData ||
        challengeData.percentage >
        existingData.percentage
    ) {

        localStorage.setItem(
            `challengeData_${currentUser.username}`,
            JSON.stringify(
                challengeData
            )
        );

    }

}
    questionElement.textContent =
        "Challenge Complete!";

    answersContainer.innerHTML = `
        <h3>Your Score: ${score}/${questions.length}</h3>
        <p>Rank: ${rank}</p>
    `;

    nextButton.style.display = "none";
}

function getRank(score) {

    const percentage =
    (score / questions.length) * 100;

    if(percentage === 100)
        return "🚀 Architect";

    if(percentage >= 80)
        return "⚙️ Engineer";

    if(percentage >= 60)
        return "💻 Developer";

    if(percentage >= 30)
        return "🔨 Builder";

    return "🧭 Explorer";
}



showQuestion();
// developer challenge.js 

console.log("dev-challenge.js is working");

let currentQuestionIndex = 0;
let score = 0;
let currentShuffeldAnswers = [];

const challengeVersion = "1.0";

const questionBank = [
{
    category: "Web Development",
    difficultyLevel: "Beginner",
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
    category: "Web Development",
    difficultyLevel: "Beginner",
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
    category: "General Knowledge",
    difficultyLevel: "Beginner",
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
    category: "Web Development",
    difficultyLevel: "Intermediate",
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
    category: "General Knowledge",
    difficultyLevel: "Beginner",
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
    category: "Tech Category",
    difficultyLevel: "Beginner",
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
    category: "Web Development",
    difficultyLevel: "Beginner",
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
    category: "Web Development",
    difficultyLevel: "Beginner",
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
    category: "General Knowledge",
    difficultyLevel: "Beginner",
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
    category: "Web Development",
    difficultyLevel: "Beginner",
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
    category: "Web Development",
    difficultyLevel: "Beginner",
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
    category: "Web Development",
    difficultyLevel: "Beginner",
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
    category: "General Knowledge",
    difficultyLevel: "Beginner",
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
    category: "General Kowledge",
    difficultyLevel: "Beginner",
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
    category: "Web Development",
    difficultyLevel: "Beginner",
    question:
    "Which company developed TypeScript?",
    answers: [
        "Google",
        "Microsoft",
        "Amazon",
        "IBM"
    ],
    correct: 1
},
{
    category: "Bells & Whistles",
    difficultyLevel: "Beginner",
    question:
    "When did the developer start in Web Development?",
    answers: [
        "2002",
        "2000",
        "2006",
        "2013",
        "2023",
    ],
    correct: 4
},
{
    category: "Bells & Whistles",
    difficultyLevel: "Beginner",
    question:
    "What Next.js platform did the developer create?",
    answers: [
        "TaskNova",
        "EasyNova",
        "SuperNova",
        "Mr. Clean",
    ],
    correct: 0
},
{
    category: "Bells & Whistles",
    difficultyLevel: "Beginner",
    question:
    "Where is the devloper located?",
    answer: [
        "Coquitlam, BC",
        "New Westminster, BC",
        "Vancouver, WA",
        "Miami, FL",
        "London, ENG",
    ],
    correct: 0
},
{
    category:"JavaScript",
    difficultyLevel:"Intermediate",

    question:
    "What does the map() method return in JavaScript?",

    answers:[
        "A new array",
        "A single value",
        "A boolean",
        "A string"
    ],

    correct:0
},
{
    category:"JavaScript",
    difficultyLevel:"Intermediate",

    question:
    "Which keyword creates a block-scoped variable?",

    answers:[
        "var",
        "let",
        "define",
        "static"
    ],

    correct:1
},
{
    category:"JavaScript",
    difficultyLevel:"Intermediate",

    question:
    "What does JSON stand for?",

    answers:[
        "Java Source Object Network",
        "JavaScript Object Notation",
        "Joined System Object Node",
        "Java Syntax Output Network"
    ],

    correct:1
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "What does HTTP status code 404 indicate?",

    answers:[
        "Server error",
        "Successful request",
        "Resource not found",
        "Unauthorized access"
    ],

    correct:2
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "What is the purpose of a REST API?",

    answers:[
        "To style webpages",
        "To allow communication between systems",
        "To replace databases",
        "To compile JavaScript"
    ],

    correct:1
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "What is responsive design primarily concerned with?",

    answers:[
        "Database speed",
        "Adapting layouts to devices",
        "Server security",
        "Code encryption"
    ],

    correct:1
},
{
    category:"Technology",
    difficultyLevel:"Intermediate",

    question:
    "What does SQL primarily allow developers to do?",

    answers:[
        "Create animations",
        "Query and manage data",
        "Design images",
        "Build operating systems"
    ],

    correct:1
},
];

// Shuffle Questions
function shuffle(array) {

    return [...array].sort(
        () => Math.random() - 0.5
    );

}
// How many questions
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

const categoryElement =
    document.getElementById("questionCategory");

const difficultyLevel = 
    document.getElementById("difficulty");

// Show Question
function showQuestion() {

    
    answersContainer.innerHTML = "";

    const currentQuestion =
        questions[currentQuestionIndex];
    if(categoryElement) {
        categoryElement.textContent =
        `Category: ${currentQuestion.category}`;
    }
    if(difficultyLevel) {
        difficultyLevel.textContent = 
        `Difficultly: ${currentQuestion.difficultyLevel}`;
    }

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

// Select Answer
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
    ) 
    {
        score++;
    }

    nextButton.style.display = "block";
}
// Event Listener Next Button
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
// Show Results
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

        version: challengeVersion,

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
// Get Rank Function 
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
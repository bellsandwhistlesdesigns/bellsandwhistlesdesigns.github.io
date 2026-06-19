// developer challenge.js 

console.log("dev-challenge.js is working");

let currentQuestionIndex = 0;
let score = 0;
let currentShuffeldAnswers = [];

let showingFactCard = false;

const challengeVersion = "1.1";



const questionBank = [
{
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"General Knowledge",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Intermediate",
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
    category:"General Knowledge",
    difficultyLevel:"Beginner",
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
    category:"Technology",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"General Knowledge",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"General Knowledge",
    difficultyLevel:"Beginner",
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
    category:"General Kowledge",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
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
    category:"Bells & Whistles",
    difficultyLevel:"Beginner",
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
    category:"Bells & Whistles",
    difficultyLevel:"Beginner",
    question:
    "Where is the devloper located?",
    answers: [
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
{
    category:"Bells & Whistles",
    difficultyLevel:"Intermediate",

    question:
    "Whis is the developers favourite quote?",

    answers: [
        "Curiosity fuels every great creation.",
        "The darkest hours are often when the brightest ideas ignite.",
        "The night may be silent, but ideas are loud if you listen.",
        "Ideas are seeds; action is the sunlight.",
    ],

    correct: 1
},
{
    category:"Bells & Whistles",
    difficultyLevel:"Intermediate",

    question: 
    "What does the developer think is boring?",

    answers: [
        "Skydiving",
        "Lawn Darts",
        "Dark Mode",
        "Pickle Ball",
    ],

    correct: 2
},
{
    category:"Technology",
    difficultyLevel:"Intermediate",

    question:
    "What is widely considered the world's first counting machine?",

    answers: [
        "The Pascaline",
        "The Abacus",
        "Morland's calculating machine",
        "Baggage Engine",
    ],
    
    correct: 1
},
{
    category:"Web Development",
    difficultyLevel:"Beginner",

    question:
    "What year did HTML5 make its debut?",

    answers: [
        "1995",
        "2001",
        "2008",
        "1989",
    ],

    correct: 2
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "Can you use figure and figure caption elements to wrap image elements seperately?",

    answers: [
        "Yes",
        "No",
    ],

    correct: 0
},
{
    category:"Web Development",
    difficultyLevel:"Beginner",

    question:
    "What does URL stand for?",

    answers: [
        "Unified Recreations Lab",
        "Unicorn Red Lounge",
        "Ununified Resource Locator",
        "Uniform Resource Locator",
    ],

    correct: 3
},
{
    category:"JavaScript",
    difficultyLevel:"Intermediate",

    question:
    "JavaScript can run on both the client and the server?",

    answers: [

        "True",
        "False",
    ],

    correct: 0
},
{ 
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "What does the .css value, border-image-outset do?",

    answers: [
        "Specifies the amount by which the border image area extends beyond the border box",
        "Specifies the inward offsets of the image-border",
        "Specifies the widths of the image-border",
        "Specifies whether the image-border should be repeated, rounded, or stretched",
    ],

    correct: 0
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:"Can the class attribute commonly used in HTML5 be applied to more than on element on a webpage?",

    answers: [
        "Yes",
        "No",
    ],

    correct: 0
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "What file format is not a correct format in HTML?",

    answers: [
        "PNG",
        "GIF",
        "PSD",
        "SVG",
    ],

    correct: 2
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "What does this mean for a browser, @media (max-width: 600px)?",

    answers: [
        "The desktop browser shrinks to 600px",
        "The browser expands to 600px",
        "All your content on the screen is 600px",
        "Lets mobile browsers view content to a max of 600px",
        "Lets mobile browsers view content to a min of 600px",
    ],

    correct: 3
},
{    
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "What is the descriptive name for logically snarled program statements?",

    answers: [
        "Bucket of Snakes",
        "Unstrucrtured Programs",
        "Spaghetti Code",
        "Needle in a Haystack",
    ],

    correct: 2
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate", 

    question:
    "Can all logic problems be solved with on three basic structures? Sequence, Selection, and Loop?",

    answers: [
        "Yes",
        "No",
    ],

    correct: 0
},
{
    category:"General Knowledge",
    difficultyLevel:"Beginner",

    question:
    "In 1972, how long did the crew of Apollo 17 stay on the moon?",

    answers: [
        "6 days",
        "3 days",
        "2 days",
        "Overnight",
    ],

    correct: 1
},
{
    category:"General Knowledge",
    difficultyLevel:"Beginner",

    question:
    "How many moons does the planet Saturn have?",

    answers: [
        "Over 60",
        "Over 70",
        "Over 80",
        "Over 90",
    ],

    correct: 0
},
{
    category:"General Knowledge",
    difficultyLevel:"Beginner",

    question:
    "What is the atomic number for the element Calcium?",

    answers: [
        "24",
        "21",
        "28",
        "20",
    ],

    correct: 3
},
{
    category:"General Knowledge",
    difficultyLevel:"Beginner",

    question:
    "Does the human foot have 29 bones in it?",

    answers: [
        "Yes",
        "No",
    ],

    correct: 1
},
{
    category:"General Knowledge",
    difficultyLevel:"Beginner",

    question:
    "What angle is greater than 90 degrees, but less than 180 degrees?",

    answers: [
        "Acute Angle",
        "Right Angle",
        "Reflex Angle",
        "Obtuse Angle",
    ],

    correct: 3
},
{
    category:"General Knowledge",
    difficultyLevel:"Intermediate",

    question:
    "What is the atomic mass for the element Tungsten?",

    answers: [
        "190.23",
        "183.84",
        "178.49",
        "106.42",
    ],

    correct: 1
},

{
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"General Knowledge",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Intermediate",
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
    category:"General Knowledge",
    difficultyLevel:"Beginner",
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
    category:"Technology",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"General Knowledge",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
    difficultyLevel:"Beginner",
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
    category:"General Knowledge",
    difficultyLevel:"Beginner",
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
    category:"General Kowledge",
    difficultyLevel:"Beginner",
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
    category:"Web Development",
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
    category:"Bells & Whistles",
    difficultyLevel:"Beginner",
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
    category:"Bells & Whistles",
    difficultyLevel:"Beginner",
    question:
    "Where is the devloper located?",
    answers: [
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
{
    category:"Bells & Whistles",
    difficultyLevel:"Intermediate",

    question:
    "Whis is the developers favourite quote?",

    answers: [
        "Curiosity fuels every great creation.",
        "The darkest hours are often when the brightest ideas ignite.",
        "The night may be silent, but ideas are loud if you listen.",
        "Ideas are seeds; action is the sunlight.",
    ],

    correct: 1
},
{
    category:"Bells & Whistles",
    difficultyLevel:"Intermediate",

    question: 
    "What does the developer think is boring?",

    answers: [
        "Skydiving",
        "Lawn Darts",
        "Dark Mode",
        "Pickle Ball",
    ],

    correct: 2
},
{
    category:"Technology",
    difficultyLevel:"Intermediate",

    question:
    "What is widely considered the world's first counting machine?",

    answers: [
        "The Pascaline",
        "The Abacus",
        "Morland's calculating machine",
        "Baggage Engine",
    ],
    
    correct: 1
},
{
    category:"Web Development",
    difficultyLevel:"Beginner",

    question:
    "What year did HTML5 make its debut?",

    answers: [
        "1995",
        "2001",
        "2008",
        "1989",
    ],

    correct: 2
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "Can you use figure and figure caption elements to wrap image elements seperately?",

    answers: [
        "Yes",
        "No",
    ],

    correct: 0
},
{
    category:"Web Development",
    difficultyLevel:"Beginner",

    question:
    "What does URL stand for?",

    answers: [
        "Unified Recreations Lab",
        "Unicorn Red Lounge",
        "Ununified Resource Locator",
        "Uniform Resource Locator",
    ],

    correct: 3
},
{
    category:"JavaScript",
    difficultyLevel:"Intermediate",

    question:
    "JavaScript can run on both the client and the server?",

    answers: [

        "True",
        "False",
    ],

    correct: 0
},
{ 
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "What does the .css value, border-image-outset do?",

    answers: [
        "Specifies the amount by which the border image area extends beyond the border box",
        "Specifies the inward offsets of the image-border",
        "Specifies the widths of the image-border",
        "Specifies whether the image-border should be repeated, rounded, or stretched",
    ],

    correct: 0
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:"Can the class attribute commonly used in HTML5 be applied to more than on element on a webpage?",

    answers: [
        "Yes",
        "No",
    ],

    correct: 0
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "What file format is not a correct format in HTML?",

    answers: [
        "PNG",
        "GIF",
        "PSD",
        "SVG",
    ],

    correct: 2
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "What does this mean for a browser, @media (max-width: 600px)?",

    answers: [
        "The desktop browser shrinks to 600px",
        "The browser expands to 600px",
        "All your content on the screen is 600px",
        "Lets mobile browsers view content to a max of 600px",
        "Lets mobile browsers view content to a min of 600px",
    ],

    correct: 3
},
{    
    category:"Web Development",
    difficultyLevel:"Intermediate",

    question:
    "What is the descriptive name for logically snarled program statements?",

    answers: [
        "Bucket of Snakes",
        "Unstrucrtured Programs",
        "Spaghetti Code",
        "Needle in a Haystack",
    ],

    correct: 2
},
{
    category:"Web Development",
    difficultyLevel:"Intermediate", 

    question:
    "Can all logic problems be solved with on three basic structures? Sequence, Selection, and Loop?",

    answers: [
        "Yes",
        "No",
    ],

    correct: 0
},
{
    category:"General Knowledge",
    difficultyLevel:"Beginner",

    question:
    "In 1972, how long did the crew of Apollo 17 stay on the moon?",

    answers: [
        "6 days",
        "3 days",
        "2 days",
        "Overnight",
    ],

    correct: 1
},
{
    category:"General Knowledge",
    difficultyLevel:"Beginner",

    question:
    "How many moons does the planet Saturn have?",

    answers: [
        "Over 60",
        "Over 70",
        "Over 80",
        "Over 90",
    ],

    correct: 0
},
{
    category:"General Knowledge",
    difficultyLevel:"Beginner",

    question:
    "What is the atomic number for the element Calcium?",

    answers: [
        "24",
        "21",
        "28",
        "20",
    ],

    correct: 3
},
{
    category:"General Knowledge",
    difficultyLevel:"Beginner",

    question:
    "Does the human foot have 29 bones in it?",

    answers: [
        "Yes",
        "No",
    ],

    correct: 1
},
{
    category:"General Knowledge",
    difficultyLevel:"Beginner",

    question:
    "What anngle is greater than 90 degrees, but less than 180 degrees?",

    answers: [
        "Acute Angle",
        "Right Angle",
        "Reflex Angle",
        "Obtuse Angle",
    ],

    correct: 3
},
{
    category:"General Knowledge",
    difficultyLevel:"Intermediate",

    question:
    "Which country eats the most cheese per capita?",

    answers: [
        "France",
        "Iceland",
        "Canada",
        "Italy",
    ],

    correct: 0
},
{
    category:"General Knowledge",
    difficultyLevel:"Intermediate",

    question:
    "Which country eats the most fish per capita",

    answers: [
        "French Polynesia",
        "Guyana",
        "Maldives",
        "Portugal",
    ],

    correct: 2
},
{
    category:"General Knowledge",
    difficultyLevel:"Intermediate",

    question:
    "Which one of these are not a type of knot",

    answers: [
        "Reef Knot",
        "Bowline Knot",
        "Round turn and two half hitches",
        "Sliding Knot",
    ],

    correct: 3
},
{
    category:"General Knowledge",
    difficultyLevel:"Intermediate",

    question:
    "What ancient Egyptian hieroglyph was used for the letter a?",

    answers: [
        "Snake",
        "Owl",
        "Hand",
        "Eagle",
    ],

    correct: 3
},
{
    category:"General Knowledge",
    difficultyLevel:"Intermediate",

    question:
    "What is the Roman Numeral for 1,000?",

    answers: [
        "V",
        "X",
        "D",
        "M",
    ],

    correct: 3
},
];
const didYouKnowFacts = [

    "Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs.",
    "Octopuses have three hearts.",
    "A chicken can remember over 100 different faces.",
    "Bananas are berries, but strawberries are not.",
    "The Eiffel Tower can grow over 15 cm taller during hot weather.",
    "Saturn would float in water if there were a container large enough.",
    "The first computer bug was an actual moth found in a computer relay.",
    "A day on Venus is longer than a year on Venus.",
    "Sharks existed before trees.",
    "The human brain contains roughly 86 billion neurons.",
    "The horns of a Triceratops could reach lengths of over 3 feet (1 meter).",
    "The Water Hemlock is the most deadly plant in North America; a tiny dose can be lethal.",
    "Cats can be right or left pawed. Females most likely to use the right, while males tend to use left.",
    "A group of flamingos is called a flamboyance.",
    "Approximately 18 million acres of forest are lost worldwide every year.",
    "The circumference of Earth at the equator is approximately 24,901 miles (40,075 km).",
    "Antarctica is the coldest, driest, windiest, and highest continent on earth.",
    "The Taj Mahal is exactly as wide as it is high.",
    "Johannes Gutenberg invented the printing press around the year 1440.",
    "Strawberries are part of the Rose family of flowering plants."

];
// Shuffle Questions
function shuffle(array) {

    return [...array].sort(
        () => Math.random() - 0.5
    );

}
const selectedDifficulty =
    localStorage.getItem(
        "selectedDifficulty"
    ) || "all";

const selectedCategory =
    localStorage.getItem(
        "selectedCategory"
    ) || "all";

let filteredQuestions =
    questionBank;

// Filter by Difficulty
if(
    selectedDifficulty !== "all"
) {
    filteredQuestions =
        filteredQuestions.filter(
            question =>
                question.difficultyLevel ===
                selectedDifficulty
        );
}

// Filter by Category
if(
    selectedCategory !== "all"
) {
    filteredQuestions =
        filteredQuestions.filter(
            question =>
                question.category ===
                selectedCategory
        );
}

// Generate Challenge

const questions =
    shuffle(filteredQuestions)
    .slice(0, 15);

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

// Did you know cards
function showDidYouKnow() {

    showingFactCard = true;

    const randomFact =
        didYouKnowFacts[
            Math.floor(
                Math.random() *
                didYouKnowFacts.length
            )
        ];

    questionElement.innerHTML =
        "💡 Did You Know?";

    answersContainer.innerHTML = `
        <div class="fact-card">
            <p>${randomFact}</p>
        </div>
    `;

    nextButton.style.display = "block";
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

        if(showingFactCard) {
            showingFactCard = false;
            showQuestion();
            return;
        }

        currentQuestionIndex++;

        if(
            currentQuestionIndex <
            questions.length
        ) {

            if(
                currentQuestionIndex > 0 &&
                currentQuestionIndex % 5 === 0
            ) {
                showDidYouKnow();
            } else {
                showQuestion();
            }
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
        return "🚀 Champion Badge";

    if(percentage >= 80)
        return "⚙️ Jeopardy Badge";

    if(percentage >= 60)
        return "💻 Computer Badge";

    if(percentage >= 30)
        return "🔨 Builder badge";

    return "🧭 Explorer";
}

showQuestion();
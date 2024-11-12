const questions = [
    {
        question: "Do you prefer indoor or outdoor plants?",
        choices: ["Indoor", "Outdoor", "Both"]
    },
    {
        question: "What is the typical temperature of where you will keep your plant?",
        choices: ["Below 40°F (4°C)", "40°F to 65°F (4°C to 18°C)", "65°F to 85°F (18°C to 29°C)", "Above 85°F (29°C)"]
    },
    {
        question: "What is the humidity level of where the plant will be?",
        choices: ["Low", "Average", "High"]
    },
    {
        question: "What kind of natural light does the area receive?",
        choices: ["Low", "Medium", "Bright", "Partial shade", "Full sun"]
    },
    {
        question: "Is it important that your plant is pet-friendly?",
        choices: ["Yes", "No"]
    },
    {
        question: "What size of plant are you looking for?",
        choices: ["Small (< 3ft)", "Medium (3 - 10 ft)", "Large (10ft <)"]
    },
    {
        question: "What is your experience level with plants?",
        choices: ["Beginner (Easy Plants)", "Moderate (Moderate Plants)", "Expert (Difficult Plants)"]
    },
    {
        question: "How often are you away from home?",
        choices: ["Rarely", "Occasionally", "Frequently"]
    },
    {
        question: "How often do you want to water your plant?",
        choices: ["Low (infrequently)", "Moderate", "High (frequently)"]
    },
    {
        question: "Do you prefer a plant that is resistant to pests?",
        choices: ["Yes", "No"]
    },
    {
        question: "What type of growth habit do you prefer in a plant?",
        choices: ["Upright", "Trailing/Vining", "Bushy", "Compact"]
    },
    {
        question: "Are you looking for a flowering or non-flowering plant?",
        choices: ["Flowering", "Non-flowering", "No preference"]
    },
    {
        question: "What type of aesthetic are you drawn to in plants?",
        choices: ["Minimalistic and modern", "Lush and tropical", "Quirky and unique", "Rustic and natural"]
    },
    {
        question: "What type of colors do you prefer in your plants?",
        choices: ["Green", "Vibrant colors (red, pink, purple, blue)", "Subtle tones (white, pale yellow)"]
    },
    {
        question: "What kind of atmosphere are you trying to create with your plants?",
        choices: ["Calm/serene", "Energizing/vibrant", "Cozy/inviting"]
    }
];


let currentQuestionIndex = 0;

// Function to load a question based on the current index
function loadQuestion() {
    // Check if there are more questions
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("question-text").textContent = "Thank you for completing the quiz!";
        document.querySelector(".card-container").style.display = "none";
        document.querySelector(".skip-button").style.display = "none";
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question-number").textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById("question-text").textContent = questionData.question;

    // Update choices
    questionData.choices.forEach((choice, index) => {
        document.getElementById(`choice-${index}`).textContent = choice;
        document.getElementById(`choice-${index}`).style.display = "block";
    });

    // Hide extra choices if less than 3
    for (let i = questionData.choices.length; i < 3; i++) {
        document.getElementById(`choice-${i}`).style.display = "none";
    }
}

// Function to handle selecting a choice
function selectChoice(choiceIndex) {
    const selectedChoice = questions[currentQuestionIndex].choices[choiceIndex];
    alert(`You selected: ${selectedChoice}`);

    // Move to the next question
    currentQuestionIndex++;
    loadQuestion();
}

// Function to skip the current question
function skipQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Load the first question initially
loadQuestion();


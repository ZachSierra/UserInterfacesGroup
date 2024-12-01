//This javascript changes out question number, question, and answer choices in questionnaire.html
// Array of questions with choices
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
        choices: ["Green", "Vibrant colors (red, pink, blue)", "Subtle tones (white, pale yellow)"]
    },
    {
        question: "What kind of atmosphere are you trying to create with your plants?",
        choices: ["Calm/serene", "Energizing/vibrant", "Cozy/inviting"]
    }
];


let currentQuestionIndex = 0;

// Array to store user answers
let userChoices = [];

// Function to load a question based on the current index
function loadQuestion() {
    // Check if there are more questions
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("question-text").textContent = "Thank you for completing the quiz!";
        document.querySelector(".card-container").style.display = "none";
        document.querySelector(".skip-button").style.display = "none";
        document.getElementById("end-options").style.display = "block"; // Show end options

        // Populate the review section with the user's choices
        const answersList = document.getElementById("answers-list");
        answersList.innerHTML = '';
        userChoices.forEach(answer => {
            answersList.innerHTML += `<p><strong>${answer.question}</strong><br>Answer: ${answer.answer}</p>`;
        });
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question-number").textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById("question-text").textContent = questionData.question;

    // Clear and reset all choice elements
    const maxChoices = 5; // Adjust based on the maximum possible choices in any question
    for (let i = 0; i < maxChoices; i++) {
        const choiceElement = document.getElementById(`choice-${i}`);
        if (i < questionData.choices.length) {
            choiceElement.textContent = questionData.choices[i];
            choiceElement.style.display = "block";
        } else {
            choiceElement.style.display = "none";
        }
    }

    adjustGridLayout();
}


// Function to adjust the grid layout based on the number of visible cards 3 or 4
function adjustGridLayout() {
    const visibleCards = Array.from(document.querySelectorAll(".card"))
        .filter(card => card.style.display !== "none"); // Count only visible cards

    const visibleCount = visibleCards.length; // Get the number of visible cards
    const container = document.querySelector(".card-container");

    // Adjust grid layout based on visible card count
    if (visibleCount === 3) {
        container.style.gridTemplateColumns = "1fr 1fr 1fr";
        container.style.gridTemplateRows = "none"; // Reset rows for clarity
    } else if (visibleCount === 4) {
        container.style.gridTemplateColumns = "1fr 1fr";
        container.style.gridTemplateRows = "1fr 1fr";
    } else if (visibleCount === 5) {
        container.style.gridTemplateColumns = "1fr 1fr";
        container.style.gridTemplateRows = "auto auto auto"; // Wrap rows dynamically
    } else if (visibleCount === 2) {
        container.style.gridTemplateColumns = "1fr 1fr";
        container.style.gridTemplateRows = "none"; // Reset rows
    } else {
        // Default for any other number (e.g., 1 or 0)
        container.style.gridTemplateColumns = "1fr";
        container.style.gridTemplateRows = "none";
    }
}



// Function to handle selecting a choice
function selectChoice(choiceIndex) {
    const selectedChoice = questions[currentQuestionIndex].choices[choiceIndex];
    //alert(`You selected: ${selectedChoice}`);

    // Store the user's choice in the array
    userChoices.push({ question: questions[currentQuestionIndex].question, answer: selectedChoice });
    // Move to the next question
    currentQuestionIndex++;

    loadQuestion();
}

// Function to skip the current question
function skipQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userChoices = [];
    window.location.reload();
    // document.querySelector(".card-container").style.display = "block";
    // document.querySelector(".skip-button").style.display = "inline-block";
    // document.getElementById("end-options").style.display = "none";
    // loadQuestion();
}

// Function to submit the quiz
function submitQuiz() {
    window.location.href = "matches.html";
    // You can add additional actions here, such as sending the data to a backend server.
    // Reset the UI after submission (optional)
    startOver();
}

function showResponses() {
    const responseList = document.getElementById("responses-list");
    responseList.innerHTML = ""; // Clear previous responses

    userChoices.forEach((choice, index) => {
        const responseItem = document.createElement("p");
        responseItem.textContent = `Q${index + 1}: ${choice.question} - Your answer: ${choice.answer}`;
        responseList.appendChild(responseItem);
    });

    // Make sure the modal is displayed
    document.getElementById("responseModal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("responseModal").style.display = "none";
}

// Load the first question initially
loadQuestion();


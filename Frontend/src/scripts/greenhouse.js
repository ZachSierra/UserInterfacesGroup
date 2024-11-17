// Mock Data: Questionnaire Results
const userPlants = [
    { name: "Aloe Vera", img: "../assets/images/aloe-vera-plant-in-square-vase_3.jpg" },
    { name: "Bonsai Tree", img: "../assets/images/bonsai.jpg" },
    { name: "Monstera", img: "../assets/images/Monstera-Deliciosa-Window-Leaf-Square-Image-420x420.jpg" },

];

// Function to Dynamically Populate Cards
function populateGreenhouse(plants) {
    const container = document.getElementById("plant-cards-container");

    plants.forEach((plant) => {
        // Create the Bootstrap Card
        const card = document.createElement("div");
        card.className = "col-md-2"; // Bootstrap column
        card.innerHTML = `
            <div class="card original-card" onclick="clickCard(this)">
                <img src="${plant.img}" class="card-img-top" alt="${plant.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${plant.name}</h5>
                </div>
            </div>
            <div class="card new-card d-none" onclick="clickCard(this)">
                <div class="card-body text-center">
                    <h5 class="card-title">Details for ${plant.name}</h5>
                    <p>This is some extra information about the plant.</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}


function clickCard(card) {
    if (card.classList.contains('original-card')) {
        const newCard = card.nextElementSibling; // Find the sibling new card
        card.classList.add('d-none'); // Hide the original card
        newCard.classList.remove('d-none'); // Show the new card
    } 
    else if (card.classList.contains('new-card')) {
        const originalCard = card.previousElementSibling; // Find the sibling original card
        card.classList.add('d-none'); // Hide the new card
        originalCard.classList.remove('d-none'); // Show the original card
    }
}
// Call the Function to Populate Greenhouse
populateGreenhouse(userPlants);

function loadGreenhouse() {
    // Retrieve greenhouse data from localStorage
    const greenhousePlants = JSON.parse(localStorage.getItem('greenhousePlants')) || [];

    // Get the container where cards will be displayed
    const container = document.getElementById('plant-cards-container');

    // Clear any existing content (if needed)
    container.innerHTML = '';

    // Generate cards for each plant in the greenhouse
    greenhousePlants.forEach((plant, index) => {
        const card = document.createElement('div');
        card.className = 'col-md-4'; // Bootstrap column
        card.innerHTML = `
            <div class="card border-primary mb-3 w-100" style="height: 480px;">
                <img src="${plant.img}" class="card-img-top" alt="${plant.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${plant.name}</h5>
                    <!-- Delete Button -->
                    <button class="btn btn-danger mt-3" onclick="deletePlant(${index})">Delete</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}


// Function to delete a plant from the greenhouse and confirms with the user
function deletePlant(index) {
    if (confirm("Are you sure you want to remove this plant from your greenhouse?")) {
        let greenhousePlants = JSON.parse(localStorage.getItem('greenhousePlants')) || [];
        greenhousePlants.splice(index, 1);
        localStorage.setItem('greenhousePlants', JSON.stringify(greenhousePlants));
        loadGreenhouse();
    }
}


// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadGreenhouse);


//Captures that the user wants to add this plant to their greenhouse
function addToGreenhouse(button) {
    // Locate the parent card to extract plant information
    const card = button.closest('.card');
    const plantName = card.querySelector('.card-title').textContent.trim();
    const plantImage = card.querySelector('img').src;

    // Retrieve existing greenhouse data from localStorage
    let greenhousePlants = JSON.parse(localStorage.getItem('greenhousePlants')) || [];

    // Add the new plant to the greenhouse array
    greenhousePlants.push({ name: plantName, img: plantImage });

    // Save updated greenhouse array back to localStorage
    localStorage.setItem('greenhousePlants', JSON.stringify(greenhousePlants));

    // Feedback to the user
    alert(`${plantName} has been added to your Greenhouse!`);

    // Optionally, disable the button to prevent duplicate additions
    button.textContent = "Added!";
    button.disabled = true;
}



//Shows the plant information
function clickCard(card) {
    // Check if the clicked card is an "original" card
    if (card.classList.contains('original-card')) {
        const newCard = card.nextElementSibling; // Find the sibling new card
        card.classList.add('d-none'); // Hide the original card
        newCard.classList.remove('d-none'); // Show the new card
    }
    // Check if the clicked card is a "new" card
    else if (card.classList.contains('new-card')) {
        const originalCard = card.previousElementSibling; // Find the sibling original card
        card.classList.add('d-none'); // Hide the new card
        originalCard.classList.remove('d-none'); // Show the original card
    }
}


function renderGreenhouse() {
    const greenhouseList = document.getElementById('greenhouse-list');
    greenhouseList.innerHTML = ''; // Clear previous content

    greenhousePlants.forEach((plant) => {
        const plantCard = document.createElement('div');
        plantCard.className = 'col';
        plantCard.innerHTML = `
            <div class="card border-primary mb-3 w-100" style="height: 480px;">
                <img src="${plant.img}" class="card-img-top" alt="${plant.name}">
                <div class="card-body">
                    <h5 class="card-title">${plant.name}</h5>
                </div>
            </div>
        `;
        greenhouseList.appendChild(plantCard);
    });
}

//This pulls from the backend to get a random plant suggestion
function suggestRandomPlant() {
    fetch('http://localhost:3000/api/randomPlant')
        .then((response) => response.json())
        .then((plant) => {
            const plantSuggestionContainer = document.getElementById('plant-suggestion');
            plantSuggestionContainer.innerHTML = `
                <div class="card">
                    <img src="path_to_image_placeholder.jpg" class="card-img-top" alt="${plant.Common_Name}">
                    <div class="card-body">
                        <h5 class="card-title">${plant.Common_Name}</h5>
                        <p class="card-text">${plant.Description}</p>
                        <button class="btn btn-primary" onclick="addToGreenhouse(this)">Add to Greenhouse</button>
                    </div>
                </div>
            `;
        })
        .catch((error) => {
            console.error('Error fetching random plant:', error);
        });
}

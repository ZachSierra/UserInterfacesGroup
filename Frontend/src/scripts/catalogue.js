/*export function filterPlants() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const plantCards = document.querySelectorAll(".card");

    plantCards.forEach(card => {
        const plantName = card.querySelector(".card-title") ? card.querySelector(".card-title").textContent.toLowerCase() : "";

        if (plantName.includes(searchQuery)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
*/
export function filterPlants() {
    const petFriendlyFilter = document.getElementById("filterPetFriendly").value; // Pet-friendly filter value
    const plantCards = document.querySelectorAll(".card"); // All plant cards

    // If filter is set to "All", show all cards and hide new cards
    if (petFriendlyFilter === "All") {
        console.log("Resetting to show all cards...");
        initializeCatalogue(); // Re-render the entire catalogue
        
        return; // Exit the function as no further filtering is needed
    }

    // Loop through all the plant cards to apply filters
    plantCards.forEach(card => {
        // Get the "data-pet-friendly" attribute for each card
        const plantPetFriendly = card.getAttribute("data-pet-friendly");
        
        // Check if the plant matches the pet-friendly filter
        const matchesPetFriendly = petFriendlyFilter ? plantPetFriendly === petFriendlyFilter.toLowerCase() : true;

        // Show or hide the original card based on the filter
        if (matchesPetFriendly) {
            card.classList.remove('d-none'); // Show the card
        } else {
            card.classList.add('d-none'); // Hide the card
        }

        // Hide the new card if the filter doesn't match
        const newCard = document.getElementById(card.id + "-new");
        if (newCard) {
            newCard.classList.add('d-none'); // Hide the new card when filter doesn't match
        }
    });
}





// Helper function to fetch CSV and parse into plant data
async function fetchPlantInventory(csvFile) {
    try {
        const response = await fetch(csvFile);
        const data = await response.text();
        const plants = parseCSV(data);
        return plants;
    } catch (error) {
        console.error("Error fetching plant inventory:", error);
    }
}

// Parse CSV into plant objects
function parseCSV(data) {
    const rows = data.split("\n").filter(row => row.trim()); // Remove empty rows
    const plants = rows.map(row => {
        const [commonName, scientificName, maxSize, difficulty, location, light, water, growthHabit, flowering, aesthetic, atmosphere, colors, temperature, humidity, pet_friendly, pest_resistant, description ] = row.split(",");
        return {
            commonName: commonName.trim(),
            scientificName: scientificName.trim(),
            maxSize: maxSize.trim(),
            difficulty: difficulty.trim(),
            light: light.trim(),
            water: water.trim(),
            growthHabit: growthHabit.trim(),
            flowering:flowering.trim(),
            aesthetic:aesthetic.trim(),
            atmosphere:atmosphere.trim(),
            colors: colors.trim(),
            temperature: temperature.trim(),
            humidity:humidity.trim(),
            pet_friendly: pet_friendly.trim(),
            description: description.trim(),
            img: getImageSrc(commonName.trim()) // Use getImageSrc to get the correct image path
        };
    });
    return plants;
}

function renderPlantCatalogue(plants) {
    const catalogueContainer = document.getElementById("greenhouseCards");
    catalogueContainer.innerHTML = ""; // Clear existing content

    plants.forEach(plant => {


        // Create the original card
        const originalCard = document.createElement("div");
        //originalCard.className = "col original-card";
        originalCard.classList.add(  'col', 'card', 'border-primary', 'mb-3', 'original-card');
        originalCard.setAttribute("id", `${plant.commonName.replace(/\s+/g, "")}-original`);
        originalCard.onclick = () => clickCard(originalCard); // Attach clickCard to original card
        // Add data attributes for filtering (water and pet friendly)
        originalCard.setAttribute("data-water", plant.water.toLowerCase());
        //originalCard.setAttribute("data-pet-friendly", plant.pet_friendly ? "Yes" : "No");
        originalCard.setAttribute("data-pet-friendly", plant.pet_friendly.toLowerCase());

        originalCard.innerHTML = `
            <div>
                <img src="${plant.img}" class="card-img-top" alt="${plant.commonName}">
                <div class="card-body">
                    <h5 class="card-title">${plant.commonName}</h5>       
                    <button class="btn btn-primary" onclick="addToGreenhouse('${plant.commonName}', '${plant.img}')">Add to Greenhouse</button>
                </div>
            </div>
        `;

        // Create the new card
        const newCard = document.createElement("div");
       // newCard.className = "col new-card d-none"; // Initially hidden
        newCard.classList.add('col', 'card','new-card', 'd-none', 'border-primary', 'mb-3');
        newCard.setAttribute("id", `${plant.commonName.replace(/\s+/g, "")}-new`);
       
        newCard.onclick = () => clickCard(newCard); // Attach clickCard to new card
        //newCard.style.padding = "100%";

        newCard.innerHTML = `
        <h5 class="card-title">${plant.commonName}</h5>
        <table class="table table-borderless text-start">
            <tbody>
                <tr>
                    <td>Max Size:</td>
                    <td>${plant.maxSize}</td>
                </tr>
                <tr>
                    <td>Difficulty:</td>
                    <td>${plant.difficulty}</td>
                </tr>
                <tr>
                    <td>Light:</td>
                    <td>${plant.light}</td>
                </tr>
                <tr>
                    <td>Water:</td>
                    <td>${plant.water}</td>
                </tr>
                <tr>
                    <td>Atmosphere:</td>
                    <td>${plant.atmosphere}</td>
                </tr>
                <tr>
                    <td>Pet Friendly:</td>
                    <td>${plant.pet_friendly}</td>
                </tr>
            </tbody>
        </table>
        <h6>${plant.description}</h6>
 
        `;

        // Append both cards to the container
        catalogueContainer.appendChild(originalCard);
        catalogueContainer.appendChild(newCard);
    });
}


// Add plant to Greenhouse
window.addToGreenhouse = function(name, img) {
    const greenhouse = JSON.parse(localStorage.getItem("greenhousePlants")) || [];
    greenhouse.push({ name, img });
    localStorage.setItem("greenhousePlants", JSON.stringify(greenhouse));
    alert(`${name} has been added to your Greenhouse!`);
};

async function initializeCatalogue() {
    const plants = await fetchPlantInventory("../scripts/PlantProfiles.csv");
    if (plants) renderPlantCatalogue(plants);
}

initializeCatalogue();

function getImageSrc(name){
    let src = "";
    let str = "";
    if(name.includes("/")){
        let plantName = name.split("/");
        src = plantName[0];
        //console.log(src);
    } else{
        name.trim();
        src = name.split(" ").join("");
        //console.log(src);
    }
    

    if(src === "AloeVera" || src === "FiddleLeafFig"){
        return str = "../assets/img/" + src +".jpeg";
    } else if(src === "Areca/ButterflyPalm"){
        return str = "../assets/img/ButterflyPalm.jpg";
    } else if(src == "Areca "){
        return str = "../assets/img/ButterflyPalm.jpg";
    } else if(src == "Pothos "){
        return str = "../assets/img/Pothos.jpg";
    } else if(src == "Calathea "){
        return str = "../assets/img/Calathea.jpg";
    }

    return str = "../assets/img/" + src +".jpg";
}

// Function to switch between original and new cards
function clickCard(card) {
    const sciName = card.id.split("-");
    const name = sciName[0];

    if (card.classList.contains('original-card')) {
        const newCard = document.getElementById(name + "-new");
        if (!newCard) {
            console.error("No next sibling found for the original card:", card);
            return;
        }
        card.classList.add('d-none'); // Hide the original card
        newCard.classList.remove('d-none'); // Show the new card
        console.log("Switched to new card:", newCard);
    } else if (card.classList.contains('new-card')) {
        const originalCard = document.getElementById(name + "-original");
        if (!originalCard) {
            console.error("No previous sibling found for the new card:", card);
            return;
        }
        card.classList.add('d-none'); // Hide the new card
        originalCard.classList.remove('d-none'); // Show the original card
        console.log("Switched to original card:", originalCard);
    }
}

// Set up event listener for search input
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", filterPlants);
// Add event listeners for dropdown filters
document.getElementById("filterWater").addEventListener("change", filterPlants);
document.getElementById("filterPetFriendly").addEventListener("change", filterPlants);
/*
//If we want it to work after user hits the enter button
// Set up event listener for Enter key press on search input
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        filterPlants(); // Call the filter function when "Enter" is pressed
    }
});
*/
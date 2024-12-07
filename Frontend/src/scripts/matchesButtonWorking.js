/**
 * 
 * THIS ONE WAS DONE FOR TESTING BUT NOW WORKS
 * Connected to matches.html
 * Imports plant inventory from PlantProfiles.csv
 * Creates matches from passed user choices from quiz
 * Creates divs for UI
 * 
 * by (?) and Sam Lagman
 */

import { Matcher } from "./Matcher.js"
import { Quiz } from "./Quiz.js"
import { Plant } from "./Plant.js"
import { userChoices } from './questionnaire.js';

//Captures that the user wants to add this plant to their greenhouse
window.addToGreenhouse = function(button) {
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

// returns to Home
window.returnHome = function(){
    const shouldRestart = confirm(`Do you wish to return home?`);
    if (shouldRestart) { // If OK is clicked
        // Reset quiz data
        window.location.href='index.html';
        currentQuestionIndex = 0;
        userChoices = [];
         // Reload the page to restart the quiz
    } else {
        // Do nothing if Cancel is clicked
        console.log("Quiz restart cancelled.");
    }
}

//Shows the plant information
/*
window.clickCard = function(card) {
    // Check if the clicked card is an "original" card
    console.log("Card clicked.");
    console.log(card.classList);
    if (card.classList.contains('original-card')) {
        const newCard = card.nextElementSibling; // Find the sibling new card
        console.log("Next Card: ", newCard.classList);
        card.classList.add('d-none'); // Hide the original card
        newCard.classList.remove('d-none'); // Show the new card
        console.log("Showing new card...");
    }
    // Check if the clicked card is a "new" card
    else if (card.classList.contains('new-card')) {
        const originalCard = card.previousElementSibling; // Find the sibling original card
        card.classList.add('d-none'); // Hide the new card
        originalCard.classList.remove('d-none'); // Show the original card
    }
}
*/

window.clickCard = function (card) {

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
};




//This pulls from the backend to get a random plant suggestion
// function suggestRandomPlant() {
//     fetch('http://localhost:3000/api/randomPlant')
//         .then((response) => response.json())
//         .then((plant) => {
//             const plantSuggestionContainer = document.getElementById('plant-suggestion');
//             plantSuggestionContainer.innerHTML = `
//                 <div class="card">
//                     <img src="path_to_image_placeholder.jpg" class="card-img-top" alt="${plant.Common_Name}">
//                     <div class="card-body">
//                         <h5 class="card-title">${plant.Common_Name}</h5>
//                         <p class="card-text">${plant.Description}</p>
//                         <button class="btn btn-primary" onclick="addToGreenhouse(this)">Add to Greenhouse</button>
//                     </div>
//                 </div>
//             `;
//         })
//         .catch((error) => {
//             console.error('Error fetching random plant:', error);
//         });
// }

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

function displayMatches(matches) {
    let greenhouseContainer = document.getElementById("greenhouseCards");

    for (let i = 0; i < matches.length; i++) {
        // Used to set IDs of both cards
        const matchSciName = matches[i].scientificName.split(" ");
        const sciName = matchSciName[1];

        // Bootstrap column
        const column = document.createElement("div");
        column.className = "col-md-4"; // 3 cards per row
        column.style.display = "flex"; // Ensure cards stretch evenly

        // Wrapper div for card flip
        const cardWrapper = document.createElement("div");
        cardWrapper.className = "card-wrapper";
        cardWrapper.style.position = "relative"; // Ensure cards overlap
        cardWrapper.style.width = "580px"; // Full width of column
        cardWrapper.style.height = "650px"; // Uniform card height

        // Original Card
        const originalCard = document.createElement("div");
        originalCard.className = "card border-primary original-card";
        originalCard.id = `${sciName}-original`;
        originalCard.style.position = "absolute"; // Stack cards
        originalCard.style.top = "0";
        originalCard.style.left = "0";
        originalCard.style.width = "100%"; // Match wrapper width
        originalCard.style.height = "100%"; // Match wrapper height
        originalCard.style.padding = "10%";
        originalCard.setAttribute("onclick", "clickCard(this)");

        // Add content to the original card
        originalCard.innerHTML = `
            <img src="${getImageSrc(matches[i].commonName)}" class="card-img-top" style="width: 100%;" alt="Plant Image">
            <div class="card-body">
                <div class="card-title">${matches[i].commonName}</div>
                <button type="button" class="btn btn-primary" onclick="addToGreenhouse(this)">Add to Greenhouse</button>
            </div>
        `;

        // Flipped Card
        const newCard = document.createElement("div");
        newCard.className = "card border-primary new-card d-none";
        newCard.id = `${sciName}-new`;
        newCard.style.position = "absolute"; // Stack cards
        newCard.style.top = "0";
        newCard.style.left = "0";
        newCard.style.width = "100%"; // Match wrapper width
        newCard.style.height = "100%"; // Match wrapper height
        newCard.style.padding = "10%";
        newCard.onclick = () => clickCard(newCard);

        // Add content to the flipped card
        newCard.innerHTML = `
            <h5 class="card-title">${matches[i].commonName}</h5>
            <table class="table table-borderless text-start">
                <tbody>
                    <tr>
                        <td>Max Size:</td>
                        <td>${matches[i].maxSize}</td>
                    </tr>
                    <tr>
                        <td>Difficulty:</td>
                        <td>${matches[i].difficulty}</td>
                    </tr>
                    <tr>
                        <td>Light:</td>
                        <td>${matches[i].light}</td>
                    </tr>
                    <tr>
                        <td>Water:</td>
                        <td>${matches[i].water}</td>
                    </tr>
                    <tr>
                        <td>Atmosphere:</td>
                        <td>${matches[i].atmosphere}</td>
                    </tr>
                    <tr>
                        <td>Pet Friendly:</td>
                        <td>${matches[i].petFriendly}</td>
                    </tr>
                </tbody>
            </table>
            <h6>${matches[i].description}</h6>
        `;

        // Append cards to the wrapper
        cardWrapper.appendChild(originalCard);
        cardWrapper.appendChild(newCard);

        // Append wrapper to the column
        column.appendChild(cardWrapper);

        // Append column to the greenhouse container
        greenhouseContainer.appendChild(column);
    }
}


function importPlants(profiles){
    let inventory = [];
    
    let plants = profiles.split("\n");

    for(let i = 0; i < plants.length; i++){
        let plant = plants[i];
        let plantDesc = plant.split(",");
        //console.log(plantDesc);
 
        let commonName = plantDesc[0];
        let sciName = plantDesc[1];
        let size = plantDesc[2];
        let sizes = size.split("-");
            if(size[0] === 1 && size[1] === 5){
                minsize = 15;
                maxSize = 30;
            }
            let minSize = size[0];
            console.log(size[2]);
            
            let maxSize = size[2];
        let diff = plantDesc[3];
        let loc = plantDesc[4];
        let light = plantDesc[5];
        let water = plantDesc[6];
        let growth = plantDesc[7];
        let flowerBool = plantDesc[8];
        let flower = true;
            if( flowerBool == "No" ){
                flower = false;
            } 
        let aesthetic = plantDesc[9];
        let atmosphere = plantDesc[10];
        let colors = plantDesc[11];
        let temp = plantDesc[12].split("-");
            let minTemp = temp[0];
            let maxTemp = temp[1];
        let humid = plantDesc[13];
        let pet = plantDesc[14];
        let friendly = true;
            if( pet == "No" ){
                friendly = false;
            }
        let pest = plantDesc[15];
        let resistant = true;
            if( pest == "No" ){
                friendly = false;
            }
        let desc = plantDesc[16].split("\\");
        let descr = desc[0];
        //console.log(descr);
        
        let newPlant = new Plant(commonName, sciName, desc, minSize, maxSize,
            diff, loc, light, water, growth, atmosphere, colors, humid, aesthetic, 
            minTemp, maxTemp, friendly, resistant, flower);

        inventory.push(newPlant);
        
    }

    return inventory;
    
}

function findMatch(plantInv, userChoices){
    let answers = userChoices;
    //console.log("Answers: " + userChoices);
    let plantMatches = [];
    let matcher = new Matcher(plantInv);
    const quiz = new Quiz(answers, matcher);
    plantMatches = quiz.createPlant(); 

    console.log("Plant Matches:", plantMatches.length);

    let matchNames = "Found a match!\n";
    for(let i = 0; i < plantMatches.length; i++){
        matchNames += plantMatches[i].commonName + "\n";
    }

    return plantMatches;

    //document.getElementById("test").innerText = matchNames;
    //return matchNames; 
}

let plantProfiles = "";

fetch('../scripts/PlantProfiles.csv')
  .then(response => response.text())
  .then(data => {
    //console.log(data); // Process your CSV or file content here

    plantProfiles = data;
    let plantInv = importPlants(plantProfiles);

    if(plantInv === 0){
        console.log("String is empty.\n");
    } else{
        console.log("Plant Profiles Imported.\n");
        for(let i = 0; i < plantInv.length; i++){
            //plantInv[i].toString();
        }
    }
    let userChoices = localStorage.answers;
    let matches = findMatch(plantInv, userChoices);
    displayMatches(matches);
    //console.log(`Matched plants: ${matchNames}`);

    //return matchNames; 

  })

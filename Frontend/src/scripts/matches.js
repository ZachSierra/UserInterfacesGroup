/**
 * Connected to matches.html
 * Imports plant inventory from PlantProfiles.csv
 * Creates matches from passed user choices from quiz
 * Creates divs for UI
 * 
 * by (?) and Sam Lagman
 */

import { Matcher } from "../scripts/Matcher.js"
import { Quiz } from "../scripts/Quiz.js"
import { Plant } from "../scripts/Plant.js"
import { userChoices } from '../scripts/questionnaire.js';

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

function getImageSrc(name){
    let src = "";
    let str = "";
    if(name.includes("/")){
        let plantName = name.split("/");
        src = plantName[0];
        console.log(src);
    } else{
        name.trim();
        src = name.split(" ").join("");
        console.log(src);
    }
    

    if(src === "AloeVera" || src === "FiddleLeafFig"){
        return str = "../assets/img/" + src +".jpeg";
    } else if(src === "Areca/ButterflyPalm"){
        return str = "../assets/img/ButterflyPalm.jpg";
    }

    return str = "../assets/img/" + src +".jpg";
}

function displayMatches(matches){
    let greenhouseContainer = document.getElementById("greenhouseCards");

    for(let i = 0; i < matches.length; i++){

        //Original Card
        //Outermost Column
        let originalCard = document.createElement("div");
        originalCard.className = "col";

        //Card div
        let cardDiv = document.createElement("div");
        cardDiv.className = "card border-primary mb-3 w-100 original-card";
        cardDiv.style.height = "500px";
        cardDiv.setAttribute("onclick", "clickCard(this)");

        //Image element
        let imgElement = document.createElement("img");
        imgElement.src = getImageSrc(matches[i].commonName);
        console.log(getImageSrc(matches[i].commonName));
        imgElement.className = "card-img-top";
        imgElement.alt = "Plant Image";

        //Card Body div 
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";

        //Card title 
        let cardTitle = document.createElement("div");
        cardTitle.className = "card-title";
        cardTitle.textContent = matches[i].commonName;

        //Button
        let button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-primary";
        button.textContent = "Add to Greenhouse";
        button.setAttribute("onclick", "addToGreenhouse(this)");

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(button);
        cardDiv.appendChild(imgElement);
        cardDiv.appendChild(cardBody);
        originalCard.appendChild(cardDiv);

        greenhouseContainer.appendChild(originalCard);


        //Hidden Card
       let newCard = document.createElement("div"); 
        newCard.className = "card border-primary mb-3 w-100 new-card d-none";
        newCard.style.height = "480px";
        newCard.setAttribute("onclick", "clickCard(this)");
        

        //Create the inner HTML content of the card
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
        greenhouseContainer.appendChild(newCard);

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
            let minSize = size[0];
            let maxSize = size[1];
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
  .catch(error => console.error('Error loading the file:', error));

/**
 * Quiz.js
 * Creates a plant based on answer from the questionnaire
 */

import { Plant } from "./Plant.js"

export class Quiz{
    constructor(answers, matcher){
        this.answers = answers;
        this.matcher = matcher;
    }

    /**
     * createPlant() function
     * Creates a plant object based on user preferences 
     * Calls Matcher class
     * Returns a list of plant matches 
     */
    createPlant(){
        let answers = this.answers;
        let matcher = this.matcher;

        console.log("Answers: " + answers);

        // Question 1: Indoor/Outdoor
        let location = "";
        switch(answers[0]){
            case 'A':
               location = "Indoor";
               break;
            case 'B': 
                location = "Outdoor";
                break;
            case 'C':
                location = "Both";
                break;
        }

        // Question 2: Typical temperature
        let minTemp, maxTemp = 0;
        switch(answers[1]){
            case 'A':
                minTemp = 20;
                maxTemp = 40; 
                break;
            case 'B': 
                minTemp = 40;
                maxTemp = 65;
                break;
            case 'C': 
                minTemp = 65; 
                maxTemp = 85; 
                break;
            case 'D': 
                minTemp = 85; 
                maxTemp = 110;
                break;
        }

        // Question 3: Humidity 
        let humidity = "";
        switch(answers[2]){
            case 'A': 
                humidity = "Low";
                break;
            case 'B': 
                humidity = "Average";
                break;
            case 'C': 
                humidity = "High";
                break;
        }

        // Question 4: Natural light
        let light = "";
        switch(answers[3]){
            case 'A': 
                light = "Low";
                break;
            case 'B':
                light = "Average";
                break;
            case 'C': 
                light = "High";
                break; 
            case 'D': 
                light = "Partial shade";
                break;
            case 'E':
                light = "Full sun";
                break;
        }
        

        //Question 5: Pet Friendly
        let petFriendly = true;
        switch(answers[4]){
            case 'A':
                petFriendly = true; 
                break;
            case 'B': 
                petFriendly = false;
                break;
        }

        // Question 6: Size
        // Not yet geared to have multiple choice
        // For future: if multiple are chosen, make minimum
        //             the smallest size chosen's min and 
        //             the biggest size chosen's max
        // Possibly a string[] for multiple choice/rank questions
        let minSize, maxSize = 0;
        switch(answers[5]){
            case 'A':
                minSize = 0;
                maxSize = 3;
                break;
            case 'B': 
                minSize = 3;
                maxSize = 10; 
                break;
            case 'C': 
                minSize = 10; 
                maxSize = 30; 
                break;
        }

        // Question 7: Experience Level - Weighted
        let difficulty = 0;
        switch(answers[6]){
            case 'A': 
                difficulty++;
            case 'B': 
                difficulty += 2;
                break;
            case 'C': 
                difficulty += 3;
                break;
        }

        //Question 8: Away from Home
        let careLevel = "";
        switch(answers[7]){
            case 'A': 
                difficulty += 3;
            case 'B': 
                difficulty += 2;
                break;
            case 'C': 
                difficulty++;
                break;
        }

        if(difficulty < 3 ){
            careLevel = "Easy";
        } else if(difficulty >= 3 || difficulty < 5){
            careLevel = "Moderate";
        } else{
            careLevel = "Difficult";
        }

        //Question 9: Water
        let water = "";
        switch(answers[8]){
            case 'A':
                water = "Low";
                break;
            case 'B': 
                water = "Moderate";
                break;
            case 'C':
                water = "High";
                break;
        }

        // Question 10: Pest Resistant 
        let pestResistant = true;
        switch(answers[9]){
            case 'A':
                pestResistant = true;
                break;
            case 'B':
                pestResistant = false; 
                break;
        }

        // CONSIDER: Questions 11 to 12 
        // Use a String array/list 
        // Order of values -> corresponds with scores

        //Question 11: Growth Habit 
        // Should this be weighted or ommitted? 
        // Question 10 already gives a range of growth habits
        // If we really want it to be more specific -> Consider making 
        // Q10 a decision question -> changes the answer choices for 12 to be
        // 1 set of answers being Trimming growth types, and 1 set of non-Trimming
        let growth = "";
        switch(answers[10]){
            case 'A':
                growth = "Upright";
                break;
            case 'B':
                growth = "Trailing/Vining";
                break; 
            case 'C':
                growth = "Bushy";
                break;
            case 'D':
                growth = "Compact";
                break;
        }

        // Question 12: Flowering Plant
        // Boolean flowering is already set to true 
        let flowering = true;
        switch(answers[11]){
            case 'B':
                flowering = false;
                break;
        }

        // Question 13: Type of Aesthetic 
        // Rank? -> How does this work with char[]
        // For now, let's keep it as just choose one
        let aesthetic = "";
        switch(answers[12]){
            case 'A':
                aesthetic = "Minimalistic and Modern";
                break;
            case 'B':
                aesthetic = "Lush and Tropical";
                break;
            case 'C':
                aesthetic = "Quirky and Unique";
                break;
            case 'D':
                aesthetic = "Rustic and Natural";
                break; 
        }

        // Question 14: Color
        // Rank -> For now keep as choose one
        let colors = "";
        switch(answers[13]){
            case 'A':
                colors = "Green";
                break;
            case 'B':
                colors = "Vibrant";
                break;
            case 'C':
                colors = "Subtle";
                break;
        }

        //Question 15: Atmosphere
        let atmosphere = "";
        switch(answers[14]){
            case 'A':
                atmosphere = "Calm/Serene";
                break;
            case 'B':
                atmosphere = "Energizing/Vibrant";
                break;
            case 'C':
                atmosphere = "Cozy/Inviting";
                break;
        }

        let preference = new Plant("Preference", "plant", "desc", minSize, maxSize, careLevel,
            location, light, water, growth, atmosphere, colors, humidity, aesthetic, minTemp, maxTemp, 
            petFriendly, pestResistant, flowering);

        //console.log("Here are your preferences: " + preference);
        //console.log("Sizes: " + preference.minSize + " " + preference.maxSize + "\n");
        
        let matches = {};
        matches = matcher.findMatch(preference);

        return matches;
   
    }
}
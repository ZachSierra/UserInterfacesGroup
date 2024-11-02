// Used to convert user input into a Plant object
// Calls Matcher class to find matching plants

import java.util.List;
import java.util.ArrayList;

public class Quiz{
    char[] answers; // parameters are A,B,C, or D
    Matcher matcher;

    public Quiz(char[] answers, Matcher matcher){
        this.answers = answers; 
        this.matcher = matcher;
    }

    public List<Plant> createPlant(){

        // Returns an array of compatible plants
        // Calls Matcher class 
        // Passes the following variables into matcher function
        // Should we have two arrays? 90%+ matches, and then 75%+ matches
        // Button at the end that asks if you want to see more(?)
        List<Plant> matches = new ArrayList<>();

        int minSize = 0;
        int maxSize = 0;
        int difficulty = 0;
        String careLevel = null;
        String location = "Both";
        String light = ""; 
        String water = ""; 
        String atmosphere = "";
        String colors = "";
        String humidity = "";
        String growth = "";
        String aesthetic = ""; 
        int minTemp = 0;
        int maxTemp = 0;
        Boolean petFriendly = true;
        Boolean pestResistant = true;
        Boolean flowering = true;

        // Question 1: Indoor/Outdoor
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
        if(location == "Outdoor"){
            switch(answers[3]){
                case 'A': 
                    light = "Partial shade";
                    break;
                case 'B':
                    light = "Full sun";
                    break;
            }
        } else {
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
            }
        }

        //Question 5: Pet Friendly
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
        switch(answers[11]){
            case 'B':
                flowering = false;
                break;
        }

        // Question 13: Type of Aesthetic 
        // Rank? -> How does this work with char[]
        // For now, let's keep it as just choose one
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

        Plant preferences = new Plant("N/A", "N/A", minSize, maxSize, careLevel,
         location, light, water, growth, atmosphere, colors, minTemp, maxTemp, humidity, petFriendly,
        "N/A", pestResistant, flowering, aesthetic );

        System.out.println("Here are your preferences:");
        System.out.println("Size range: " + minSize + "-" + maxSize);
        System.out.println("Care level: " + careLevel);
        System.out.println("Location: " + location);
        System.out.println("Light Requirements: " + light);
        System.out.println("Growth: " + growth);

        matches = matcher.findMatch(preferences);

        return matches;

    }
}
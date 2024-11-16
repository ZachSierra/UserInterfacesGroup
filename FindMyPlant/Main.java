// Controller function

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main{

    // For testing purposes
    static Plant testPlant = new Plant("Pothos", "Epipremnum aureum", 6, 10, "Easy", "Indoor", "Medium",
    "Moderate", "Trailing/Vining", "Calm/Serene", "Green", 65, 85, "Average",
        false, "N/A", true, false, "Rustic and Natural");

    // Prints out matched plant names
    public static void printMatches(List<Plant> matches){
        System.out.println("Here are your matches!");

        for(Plant plant : matches){
            System.out.println(plant.commonName + "(" + plant.scientificName + ")");
        }
    }

    // Main function 
    public static void main(String[] args){
        List<Plant> plantInventory = new ArrayList<>();
        List<Plant> plantMatches = new ArrayList<>();
        Matcher matcher = new Matcher(plantInventory);
        Scanner scanner = new Scanner(System.in);
        Questions questionnaire = new Questions(scanner);

        // TO-DO: Import plants from database into plantInventory
        plantInventory.add(testPlant);

        // Print out questionnaire using Question class "conductQuiz()" function
        // Get user input 
        char [] answers = new char[15];
        answers = questionnaire.conductQuiz();

        // Pass user input into Quiz class' "createPlant()" function
        Quiz quiz = new Quiz(answers, matcher);
        plantMatches = quiz.createPlant();
        
        // Print plant match 
        printMatches(plantMatches);

        scanner.close();

    }
    

}

    

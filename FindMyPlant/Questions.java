// Print class prints out the questions 
// Also takes user input and returns a character array containing user choices

import java.util.Scanner;

public class Questions{
    Scanner scanner = new Scanner(System.in);

    public Questions(Scanner scanner){
        this.scanner = scanner;
    }

    public char[] conductQuiz(){
        char [] answers = new char[15];
        char [] loc; 
        String input;
        char location;
        char[] arr = new char[4];

        System.out.println("Hello! Welcome to the plant quiz.");
        System.out.println("_________________________________");
        System.out.println("Enter the corresponding letter and for your answer, then press enter.");

        System.err.println("");

        System.out.println("Do you prefer indoor or outdoor plants?");
        System.out.println("A. Indoor");
        System.out.println("B. Outdoor");
        System.out.println("C. Both");
        input = scanner.nextLine(); 
        loc = input.toCharArray();
        location = loc[0];
        arr = input.toCharArray();
        answers[0] = arr[0];

        System.out.println("What is the typical temperature of where you will keep your plant?");
        System.out.println("A. Below 40°F (4°C)");
        System.out.println("B. 40°F to 65°F (4°C to 18°C)");
        System.out.println("C. 65°F to 85°F (18°C to 29°C)");
        System.out.println("D. Above 85°F (29°C)");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[1] = arr[0];

        System.out.println("What is the humidity level of where the plant will be?");
        System.out.println("A. Low");
        System.out.println("B. Average");
        System.out.println("C. High");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[2] = arr[0];

        if(location == 'A'){
            System.out.println("What kind of natural light does the area receive?");
            System.out.println("A. Low");
            System.out.println("B. Medium");
            System.out.println("C. Bright");
            input = scanner.nextLine(); 
            arr = input.toCharArray();
            answers[3] = arr[0];
        } else{
            System.out.println("What kind of natural light does the area receive?");
            System.out.println("A. Partial shade");
            System.out.println("B. Full sun");
            input = scanner.nextLine(); 
            arr = input.toCharArray();
            answers[3] = arr[0];
        }

        System.out.println("Is it important that your plant is pet-friendly?");
        System.out.println("A. Yes");
        System.out.println("B. No");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[4] = arr[0];

        System.out.println("What size of plant are you looking for?");
        System.out.println("A. Small( < 3ft)");
        System.out.println("B. Medium (3 - 10 ft)");
        System.out.println("C. Large (10ft < )");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[5] = arr[0];

        System.out.println("What is your experience level with plants?");
        System.out.println("A. Beginner (Easy Plants)");
        System.out.println("B. Moderate (Moderate Plants)");
        System.out.println("C. Expert (Difficult Plants)");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[6] = arr[0];

        System.out.println("How often are you away from home?");
        System.out.println("A. Rarely");
        System.out.println("B. Occasionally");
        System.out.println("C. Frequently");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[7] = arr[0];

        System.out.println("How often do you want to water your plant?");
        System.out.println("A. Low (infrequently)");
        System.out.println("B. Moderate");
        System.out.println("C. High (frequently)");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[8] = arr[0];

        System.out.println("Do you prefer a plant that is resistant to pests?");
        System.out.println("A. Yes");
        System.out.println("B. No");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[9] = arr[0];

        System.out.println("What  type of growth habit do you prefer in a plant?");
        System.out.println("A. Upright");
        System.out.println("B. Trailing/Vining");
        System.out.println("C. Bushy");
        System.out.println("D. Compact");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[10] = arr[0];

        System.out.println("Are you looking for a flowering or non-flowering plant?");
        System.out.println("A. Flowering");
        System.out.println("B. Non-flowering");
        System.out.println("C. No preference");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[11] = arr[0];

        System.out.println("What type of aesthetic are you drawn to in plants?");
        System.out.println("A. Minimalistic and modern");
        System.out.println("B. Lush and tropical");
        System.out.println("C. Quirky and unique");
        System.out.println("D. Rustic and natural");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[12] = arr[0];

        System.out.println("What type of colors do you prefer in your plants?");
        System.out.println("A. Green");
        System.out.println("B. Vibrant colors (red, pink, purple, blue)");
        System.out.println("C. Subtle tones (white, pale yellow)");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[13] = arr[0];

        System.out.println("What kind of atmosphere are you trying to create with your plants?");
        System.out.println("A. calm/serene");
        System.out.println("B. energizing/vibrant");
        System.out.println("C. cozy/inviting");
        input = scanner.nextLine(); 
        arr = input.toCharArray();
        answers[14] = arr[0];

        System.out.println("");

        System.out.println("Thanks for taking the test. Making matches now...");
        

        scanner.close();
        return answers;
    }
}
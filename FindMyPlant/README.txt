Hello, these files are the basic implementation of our questionnaire code. 


VERSION 1.0 - November 1, 2024

Flow: 
The Main.java is the controller 
Main is currently where the plant inventory will be populated from our db. 
There is no functionality for user profiles yet. 
Main calls the Question class' conductQuiz() function to ask the questions and get user input
    > This returns a character array for the user's answers
Main then passes the answers into Quiz' createPlant() function 
    > This function creates a plant based on preferences
        > The plant is passed into the Matcher class' findMatch() function 
          This returns an ArrayList of either perfect matches or near matches
Main then prints out the names of the matched plants 

Future Concerns:
1.  For now, there is only one plant in the plant inventory, so you will need to answer the questions in a certain order in order to get a result. 
    A C B B B B A B B A B C D A A 
    This should result in a match for a Pothos. 

    I will update it to work with all our plants when it is connected to the database. 
    However, the information on the sheet needs to be refined to better match our options and fill out the blanks. 

2.  The questions are currently only formatted to be choose one answer. I have an idea of how to handle ranking/multiple selection.
    I will add this later on! 

3.  Mostly everything is hard coded. If you have any idea on how to streamline these processes lmk but I am also working 
    to revise it in the future now that the mechanics are working. 


// Matcher class takes in Plant object for preferences and plant inventory
// Finds matches based on preference plant

import java.util.ArrayList;
import java.util.List;

public class Matcher{

    List<Plant> plantInventory = new ArrayList<>();
    
    // Constructor
    public Matcher(List<Plant> plantInventory){
        this.plantInventory = plantInventory;
    }

    // Function that makes matches
    public List<Plant> findMatch(Plant pref){
        List<Plant> perfectMatches = new ArrayList<>();
        List<Plant> nearMatches = new ArrayList<>();
        int score = 0; 

        for(Plant plant : plantInventory){
            // Begin matching 

            // Start with hard conditionals 
            if(pref.petFriendly != plant.petFriendly){
                break;
            }

            // Use a score for preferences
            // Light requirements are affected by location 
            // If both locations are chosen -> match with both counterparts of plants 
            if (pref.location == plant.location){
                score++;
                if(pref.location == "Both"){

                    if(pref.light == "Low" && (plant.light == "Low" || plant.light == "Partial shade") ){
                        score++;
                    } else if(pref.light == "Medium" && (plant.light == "Medium" || plant.light == "Partial shade") ){
                        score++;
                    } else if(pref.light == "High" && (plant.light == "High" || plant.light == "Full sun") ){
                        score++;
                    }

                }else if(pref.light == plant.light){
                    score++;
                }
            }
            if (pref.minTemp >= plant.minTemp && pref.maxTemp <= plant.maxTemp){
                score++;
            }
            if (pref.humidity == plant.humidity){
                score++;
            }
            if (pref.minSize >= plant.minSize && pref.maxTemp <= plant.maxSize){
                score++;
            }
            if (pref.difficulty == plant.difficulty){
                score++;
            }
            if (pref.water == plant.water){
                score++;
            }
            if (pref.pestResistant == plant.pestResistant){
                score++;
            }
            if (pref.growth == plant.growth){
                score++;
            }
            if (pref.aesthetic == plant.aesthetic){
                score++;
            }
            if (pref.colors == plant.colors){
                score++;
            }
            if (pref.atmosphere == plant.atmosphere){
                score++;
            } 
            if (pref.flowering == plant.flowering){
                score++;
            }     
            
            // If perfect match
            if (score == 13){

                perfectMatches.add(plant);
            } else if ( score >= 9){
                nearMatches.add(plant);
            }
        }

        if (!perfectMatches.isEmpty()){
            System.out.println("Perfect match found!");
            return perfectMatches;
        }

        System.out.println("No perfect matches found, returning near matches.");
        return nearMatches;
    }

}
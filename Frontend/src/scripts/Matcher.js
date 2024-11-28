/**
 * Matcher class
 * Takes in plantInventory list
 * Finds matches based on user preferences
 * 
 * by Sam Lagman
 */

export class Matcher{
    constructor(plantInventory){
        this.plantInventory = plantInventory;
    }

    /**
     * findMatch() function
     * @param {Plant} pref 
     * takes in plant object based on user preferences 
     * compares matches to plantInventory
     * perfect matches added into perfectMatches list
     * matches with scores above 9 added into nearMatches list
     * returns perfectMatches if not empty 
     */
    findMatch(pref){
        let plantInventory = this.plantInventory;
        let perfectMatches = [];
        let nearMatches = [];

        console.log("Plant Inventory Count: " + plantInventory.length);

        for(let i = 0; i < plantInventory.length; i++){

            let score = 0;
            let plant = plantInventory[i];
            let plantBool = true;

            // Dealbreaker conditional
            if(pref.petFriendly == plant.petFriendly){
                score++;
            }
            if((pref.petFriendly != plant.petFriendly) && pref.petFriendly === false){
                continue;
            }
            if (pref.location === plant.location){
                score++;
            }
            if(pref.light === plant.light){
                score++;
            }
            if (pref.minTemp >= plant.minTemp && pref.maxTemp <= plant.maxTemp){
                score++;
            }
            if (pref.humidity === plant.humidity){
                score++;
            }
            if (pref.minSize >= plant.minSize && pref.maxTemp <= plant.maxSize){
                score++;
            }
            if (pref.difficulty === plant.difficulty){
                score++;
            }
            if (pref.water === plant.water){
                score++;
            }
            if (pref.pestResistant === plant.pestResistant){
                score++;
            }
            if (pref.growth === plant.growth){
                score++;
            }
            if (pref.aesthetic === plant.aesthetic){
                score++;
            }
            if (pref.colors === plant.colors){
                score++;
            }
            if (pref.atmosphere === plant.atmosphere){
                score++;
            } 
            if (pref.flowering === plant.flowering){
                score++;
            }

            //console.log("Score for " + plant.commonName + ": " + score);

            if(score >= 12){
                perfectMatches.push(plant);
            } else if(score > 1){
                nearMatches.push(plant);
            }

        }
        
        console.log("Perfect matches found: " + perfectMatches.length);
        if(perfectMatches.length != 0){
            console.log("Perfect match(es) found!\n");
            return perfectMatches;
        }

            console.log("No perfect matches found, returning near matches.\n");
            return nearMatches;
        

    }
}
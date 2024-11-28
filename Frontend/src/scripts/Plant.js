/**
 * Plant.js
 * by Sam Lagman
 * Plant class
 * Used in questionnaire to create plant objects from imported CSV file 
 * Called by Main.js
 */

export class Plant{
    constructor(commonName, scientificName, description, minSize, maxSize,
        difficulty, location, light, water, growth, atmosphere, colors,
        humidity, aesthetic, minTemp, maxTemp, petFriendly, pestResistant, flowering){
            this.commonName = commonName;
            this.scientificName = scientificName;
            this.description = description;
            this.minSize = minSize; 
            this.maxSize = maxSize;
            this.difficulty = difficulty;
            this.location = location;
            this.light = light; 
            this.water = water; 
            this.growth = growth; 
            this.atmosphere = atmosphere; 
            this.colors = colors; 
            this.humidity = humidity; 
            this.aesthetic = aesthetic; 
            this.minTemp = minTemp; 
            this.maxTemp = maxTemp; 
            this.petFriendly = petFriendly; 
            this.pestResistant = pestResistant;
            this.flowering = flowering;
    }

    toString(){
        console.log("Found Match!");
        console.log("Name: " + this.commonName + " (" + this.scientificName + ")\n" );
    }
}
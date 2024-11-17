// Plant object
// TO-DO: toString() method that can be used by Main to print out plant information / for plant info card

public class Plant{
    String commonName, scientificName, description;
    int minSize, maxSize;
    String difficulty;
    String location, light, water, growth, atmosphere, colors, humidity, aesthetic; 
    int minTemp, maxTemp; 
    Boolean petFriendly, pestResistant, flowering;

    // Constructor
    public Plant(String commonName, String scientificName, int minSize, int maxSize, String difficulty, String location,
        String light, String water, String growth, String atmosphere, String colors, int minTemp, int maxTemp, String humidity,
        Boolean petFriendly, String description, Boolean pestResistant, Boolean flowering, String aesthetic){

            this.commonName = commonName;
            this.scientificName = scientificName; 
            this.minSize = minSize; 
            this.maxSize = maxSize; 
            this.difficulty = difficulty;
            this.location = location;
            this.light = light; 
            this.water = water; 
            this. growth = growth; 
            this.atmosphere = atmosphere; 
            this.colors = colors; 
            this.minTemp = minTemp;
            this.maxTemp = maxTemp;
            this.humidity = humidity; 
            this.petFriendly = petFriendly; 
            this.pestResistant = pestResistant;
            this.description = description;
            this.flowering = flowering;
            this.aesthetic = aesthetic;
        }

   
}
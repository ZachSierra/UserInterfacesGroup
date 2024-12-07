const db = require('../config/database');

class plantProfiles {
    constructor( Plant_id, Common_Name, Scientific_Name, Size_in_ft, Difficulty, Location, Light_Requirement, Watering_Needs, Growth_Habit, Flowering, Aesthetic, Atmosphere, Colors, Temperature_in_fahrenheit,Humidity, Pet_Friendly, Pest_Resistant, Description){
        this.Plant_id = Plant_id;                                   // INT
        this.Common_Name = Common_Name;                             // VARCHAR(255)
        this.Scientific_Name = Scientific_Name;                     // VARCHAR(255)
        this.Size_in_ft = Size_in_ft;                               // VARCHAR(50)
        this.Difficulty = Difficulty;                               // VARCHAR(50)
        this.Location = Location;                                   // VARCHAR(100)
        this.Light_Requirement = Light_Requirement;                 // VARCHAR(100)
        this.Watering_Needs = Watering_Needs;                       // VARCHAR(100)
        this.Growth_Habit = Growth_Habit;                           // VARCHAR(100)
        this.Flowering = Flowering;                                 // VARCHAR(50)
        this.Aesthetic = Aesthetic;                                 // VARCHAR(100)
        this.Atmosphere = Atmosphere;                               // VARCHAR(100)
        this.Colors = Colors;                                       // VARCHAR(100)
        this.Temperature_in_fahrenheit = Temperature_in_fahrenheit; // VARCHAR(50)
        this.Humidity = Humidity;                                   // VARCHAR(50)
        this.Pet_Friendly = Pet_Friendly;                           // VARCHAR(50)
        this.Pest_Resistant = Pest_Resistant;                       // VARCHAR(50)
        this.Description = Description;                             // TEXT
    }

    static getAll(){
        return db.execute("SELECT * FROM plantprofiles;");
    }

    static getByID(Plant_id){
        let sql = 'SELECT * FROM plantprofiles WHERE Plant_id = ' + Plant_id;
        return db.execute(sql);
    }

    static getByName(Common_Name){
        let sql = `SELECT * FROM plantprofiles WHERE Common_Name LIKE ?;`;
        return db.execute(sql, [`${Common_Name}%`]);
    }


}
module.exports = plantProfiles;
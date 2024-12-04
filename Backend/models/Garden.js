const db = require('../config/database');

class Garden {
    constructor (gardenId, UserId, Plant_id ){
        this.gardenId = gardenId; // INT
        this.UserId = UserId; // INT
        this.Plant_id = Plant_id; // INT
    }
    createGarden(){
        return db.execute("INSERT INTO Garden (UserId, Plant_id) VALUES ('"+ this.UserId +"', '"+ this.Plant_id +"');");
    }
    static getGarden(id){
        return db.execute("SELECT * FROM plantprofiles\nJOIN Garden ON plantprofiles.Plant_id=Garden.Plant_id WHERE Garden.UserId = "+ id +";");
    }
    static deleteGarden(UserId, Plant_id){
        return db.execute("DELETE FROM Garden WHERE UserId = "+ UserId +" AND Plant_id = "+ Plant_id +";");
    }
}

module.exports = Garden;
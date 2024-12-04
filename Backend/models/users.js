const db = require('../config/database');

class users {
    constructor(id, username, password, email, created_at){
        this.id = id;       // INT
        this.username = username;     // VARCHAR(30)
        this.password = password;     // VARCHAR(255)
        this.email = email;           // VARCHAR(255)
        this.created_at = created_at; // DATETIME
    }
    createUser(){
        return db.execute("INSERT INTO users (username, password, email) VALUES ('"+ this.username +"', '"+ this.password +"', '"+ this.email +"');");
    }

    static getAll(){
        let sql = 'SELECT * FROM users';
        return db.execute(sql);
    }
    static getByID(id){
        let sql = 'SELECT * FROM users WHERE UserId = ' + id;
        return db.execute(sql);
    }
    static getByUsername(username){
        let sql = 'SELECT * FROM users WHERE username = \'' + username + '\';';
        return db.execute(sql);
    }
}
module.exports = users;
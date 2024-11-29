const db = require('../config/database');

class users {
    constructor(user_id, username, password, email, created_at){
        this.user_id = user_id;       // INT
        this.username = username;     // VARCHAR(30)
        this.password = password;     // VARCHAR(255)
        this.email = email;           // VARCHAR(255)
        this.created_at = created_at; // DATETIME
    }

    static getAll(){
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users', (err, result) => {
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    static getByID(user_id){
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users WHERE user_id = ?', [user_id], (err, result) => {
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        });
    }
}
module.exports = users;
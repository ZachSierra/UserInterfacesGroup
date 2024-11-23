const mysql = require('mysql2');
const fs = require('fs');
const { host, user, password, database} = require('./config.js');

const pool = mysql.createPool({
    host,
    user,
    password,
    database,
});

module.exports = pool.promise();
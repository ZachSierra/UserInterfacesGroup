const mysql = require('mysql2');
const fs = require('fs');
const { host, user, password, database} = require('./config.js');

const pool = mysql.createPool({
    host,
    user,
    password,
    database,
    connectTimeout: 30000,
});

module.exports = pool.promise();
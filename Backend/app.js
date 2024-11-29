const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./config/database.js');

app.use(express.json());
app.use(cors());

app.use("/users", require("./routes/users"));
app.use("/plantProfiles", require("./routes/plantProfiles"));

//Query to test for connection
app.get('/', (req, res) => {
    let sql = 'SELECT * from users';
    let response = db.execute(sql);

    res.send(response);
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went really wrong",
    });

});

app.listen(5000, () => {
    console.log('server is running on port 5000...');
    console.log('http://localhost:5000/');
})
const express = require('express');
const app = express();
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const db = require('./config/database.js');

app.use(express.json());
app.use(cors());

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "FindMyPlant",
            version: "1.0.0",
            description: "A simple plant shop API"
        },
        servers : [
            {
                url: "http://ec2-18-227-140-139.us-east-2.compute.amazonaws.com:5000/"
            }
        ]
    },
    apis: ["./app.js", './routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));



app.use("/users", require("./routes/users"));
app.use("/plantProfiles", require("./routes/plantProfiles"));
app.use("/garden", require("./routes/garden"));


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
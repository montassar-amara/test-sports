
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConnect');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerJSDoc = require('swagger-jsdoc');

// swagger options
const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title: "Sports Leagues Api",
            version: "1.0.0",
            description:"A simple api to fetch data about sports leagues"
        },
        servers:[
            {
                url:"http://localhost:3001"
            }
        ],
    },
    apis:["./routes/*.js"]
}
const specs = swaggerJSDoc(options)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(specs))

console.log(process.env.NODE_ENV);
connectDB();

app.use(cors(corsOptions));
app.use(express.json()); // middleware to parse json


// league routes - for /leagues and /league
app.use(require('./routes/leaguesRoutes'));

// team routes - for /team
app.use(require('./routes/teamsRoutes'));


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

mongoose.connection.on('error', err => {
    console.log(err);
})


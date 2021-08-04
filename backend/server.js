const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const foodAPI = require('./src/api/foods.api');
const categoryAPI = require('./src/api/categories.api');
//configure dotenv
dotenv.config();
//create express dependencies instance(object) called app
const app = express();
app.use(cors()) //cors = middleware handler
app.use(bodyParser.json()); //insert & response format for communicate with the api
//define port
//.env = environmental variables
const PORT = process.env.PORT || 8084; //IF THE GIVEN PORT IS NOT AVAILABLE SERVER GET ANOTHER PORT TO RUN THE APP.
//connection url
const mongoDB_URI = process.env.mongoDB_URI;
//connect the db
mongoose.connect(mongoDB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (error) => {
        if (error) {
            console.log('Database Error: ', error.message);
        }
    });
//open the created connection
mongoose.connection.once('open', () => {
    console.log('Database Created Successfully !!');
});
//check the running or not
app.route('/').get((req, res) => {
    res.send('AF Practice Final Exam');
});
//call the functions for return the endpoints
app.use('/category', categoryAPI());
app.use('/food', foodAPI());
//start the app
app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});

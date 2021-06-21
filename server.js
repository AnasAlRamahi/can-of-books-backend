const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();
app.use(cors());

const PORT = process.env.PORT;

const seedUser = require('./models/User.model');
const userController = require('./controllers/User.controller');

mongoose.connect('mongodb://localhost:27017/FavourateBooks',
{ useNewUrlParser: true, useUnifiedTopology: true }
);


// seedUser(); 

// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
});

app.get('/books', userController)

app.listen(PORT); // kick start the express server to work
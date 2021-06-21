'use strict';


const userModel = require('../models/User.model');

const getBooks = (request, response) => {
    
    const email = request.query.email;
    userModel.find({email: email}, (error, user) => {
        if(error){
            response.send(error.message);
        }
        else{
            response.json(user);
        }
    })
}

module.exports = getBooks;
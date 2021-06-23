'use strict';
const mongoose = require("mongoose");
const BookSchema = require('./Book.model')



const UserSchema = new mongoose.Schema({
    email: {type : String},
    books: [BookSchema]
})


const userModel = mongoose.model('users', UserSchema);


const seedUser = () => {
    const newUser = new userModel({
        email: 'potato@gmail.com',
        books: [
        {
            name: 'Lord of the Rings',
            description: 'A fight for the last ring from the 7 kings rings',
            status: 'New'
        },
        {
            name: 'The best cook',
            description: '100 of the best recipes in the Italian kitchen, by Chef Khaled Al-Shishani',
            status: 'New'
        },
        {
            name: 'The world of tech',
            description: 'Discussing one of the most exciting topics in the tech industry, with the hacker Anas Al-Ramahi',
            status: 'Old'
        }
    ]
    });
    console.log(newUser);
    newUser.save();
}


module.exports = {seedUser, userModel};

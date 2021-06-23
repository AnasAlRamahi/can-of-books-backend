const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();
// Always remember....
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

const { seedUser } = require('./models/User.model');
const {
  getBooks,
  createBook,
  updateBook,
  deleteBook
} = require('./controllers/User.controller');


mongoose.connect(`${process.env.MONGO_URL}`,
{ useNewUrlParser: true, useUnifiedTopology: true }
);

// seedUser(); 

// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
});

app.get('/books', getBooks)
// Create route, which will receive new books to be added for the user
app.post('/book', createBook);
// Update route, will will receive the book id that we want to update, and its info in the body payload
app.put('/book/:book_idx', updateBook);
// Delete route, which will delete the book by its index
app.delete('/book/:book_idx', deleteBook)


app.listen(PORT); // kick start the express server to work
/* File name: books.js   Author: James Kuzhilaparambil  Student ID: 301119040  Web App Name: COMP229-F2021-MidTerm-301119040*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);

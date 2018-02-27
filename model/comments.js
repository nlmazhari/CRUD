//model/comments.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var CommentsSchema = new Schema({
    customerID: Number,
    firstName: String, 
    lastName: String,
    birthday: Date,
    gender: String,
    lastContact: Date,
    customerLifetimeValue: Number
});
//export our module to use in server.js
module.exports = mongoose.model('Comment', CommentsSchema);

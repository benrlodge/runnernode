var dbUrl = require('../config/dbUrl');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Run = new Schema({
    date: String,
    distance: String,
    clothing: String,
    weather: String
});

 
mongoose.model( 'Run', Run );
mongoose.connect( dbUrl );


// Mongoose Model definition
// var Run = mongoose.model('runs', RunSchema);
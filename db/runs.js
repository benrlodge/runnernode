var dbUrl = require('../config/dbUrl');
var mongoose = require('mongoose');

mongoose.connect( dbUrl );
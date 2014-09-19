require('./db/runs');

var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var runs = require('./routes/runs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/runs', runs );
require('./error-handler');



// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});


var server = app.listen(4567, function() {
    console.log('Listening on port %d', server.address().port);
});


module.exports = app;
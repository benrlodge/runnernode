var express = require('express');
var router = express.Router();

var mongoose = require( 'mongoose' );
var Run     = mongoose.model( 'Run' );



/* GET users listing. */
router.get('/', function(req, res) {  
    
    Run.find({}, function (err, docs) {
        res.json(docs);
    });

});



module.exports = router;
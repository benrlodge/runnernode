var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );

var RunSchema = new mongoose.Schema({
    date: String,
    distance: String
    // clothing: String,
    // weather: String
});
 
var RunModel = mongoose.model( 'Run', RunSchema );



// http://shamadeh.com/blog/web/2014/06/26/NodeRestAPITutorial.html

/* GET home page. */
router.get('/', function(req, res) {
  
    var runs = RunModel.find(function( err, docs ) {
        if( !err ) {
        	// console.log( 'good grab');
        	data = JSON.stringify(docs)
            res.render('index', { title: 'HOME!', runs: data });

        } else {
            console.log( err );
            res.render('index', { title: 'HOME!' });
        }
    });

});



router.get( '/runs', function( req, res ) {
    return RunModel.find(function( err, docs ) {
        if( !err ) {
            return res.send( docs );
        } else {
            console.log( err );
            return res.send('ERROR');
        }
    });
});



router.post( '/runs', function( req, res ) {
    
    var run = new RunModel({
        date: req.body.date,
        distance: req.body.distance,
        clothing: req.body.clothing,
        weather: req.body.weather
    });

    run.save( function( err ) {
        if( !err ) {
            console.log( 'created' );
            res.render('index', { message: 'Run Added!'});

        } else {
        	console.log('we got a post error');
            console.log( err );
            return res.send('ERROR');
        }
    });
});




// //Get a single book by id
// app.get( '/api/books/:id', function( request, response ) {
//     return BookModel.findById( request.params.id, function( err, book ) {
//         if( !err ) {
//             return response.send( book );
//         } else {
//             console.log( err );
//             return response.send('ERROR');
//         }
//     });
// });
// //Update a book
// app.put( '/api/books/:id', function( request, response ) {
//     return BookModel.findById( request.params.id, function( err, book ) {
//         book.title = request.body.title;
//         book.author = request.body.author;
//         book.releaseDate = request.body.releaseDate;

//         return book.save( function( err ) {
//             if( !err ) {
//                 console.log( 'book updated' );
//                 return response.send( book );
//             } else {
//                 console.log( err );
//                 return response.send('ERROR');
//             }
//         });
//     });
// });
// //Delete a book
// app.delete( '/api/books/:id', function( request, response ) {
//     BookModel.findById( request.params.id, function( err, book ) {
//         return book.remove( function( err ) {
//             if( !err ) {
//                 console.log( 'Book removed' );
//                 return response.send( '' );
//             } else {
//                 console.log( err );
//                 return response.send('ERROR');
//             }
//         });
//     });
// });




module.exports = router;
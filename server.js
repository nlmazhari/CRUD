'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./model/comments');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

//db config
mongoose.connect('mongodb://admin:admin@ds044907.mlab.com:44907/mydb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing 
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    //and remove cacheing so we get the most recent data
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
//setting the route path & initializing the API
router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
});
//adding the /comments route to our /api router
router.route('/comments')
    //retrieve all comments from the database
    .get(function (req, res) {
        //looks at our Comment Schema
        Comment.find(function (err, comments) {
            if (err)
                res.send(err);
            //responds with a json object of our database comments.
            res.json(comments)
        });
    })
    //post new comment to the database
    .post(function (req, res) {
        var comment = new Comment();
        //body parser lets us use the req.body
        comment.customerID = req.body.customerID;
        comment.firstName = req.body.firstName;
        comment.lastName = req.body.lastName;
        comment.birthday = req.body.birthday;
        comment.gender = req.body.gender;
        comment.lastContact = req.body.lastContact;
        comment.customerLifetimeValue = req.body.customerLifetimeValue;
        comment.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Customer successfully added!' });
        });
    });

//Adding a route to a specific comment based on the database ID
router.route('/comments/:comment_id')
    //The put method gives us the chance to update our comment based on 
    //the ID passed to the route
    .put(function (req, res) {
        Comment.findById(req.params.comment_id, function (err, comment) {
            if (err)
                res.send(err);
            //setting the new author and text to whatever was changed. If 
            //nothing was changed we will not alter the field.
            // (req.body.customerID) ? comment.customerID = req.body.customerID : null;
            (req.body.firstName) ? comment.firstName = req.body.firstName : null;
            (req.body.lastName) ? comment.lastName = req.body.lastName : null;
            (req.body.birthday) ? comment.birthday = req.body.birthday : null;
            (req.body.gender) ? comment.gender = req.body.gender : null;
            (req.body.lastContact) ? comment.lastContact = req.body.lastContact : null;
            (req.body.customerLifetimeValue) ? comment.customerLifetimeValue = req.body.customerLifetimeValue : null;
            //save comment
            comment.save(function (err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Customer has been updated' });
            });
        });
    })
    //delete method for removing a comment from our database
    .delete(function (req, res) {
        //selects the comment by its ID, then removes it.
        Comment.remove({ _id: req.params.comment_id }, function (err, comment) {
            if (err)
                res.send(err);
            res.json({ message: 'Customer has been deleted' })
        })
    });
//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
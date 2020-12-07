var models  = require('../models');
var express = require('express');
var router  = express.Router();

// We can add 'view my profile' functionality here 

//idk whether post or get bc user gets and posts settings
router.post('/', function(req, res) {
    // models.User.create({
    //     username: req.body.username
    // }).then(function() {
    //     res.redirect('/');
    // });
    // The above is used to interface with the database

    res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'
    });
});

module.exports = router;

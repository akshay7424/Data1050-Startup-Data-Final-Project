var models  = require('../models');
var express = require('express');
var router  = express.Router();

/** Look at list of users (looking at a specific user does /users)
 * @param userID
 * @return User: {userID: int, name: String, nickname: String, class_year: int, user-type: String, email: String, bio: String}
 */
router.get('/userID', function(req, res) {
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


// testing the endpoint

module.exports = router;

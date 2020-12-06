var express = require("express");
var router = express.Router();
var models = require("../models");

router.get('/', function (req, res) {
    console.log("You can register here");
    res.render('signup', { errors: req.session.errors });
    req.session.errors = null;

});


router.post('/', function (req, res) {
    name = req.body.name;
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Please enter a valid email').isEmail();
    password = req.body.password;
    req.checkBody('password', 'Password is required').notEmpty();

    const errors = req.validationErrors();
    if (errors) {
        console.log("Error in registering user.")
        req.session.errors = errors;
        res.redirect('/register');
        return;
    }
    else {
        //Creates new user in the database
        models.User.create({
            password: req.body.password, // Required
            settingsDark: false,
            settingsAnonymousDefault: false,
            settingsHideEmail: false,
            settingsHideName: false,
            classYear: req.body.classyear, // Input
            nickname: null,
            name: req.body.name, // Required
            email: req.body.email, // Required
            bio: "test",
            ssoKey: null,
            userType: "student",
    }).then(async function(user)  {
            req.session.name = req.body.name;
            req.session.email = req.body.email;
            req.session.year = req.body.classyear;
            req.session.password = req.body.password;

            //res.json(user);
            const tryGetUid = await models.User.findOne({order: [ [ 'createdAt', 'DESC' ]]});
            req.session.uid = tryGetUid.toJSON().id;
            console.log("User successfully created!")
            
            console.log(req.session.uid);
            res.redirect('/profile');
            return;
        });
    };
});

module.exports = router;
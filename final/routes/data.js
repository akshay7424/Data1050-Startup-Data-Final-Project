var express = require("express");
var router = express.Router();
var path = require("path");
var models = require("../models");

const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/data.html"));
});

/** create new user
 * @param userID, username, bio, etc.
 * @return new userID
 */
router.post("/new-user", function (req, res) {
  models.User.create({
    //id: req.body.id
    password: req.body.password,
    settingsDark: true,
    settingsAnonymousDefault: false,
    settingsHideEmail: false,
    settingsHideName: false,
    classYear: req.body.classYear,
    nickname: req.body.nickname,
    name: req.body.name,
    email: req.body.email,
    bio: req.body.bio,
    ssoKey: null,
    userType: req.body.userType,
  }); /*req.body.password,
        function (err, user) {
            if (err) {
                console.log(err);
                return res.render('404');
            }
            passport.authenticate("local")(req, res, function () {
                res.redirect("/id"); //want the new user's id here, redirect to their new profile page
            })
        }*/
});

module.exports = router;

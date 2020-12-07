var models = require("../models");
var express = require("express");
var router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

/*router.get('/my-profile', isLoggedIn, function(req, res) {

    res.render('profilePage', {
        //currentUser: req.user,
        name: req.user.name,
    })
})*/

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

/** View user profile
 * @param userID
 * @return User: {userID: int, name: String, nickname: String, class_year: int, user-type: String, email: String, bio: String}
 */
router.get("/:userID", function (req, res) {
  models.User.findByPk(req.params.userID).then((user) => {
    res.sendStatus(200);
    res.json(user);
  });
  res.render("profilePage", {
    headTitle: "Profile: " + this.name,
    ID: "",
    name: "",
    year: "",
    concentration: "",
    bio: "",
    myPosts: [],
    savedPosts: [],
    topTags: [],
    notifications: [],
  });
});

/** Editing a user's profile PUT?
 * @param userID
 * @return success(true)
 */
router.put("/edit-profile/:userID", function (req, res) {
  models.User.findByPk(req.params.userID).then(function (user) {
    user
      .update({
        id: req.body.id,
        settingsDark: req.body.settingsDark,
        settingsAnonymousDefault: req.body.settingsAnonymousDefault,
        settingsHideEmail: req.body.settingsHideEmail,
        settingsHideName: req.body.settingsHideName,
        classYear: req.body.classYear,
        nickname: req.body.nickname,
        name: req.body.name,
        email: req.body.email,
        bio: req.body.bio,
        ssoKey: req.body.ssoKey,
        userType: req.body.userType,
        lastChecked: req.body.lastChecked,
      })
      .then((user) => {
        res.json(user);
      });
  });

  res.render("content", {
    message: "mymessage",
    // Overrides which layout to use, instead of the default 'main' layout.
    layout: "otherlayout",
  });
});

module.exports = router;

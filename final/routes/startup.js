var models = require("../models");
var express = require("express");
const path = require("path");

var router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/", async function (req, res) {
  let startups = await models.Startup.findAll({
    limit: 10,
  }).then(async function (startups) {
    res.send(JSON.stringify(startups));
  });
  //res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

/** create new user
 * @param userID, username, bio, etc.
 * @return new userID
 */
router.post("/new-startup", function (req, res) {
  models.Startup.create({
    //id
    name: "example_startup",
    state_code: "CA",
    zip_code: 12091,
    city: "Los Angeles",
    funding_total: 100000,
    num_investors: 10,
    category: "Software",
    founded_at: 2000,
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

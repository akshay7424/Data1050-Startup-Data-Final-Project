var express = require("express");
var router = express.Router();

require("../server.js");

var express = require("express");
var router = express.Router();
var models = require("../models");

/**
 * From https://appdividend.com/2018/02/05/express-session-tutorial-example-scratch/
 * Adds user (Will refactor to incorporate adding to db too
 *
 */
router.get("/", function (req, res) {
  res.render("add");
  //req.session.errors = null;
});

router.post("/", function (req, res) {
  // Search database for a user with that email (name, password, etc later, presumably)
  models.User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(async function (userAsModel) {
    // Check if a user was returned
    if (userAsModel) {
      // Print message to terminal
      console.log("User with email = " + req.body.email + " found!");

      // Convert sequelize model into Javascript object
      let userAsJSON = userAsModel.toJSON();

      // Save user data fields into session
      req.session.uid = userAsJSON.id;
      req.session.name = userAsJSON.name;
      req.session.email = userAsJSON.email;
      req.session.year = userAsJSON.classYear;
      req.session.password = userAsJSON.password; // .... (z: is this secure?)

      console.log("HERE I AM HERE = " + req.session.uid);

      // Redirect to main feed
      res.redirect("/");
    } else {
      // Print message to terminal
      console.log("User with email = " + req.body.email + " not found!");

      // Send reply to frontend
      res.json({ error: true }); // (z: frontend is still working on this one)
    }
  });
});

module.exports = {
  router,
};

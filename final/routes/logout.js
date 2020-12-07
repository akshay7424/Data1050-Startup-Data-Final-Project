var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  // Manual reset
  req.session.uid = null;
  req.session.name = null;
  req.session.email = null;
  req.session.year = null;
  req.session.password = null;

  console.log("User successfully logged out.");
  res.redirect("/login");
  return;
});

module.exports = router;

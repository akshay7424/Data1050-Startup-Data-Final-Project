var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/data3.html"));
});

module.exports = router;

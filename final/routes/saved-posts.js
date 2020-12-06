var models = require("../models");
var express = require("express");
var router = express.Router();

/** view post from followed_post table
 * @param postID
 * @return post: {title: String, ownerID: int, body: String, link: String, image_url: String, draft: bool, anon: bool,
 * created_at: DateTime}
 */
router.get("/:postID", function (req, res) {
  // models.User.create({
  //     username: req.body.username
  // }).then(function() {
  //     res.redirect('/');
  // });
  // The above is used to interface with the database

  res.render("content", {
    message: "mymessage",
    // Overrides which layout to use, instead of the default 'main' layout.
    layout: "otherlayout",
  });
});

module.exports = router;

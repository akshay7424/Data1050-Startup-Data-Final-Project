var models = require("../models");
var express = require("express");
var router = express.Router();

/** view certain comment
 * @param  commentID
 * @return Comment: {ownerID: int, ownerName: String, postID: int, body: String, posted-date: String,
 * likes: Array of Likes, replies: Array of Replies}
 */

router.get("/:commentID", function (req, res) {
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

/** View comments on post
 * @param postID
 * @return array of comments
 */
router.get("/:postID/comments", function (req, res) {
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

/** Reply to comment
 * @param body: commentID: int, String, anon: bool, ownerID: int,  created_at: String
 * @return new commentID
 */
router.post("/reply", function (req, res) {
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

/** Edit a comment on a post
 * @param commentID
 * @body 'whatever the user writes'
 * @return success (true)
 */
router.put("/edit", function (req, res) {
  models.Comment.findByPk(req.params.postID).then(function (post) {
    post
      .update({
        // hard - coded values
        id: 999, // req.body.id,
        anonymous: false, //req.body.anonymous
        ownderId: 98, // req.body.ownderID
        postId: 1, // req.body.postID
        commentId: 999, // req.body.commentID
      })
      .then((post) => {
        res.json(post);
      });
  });
  res.render("content", {
    message: "mymessage",
    layout: "otherlayout",
  });
});

/** Create a comment on a post
 * @param postID (to comment): int, body: String, anon: bool, ownerID: int, created_at: String
 * @body 'whatever the user writes'
 * @result success (true)
 */
router.post("/", function (req, res) {
  models.Comment.create({
    id: 1, //req.body.id,
    //anonymous: req.body.anonymous,
    ownerId: 1, //req.session.uid,
    postId: 1, //req.body.postID,
    commentId: 1, //req.body.commentId,
    body: req.body.commend_body,
  }).then(function (post) {
    res.json(post);
  });
  //res.render("content", {
  //  message: "mymessage",
  // Overrides which layout to use, instead of the default 'main' layout.
  //  layout: "otherlayout",
  //});

  console.log("Posted comment");
  res.send(req.body);
});

/***************************************************************************
 Tests moved to Postman
***************************************************************************/

/** Delete comment
 * @param commentID
 * @return success (true)
 */
router.delete("/delete", [
  function (req, res, next) {
    models.Comment.findByPk(req.params.commentID)
      .then(function (post) {
        post.destroy();
      })
      .then((post) => {
        res.sendStatus(404);
      });
  },
  function (req, res) {
    // same as posts.js
  },
  /*
  res.render("content", {
    message: "mymessage",
    // Overrides which layout to use, instead of the default 'main' layout.
    layout: "otherlayout",
  }); */
]);

/** Get parent comments (using commentID field, which is the parent comment)
 * [This should get parent comment until a comment has no parent(commentID)
 * @param commentID
 * @return array of commentIDs
 */
router.get("/previous-comments/:commentID", function (req, res) {
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

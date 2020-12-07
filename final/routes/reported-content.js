var models = require("../models");
var express = require("express");
var router = express.Router();

// TODO: Write what we want in the body
// owner ID - whoever is in the current session
// comment - send through properties of the post request
// body is filled with the body

/** Report a comment
 * @param commentID
//  * @param comment-type post or comment
 * @body owner_id, body, comment
 * @return true, if successful, otherwise false
 */
// router.post("/:commentID", function (req, res) {
//   // models.User.create({
//   //     username: req.body.username
//   // }).then(function() {
//   //     res.redirect('/');
//   // });
//   // The above is used to interface with the database

//   res.render("content", {
//     message: "mymessage",
//     // Overrides which layout to use, instead of the default 'main' layout.
//     layout: "otherlayout",
//   });
// });

/** Report a post
 * @param  postID
 * @body: owner_id, body,  comment
 * @return true, if successful, otherwise false
 */
// router.post("/:postID", function (req, res) {
//   // models.User.create({
//   //     username: req.body.username
//   // }).then(function() {
//   //     res.redirect('/');
//   // });
//   // The above is used to interface with the database

//   res.render("content", {
//     message: "mymessage",
//     // Overrides which layout to use, instead of the default 'main' layout.
//     layout: "otherlayout",
//   });
// });

/** View all reported content (admin only)
 * @param none
 * @return list of dicts,
 * {ownerID: int, content_type: String, postID: int,
 * body: String, created-at: String, comment: String, resolved:int}
 */
// router.get("/reported", function (req, res) {
//   // models.User.create({
//   //     username: req.body.username
//   // }).then(function() {
//   //     res.redirect('/');
//   // });
//   // The above is used to interface with the database

//   res.render("content", {
//     message: "mymessage",
//     // Overrides which layout to use, instead of the default 'main' layout.
//     layout: "otherlayout",
//   });
// });

// TEST FOR GET ALL REPORTED comments
/** 
 */
router.get("/get-all-reported-comments", function (req, res) {
  console.log("get all reported content");

  models.ReportedComment.findAll().then(comment => {
      res.json(comment)
      console.log("get all reported success!", JSON.stringify(comment))
    });
  /*
    res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'
    });*/
});

// get all reported posts
router.get("/get-all-reported-posts", function (req, res) {
  console.log("get all reported posts");

  models.ReportedPost.findAll().then(function (post) {
    res.json(post);
    console.log("get all reported posts success!", JSON.stringify(post));
  });
  /*
    res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'
    });*/
});


/** View all reported comments for a user id
 */
router.get("/get-reported-by-user/:userId", function (req, res) {
  models.ReportedComment.findAll({
    where: {
      ownerId: req.params.userId,
    },
  }).then((reportedComment) => {
    res.json(reportedComment);
  });
  // res.render("content", {
  //   message: "mymessage",
  //   // Overrides which layout to use, instead of the default 'main' layout.
  //   layout: "otherlayout",
  // });
});

/** View all reported comments for a report type
 */
router.get("/get-reported-type/:reportType", function (req, res) {
  models.ReportedComment.findAll({
    where: {
      reportType: req.params.reportType,
    },
  }).then((reportedComment) => {
    res.json(reportedComment);
  });
  // res.render("content", {
  //   message: "mymessage",
  //   // Overrides which layout to use, instead of the default 'main' layout.
  //   layout: "otherlayout",
  // });
});

// Delete a report.
router.delete("/delete-reported-comment/:id", function (req, res) {
  models.ReportedComment.findByPk(req.params.id)
    .then(function (reportedComment) {
      reportedComment.destroy();
    });
  // res.render("content", {
  //   message: "mymessage",
  //   // Overrides which layout to use, instead of the default 'main' layout.
  //   layout: "otherlayout",
  // });
});

/** Mark post as resolved
 * @param content_type post or comment
 * @param content_id ID of the post or comment
 * @return true, if success, false otherwise
 */
// router.post("/reported/:content_type/:content_id", function (req, res) {
//   // models.User.create({
//   //     username: req.body.username
//   // }).then(function() {
//   //     res.redirect('/');
//   // });
//   // The above is used to interface with the database

//   res.render("content", {
//     message: "mymessage",
//     // Overrides which layout to use, instead of the default 'main' layout.
//     layout: "otherlayout",
//   });
// });

// Testing endpoints
/** Create a comment on a post
 * @param id (to comment): int, body: String, anon: bool, ownerID: int, created_at: String
 * @body 'whatever the user writes'
 * @result success(true)
 */
router.post("/reportedCommentTest", function (req, res) {
  console.log("testing reporting a comment");

  models.ReportedComment.create({
    id: 4, // req.body.id
    reportedCommentId: 100,
    reportType: "Bullying",
    comment: "This is bullying",
    ownerId: 98,
    resolved: 0,
  }).then(function (comment) {
    res.json(comment);
    console.log("success!", JSON.stringify(comment));
  });


  /*
    res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'
    });*/
});


module.exports = router;
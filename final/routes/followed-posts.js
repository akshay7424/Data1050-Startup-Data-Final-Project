var models = require("../models");
var express = require("express");
var router = express.Router();

/** View user profile
 * @param userID
 * @return User: {userID: int, name: String, nickname: String, class_year: int, user-type: String, email: String, bio: String}
 */
router.get("/", function (req, res) {
  // models.User.create({
  //     username: req.body.username
  // }).then(function() {
  //     res.redirect('/');
  // });
  // The above is used to interface with the database
  res.render("followed-posts", {
    postsArray: [
      {
        postTitle:
          "This is a text post with no title. It has no link" +
          ", so it uses the maximum available space",
        postBody:
          "Lorem ipsum dolor sit amet, consectetur adipiscing" +
          " elit, sed do eiusmod tempor incididunt ut labore et dol" +
          "ore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
          "exercitation",
        tagsArray: [
          { imptTag: true, tag: "An Important Tag" },
          { imptTag: true, tag: "A Second Important Tag" },
          { imptTag: false, tag: "An Unimportant Tag" },
          { imptTag: false, tag: "Another Unimportant Tag" },
          { imptTag: false, tag: "Clubs" },
          { imptTag: false, tag: "This is hella cool" },
          { imptTag: false, tag: "some tags here" },
        ],
        timeAgo: "4 hours ago",
        opName: "Barack Obama",
        opYear: "25",
        opID: "12344321", // Anything else we need to add in postsArray?
        likes: 343,
        comments: 0,
      },
      {
        postTitle: "This is a text post with no title. It has no link",
        postBody:
          "Lorem ipsum dolor sit amet, consectetur adipiscing" +
          " elit, sed do eiusmod tempor incididunt ut labore et dol" +
          "ore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
          "exercitation",
        tagsArray: [
          { imptTag: true, tag: "An Important Tag" },
          { imptTag: true, tag: "A Second Important Tag" },
          { imptTag: false, tag: "An Unimportant Tag" },
          { imptTag: false, tag: "Another Unimportant Tag" },
          { imptTag: false, tag: "Clubs" },
          { imptTag: false, tag: "This is hella cool" },
          { imptTag: false, tag: "some tags here" },
        ],
        timeAgo: "10 hours ago",
        opName: "George Bush",
        opYear: "16",
        opID: "12334899",
        likes: 6,
        comments: 3,
      },
    ],
  });
});

// Unfollows a post that was followed
router.put("/:userID", function (req, res) {
  res.render("unfollowed-post", {
    postID: "postID",
    follow_status: "status",
  });
});

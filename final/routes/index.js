const models = require("../models");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const postsF = require("./helpers/expandPost.js");
const getNotif = require("./helpers/getNotifications.js");

router.use(passport.initialize());
router.use(passport.session());

// Main Feed Page
router.get("/", function (req, res) {
  // Check if logged in
  if (!req.session.uid) {
    res.redirect("/login");
    return;
  }

  // Find post models from database
  models.Startup.findAll({
    limit: 10,
    where: {},
    order: [["createdAt", "DESC"]],
  })
    // Then, if an array of post models is found
    .then(async function (arrayOfStartupsAsModels) {
      // Save the number of posts
      req.session.numPostsLoaded = 10;
      // Attempt to expand all post models into JSON objects
      Promise.all(
        arrayOfStartupsAsModels.map((oneStartupAsModel) =>
          postsF.expandPost(oneStartupAsModel)
        )
      )
        // Then, if the expansion was successful
        .then(async (arrayOfPostsAsObjects) => {
          // Render the page
          console.log("%%%%%%%%%%%%");
          let resp = await getNotif.getNotifications(req.session.uid);

          //console.log(resp);
          res.render("mainFeedPage", {
            headTitle: "WTAB",
            userID: req.session.uid,
            drafts: [
              {
                draftType: "textPost",
                draftID: "34SD",
                draftTitle: "F in the chat for Blueno...",
                draftBody:
                  "With Blueno officially gone, I would like everyone to share their fondest memories of our blue bear",
                draftTags: "RIP, Blueno, Another Victim Of 2020",
              },
              {
                draftType: "linkPost",
                draftID: "35SD",
                draftTitle: "Sharing my favorite video",
                draftLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                draftTags:
                  "Quality Content, Must Watch, A Tag, Another Tag, CSV?, Lol",
              },
            ],
            notifications: [
              {
                content: "Someone commented on a post you're following",
                read: false,
                postID: 1423424,
              },
              {
                content: "Anonymous commented on your post",
                read: false,
                postID: 1765673,
              },
              {
                content: "Anonymous like your post",
                read: true,
                postID: 1432432,
              },
            ],
            postsArray: arrayOfPostsAsObjects,
          });
        });
    });
});

module.exports = router;

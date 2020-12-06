var models = require("../models");
var express = require("express");
var router = express.Router();

// DON'T KNOW WHAT I AM WRITING, WILL LEARN EXPRESS NOW...
// - chai

// get followers
router.get("/user/followed/:userID", function (req, res) {
  // getting a list of users
  // maybe each variable is a list on its own? not sure

  // i am thinking, we can definitely have a recommendation system
  // that is solely based on year level (top 6 SQL queries)
  res.render(
    "followed-list",
    {
      usernames: "usernames",
      user_ids: "ids",
      user_icons: "icons",
      user_info: "info",
      follow_status: "status",
    },
    "recommendation-list",
    {
      rec_usernames: "usernames",
      rec_user_ids: "ids",
      rec_user_icons: "icons",
      rec_user_info: "info",
      rec_follow_status: "status",
    }
  );
});

// put request for deleting (modifting) follow status
router.put("/user/followed/:userID", function (req, res) {
  // pushing unfollowed user's id information only
  res.render("unfollowed-user", {
    username: "username",
    user_id: "id",
    follow_status: "status",
  });
});

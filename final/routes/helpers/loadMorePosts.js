const models = require("../../models");
const express = require("express");

// Include the next line where loadMorePosts() is called:
// const postsF = require("./helpers/expandPost.js");

async function loadMorePosts() {
  /*
    Purpose: Loads the next 10 posts.
    */
  let posts = models.Post.findAll({
    offset: req.session.numPostsLoaded,
    limit: 10,
    where: {},
    order: [["createdAt", "DESC"]],
  }).then(async function (posts) {
    req.session.numPostsLoaded += 10;
    Promise.all(posts.map((x) => postsF.expandPost(x, false))).then((result) => {
      return result; // result is the next 10 posts. Load the posts individually, then add them to mainFeed.
    });
  });
}

module.exports.loadMorePosts = loadMorePosts;

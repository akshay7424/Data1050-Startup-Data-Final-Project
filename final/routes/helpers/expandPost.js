const models = require("../../models");
const express = require("express");

// Takes a post model object and a boolean
async function expandPost(startup) {
  let poll = null;
  let commentsTree = null;
  // if (needCommentsTree) {
  //   commentsTree = await models.Comment.findAll({where: {postId: post.id}});
  // }

  return {
    postID: "Startup Name",
    postType: "Startup Name",
    postTitle: startup.name,
    postBody: startup.state_code,
    postBody2: startup.category_list,
    postBody3: startup.city,
    postImagesArray: [], //Not sure how we would get these images from a url to an image array
    postLink: "Startup Name",
    postDocumentInfo: {}, //Not sure what this is, need to add to model,
    tagsArray: [
      { imptTag: true, tag: "tags not implemented yet" },
      { imptTag: false, tag: "in models/posts.js" },
      { imptTag: false, tag: "so obviously this means nothing" },
      {
        imptTag: false,
        tag: "you can find me in routes/helpers/expandPost.js",
      },
    ],

    likeCount: 0, // await models.LikesPost.count({ where: { postId: post.id } }),
  };
}

module.exports.expandPost = expandPost;

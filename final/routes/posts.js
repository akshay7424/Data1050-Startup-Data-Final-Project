const models = require("../models");
const express = require("express");
const router = express.Router();
const postsF = require("./helpers/expandPost.js");
const notif = require("./helpers/sendNotification.js");

const bodyParser = require("body-parser");
router.use(bodyParser.json());

/** View post
 * @param postID
 * @return post: {title: String, ownerID: int, ownerName: String, body: String, link: String, image_url: String,
 * comments: array of comments, created_at: String}
 */
router.get("/:postID", function (req, res) {
  // Check if logged in
  if (!req.session.uid) {
    res.redirect("/login");
    return;
  }

  // Find post model from database
  models.Post.findByPk(req.params.postID)
    // Then, if post model is found
    .then(
      (postAsModel) =>
        // Attempt to expand the post model into a JSON object
        postsF
          .expandPost(postAsModel)
          // Then, if the expansion was successful
          .then((result) => {
            // Render the page
            res.render("singlePostPage", {
              userID: result.opID,
              headTitle: "WTAB: " + result.postTitle,
              ...result,
            });
          })
      // But if the post model was not found, or expansion was unsuccessful
    )
    .catch(() => {
      res.status(404).type("html");
      res.render("404Page", { headTitle: "WTAB: 404" });
    });
});

/** Edit a post from user's posts
 * @param postID
 * @body 'whatever the user writes'
 * @result success(true)
 */
router.post("/edit-post", function (req, res) {
  console.log(req.body);
  models.Post.findByPk(req.params.postID).then(function (post) {
    post
      .update({
        studentsOnly: post.studentsOnly, //add functionality to edit studentsOnly later
        anonymous: post.anonymous, //add functionality to edit anonymous later
        draft: post.draft,
        title: post.title,
        body: req.body.editedBody,
        link: post.link,
        pollId: post.pollId,
        imageUrl: post.imageUrl,
        hidden: post.hidden,
      })
      .then((post) => {
        res.json(post);
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  res.render("content", {
    message: "mymessage",
    // Overrides which layout to use, instead of the default 'main' layout.
    layout: "otherlayout",
  });
});

/** Handles POST request to create a new post. POST request should come from the
 *  function submitPost().
 *  Request must contain:
 *
 *  @param ownerId, the ID of the user sending the request, from session
 *         -- The following are from the request body --
 *         postType, from "textPost", "imagePost", "linkPost", or "documentPost"
 *         studentsOnly,
 *         anonymous,
 *         postTitle, the title of the post (required)
 *         postBody, the body text of the post (required IF "textPost", null otherwise)
 *         postImages, the image of the post (required IF "imagePost", null otherwise)
 *                   TODO: z 11/21: shouldn't this be an array of urls
 *         postLink, the link of the post (required IF "linkPost", null otherwise)
 *
 *  @result nothing
 */
router.post("/create", function (req, res) {
  models.Post.create({
    ownerId: req.session.uid,
    postType: req.body.postType,
    studentsOnly: req.body.studentsOnly, // will add functionality later
    anonymous: req.body.anonymous, // will add functionality later
    draft: req.body.postType === "draftTextPost",
    title: req.body.postTitle,
    body: req.body.postType === "textPost" ? req.body.postBody : null,
    imageUrl: req.body.postType === "imagePost" ? req.body.postImages : null, // do we want an array or array of images?
    link: req.body.postType === "linkPost" ? req.body.postLink : null,
  }).then(async function (postAsModel) {
    res.json({
      postIsCreated: postAsModel ? 1 : 0,
      createdPostId: postAsModel.id,
      createdPostObject: await postsF.expandPost(postAsModel),
    });
  }); // (z: do we have to add a .catch() for models.Post.create()? does it return any kind of error?)
});

/** Handles POST request to like/unlike a particular post. POST request should
 *  come from the function sendLike().
 *  Request must contain:
 *
 *  @param ownerId, the ID of the user sending the request, from session
 *         postId, the ID of the post to be liked/unliked, from body
 *
 *  @result sends a response containing field postIsLiked (1 or 0)
 */
router.post("/like", function (req, res) {
  // Check if the database contains an existing like for (ownerId, postId)
  models.LikesPost.findOne({
    where: { ownerId: req.session.uid, postId: req.body.postId },
  }).then(function (like) {
    if (!like) {
      // No existing like found: like the post
      // Create a new like
      models.LikesPost.create({
        ownerId: req.session.uid,
        postId: req.body.postId,
        commentId: null,
      });
      // Increment the like count(?)
      // ???
      // Send the response to the user
      res.json({ postIsLiked: 1 });
      //Send notification to ownerId
      models.Post.findByPk(req.body.postId).then(function (post) {
        notif.sendNotification(
          post.ownerId,
          req.session.uid + " liked your post!",
          req.body.postId
        );
      });
    } else {
      // Existing like found: unlike the post
      // Destroy the existing like
      models.LikesPost.destroy({
        where: {
          ownerId: req.session.uid,
          postId: req.body.postId,
          commentId: null,
        },
      });
      // Decrement the like count(?)
      // ???
      // Send the response to the user
      res.json({ postIsLiked: 0 });
    }
  });
});

/** Handles GET request to check, for a particular post, the like count and
 *  whether the provided user has liked that post. Request body must contain:
 *
 *  @param ownerId, the ID of the user sending the request
 *         postId, the ID of the post
 *
 *  @result sends a response containing fields postIsLiked and likeCount
 */
router.get("/queryLike/:postID", async function (req, res) {
  // Initialize variables
  let likeCount;
  let postId = req.params.postID;

  // Check if the database contains an existing like for (ownerId, postId)
  models.LikesPost.findOne({
    where: { ownerId: req.session.uid, postId: postId },
  }).then(async function (like) {
    // Get like count
    likeCount = await models.LikesPost.count({ where: { postId: postId } });

    if (!like) {
      // User does not yet like this post
      res.json({ postIsLiked: 0, likeCount: likeCount });
    } else {
      // User already likes this post
      res.json({ postIsLiked: 1, likeCount: likeCount });
    }
  });
});

/** Delete a post
 * @param postID
 * @body 'whatever the user writes'
 * @result success(true)
 */
router.post("/delete/:postID", [
  //sorry! had to change it to post in order to delete without using ajax
  function (req, res, next) {
    models.Post.findByPk(req.params.postID)
      .then(async function (post) {
        if (!post || post.toJSON().ownerId != req.session.uid) {
          res.send("You cannot delete someone else's post.");
        } else {
          post.destroy();
          //models.Post.delete({id: req.params.postID});
          res.status(200).redirect("back");
          return;
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  },
]);

module.exports = router;

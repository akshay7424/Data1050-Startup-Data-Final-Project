var express = require("express");
var router = express.Router();
const models = require("../models");
const postsF = require("./helpers/expandPost.js");
const getNotif = require("./helpers/getNotifications.js");

let postArr = [];
// Profile Page
router.get("/", async function (req, res) {
  if (!req.session.uid) {
    res.redirect("/login");
    return;
  } else {
    console.log("$$$$$$$$$$$$$$$$$$");
    let not = await getNotif.getNotifications(req.session.uid);
    if (not) {
      console.log(not);
    }

    //console.error(getNotif.getNotifications(req.session.uid));
    let posts = await models.Post.findAll({
      limit: 10,
      where: { ownerId: req.session.uid },
      order: [["createdAt", "DESC"]],
    }).then(async function (posts) {
      //postArr = []
      Promise.all(posts.map((x) => postsF.expandPost(x, false))).then(
        (result) => {
          postArr = result;
          res.render("profilePage", {
            //currentUser: req.user,
            headTitle: "Profile: " + this.name,
            userID: req.session.uid,
            name: req.session.name,
            year: req.session.year,
            email: req.session.email,
            concentration: "Computer Science",
            bio:
              "Praesent dignissim, massa sed dapibus euismod, metus eros facili" +
              "sis lacus, id sagittis mauris erat id urna",
            myPosts: postArr,
            savedPosts: [
              //allPosts.t1,
              //allPosts.d1,
              //allPosts.t5,
            ],
            topTags: [
              { imptTag: true, tag: "Vitae Massa" },
              { imptTag: true, tag: "Lectus" },
              { imptTag: true, tag: "Rhoncus" },
              { imptTag: true, tag: "Dolor" },
              { imptTag: true, tag: "Eleifend Quis Orci" },
              { imptTag: true, tag: "At Auctor" },
              { imptTag: true, tag: "Donec Est magna" },
              { imptTag: true, tag: "Feugiat Mauris Condimentum" },
            ],
            suggestedTags: [
              { imptTag: false, tag: "Donec Justo Quam" },
              { imptTag: false, tag: "Ac Erat Id" },
              { imptTag: false, tag: "Vivamus" },
              { imptTag: false, tag: "Cursus Velit" },
              { imptTag: false, tag: "Sed Suscipit" },
              { imptTag: false, tag: "Blandit" },
            ],
            notifications: getNotif.getNotifications(req.session.uid),
          });
        }
      );
    });
  }
});

module.exports = router;

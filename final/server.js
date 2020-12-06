//Express-HBS config
const express = require("express");
const session = require("express-session");
const app = express();

const exphbs = require("express-handlebars");
const path = require("path");
const hbs = exphbs.create({
  partialsDir: "views/partials/",
});
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const db = require("./models");

// Fetch user for session
const User = require("./models/users.js");

const routes = require("./routes/index");
const posts = require("./routes/posts");
const users = require("./routes/users");
const saved_users = require("./routes/saved-users");
const saved_posts = require("./routes/saved-posts");
const polls = require("./routes/polls");
const reported = require("./routes/reported-content");
const comments = require("./routes/comments");
const login = require("./routes/login");
const register = require("./routes/register");
const logout = require("./routes/logout");
const profile = require("./routes/profile");
const search = require("./routes/search");
const startup = require("./routes/startup");

var creds = require("./routes/creds");
var data = require("./routes/data");
var data2 = require("./routes/data2");
var data25 = require("./routes/data25");
var data3 = require("./routes/data3");
var d3 = require("d3");

app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", "hbs");
app.set("views", __dirname + "/views/");
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/")));
app.use(express.static(path.join(__dirname, "public")));

// app.use(cookieParser());
app.use(expressValidator());

app.use(
  session({
    secret: "Hey-Mr-Postmaaan",
    cookie: {},
    resave: true,
    saveUninitialized: true,
    maxAge: 3600000 * 24, // Session expires after 24 hours
  })
);

app.use("/", routes);
app.use("/posts", posts);
app.use("/users", users);
app.use("/saved-users", saved_users);
app.use("/saved-posts", saved_posts);
app.use("/polls", polls);
app.use("/reported-content", reported);
app.use("/comments", comments);
app.use("/login", login.router);
app.use("/register", register);
app.use("/logout", logout);
app.use("/profile", profile);
app.use("/search", search);
app.use("/startup", startup);

app.use("/creds", creds);
app.use("/data", data);
app.use("/data2", data2);
app.use("/data25", data25);
app.use("/data3", data3);

app.use(express.static("views"));

try {
  db.sequelize.sync(/*{alter: true}*/);
} catch (err) {
  console.log("Unable to sync");
}

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});

// ================================ Helper Functions Written By Frontend Team

// Basic Stuff
hbs.handlebars.registerHelper("ifEqual", function (v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
hbs.handlebars.registerHelper(
  "ifFirstTrueSecondFalse",
  function (v1, v2, options) {
    if (v1 && !v2) {
      return options.fn(this);
    }
  }
);
hbs.handlebars.registerHelper("ifLongerThanOne", function (v1, options) {
  if (v1.length > 1) {
    return options.fn(this);
  }
  return options.inverse(this);
});
hbs.handlebars.registerHelper("compactNumber", function (givenNumber) {
  let output = "";
  if (givenNumber > 10000) {
    output = Math.floor(givenNumber / 1000) + "k";
  } else if (givenNumber > 1000) {
    output = (givenNumber / 1000).toString().slice(0, 3) + "k";
  } else if (givenNumber !== undefined) {
    console.log(givenNumber);
    output = givenNumber.toString();
  }
  return output;
});

// Stuff for displaying time

function relativeTimeVsNow(previousDate) {
  let current = Date.now();
  let previous = Date.parse(previousDate);

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30.44;
  const msPerYear = msPerDay * 365.2425;
  console.log(msPerYear);

  let elapsed = current - previous;

  if (elapsed < msPerMinute) {
    let x = Math.floor(elapsed / 1000);
    if (x === 1) {
      return "1 second ago";
    } else {
      return x + " seconds ago";
    }
  } else if (elapsed < msPerHour) {
    let x = Math.floor(elapsed / msPerMinute);
    if (x === 1) {
      return "1 minute ago";
    } else {
      return x + " minutes ago";
    }
  } else if (elapsed < msPerDay) {
    let x = Math.floor(elapsed / msPerHour);
    if (x === 1) {
      return "1 hour ago";
    } else {
      return x + " hours ago";
    }
  } else if (elapsed < msPerMonth) {
    let x = Math.floor(elapsed / msPerDay);
    if (x === 1) {
      return "1 day ago";
    } else {
      return x + " days ago";
    }
  } else if (elapsed < msPerYear) {
    let x = Math.floor(elapsed / msPerMonth);
    if (x === 1) {
      return "about 1 month ago";
    } else {
      return "about " + x + " months ago";
    }
  } else {
    let x = Math.floor(elapsed / msPerYear);
    if (x === 1) {
      return "about 1 year ago";
    } else {
      return "about " + x + " years ago";
    }
  }
}

hbs.handlebars.registerHelper("relativeTimeVsNow", function (givenTimestamp) {
  return relativeTimeVsNow(givenTimestamp);
});

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
  timeZoneName: "short",
};

hbs.handlebars.registerHelper("absoluteTime", function (givenTimestamp) {
  return new Date(givenTimestamp).toLocaleString("en-US", options);
});

// Stuff for displaying comment trees

function generateComments(c) {
  let comment = '<div class="commentText">' + c.comment + "</div>";

  let user =
    "<div>" +
    '<span class="postProvenance"> Commented ' +
    c.timeAgo +
    " by " +
    '<a class="username tabHighlightable" href="/user/' +
    c.commentOpID +
    '" id="username" tabindex="0">' +
    '<span class="insideTabHighlightable insideButText" tabindex="-1">' +
    c.commentOpName +
    " '" +
    c.commentOpYear +
    "</span>" +
    '<div class="opBio" id="opBio">' +
    '<div class="userNameText">' +
    "user/" +
    c.commentOpName +
    " '" +
    c.commentOpYear +
    "</div>" +
    '<div class="userInfo">' +
    "Concentration:" +
    "<br>" +
    '<p class="userInfoText">' +
    c.commentOpConcentration +
    "</p>" +
    'Bio: <br> <p class="userInfoText">' +
    c.commentOpBio +
    "</p>" +
    "</div>  </div>  </a> </span> </div>";

  let commentReply = '<div class="commentReplyParent">' + "</div>";

  let options =
    "<div>" +
    '<span class="postProvenance"> ' +
    '<a class="reply tabHighlightable" id="' +
    c.commentID +
    '" onclick="openReplyArea(' +
    c.commentID +
    ')">' +
    '<span class="insideTabHighlightable insideButText" tabindex="-1">' +
    "Reply " +
    "</span>" +
    "</a>" +
    '<a class="report tabHighlightable ">' +
    '<span class="insideTabHighlightable insideButText" tabindex="-1">' +
    " Report" +
    "</span>" +
    "</a>" +
    "</span>" +
    "</div>";

  let str =
    '<div class="commentBox">' +
    '<div class="commentFeedLeft"></div>' +
    '<div class="commentFeedCenter">' +
    '<div class="singleComment">' +
    user +
    comment +
    options +
    commentReply +
    "</div>" +
    "<div class='commentLikes'>" +
    '<button class="likeButton postLeftIconContainer tabHighlightable" tabindex="0" data-post-id="t1" data-post-is-liked="false" data-likes="' +
    c.commentLikes +
    '" style="margin: 0;">' +
    '<span class="insideTabHighlightable" tabindex="-1">' +
    '<svg class="likeSymbol postLeftIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">' +
    "<rect x='18' y='9' width='4' height='13'></rect>" +
    "<path d='M7.6,1.6a1,1,0,0,0-.41,1.09L8.54,7.74A1,1,0,0,1,7.58,9H1a1,1,0,0,0-1,1v3.88l0,.24,1.78,7.12a1,1,0,0,0,1,.76H16V9L10,0Z'></path>" +
    "</svg>" +
    "</span>" +
    "</button>" +
    '<span class="likeCount postLeftNumbers individualCommentCounts">' +
    compactNumber(c.commentLikes) +
    "</span>" +
    "</div>" +
    "</div>" +
    '<hr class="eoc">  </hr>';

  if (Object.keys(c.replies).length !== 0) {
    for (let j = 0; j < c.replies.length; j++) {
      str = str + generateComments(c.replies[j]);
    }
  }
  str = str + "</div>";
  return str;

  function compactNumber(givenNumber) {
    let output = "";
    if (givenNumber > 10000) {
      output = Math.floor(givenNumber / 1000) + "k";
    } else if (givenNumber > 1000) {
      output = (givenNumber / 1000).toString().slice(0, 3) + "k";
    } else {
      output = givenNumber.toString();
    }
    return output;
  }
}

hbs.handlebars.registerHelper("generateComments", function (commentTree) {
  let str = "";

  console.log("comments generating...");
  for (let i = 0; i < commentTree[0].replies.length; i++) {
    str += generateComments(commentTree[0].replies[i]);
    str = str + '<hr class="eoc">  </hr>';
  }

  return str;
});

// ================================ End Frontend Section

module.exports = app;

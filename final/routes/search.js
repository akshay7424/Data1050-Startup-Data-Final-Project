var express = require("express");
var router = express.Router();
const models = require("../models");
const Sequelize = require("sequelize");
const { search } = require("../server");
const Op = Sequelize.Op;

router.post("/", async function (req, res) {
  /*
    Purpose: localhost:8080/search/dr.b searches all posts with 'dr.b' in the body.
    Note: We'd like a new page to be loaded with all search results
    */
  if (!req.session.uid) {
    res.redirect("/login");
    return;
  } else {
    let searchResp = await models.Startup.findAll({
      limit: 1,
      where: {
        name: {
          // req.params.keyword should be 'keyword' that user searched for from mainFeed
          [Op.like]: "%" + req.body.keyword + "%",
        },
      },
    });
    console.log(searchResp);
    info = JSON.stringify(searchResp);
    parsedInfo = JSON.parse(info);
    console.log(info);
    res.render("startup_info", {
      //data: info,
      name: parsedInfo[0]["name"],
      state: parsedInfo[0]["state_code"],
      city: parsedInfo[0]["city"],
      category: parsedInfo[0]["category_list"],
      fundingTotal: parsedInfo[0]["funding_total"],
      founded: parsedInfo[0]["founded_at"],
      numInvestors: parsedInfo[0]["num_investors"],
    });
    //res.send(JSON.stringify(searchResp)); // Enter keyword then click on 'search' button to see output.
    // Route: .../search

    return searchResp; // This returns an array. May need to call expandPost() on it, not sure.
  }
});

module.exports = router;

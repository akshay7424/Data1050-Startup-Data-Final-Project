const models = require("../models");
const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

// Let's discuss the functionality / layout of this file.
// What will it enable us to do?
/*
* add, remove, edit tags on post
* create tag if tags doesnt exist
* find all posts with given tag(s)
 */

router.post("/create", function (req, res) {
    models.Tag.create({
        tagName: req.body.name
    })
});

router.post("/tag", function (req, res) {
    models.PostTag.create({
        tagName: req.body.name
    })
});
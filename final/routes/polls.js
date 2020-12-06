var models = require("../models");
var express = require("express");
var router = express.Router();


/** view certain poll
 * @param pollID
 * @return poll: {, ownerID: int, ownerName: String, question: String, link: String, image_url: String,
 * comments: array of Comments, responses: array of Responses, options: array of Options, likes: array of Likes, created_at: String}
 */
router.get('/:pollId', function(req, res) {
    models.Post.findByPk(req.params.pollId).then((poll) => {
        res.sendStatus(200)
        res.json(poll)
    });
    // The above is used to interface with the database
    res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'
    });
});

/** Create poll
 * @param question: String, option_bodies: array of String
 * @return pollId
 */
router.post('/create', function(req, res) {


    models.Poll.create({
        question: req.body.question,
        open: true

    }).then(function(poll) {
        res.json(poll);
        let i;
        for(i=0; i < numOptions; i++) { //way to track how many options are on post from frontend
            models.PollOption.create({
                index: i,
                fromPollId: poll.id,
                body: req.body.body

            })}
    }).then(function (poll) {
        res.redirect("/");
    });
});

/**
 * Add option to poll
 */
/*outer.post('/add-option', function(req, res) {
    models.PollOption.create({
        index: req.body.id,
        fromPollId: req.body.fromPollId,
        body: req.body.body

    }).then(function(poll) {
        res.json(poll);
    });

    res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'

    });
});*/

/** view options
 * @param pollID
 * @return array of Poll_options
 */
router.get('/:pollId/options', function(req, res) {
    models.PollOption.findAll({
        where: {fromPollId: req.params.pollId}

    }).then((pollOptions) => {
        res.sendStatus(200);
    });
    // The above is used to interface with the database
    res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'
    });
});

/** Responding to poll, choosing an option (NEED TO IMPLEMENT 1 VOTE PER PERSON)
 * @param pollID: int
 * @param optionID: int
 * @return success
 */

router.post('/vote', function(req, res) {
    models.LikesPost.findOne({where: {ownerId: req.session.uid, optionId: req.body.index}})
        .then(function (response) {

            if (!response) {
                models.PollResponse.create({
                        ownerId: req.session.uid,
                        optionId: req.body.optionId
                    });
            } else { // Existing like found: unlike the post
                // Destroy the existing like
                models.PollResponse.destroy({
                    where: {
                        ownerId: req.session.uid,
                        optionId: req.body.optionId
                    }
                });

            }}).then(function(poll) {
                res.json(poll);
            });
});

/** View number of responses for option
 * @param pollID: int
 * @param optionID: int
 * @return responses: array of responses
 */
router.get('/votes/:optionId', function(req, res) {

    models.PollResponse.count({
        optionId: req.params.optionId
    }).then((pollResponses) => {
        res.sendStatus(200);
    });
    // The above is used to interface with the database
    res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'
    });
});
/***************************************************************************
 * Testing from here...
 */

router.post('/createTest', function(req, res) {
    models.Poll.create({
        id: 1,
        question: "How much wood would a woodchuck chuck, if a woodchuck could chuck wood?"

    }).then(function(poll) {
        res.json(poll);
    });

    /*res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'

    });*/
});

router.post('/add-optionTest1', function(req, res) {
    models.PollOption.create({
        id: 1,
        fromPollId: 1,
        body: "Like 2 i guess"

    }).then(function(poll) {
        res.json(poll);
    });

    /*res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'

    });*/
});

router.post('/add-optionTest2', function(req, res) {
    models.PollOption.create({
        id: 2,
        fromPollId: 1,
        body: "aint that like a beaver?"

    }).then(function(poll) {
        res.json(poll);
    });

    /*res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'

    });*/
});

router.post('/voteTest1', function(req, res) {
    models.PollResponse.create({
        ownerId: 97,
        optionId: 1


    }).then(function(poll) {
        res.json(poll);
    });

    /*res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'

    });*/
});

router.post('/voteTest2', function(req, res) {
    models.PollResponse.create({
        ownerId: 98,
        optionId: 2


    }).then(function(poll) {
        res.json(poll);
    });

    /*res.render('content', {
        message: 'mymessage',
        // Overrides which layout to use, instead of the default 'main' layout.
        layout: 'otherlayout'

    });*/
});

module.exports = router;

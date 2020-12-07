const egPrototypicalPost = {
    postID: "string", // Required: up to backend to decide syntax/format/randomness/length
    postType: "string", // Required: "textPost"|"imagePost"|"linkPost"|"documentPost"|"pollPost"
    postTitle: "string", // Required
    postBody: "string", // If not textPost, just leave empty string
    postImagesArray: [ // If not imagePost, just leave empty array
        "url",
        "url"
    ],
    postLink: "url", // If not linkPost, just leave empty object
    postDocumentInfo: { // If not documentPost, just leave empty object
        documentTitle: "",
        documentUrl: "url"
    },
    postPollInfo: { // If not pollPost, just leave empty object. postPollOptions min length 2.
        totalVotes: 0,
        pollIsOpen: true,
        userHasVoted: false,
        postPollOptions: [
            // z: i have no idea how to ensure this is space/time efficient. is this alright?
            { index: 0, option: "string", votes: 0 },
            { index: 1, option: "string", votes: 0 },
            { index: 2, option: "string", votes: 0 }
        ]
    },
    tagsArray: [ // Required: at least one tag
        // (Temporary. imptTag booleans shouldn't be stored here--they're currently hardcoded
        // but it should be dependent on the user's imptTags instead)
        { imptTag: true, tag: "string" },
        { imptTag: false, tag: "string" }
    ],
    postTimestamp: 0, // Required: in milliseconds since January 1, 1970 00:00:00 UTC
    opName: "string", // Required
    opYear: "string", // Required: either two-digit or four-digit is accepted
    opConcentration: "", // (Temporary)
    opBio: "", // (Temporary)
    opID: "", // (Required)
    likeCount: 0, // Required
    commentCount: 0, // Required
    commentsTree: [
        {
            replies: [
                {
                    comment: "", // Required
                    timeAgo: "", // Required, basically a shortened version of the Timestamp
                    commentID: "", // Required
                    commentTimestamp: 0, // Required: in milliseconds since January 1, 1970 00:00:00 UTC
                    commentOpName: "", // Required
                    commentOpID: "", // Required
                    commentOpConcentration: "", //Optional
                    commentOpYear: "", //Optional
                    commentOpBio: "", //Optional 
                    commentLikes: 0, //Required
                    replies: []
                }
            ]
        }
    ], // Required
}
const allPosts = {
    p1: {
        postID: "p1",
        postType: "pollPost",
        postTitle: "Should users be allowed to pick multiple options?",
        postBody: "",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {
            totalVotes: 396,
            pollIsOpen: true,
            userHasVoted: false,
            postPollOptions: [
                { index: 0, option: "yes", votes: 99 },
                { index: 1, option: "yes", votes: 99 },
                { index: 2, option: "no", votes: 198 },
            ]
        },
        tagsArray: [{ imptTag: true, tag: "Poll" },
        { imptTag: false, tag: "But Not Really" },
        { imptTag: false, tag: "Not Yet" },
        { imptTag: false, tag: "Implemented" }],
        postTimestamp: 1599199599000,
        opName: "Lima Kilo",
        opConcentration: "Bio",
        opBio: "Some random bio",
        opYear: "26",
        opID: "LK26",
        likeCount: 3,
        commentCount: 0,
        commentsTree: [],
    },
    p2: {
        postID: "p2",
        postType: "pollPost",
        postTitle: "Is a taco an open-faced sandwich?",
        postBody: "",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {
            totalVotes: 84148,
            pollIsOpen: true,
            userHasVoted: false,
            postPollOptions: [
                { index: 0, option: "absolutely not, are you nuts", votes: 312 },
                { index: 1, option: "if cereal is a soup", votes: 5812 },
                { index: 2, option: "maybe", votes: 2124 },
                { index: 3, option: "yes", votes: 9234 },
                { index: 4, option: "in this essay, I will discuss the traditional Mexican corn and wheat tortilla dish known as", votes: 12341 },
                { index: 5, option: "sir, this is a Wendy's", votes: 66666 }
            ]
        },
        tagsArray: [{ imptTag: true, tag: "Serious" },
        { imptTag: false, tag: "Food Science" },
        { imptTag: false, tag: "Linguistics" },
        { imptTag: false, tag: "Linguine Sticks" },
        { imptTag: false, tag: "Breakfast Burrito" },
        { imptTag: false, tag: "I Don't Wanna" },
        { imptTag: false, tag: "Taco" },
        { imptTag: false, tag: "Bout It" }
        ],
        postTimestamp: 1599198999000,
        opName: "Lima Kilo",
        opConcentration: "Bio",
        opBio: "Some random bio",
        opYear: "26",
        opID: "LK26",
        likeCount: 16041,
        commentCount: 2546,
        commentsTree: [],
    },
    t1: {
        postID: "t1",
        postType: "textPost",
        postTitle: "I like to generate dummy text",
        postBody: "Quisque placerat tempus sagittis. Donec ut elit ips" +
            "um. Quisque orci eros, finibus posuere nisi in, vehicula " +
            "viverra urna",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {},
        tagsArray: [{ imptTag: true, tag: "Vivamus" },
        { imptTag: false, tag: "Rutrum" }],
        postTimestamp: 1599049801906,
        opName: "Alpha Bravo",
        opYear: "21",
        opConcentration: "Bio",
        opBio: "Some random bio",
        opID: "AB21",
        likeCount: 1,
        commentCount: 11,
        commentsTree: [
            {
                replies: [
                    {
                        comment: "1!",
                        timeAgo: "4 hours ago",
                        commentID: "S$34",
                        commentTimestamp: 1599047725094,
                        commentOpName: "Bob Smith",
                        commentOpID: "BD83",
                        commentOpConcentration: "Bio",
                        commentOpYear: "21",
                        commentOpBio: "Some random bio",
                        commentLikes: 5,
                        replies: [{
                            comment: "1.1!",
                            timeAgo: "4 hours ago",
                            commentID: "D$34",
                            commentTimestamp: 1599047725094,
                            commentOpName: "Bob Smith",
                            commentOpID: "NE24",
                            commentOpConcentration: "Bio",
                            commentOpYear: "21",
                            commentOpBio: "Some random bio",
                            commentLikes: 2343423,
                            replies: [{
                                comment: "1.1.1!",
                                timeAgo: "4 hours ago",
                                commentID: "S$32",
                                commentTimestamp: 1599047725094,
                                commentOpName: "Bob Smith",
                                commentOpID: "NE24",
                                commentOpConcentration: "Bio",
                                commentOpYear: "21",
                                commentOpBio: "Some random bio",
                                commentLikes: 2,
                                replies: [{
                                    comment: "1.1.1.1",
                                    timeAgo: "4 hours ago",
                                    commentID: "S$30",
                                    commentTimestamp: 1599047725094,
                                    commentOpName: "Bob Smith",
                                    commentOpID: "NE24",
                                    commentOpConcentration: "Bio",
                                    commentOpYear: "21",
                                    commentOpBio: "Some random bio",
                                    commentLikes: 0,
                                    replies: [],
                                },
                                {
                                    comment: "1.1.1.2",
                                    timeAgo: "4 hours ago",
                                    commentID: "S$A4",
                                    commentTimestamp: 1599047725094,
                                    commentOpName: "Bob Smith",
                                    commentOpID: "NE24",
                                    commentOpConcentration: "Bio",
                                    commentOpYear: "21",
                                    commentOpBio: "Some random bio",
                                    commentLikes: 0,
                                    replies: [],
                                }]
                            },
                            {
                                comment: "1.1.2!",
                                timeAgo: "4 hours ago",
                                commentID: "A$34",
                                commentTimestamp: 1599047725094,
                                commentOpName: "Bob Smith",
                                commentOpID: "NE24",
                                commentOpConcentration: "Bio",
                                commentOpYear: "21",
                                commentOpBio: "Some random bio",
                                commentLikes: 32423,
                                replies: []

                            }]
                        },
                        {
                            comment: "1.2!",
                            timeAgo: "4 hours ago",
                            commentID: "S$54",
                            commentTimestamp: 1599047725094,
                            commentOpName: "Bob Smith",
                            commentOpID: "NE24",
                            commentOpConcentration: "Bio",
                            commentOpYear: "21",
                            commentOpBio: "Some random bio",
                            commentLikes: 2,
                            replies: [{
                                comment: "1.2.1!",
                                timeAgo: "4 hours ago",
                                commentID: "S$00",
                                commentTimestamp: 1599047725094,
                                commentOpName: "Bob Smith",
                                commentOpID: "NE24",
                                commentOpConcentration: "Bio",
                                commentOpYear: "21",
                                commentOpBio: "Some random bio",
                                commentLikes: 234,
                                replies: [{
                                    comment: "1.2.1.1!",
                                    timeAgo: "4 hours ago",
                                    commentID: "AA34",
                                    commentTimestamp: 1599047725094,
                                    commentOpName: "Bob Smith",
                                    commentOpID: "NE24",
                                    commentOpConcentration: "Bio",
                                    commentOpYear: "21",
                                    commentOpBio: "Some random bio",
                                    commentLikes: 1,
                                    replies: [],
                                }]
                            }]
                        }]
                    },
                    {
                        comment: "2",
                        timeAgo: "4 hours ago",
                        commentID: "SM34",
                        commentTimestamp: 1599047725094,
                        commentOpName: "Bob Smith",
                        commentOpID: "BD23",
                        commentOpConcentration: "Bio",
                        commentOpYear: "21",
                        commentOpBio: "Some random bio",
                        commentLikes: 654,
                        replies: [],
                    },
                    {
                        comment: "3",
                        timeAgo: "4 hours ago",
                        commentID: "BB88",
                        commentTimestamp: 1599047725094,
                        commentOpName: "Bob Smith",
                        commentOpID: "IG88",
                        commentOpConcentration: "Bio",
                        commentOpYear: "21",
                        commentOpBio: "Some random bio",
                        commentLikes: 43,
                        replies: [],
                    }
                ]
            }
        ],
    },
    d1: {
        postID: "d1",
        postType: "documentPost",
        postTitle: "An example of a document post, with a text PDF. Cu" +
            "rrently, each PDF is presented by browser-specific previe" +
            "w embeds, so what you see (e.g. toolbars) in the box belo" +
            "w depends on your browser",
        postBody: "",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {
            documentTitle: "egTextPDF.pdf",
            documentUrl: "/assets/documents/egTextPDF.pdf"
        },
        postPollInfo: {},
        tagsArray: [{ imptTag: true, tag: "Document" },
        { imptTag: true, tag: "PDF" },
        { imptTag: false, tag: "But Not Really" },
        { imptTag: false, tag: "Not Yet" },
        { imptTag: false, tag: "Still A Work In Progress" }],
        postTimestamp: 1599047725094,
        opName: "India Juliet",
        opYear: "25",
        opConcentration: "Literature",
        opBio: "Some random bio",
        opID: "IJ25",
        likeCount: 88,
        commentCount: 16,
        commentsTree: [],
    },
    d2: {
        postID: "d2",
        postType: "documentPost",
        postTitle: "I Am Once Again Sharing A Document",
        postBody: "",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {
            documentTitle: "egImagePDF.pdf",
            documentUrl: "/assets/documents/egImagePDF.pdf"
        },
        postPollInfo: {},
        tagsArray: [{ imptTag: true, tag: "Document" },
        { imptTag: true, tag: "PDF" },
        { imptTag: false, tag: "How Is This" },
        { imptTag: false, tag: "Looking" },
        { imptTag: false, tag: "Right Now" }],
        postTimestamp: 1599000783070,
        opName: "Lima Kilo",
        opYear: "26",
        opConcentration: "Literature",
        opBio: "Some random bio",
        opID: "LK26",
        likeCount: 5,
        commentCount: 0,
        commentsTree: [],
    },
    i1: {
        postID: "i1",
        postType: "imagePost",
        postTitle: "Image Posts Now Navigable, With Page Indicators",
        postBody: "",
        postImagesArray: [
            "assets/img/egVeryLargeImage1.jpg",
            "assets/img/egLargeImage1.jpg",
            "assets/img/egMediumImage1.jpg",
            "assets/img/egSmallImage1.jpg",
            "assets/img/egVerySmallImage1.png"],
        postLink: "",
        postDocumentInfo: "",
        postPollInfo: {},
        tagsArray: [{ imptTag: false, tag: "Should" },
        { imptTag: false, tag: "The Last, Smallest Image" },
        { imptTag: false, tag: "Be Enlarged" },
        { imptTag: false, tag: "To Fit With The Rest?" }],
        postTimestamp: 1598109019547,
        opName: "Lima Kilo",
        opConcentration: "Apma",
        opBio: "Some random bio",
        opYear: "26",
        opID: "LK26",
        likeCount: 3,
        commentCount: 6,
        commentsTree: [],
    },
    i2: {
        postID: "i2",
        postType: "imagePost",
        postTitle: "Image post with just one small image",
        postBody: "",
        postImagesArray: ["assets/img/egVerySmallImage1.png"],
        postLink: "",
        postDocumentInfo: "",
        postPollInfo: {},
        tagsArray: [{ imptTag: true, tag: "Just Checking" },
        { imptTag: true, tag: "How" },
        { imptTag: true, tag: "Long" },
        { imptTag: true, tag: "The Tags" },
        { imptTag: true, tag: "Can Go" },
        { imptTag: true, tag: "You" },
        { imptTag: false, tag: "Know" },
        { imptTag: false, tag: "For" },
        { imptTag: false, tag: "Testing" },
        { imptTag: false, tag: "Purposes" },
        { imptTag: false, tag: "Yes" },
        { imptTag: false, tag: "That's It" },
        { imptTag: false, tag: "Scientific" },
        { imptTag: false, tag: "Reasons" },
        { imptTag: false, tag: "Only" },
        { imptTag: false, tag: "..." },
        { imptTag: false, tag: "While" },
        { imptTag: false, tag: "You're" },
        { imptTag: false, tag: "At" },
        { imptTag: false, tag: "It" },
        { imptTag: false, tag: "Try" },
        { imptTag: false, tag: "Tabbing" },
        { imptTag: false, tag: "Here" },
        { imptTag: false, tag: "And" },
        { imptTag: false, tag: "Scrolling" },
        { imptTag: false, tag: "With" },
        { imptTag: false, tag: "Arrow" },
        { imptTag: false, tag: "Keys" }],
        postTimestamp: 1596063437986,
        opName: "Lima Kilo",
        opConcentration: "Apma",
        opBio: "Some random bio",
        opYear: "26",
        opID: "LK26",
        likeCount: 6,
        commentCount: 0,
        commentsTree: [],
    },
    i3: {
        postID: "i3",
        postType: "imagePost",
        postTitle: "Another image post, but this time with a really re" +
            "ally small image",
        postBody: "",
        postImagesArray: ["assets/img/egExtremelySmallImage1.png"],
        postLink: "",
        postDocumentInfo: "",
        postPollInfo: {},
        tagsArray: [{ imptTag: false, tag: "Do You Think" },
        { imptTag: false, tag: "We Should Have" },
        { imptTag: false, tag: "Minimum Image Sizes?" }],
        postTimestamp: 1596442602405,
        opName: "Lima Kilo",
        opConcentration: "Apma",
        opBio: "Some random bio",
        opYear: "26",
        opID: "LK26",
        likeCount: 6,
        commentCount: 0,
        commentsTree: [],
    },
    i4: {
        postID: "i4",
        postType: "imagePost",
        postTitle: "Another carousel, but with wide images causing a b" +
            "ug. EDIT: This was probably the most satisfying and chall" +
            "enging bug to fix but now this shit rescales correctly wi" +
            "thout javascript so HELL yes",
        postBody: "",
        postImagesArray: ["assets/img/egWideImage2.png",
            "assets/img/egWideImage1.png"],
        postLink: "",
        postDocumentInfo: "",
        postPollInfo: {},
        tagsArray: [{ imptTag: false, tag: "Should" },
        { imptTag: false, tag: "The Last, Smallest Image" },
        { imptTag: false, tag: "Be Enlarged" },
        { imptTag: false, tag: "To Fit With The Rest?" }],
        postTimestamp: 1593022901741,
        opName: "Lima Kilo",
        opConcentration: "Apma",
        opBio: "Some random bio",
        opYear: "26",
        opID: "LK26",
        likeCount: 3,
        commentCount: 6,
        commentsTree: [],
    },
    i5: {
        postID: "i5",
        postType: "imagePost",
        postTitle: "Very Wide Image",
        postBody: "",
        postImagesArray: ["assets/img/egWideImage1.png"],
        postLink: "",
        postDocumentInfo: "",
        postPollInfo: {},
        tagsArray: [{ imptTag: false, tag: "This Page" },
        { imptTag: false, tag: "Surprisingly Works" },
        { imptTag: false, tag: "On Mobile" },
        { imptTag: false, tag: "Somewhat..." }],
        postTimestamp: 1592726090201,
        opName: "Lima Kilo",
        opConcentration: "Apma",
        opBio: "Some random bio",
        opYear: "26",
        opID: "LK26",
        likeCount: 4,
        commentCount: 1,
        commentsTree: [],
    },
    i6: {
        postID: "i6",
        postType: "imagePost",
        postTitle: "Very Tall Image, For Testing",
        postBody: "",
        postImagesArray: ["assets/img/egTallImage1.png"],
        postLink: "",
        postDocumentInfo: "",
        postPollInfo: {},
        tagsArray: [{ imptTag: false, tag: "Bug Hunting" }],
        postTimestamp: 1592600388813,
        opName: "Lima Kilo",
        opConcentration: "Apma",
        opBio: "Some random bio",
        opYear: "26",
        opID: "LK26",
        likeCount: 6,
        commentCount: 4,
        commentsTree: [],
    },
    l1: {
        postID: "l1",
        postType: "linkPost",
        postTitle: "Why do we even have link posts?",
        postBody: "",
        postImagesArray: [],
        postLink: "https://www.facebook.com",
        postDocumentInfo: {},
        postPollInfo: {},
        tagsArray: [{ imptTag: true, tag: "Link" },
        { imptTag: true, tag: "Incomplete" },
        { imptTag: false, tag: "Not Good" }],
        postTimestamp: 1592448468968,
        opName: "Lima Kilo",
        opYear: "26",
        opConcentration: "Sociology",
        opBio: "Some random bio",
        opID: "LK26",
        likeCount: 12,
        commentCount: 9,
        commentsTree: [],
    },
    l2: {
        postID: "l2",
        postType: "linkPost",
        postTitle: "Another link, but this one is very long",
        postBody: "",
        postImagesArray: [],
        postLink: "http://www.5z8.info/realplayer.dmg_g0n5gw_this_persons_account_has_been_hacked",
        postDocumentInfo: {},
        postPollInfo: {},
        tagsArray: [{ imptTag: true, tag: "Long" },
        { imptTag: true, tag: "Link" },
        { imptTag: false, tag: "This Is Ridiculous" }],
        postTimestamp: 1591580425553,
        opName: "Charlie Delta",
        opYear: "22",
        opConcentration: "Sociology",
        opBio: "Some random bio",
        opID: "CD22",
        likeCount: 12,
        commentCount: 9,
        commentsTree: [],
    },
    t2: {
        postID: "t2",
        postType: "textPost",
        postTitle: "This is a text post. Because the title is very lon" +
            "g, it uses the maximum available space",
        postBody: "Lorem ipsum is a pseudo-Latin text used in web desi" +
            "gn, typography, layout, and printing in place of English " +
            "to emphasise design elements over content. It's also call" +
            "ed placeholder (or filler) text. It's a convenient tool f" +
            "or mock-ups.",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {},
        tagsArray: [{ imptTag: true, tag: "Nunc At Erat" },
        { imptTag: true, tag: "Nulla Sagittis" },
        { imptTag: false, tag: "Tincidunt" },
        { imptTag: false, tag: "Porttitor Risus" }],
        postTimestamp: 1590881476834,
        opName: "Charlie Delta",
        opYear: "22",
        opConcentration: "CS",
        opBio: "Some random bio",
        opID: "CD22",
        likeCount: 23,
        commentCount: 4,
        commentsTree: [],
    },
    t3: {
        postID: "t3",
        postType: "textPost",
        postTitle: "You have some updog on your face",
        postBody: "What's updog?\nJust having a line break, what about you?",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {},
        tagsArray: [{ imptTag: true, tag: "Few" },
        { imptTag: false, tag: "Tags" }],
        postTimestamp: 1590427481500,
        opName: "Alpha Bravo",
        opYear: "21",
        opConcentration: "History",
        opBio: "Some random bio",
        opID: "AB21",
        likeCount: 1484,
        commentCount: 0,
        commentsTree: [],
    },
    t4: {
        postID: "t4",
        postType: "textPost",
        postTitle: "Another text post",
        postBody: "It helps to outline the visual elements of a docume" +
            "nt or presentation, eg typography, font, or layout. Lorem" +
            " ipsum is mostly a part of a Latin text by the classical " +
            "author and philosopher Cicero. Its words and letters have" +
            "been changed by addition or removal, so to deliberately r" +
            "ender its content nonsensical; it's not genuine, correct," +
            " or comprehensible Latin anymore.",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {},
        tagsArray: [{ imptTag: true, tag: "Duis" },
        { imptTag: true, tag: "Purus Vel" },
        { imptTag: false, tag: "Cursus Justo Euismod" },
        { imptTag: false, tag: "Vehicula" },
        { imptTag: false, tag: "Eleifend" },
        { imptTag: false, tag: "Odio" },
        { imptTag: false, tag: "Faucibus" },
        { imptTag: false, tag: "Nam Tempus Placerat Laoreet" }],
        postTimestamp: 1589694843045,
        opName: "Echo Foxtrot",
        opYear: "23",
        opConcentration: "Astronomy",
        opBio: "Some random bio",
        opID: "EF23",
        likeCount: 5614,
        commentCount: 7,
        commentsTree: [],
    },
    t5: {
        postID: "t5",
        postType: "textPost",
        postTitle: "Once more but in Latin - again we see what it is l" +
            "ike to have a long title",
        postBody: "Vestibulum euismod, sapien a laoreet finibus, neque" +
            " dolor lobortis orci, a imperdiet leo enim eu erat. In or" +
            "nare a leo et hendrerit. Curabitur cursus dui quis ante f" +
            "eugiat aliquam owadio. Morbi pretium.",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {},
        tagsArray: [{ imptTag: true, tag: "Pellentesque" },
        { imptTag: true, tag: "Feugiat" },
        { imptTag: true, tag: "Tempor" },
        { imptTag: false, tag: "Tempus" },
        { imptTag: false, tag: "Aenean" },
        { imptTag: false, tag: "Varius" }],
        postTimestamp: 158507649671,
        opName: "Golf Hotel",
        opConcentration: "German",
        opBio: "Some random bio",
        opYear: "24",
        opID: "GH24",
        likeCount: 891,
        commentCount: 100,
        commentsTree: [],
    },
    p3: {
        postID: "p3",
        postType: "pollPost",
        postTitle: "What do y'all think about the design so far?",
        postBody: "",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {
            totalVotes: 7,
            pollIsOpen: true,
            userHasVoted: false,
            postPollOptions: [
                { index: 0, option: "looks good", votes: 0 },
                { index: 1, option: "needs a lot of work", votes: 2 },
                { index: 2, option: "my eyes need chemotherapy", votes: 5 }
            ]
        },
        tagsArray: [{ imptTag: true, tag: "Poll" },
        { imptTag: false, tag: "But Not Really" },
        { imptTag: false, tag: "Not Yet" },
        { imptTag: false, tag: "Implemented" }],
        postTimestamp: 1578761570913,
        opName: "Lima Kilo",
        opConcentration: "Bio",
        opBio: "Some random bio",
        opYear: "26",
        opID: "LK26",
        likeCount: 999999,
        commentCount: 16,
        commentsTree: [],
    },
    t6: {
        postID: "t6",
        postType: "textPost",
        postTitle: "Morbi vitae porttitor urna, id lacinia sem",
        postBody: "Integer bibendum erat urna, ac vulputate urna rhonc" +
            "us nec. Duis hendrerit, elit nec porta sodales, ligula an" +
            "te maximus lacus, id porttitor risus purus ac mi. Quisque" +
            " volutpat sagittis diam, et efficitur purus luctus vel. S" +
            "uspendisse lacinia porttitor fermentum.",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {},
        tagsArray: [{ imptTag: true, tag: "Donec Dapibus" },
        { imptTag: false, tag: "Eu Mi A Urna" },
        { imptTag: false, tag: "Luctus" },
        { imptTag: false, tag: "Hendrerit" }],
        postTimestamp: 1573839874543,
        opName: "India Juliet",
        opConcentration: "Bio",
        opBio: "Some random bio",
        opYear: "25",
        opID: "IJ25",
        likeCount: 15005,
        commentCount: 36,
        commentsTree: [],
    },
    t7: {
        postID: "t7",
        postType: "textPost",
        postTitle: "post w no body text: note the bad vertical sizing",
        postBody: "",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {},
        tagsArray: [{ imptTag: true, tag: "Suspendisse" },
        { imptTag: true, tag: "Potenti" },
        { imptTag: true, tag: "Accumsan" }],
        postTimestamp: 1566533549182,
        opName: "India Juliet",
        opYear: "25",
        opConcentration: "Bio",
        opBio: "Some random bio",
        opID: "IJ25",
        likeCount: 4495,
        commentCount: 7,
        commentsTree: [],
    },
    p4: {
        postID: "p4",
        postType: "pollPost",
        postTitle: "An old, closed poll: backend do y'all wanna support limited-time polls?",
        postBody: "",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {
            totalVotes: 100,
            pollIsOpen: false,
            userHasVoted: false,
            postPollOptions: [
                { index: 0, option: "yes", votes: 50 },
                { index: 1, option: "no", votes: 50 },
            ]
        },
        tagsArray: [{ imptTag: true, tag: "Poll" },
        { imptTag: false, tag: "But Not Really" },
        { imptTag: false, tag: "Not Yet" },
        { imptTag: false, tag: "Implemented" }],
        postTimestamp: 1566532549182,
        opName: "Lima Kilo",
        opConcentration: "Bio",
        opBio: "Some random bio",
        opYear: "26",
        opID: "LK26",
        likeCount: 1204,
        commentCount: 4239,
        commentsTree: [],
    },
    p5: {
        postID: "p5",
        postType: "pollPost",
        postTitle: "Another closed poll -- could a swallow carry a coconut?",
        postBody: "",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {
            totalVotes: 1064,
            pollIsOpen: false,
            userHasVoted: false,
            postPollOptions: [
                { index: 0, option: "what, held under the dorsal guiding feathers?", votes: 159 },
                { index: 1, option: "well, why not?", votes: 265 },
                { index: 2, option: "a five ounce bird could not carry a one pound coconut!", votes: 628 },
                { index: 3, option: "it could be carried by an African swallow!", votes: 12 },
            ]
        },
        tagsArray: [{ imptTag: true, tag: "Poll" },
        { imptTag: false, tag: "But Not Really" },
        { imptTag: false, tag: "Not Yet" },
        { imptTag: false, tag: "Implemented" }],
        postTimestamp: 1566532549182,
        opName: "Lima Kilo",
        opConcentration: "Bio",
        opBio: "Some random bio",
        opYear: "26",
        opID: "LK26",
        likeCount: 967,
        commentCount: 324,
        commentsTree: [],
    },
    p6: {
        postID: "p6",
        postType: "pollPost",
        postTitle: "Do y'all prefer dark mode or light mode?",
        postBody: "",
        postImagesArray: [],
        postLink: "",
        postDocumentInfo: {},
        postPollInfo: {
            totalVotes: 1284631,
            pollIsOpen: false,
            userHasVoted: false,
            postPollOptions: [
                { index: 0, option: "dark mode", votes: 942141 },
                { index: 1, option: "light mode", votes: 342490 },
            ]
        },
        tagsArray: [{ imptTag: true, tag: "Poll" },
        { imptTag: false, tag: "But Not Really" },
        { imptTag: false, tag: "Not Yet" },
        { imptTag: false, tag: "Implemented" }],
        postTimestamp: 1566532549182,
        opName: "Lima Kilo",
        opConcentration: "Bio",
        opBio: "Some random bio",
        opYear: "26",
        opID: "LK26",
        likeCount: 5859,
        commentCount: 948,
        commentsTree: [],
    },
}
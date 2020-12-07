// Find all like buttons, check if they're already liked, and attach listeners
let mainFeedLikeButtons = document.querySelectorAll(".likeButton");
for (let i = 0; i < mainFeedLikeButtons.length; i++) {
    getLikeCountAndCheckIfUserLiked(mainFeedLikeButtons[i]);
    mainFeedLikeButtons[i].addEventListener("click", sendLike);
}

// A function to send a like
function sendLike() {

    this.removeEventListener("click", sendLike);
    let likeButton = this;
    let postID = likeButton.getAttribute("data-post-id");
    console.log("attempting to send a like/unlike for post " + postID);

    // Actually send the POST request, and do something based on the response
    axios.post("/posts/like", {postId: postID}).then(function (response) {

        if (response.data.postIsLiked === 1) { // Post is now liked
            console.log("%csuccessfully liked post " + postID, "color: yellowgreen");
            // Update state
            likeButton.setAttribute("aria-pressed", "true");
            // Update like count
            likeButton.setAttribute("data-likes", (parseInt(likeButton.getAttribute("data-likes"), 10) + 1).toString());
            likeButton.nextElementSibling.innerHTML = compactNumber(likeButton.getAttribute("data-likes"));
            // Color text and symbol
            likeButton.nextElementSibling.style.color = "var(--Z-BU-Yellow)";
            likeButton.firstElementChild.firstElementChild.style.fill = "var(--Z-BU-Yellow)";
            // Reattach listener
            likeButton.addEventListener("click", sendLike);

        } else if (response.data.postIsLiked === 0) { // Post is now unliked
            console.log("%csuccessfully unliked post " + postID,  "color: orange");
            // Update state
            likeButton.setAttribute("aria-pressed", "false");
            // Update like count
            likeButton.setAttribute("data-likes", (parseInt(likeButton.getAttribute("data-likes"), 10) - 1).toString());
            likeButton.nextElementSibling.innerHTML = compactNumber(likeButton.getAttribute("data-likes"));
            // Un-color text and symbol
            likeButton.nextElementSibling.style.color = "";
            likeButton.firstElementChild.firstElementChild.style.fill = "";
            // Reattach listener
            likeButton.addEventListener("click", sendLike);

        } else { // Something very weird happened
            console.log("bad server response: response.data.postIsLiked is weird");
            console.log(response)
            // Reattach listener
            likeButton.addEventListener("click", sendLike);
        }

    }).catch(function () { // Something weird happened; maybe bad network?
        console.log("failed to send a like for post " + postID);
        // Reattach listener
        likeButton.addEventListener("click", sendLike);
    });
}

// A function to get the like count, and check if the user liked the post
function getLikeCountAndCheckIfUserLiked (thing) {

    let likeButton = thing;
    let postID = likeButton.getAttribute("data-post-id");

    // Actually send the GET request, and do something based on the response
    axios.get('/posts/queryLike/' + postID).then(function (response) {

        // console.log("response received for post " + postID);
        // console.log(response);

        // Update like count
        likeButton.setAttribute("data-likes", response.data.likeCount.toString());
        likeButton.nextElementSibling.innerHTML = compactNumber(response.data.likeCount);

        // Change appearance if user has liked post
        if (response.data.postIsLiked === 1) {
            // Update state
            likeButton.setAttribute("aria-pressed", "true");
            // Color text and symbol
            likeButton.nextElementSibling.style.color = "var(--Z-BU-Yellow)";
            likeButton.firstElementChild.firstElementChild.style.fill = "var(--Z-BU-Yellow)";
        }

    }).catch(function () { // Something weird happened; maybe bad network?
        console.log("failed to get likes for post " + postID);
    });

}
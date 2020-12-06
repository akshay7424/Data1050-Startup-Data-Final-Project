// Find every pollPost
let pollPosts = document.getElementsByClassName("pollPost");

// Get each pollPost's vote button
for (let i = 0; i < pollPosts.length; i++) {
    let voteButton = pollPosts[i].querySelector("button.postPollVoteButton");
    // Attach listener if vote button is present
    if (voteButton) {
        voteButton.addEventListener("click", castVote);
    } else { // Otherwise, immediately display vote counts and bars
        displayVotes(pollPosts[i].querySelector(".postPollInformationWrapper"))
    }
}

// Function to display vote counts and bars, given infoWrapper
function displayVotes(infoWrapper) {
    let optionWrappers = infoWrapper.querySelectorAll(".postPollOptionWrapper");
    let bar, frac, total = infoWrapper.getAttribute("data-total-votes");
    // Per option:
    for (let i = 0; i < optionWrappers.length; i++) {
        // Show vote count
        optionWrappers[i].querySelector(".postPollOptionNumbers").style.display = "block";
        // Generate bar width
        bar = optionWrappers[i].querySelector(".postPollOptionBar");
        frac = bar.getAttribute("data-votes") / total;
        bar.style.width = "calc(calc(100% - 40px)*" + frac + ")";
    }
}

// Function for processing vote
function castVote() {
    let infoWrapper = this.parentElement;
    let postID = infoWrapper.getAttribute("data-post-id");

    // Find out which option was selected
    let optionWrappers = infoWrapper.querySelectorAll(".postPollOptionWrapper");
    let radioInput, referencePoint, votedIndex;
    for (let i = 0; i < optionWrappers.length; i++) {
        radioInput = optionWrappers[i].querySelector("input.postPollOptionRadio");
        // If votedIndex not already defined and this one is checked, get its value
        if (!votedIndex && radioInput.checked) {
            referencePoint = optionWrappers[i];
            votedIndex = radioInput.value;
        }
    }

    // Check that one option was selected
    if (!votedIndex) {
        console.log("%cno option selected in pollPost " + postID + "!", "color: tomato");
    } else {
        // Send in vote
        // ??? document.getElementById("formForPollPost" + postID).submit(); ???

        // Diagnostics
        let optionNumber = (parseInt(votedIndex) + 1);
        console.log("%cvoted for option " + optionNumber + " of " + optionWrappers.length + " in pollPost " + postID, "color: yellowgreen");
        console.log("poll question: " + infoWrapper.parentElement.parentElement.parentElement.parentElement.querySelector(".postTitle .insideTabHighlightable").innerHTML.trim());
        console.log("your answer: " + referencePoint.querySelector(".postPollOptionText").innerHTML.trim());

        // Hide all radios, and hide button
        for (let i = 0; i < optionWrappers.length; i++) {
            optionWrappers[i].querySelector("input.postPollOptionRadio").style.display = "none";
        }
        this.remove();

        // Update local data as if vote went through
        infoWrapper.setAttribute(
            "data-total-votes",
            (parseInt(infoWrapper.getAttribute("data-total-votes"), 10) + 1).toString());
        let newOptionVotes = parseInt(referencePoint.querySelector(".postPollOptionBar").getAttribute("data-votes"), 10) + 1;
        referencePoint.querySelector(".postPollOptionBar").setAttribute(
            "data-votes",
            newOptionVotes.toString());
        referencePoint.querySelector(".postPollOptionNumbers").innerHTML = compactNumber(newOptionVotes);

        // Make stuff appear and shit
        displayVotes(infoWrapper);
    }
}

// Copy of server.js compactNumber function
function compactNumber(givenNumber) {
    let output;
    if (givenNumber > 10000) {
        output = Math.floor(givenNumber / 1000) + "k";
    } else if (givenNumber > 1000) {
        output = (givenNumber / 1000).toString().slice(0, 3) + "k"
    } else {
        output = givenNumber.toString()
    }
    return output;
}
// -------------------- Coming Here From NavBar -------------------

// Modifying navBar createPost link if on mainFeed
let navBarCreatePostLink = document.getElementById("navBarCreatePostLink");
navBarCreatePostLink.removeAttribute("href");
navBarCreatePostLink.type = "button";
navBarCreatePostLink.addEventListener("click", openCPSection);

// -------------------- Coming Here From Drafts -------------------

// Messing around with drafts
let mostRecentlyClickedDraft = undefined, mostRecentlyClickedDraftType = "";
let allDrafts = document.getElementById("sideBarDraftsBox").querySelectorAll(".sideBarDraft");
for (let i = 0; i < allDrafts.length; i++) {
    // Attach listeners
    allDrafts[i].addEventListener("click", userClickedADraft)
}

// -------------------- Inputs' Visual Interactions -------------------

// This template's root
let createPostContainer = document.getElementById("createPostContainer");

// Important fields
let titleInput = createPostContainer.querySelector("#createPostTitleInput");
let bodyInput = createPostContainer.querySelector("#createPostBodyInput");
let linkInput = createPostContainer.querySelector("#createPostLinkInput");
let tagsInput = createPostContainer.querySelector("#createPostTagsInput");
let maxNoOfTags = 10;

// Prevent premature "enter"s in anything that in the
// create post section that has class preventEnter
let preventEnters = createPostContainer.querySelectorAll(".preventEnter")
for (let i = 0; i < preventEnters.length; i++) {
    preventEnters[i].addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    })
}

// Auto-resize, display character count, and prevent enters (newlines) for cpSection's title input
let charCountDisplay = createPostContainer.querySelector("#createPostTitleInputCharacterCount");

function updateTitleCharCountDisplay() {
    charCountDisplay.innerHTML = titleInput.value.length + "/300";
    if (titleInput.value.length >= 300) {
        charCountDisplay.style.color = "var(--Z-BU-Red)";
    } else {
        charCountDisplay.style.color = null;
    }
}

function updateTitleInputBoxHeight() {
    titleInput.style.height = 'auto';
    titleInput.style.height = titleInput.scrollHeight + 'px';
}

titleInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") { // Prevent newlines in titles. Remember to strip newlines server-side.
        e.preventDefault();
    }
})
titleInput.addEventListener('input', function () {
    updateTitleCharCountDisplay();
    updateTitleInputBoxHeight();
});

// Auto-resize cpSection's body input
bodyInput.addEventListener('input', resizeBodyInput);

function resizeBodyInput() {
    bodyInput.style.height = 'auto';
    bodyInput.style.height = bodyInput.scrollHeight + 'px';
}

// -------------------- Opening And Closing -------------------

let currentPostType = "";

// Attach listeners for cpSectionOpeners
{
    let cpSectionOpeners = createPostContainer.getElementsByClassName("cpSectionOpener");
    for (let i = 0; i < cpSectionOpeners.length; i++) {
        cpSectionOpeners[i].addEventListener("click", openCPSection);
    }
}

// Open "create post" section
function openCPSection() {
    // PREP: Some variables
    let i, activeSpecificForm, singleIconContainers, standardInputs, leftButtons;

    // PREP: Check which button or draft was clicked, to open corresponding forms
    let tabName, tabLinkObject;
    switch (this.id) {
        case "navBarCreatePostLink":
            // Go back to top
            if (document.scrollingElement.scrollTop > criticalScrollPoint) {
                linearScrollToLast();
            }
        // allow fallthrough
        case "createPostFauxInputLink":
            if (currentPostType === "textPost") {
                console.log("%ctextPostForm already open!", "color: orange");
                return;
            }
            currentPostType = "textPost";
            tabName = "textPostForm";
            tabLinkObject = createPostContainer.querySelector('#textPostButton');
            break;
        case "textPostButton":
            if (currentPostType === "textPost") {
                console.log("%ctextPostForm already open!", "color: orange");
                return;
            }
            currentPostType = "textPost";
            tabName = "textPostForm";
            tabLinkObject = this;
            break;
        case "imagePostButton":
            if (currentPostType === "imagePost") {
                console.log("%cimagePostForm already open!", "color: orange");
                return;
            }
            currentPostType = "imagePost";
            tabName = "imagePostForm";
            tabLinkObject = this;
            break;
        case "linkPostButton":
            if (currentPostType === "linkPost") {
                console.log("%clinkPostForm already open!", "color: orange");
                return;
            }
            currentPostType = "linkPost";
            tabName = "linkPostForm";
            tabLinkObject = this;
            break;
        case "documentPostButton":
            if (currentPostType === "documentPost") {
                console.log("%cdocumentPostForm already open!", "color: orange");
                return;
            }
            currentPostType = "documentPost";
            tabName = "documentPostForm";
            tabLinkObject = this;
            break;
        case "pollPostButton":
            if (currentPostType === "pollPost") {
                console.log("%cpollPostForm already open!", "color: orange");
                return;
            }
            currentPostType = "pollPost";
            tabName = "pollPostForm";
            tabLinkObject = this;
            break;
        default: // Drafts that are clicked come here
            if (mostRecentlyClickedDraftType) {
                titleInput.value = mostRecentlyClickedDraft.getAttribute("data-draft-title");
                updateTitleCharCountDisplay();
                switch (mostRecentlyClickedDraftType) {
                    case "textPost":
                        tabName = "textPostForm";
                        currentPostType = "textPost";
                        tabLinkObject = createPostContainer.querySelector('#textPostButton');
                        createPostContainer.querySelector("#createPostBodyInput").value = mostRecentlyClickedDraft.getAttribute("data-draft-body");
                        break;
                    case "linkPost":
                        currentPostType = "linkPost";
                        tabName = "linkPostForm";
                        tabLinkObject = createPostContainer.querySelector('#linkPostButton');
                        createPostContainer.querySelector("#createPostLinkInput").value = mostRecentlyClickedDraft.getAttribute("data-draft-link");
                        break;
                    default:
                        return
                }
            } else { // Not a draft
                return;
            }
    }
    console.log("%copening create post section's " + tabName, "color: yellowgreen");

    // FAKE INPUT: Hide createPostFauxInput (done "earlier" to avoid Safari's box-shadow rendering remnant bug)
    createPostContainer.querySelector("#createPostFauxInput").style.display = "none";

    // OPTIONS: Show createPostLeft options
    leftButtons = createPostContainer.getElementsByClassName("createPostLeftIconContainer");
    for (i = 0; i < leftButtons.length; i++) {
        leftButtons[i].style.display = "block";
    }

    // FAKE INPUT: Hide createPostFauxInputLink (done "later" to avoid Safari's box-shadow rendering remnant bug)
    createPostContainer.querySelector("#createPostFauxInputLink").style.display = "none";

    // BUTTONS1: Show textPostButton and resize createPostIconsContainer
    createPostContainer.querySelector("#textPostButton").style.display = "block";
    createPostContainer.querySelector("#createPostIconsContainer").style.width = "100%";
    createPostContainer.querySelector("#createPostIconsContainer").style.marginLeft = "0";
    // BUTTONS2: Change all buttons to non-active, and remove width limit
    singleIconContainers = createPostContainer.getElementsByClassName("createPostSingleIconContainer");
    for (i = 0; i < singleIconContainers.length; i++) {
        singleIconContainers[i].style.maxWidth = "100%";
        singleIconContainers[i].querySelector('.createPostIconText').style.display = "inline";
        singleIconContainers[i].className = singleIconContainers[i].className.replace(" active", "");
    }
    // BUTTONS3: Change current button to active
    tabLinkObject.className += " active";

    // FORM1: Show standard inputs like createPostTitleInput and createPostTagsInput
    standardInputs = createPostContainer.querySelectorAll(".createPostStandardInput");
    for (i = 0; i < standardInputs.length; i++) {
        standardInputs[i].style.display = "block";
    }
    // FORM2: Hide and disable currently open form, if any
    activeSpecificForm = createPostContainer.querySelector(".createPostCenterBottomSpecificForm.active");
    if (activeSpecificForm) {
        activeSpecificForm.className = activeSpecificForm.className.replace(" active", "");
        // Hide that form's inputs
        let activeInputs = activeSpecificForm.querySelectorAll("input, textarea");
        for (i = 0; i < activeInputs.length; i++) {
            activeInputs[i].disabled = true;
        }
    }
    // FORM3: Show correct specific form and enable its inputs
    let nextSpecificForm = createPostContainer.querySelector("#" + tabName);
    nextSpecificForm.className += " active";
    let nextInputs = nextSpecificForm.querySelectorAll("input, textarea");
    for (i = 0; i < nextInputs.length; i++) {
        nextInputs[i].disabled = false;
        if (nextInputs[i] === bodyInput) {
            resizeBodyInput();
        }
    }

    // Switch tag
    createPostContainer.setAttribute("data-cp-section-is-open", "true");

    // Change focus if previously focused element was createPostFauxInputLink
    if (document.activeElement.id === "createPostFauxInputLink") {
        createPostContainer.querySelector("#textPostButton").focus();
    }
}

// Close "create post" section (opposite of openCPSection)
function closeCPSection() {
    // Prep some variables
    let i, activeSpecificForm, singleIconContainers, standardInputs, leftButtons;
    currentPostType = ""
    console.log("%cclosing create post section", "color: yellowgreen");

    // OPTIONS: Hide createPostLeft options
    leftButtons = createPostContainer.getElementsByClassName("createPostLeftIconContainer");
    for (i = 0; i < leftButtons.length; i++) {
        leftButtons[i].style.display = "none";
    }

    // FORM1: Hide standard inputs like createPostTitleInput
    standardInputs = createPostContainer.querySelectorAll(".createPostStandardInput");
    for (i = 0; i < standardInputs.length; i++) {
        standardInputs[i].style.display = "none";
    }
    // FORM2: Hide and disable currently open form, if any
    activeSpecificForm = createPostContainer.querySelector(".createPostCenterBottomSpecificForm.active");
    if (activeSpecificForm) {
        activeSpecificForm.className = activeSpecificForm.className.replace(" active", "");
        // Hide that form's inputs
        let activeInputs = activeSpecificForm.querySelectorAll("input, textarea");
        for (i = 0; i < activeInputs.length; i++) {
            activeInputs[i].disabled = true;
        }
    }

    // BUTTONS1: Hide textPostButton and resize createPostIconsContainer
    createPostContainer.querySelector("#textPostButton").style.display = "none";
    createPostContainer.querySelector("#createPostIconsContainer").style += "width: 150px; margin-left: 15px";
    // BUTTONS2: Change all buttons to non-active and apply width limit
    singleIconContainers = createPostContainer.getElementsByClassName("createPostSingleIconContainer");
    for (i = 0; i < singleIconContainers.length; i++) {
        singleIconContainers[i].style.maxWidth = "30px";
        singleIconContainers[i].querySelector('.createPostIconText').style.display = "none";
        singleIconContainers[i].className = singleIconContainers[i].className.replace(" active", "");
    }

    // FAKE INPUTS: Show createPostFauxInputLink and createPostFauxInput
    createPostContainer.querySelector("#createPostFauxInput").style.display = "block";
    createPostContainer.querySelector("#createPostFauxInputLink").style.display = "block";

    // Switch tag
    createPostContainer.setAttribute("data-cp-section-is-open", "false");
}

// Open and Modify "create post" section
function userClickedADraft() {
    // Go back to top
    if (document.scrollingElement.scrollTop > criticalScrollPoint) {
        linearScrollToLast();
    }

    // Save the most recently clicked draft, to remove(?) when submitted
    mostRecentlyClickedDraft = this;

    // Set temporary variables
    mostRecentlyClickedDraftType = this.getAttribute("data-draft-type")

    // Open create post section -- modification happens inside
    openCPSection();
    console.log("%copened draftID = " + this.id, "color: yellowgreen");
}

// -------------------- Submitting Posts -------------------

// Add event listener to submit button
let submitButton = createPostContainer.querySelector("#createPostSubmitButton");
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    submitPost();
});

// A function to submit a post
function submitPost() {

    // Remove listener
    submitButton.removeEventListener("click", submitPost);

    // Parsing information
    let requestBody = {
        postType: currentPostType,
        studentsOnly: false, // z 11/21: hardcoded for now
        anonymous: false, // z 11/21: hardcoded for now
        postTitle: titleInput.value,
        postBody: (currentPostType === "textPost") ? bodyInput.value : null,
        postImages: (currentPostType === "imagePost") ? storedImageFiles : null,
        // z 11/21: shouldn't the above be an array of urls
        postLink: (currentPostType === "linkPost") ? linkInput.value : null,
        postDocument: (currentPostType === "documentPost") ? storedSingleDocumentFile : null,
        tagsArray: tagsInput.value.split(" ", maxNoOfTags),
    };

    console.log("attempting to submit " + currentPostType + " post");
    console.log(requestBody);

    // Actually send the POST request, and do something based on the response
    axios.post("/posts/create", requestBody).then(function (response) {

        console.log("Submitted post. response is as follows:");
        console.log(response)

        // Display new post if new post was created
        if (response.data.postIsCreated) {
            console.log("Post was created with post ID = " + response.data.createdPostId);
            displayNewPost(response.data.createdPostObject);
            clearAndCloseCPSection();
        } else {
            console.log("Even though the post was submitted, no new post was created!")
        }
    }).catch(function () { // Something weird happened; maybe bad network?
        console.log("failed to submit post");
    });

    // Reattach listener
    submitButton.addEventListener("click", submitPost);
}

// A function to insert a new post after the create post section
function displayNewPost(createdPostObject) {
    let template = Handlebars.templates.postBase;
    let newPost = template(createdPostObject);

    // Insert the new post after the create post section
    createPostContainer.insertAdjacentHTML("afterend", newPost);
}

// A function to clear and close the create post section
function clearAndCloseCPSection() {
    // Clear contents of fields
    titleInput.value = "";
    updateTitleCharCountDisplay();
    updateTitleInputBoxHeight();
    bodyInput.value = "";
    resizeBodyInput();
    tagsInput.value = "";
    linkInput.value = "";

    // Close
    closeCPSection();
}
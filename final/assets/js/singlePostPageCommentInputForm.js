// Get variables
let commentInputBox = document.getElementById("singlePostPageCommentInputBox");
let commentInput = commentInputBox.querySelector("#singlePostPageCommentInput");
let commentInputFormIsActive = false;

// Display stuff when activated / hide stuff when deactivated
commentInput.addEventListener('click', function (e) {
    e.stopPropagation();
    if (!commentInputFormIsActive) {
        commentInputFormIsActive = true;
        commentInputBox.querySelector(".singlePostPageCommentInputBottomMostButtonsContainer")
            .style.display = "block";
    }
})
document.addEventListener('click', function (e) {
    if (commentInputFormIsActive && !commentInput.value) {
        commentInputFormIsActive = false;
        commentInputBox.querySelector(".singlePostPageCommentInputBottomMostButtonsContainer")
            .style.display = "none";
    }
})

// Auto-resize cpSection's body input
commentInput.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
})

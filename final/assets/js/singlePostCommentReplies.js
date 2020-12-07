function openReplyArea(input) {
    if (input.parentElement.parentElement.parentElement.getElementsByClassName("commentReplyParent")[0].style.display == "") {

        let commentBox = document.createElement("div");
        commentBox.id = input.id + "form"
        commentBox.className = "commentFeedCenter"
        commentBox.innerHTML = "<div class=\"commentReplyParent\" style=\"display: inline;\">" +
                               "<form class=\"commentReplyForm\">"+
                               "<textarea id=\"singlePostPageCommentInput\" class=\"textInputClass\" placeholder=\"Share your thoughts here\" rows=\"1\" style=\"margin-top: 10px; margin-bottom: 10px;\"></textarea>"+
                               "<div class=\"createPostBottomMostButtonsContainer\" style=\"display: block; margin-bottom: 10px;\">"+
                               "<button id=\"singlePostPageCommentInputSubmitButton\" class=\"singlePostPageCommentInputSubmitButton tabHighlightable zToolTipRelative\" aria-label=\"Submit Comment\" tabindex=\"0\">" +
                               "<span class=\"zToolTip\">Submit Comment</span>" +
                               "<span class=\"insideTabHighlightable\" tabindex=\"-1\">" +
                                "Submit" +
                               "</span>" +
                               "</button></div></form></div>" 
        input.parentElement.parentElement.parentElement.parentElement.after(commentBox) 

        console.log("opening reply area");
        input.firstChild.innerHTML = "Close"
        input.parentElement.parentElement.parentElement.getElementsByClassName("commentReplyParent")[0].style.display = "inline";

    } else {
        console.log("closing reply area");
        input.parentElement.parentElement.parentElement.getElementsByClassName("commentReplyParent")[0].style.display = ""; 
        input.firstChild.innerHTML = "Reply"

        console.log(input.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1])
        input.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[2].remove() 
    }
}


let commentReportButtons = document.getElementsByClassName("report");

function compactNumber(givenNumber) {
    let output = "";
    if (givenNumber > 10000) {
        output = Math.floor(givenNumber / 1000) + "k";
    } else if (givenNumber > 1000) {
        output = (givenNumber / 1000).toString().slice(0, 3) + "k"
    } else {
        output = givenNumber.toString()
    }
    return output;
}
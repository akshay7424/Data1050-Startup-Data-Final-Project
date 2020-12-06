function openEdit(postBodyContent) {
        let postBody = document.getElementsByClassName("postBody")[0];
        let postBodyParent = postBody.parentElement;
        postBody.remove();

        let elementBefore = document.getElementsByClassName("tagRowOverallContainer")[0];
        let textInput = document.createElement("form");
        textInput.action = "/posts/edit-post";
        textInput.method = "POST";
        textInput.id = "editPostForm"
        textInput.innerHTML = "<textarea name=\"editedBody\" class='editPostInput textInputClass' style=\"max-width: 577px \">" + postBodyContent + "</textarea>";

        let submitButton = document.createElement("button");
        submitButton.className += "submitEditButton ";
        submitButton.className += "tabHighlightable ";
        submitButton.className += "zTooltipRelative ";
        submitButton.id = "submitEditButton";
        submitButton.tabIndex = "0";
        submitButton.innerHTML = "<span class=\"zToolTip\">Submit Edit</span>" +
                            "<span class=\"insideTabHighlightable\" tabindex=\"-1\">" +
                            "Submit" +
                        "</span>"

        submitButton.addEventListener('click', function(event){
            console.log("submit edit clicked")
            document.editPostForm.submit();
        });

        let cancelButton = document.createElement("button");
        cancelButton.className += "cancelEditButton tabHighlightable zTooltipRelative";
        cancelButton.id = "cancelEditButton";
        cancelButton.tabIndex = "0";
        cancelButton.innerHTML = "<span class=\"zToolTip\">Cancel</span>" +
                            "<span class=\"insideTabHighlightable\" tabindex=\"-1\">" +
                            "Cancel" +
                        "</span>"

        let buttonWrapper = document.createElement("div");
        buttonWrapper.className += "createPostBottomMostButtonsContainer createPostStandardInput";
        buttonWrapper.style = "display: block;";
        buttonWrapper.appendChild(cancelButton);
        buttonWrapper.appendChild(submitButton);


        postBodyParent.insertBefore(textInput, elementBefore);
        textInput.appendChild(buttonWrapper);
        

        let commentBox = document.getElementById("createComment");
        commentBox.style.display = "none";
        let commentFeed = document.getElementById("commentFeed");
        commentFeed.style.display = "none";
}
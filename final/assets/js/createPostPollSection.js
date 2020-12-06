let numberOfPollOptions = 2

// Attaching listeners
document.getElementById("createPostPollAdd").addEventListener("click", addPollOption);

// Function to add a new poll option
function addPollOption() {
    numberOfPollOptions++;
    console.log("adding new poll option (number of options = " + numberOfPollOptions + ")");
    // Generate the actual HTML for the poll option
    let input = document.createElement("input");
    input.className = "textInputClass pollOptionInputClass preventEnter";
    input.type = "text";
    input.id = "postPollOption" + numberOfPollOptions;
    input.name = "postPollOption" + numberOfPollOptions;
    input.placeholder = "Option " + numberOfPollOptions;
    let leftBlock = document.createElement("div");
    leftBlock.className = "blocky";
    let label = document.createElement("label");
    label.htmlFor = "postPollOption" + numberOfPollOptions;
    label.innerHTML = "Option " + numberOfPollOptions;
    let pollDeleteButton = document.createElement("button");
    pollDeleteButton.className = "createPostPollDelete tabHighlightable zToolTipRelative";
    pollDeleteButton.type = "button";
    pollDeleteButton.innerHTML =
        '<span class="zToolTip">Delete Poll Option</span>' +
        '<span class="insideTabHighlightable" tabindex="-1">' +
        '   <svg class="deleteSymbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.61 22.06">' +
        '       <path d="M.1,8.6l1,11.63a2,2,0,0,0,2,1.83H13.54a2,2,0,0,0,2-1.83l1-11.63A.49.49,0,0,0,16,8.06H.6A.5.5,0,0,0,.1,8.6Zm11.33,11,.34-9.49h2.31l-.57,9.53a.56.56,0,0,1-.59.47H12A.55.55,0,0,1,11.43,19.55ZM7.15,10.06H9.46l-.11,9.51a.55.55,0,0,1-.59.49h-.9a.55.55,0,0,1-.59-.49Zm-4.61,0H4.85l.34,9.49a.55.55,0,0,1-.59.51H3.7a.56.56,0,0,1-.59-.47Z"/>' +
        '       <path d="M16.59,5.34,16,3.68A1,1,0,0,0,15.09,3H11.31V1a1,1,0,0,0-1-1h-4a1,1,0,0,0-1,1V3H1.53a1,1,0,0,0-.95.68L0,5.34A.5.5,0,0,0,.5,6H16.11A.5.5,0,0,0,16.59,5.34Z"/>' +
        '   </svg>' +
        '</span>'
    let wrapper = document.createElement("div");
    wrapper.className = "createPostOptionWrapper";
    wrapper.appendChild(leftBlock);
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    wrapper.appendChild(pollDeleteButton);

    // Stick it before the pollAdd button
    this.parentElement.insertBefore(wrapper, this);
    // Attaching listeners
    pollDeleteButton.addEventListener("click", deletePollOption)
}

// Function to delete a poll option
function deletePollOption() {
    numberOfPollOptions--;
    // Re-number the subsequent poll options
    let current = this.parentElement.nextElementSibling;
    let label, input;
    while (current.className.includes("createPostOptionWrapper")) {
        console.log(current);
        label = current.querySelector("label");
        label.htmlFor = decrLast(label.htmlFor);
        label.innerHTML = decrLast(label.innerHTML);
        input = current.querySelector("input");
        input.id = decrLast(input.id);
        input.name = decrLast(input.name);
        input.placeholder = decrLast(input.placeholder);
        current = current.nextElementSibling;
    }
    // Remove the current poll option
    this.parentElement.remove();
}

// Function to decrease last character of string (assumed to be a number) by 1
function decrLast(str) {
    return str.substring(0, str.length - 1) + (parseInt(str[str.length - 1], 10) - 1);
}
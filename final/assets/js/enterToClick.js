// Listen for enter presses, convert them to spaces (Accessibility)
let thingsToBeClickableByEnter = document.querySelectorAll(".enterToClick");
Array.from(thingsToBeClickableByEnter).forEach(element => element.addEventListener("keydown", enterToClick))

// Enter-to-Click(this) function
function enterToClick(e) {
    if (e.key === "Enter") {
        e.stopPropagation();
        e.preventDefault();
        // Slight delay to prevent Safari's box-shadow rendering remnant bug
        let thing = this;
        setTimeout(function () {
            thing.click()
        }, 10);
    }
}
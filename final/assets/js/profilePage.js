// Attaching listeners
let personalPostTabButtons = document.getElementsByClassName("personalPostsTabButton");
for (let i = 0; i < personalPostTabButtons.length; i++) {
    personalPostTabButtons[i].addEventListener("click", changePersonalPostsTab);
}

// Function to open correct tab on profile page
function changePersonalPostsTab() {
    // Identify tab to be opened
    let tabID = this.getAttribute("data-tab-name");
    // Check if already open
    if (this.className.includes("active")) {
        console.log("%c" + tabID + " already open!", "color: orange");
    } else {
        console.log("%copening " + tabID, "color: yellowgreen");
        // Reset all buttons
        for (let i = 0; i < personalPostTabButtons.length; i++) {
            personalPostTabButtons[i].className = personalPostTabButtons[i].className.replace(" active", "");
        }
        // Highlight correct button
        this.className += " active";
        // Reset all tabs
        let tabContents = document.getElementsByClassName("personalPostsTabContent");
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].className = tabContents[i].className.replace(" active", "");
        }
        // Open correct tab
        document.getElementById(tabID).className += " active";
    }
}
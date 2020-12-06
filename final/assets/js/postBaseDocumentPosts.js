// Variables
let delay = 400, minIframeHeight = 400, previewWrapperHeight;
if (document.querySelector(".postDocumentPreviewWrapper")) {
    previewWrapperHeight = document.querySelector(".postDocumentPreviewWrapper").offsetHeight;
}

// Find and attach listeners
let documentPostPreviewWrappers = document.getElementsByClassName("postDocumentPreviewWrapper");
for (let i = 0; i < documentPostPreviewWrappers.length; i++) {
    documentPostPreviewWrappers[i].addEventListener("click", openDocumentPreview);
}

// Disable default (open document) for download buttons
let documentPostDownloadButtons = document.getElementsByClassName("downloadButton");
for (let i = 0; i < documentPostDownloadButtons.length; i++) {
    documentPostDownloadButtons[i].addEventListener("click", function (e) {
        e.stopPropagation();
    });
}

// Function to open document preview
function openDocumentPreview() {
    // Variables
    let previewWrapper = this;
    let iframe = previewWrapper.querySelector("iframe.postDocumentPreview");
    console.log("%copening document preview in documentPost " + this.parentElement.parentElement.id, "color: yellowgreen");
    // Remove event listener
    previewWrapper.removeEventListener("click", openDocumentPreview);
    // Load the document
    if (iframe.getAttribute("data-src-is-loaded") === "false") {
        iframe.src = iframe.getAttribute("data-src-buffer");
        iframe.setAttribute("data-src-is-loaded", "true");
    }
    // Animate the opening
    previewWrapper.style.height = (minIframeHeight + previewWrapperHeight) + "px";
    // After animation, change button appearance and add close listener
    setTimeout(function () {
        previewWrapper.addEventListener("click", closeDocumentPreview);
        // Change button elements
        previewWrapper.querySelector(".openPreviewSymbol").outerHTML =
            '<svg class="closePreviewSymbol postDocumentIcon" ' +
            'xmlns="http://www.w3.org/2000/svg" ' +
            'viewBox="0 -6.5 22 16">' +
            '<path d=\"M10.86,9.5C4.2,9.5,1,3.88.15,2.15A1.5,1.5,0,1,1,2.85.85c.64,1.33,3.1,5.65,8,5.65s7.21-3.94,8-5.63a1.51,1.51,0,0,1,2-.72,1.5,1.5,0,0,1,.71,2C20.77,3.88,17.58,9.5,10.86,9.5Z\"/>' +
            '</svg>';
        previewWrapper.querySelector(".togglePreviewButton>.zToolTip").innerHTML = "Close Preview";
    }, delay);
}

// Function to close document preview
function closeDocumentPreview() {
    // Variables
    let previewWrapper = this;
    console.log("%cclosing document preview in documentPost " + this.parentElement.parentElement.id, "color: yellowgreen");
    // Remove event listener
    previewWrapper.removeEventListener("click", closeDocumentPreview);
    // Disallow resizing, and animate the closing
    previewWrapper.style.height = previewWrapperHeight + "px";
    // After animation, change button appearance and add open listener
    setTimeout(function () {
        previewWrapper.addEventListener("click", openDocumentPreview);
        // Change button elements
        previewWrapper.querySelector(".closePreviewSymbol").outerHTML =
            '<svg class="openPreviewSymbol postDocumentIcon" ' +
            'xmlns="http://www.w3.org/2000/svg" ' +
            'viewBox="0 0 22 16">' +
            '<path d="M21.6,6.54C20.26,4.23,17,0,11,0S1.74,4.23.4,6.54a2.88,2.88,0,0,0,0,2.92C1.74,11.77,5,16,11,16s9.26-4.23,10.6-6.54A2.88,2.88,0,0,0,21.6,6.54ZM11,13a5,5,0,1,1,5-5A5,5,0,0,1,11,13Z"/>' +
            '<circle cx="11" cy="8" r="2.5"/>' +
            '</svg>';
        previewWrapper.querySelector(".togglePreviewButton>.zToolTip").innerHTML = "Open Preview";
    }, delay);

}
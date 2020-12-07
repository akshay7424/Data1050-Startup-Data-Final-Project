// -------------------- Attaching listeners -------------------

// Get imageDropArea
let imageDropArea = createPostContainer.querySelector("#createPostImageDropArea");

// Get documentDropArea
let documentDropArea = createPostContainer.querySelector("#createPostDocumentDropArea");

// Attach dragOver listeners for styles
window.addEventListener('dragover', preventDefaultAndStopPropagation, false);
window.addEventListener('dragover', dropAreasToLevel1, false);
// Do not allow propagation for dropAreas! else, they will always be Lvl1
imageDropArea.addEventListener('dragover', preventDefaultAndStopPropagation, false);
imageDropArea.addEventListener('dragover', imageDropAreaToLevel2, false);
documentDropArea.addEventListener('dragover', preventDefaultAndStopPropagation, false);
documentDropArea.addEventListener('dragover', documentDropAreaToLevel2, false);

// Attach dragLeave and drop listeners for styles
['dragleave', 'drop'].forEach(eventName => {
    window.addEventListener(eventName, preventDefaultAndStopPropagation, false);
    window.addEventListener(eventName, dropAreasToNormal, false);
    // Allow propagation! else, dragging directly from dropAreas to outside
    // window will not remove Level1 highlights
    imageDropArea.addEventListener(eventName, preventDefault, false);
    imageDropArea.addEventListener(eventName, dropAreasToLevel1, false);
    documentDropArea.addEventListener(eventName, preventDefault, false);
    documentDropArea.addEventListener(eventName, dropAreasToLevel1, false);
});

// Attach drop listeners
imageDropArea.addEventListener('drop', handleImageDrop, false);
documentDropArea.addEventListener('drop', handleDocumentDrop, false);

// -------------------- Shared Functions -------------------

// Function to prevent defaults
function preventDefault(e) {
    e.preventDefault()
}

// Function to prevent defaults AND stop propagation
function preventDefaultAndStopPropagation(e) {
    e.preventDefault()
    e.stopPropagation()
}

// Function to set dropAreas to normal display
function dropAreasToNormal() {
    imageDropArea.className = "";
    documentDropArea.className = "";
}

// Function to set dropAreas to Lvl1 highlight
function dropAreasToLevel1() {
    imageDropArea.className = "dropAreaHighlighted1";
    documentDropArea.className = "dropAreaHighlighted1";
}

// Below is functional stuff for submitting images and documents
let imageCount = 0,
    originalImageDropArea = "", storedImageFiles = [],
    originalDocumentDropArea = "", storedSingleDocumentFile;

// Save current states of imageDropArea and documentDropArea
originalImageDropArea += imageDropArea.outerHTML;
originalDocumentDropArea += documentDropArea.outerHTML;

// -------------------- Images -------------------

// Function to set imageDropArea to Lvl2 highlight
function imageDropAreaToLevel2() {
    imageDropArea.className = "dropAreaHighlighted2";
}

// Function to handle dropped images
function handleImageDrop(e) {
    // Extract file from data transfer event
    let files = e.dataTransfer.files;

    // Read files
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        processIncomingImageFile(file, "dropping");
    }
}

// Function to handle images selected via clicking
function handleImageClickSelect(input) {
    if (input.files) {
        // Read files
        for (let i = 0; i < input.files.length; i++) {
            let file = input.files[i];
            processIncomingImageFile(file, "clicking");
        }
    }
}

// Function to remove a single image from storedImageFiles and previews
function removeImage() {
    // Filter and remove the corresponding image from storedImageFiles
    storedImageFiles = storedImageFiles.filter(element =>
        (element.name !== this.dataFilenameToRemove) || (element.dataTimeProcessed !== this.dataFileTimeProcessedToRemove)
    );
    // (Remove these checks later when we are sure it works perfectly) Check that file count is correct
    if (storedImageFiles.length === imageCount - 1 &&
        !storedImageFiles.some(element => (element.name === this.dataFilenameToRemove) && (element.dataTimeProcessed === this.dataFileTimeProcessedToRemove))) {
        console.log("%cfile " + this.dataFilenameToRemove + " successfully removed.", "color: orange");
        imageCount--;
    } else {
        console.log("%cuh oh! something went wrong...", "color: tomato");
        imageCount = storedImageFiles.length;
    }
    // Delete the preview
    this.parentNode.remove();
    // If last item was deleted
    if (imageCount === 0) {
        console.log("%cresetting image drop area", "color: orange");
        // Reset the imageDropArea to its original -- this does, however, remove event listeners
        imageDropArea.outerHTML = originalImageDropArea;
        imageDropArea = createPostContainer.querySelector("#createPostImageDropArea");
        // Reattach all the listeners
        imageDropArea.addEventListener('dragover', preventDefaultAndStopPropagation, false);
        imageDropArea.addEventListener('dragover', imageDropAreaToLevel2, false);
        imageDropArea.addEventListener('dragleave', preventDefault, false);
        imageDropArea.addEventListener('dragleave', dropAreasToLevel1, false);
        imageDropArea.addEventListener('drop', preventDefault, false);
        imageDropArea.addEventListener('drop', dropAreasToLevel1, false);
        imageDropArea.addEventListener('drop', handleImageDrop, false);
        // Enable click input
        imageDropArea.querySelector("input").disabled = false;
    }
}

// Very important! Function to process an image file -- generate preview thumbnail, etc
function processIncomingImageFile(file, howDidItGetHere) {
    // Accept only images
    if (file.type.match('image')) {
        // Store file
        file.dataTimeProcessed = Date.now();
        storedImageFiles.push(file);
        console.log("%cfile " + file.name + " received and processed via " + howDidItGetHere + "!", "color: yellowgreen");
        // Generate image preview elements
        let imgWrapper = createImageWrapper(file);
        // Check current situation
        if (imageCount === 0) {
            // If first image, disable original input
            if (imageDropArea.querySelector("#createPostImageInputHidden")) {
                imageDropArea.querySelector("#createPostImageInputHidden").disabled = true;
            }
            // Then remove "flex-wrap: wrap" because we want a single horizontal preview
            imageDropArea.style.flexWrap = "nowrap";
            // Then remove "justify-content: center" because of scrolling bug
            imageDropArea.style.justifyContent = "flex-start";
            // Then remove existing children
            while (imageDropArea.firstChild) {
                imageDropArea.removeChild(imageDropArea.firstChild);
            }
            // Then add the addMorePhotos div
            imageDropArea.innerHTML +=
                '<div class="createPostAddMorePhotos">' +
                '<label for="addMorePhotos" class="createPostAddMorePhotosText tabHighlightable" tabindex="0"> ' +
                '<span class="insideTabHighlightable" tabindex="-1">' +
                '<span>' +
                'Add More Photos' +
                '</span>' +
                '</span>' +
                '</label>' +
                '<input id="addMorePhotos" type="file" multiple accept="image/png,image/gif,image/jpeg" onchange="handleImageClickSelect(this)">' +
                '</div>';
            imageDropArea.insertBefore(imgWrapper, imageDropArea.lastElementChild);
        } else {
            // If second or later image, add only the thumbnail
            imageDropArea.insertBefore(imgWrapper, imageDropArea.lastElementChild);
        }
        // Increment imageCount
        imageCount++;
    } else {
        // todo: make some kind of error message
        console.log("%cfile " + file.name + " is not an image.", "color: tomato");
    }
}

// Function to generate the actual HTML for the image previews
function createImageWrapper(file) {
    let img = document.createElement("img"),
        removeButtonSpan = document.createElement("span"),
        removeButton = document.createElement("button"),
        imgWrapper = document.createElement("div");
    // img element
    img.className = "createPostImagePreview";
    img.src = URL.createObjectURL(file);
    img.title = file.name;
    img.alt = "Image Preview";
    // span element
    removeButtonSpan.className = "insideTabHighlightable darkerShadow";
    removeButtonSpan.tabIndex = -1;
    removeButtonSpan.innerHTML =
        '<svg class="removePreviewIcon" tabindex="-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">' +
        '<circle cx="10" cy="10" r="10"/>' +
        '<path class="cross1" d="M11.74,10l2.9-2.9A1.23,1.23,0,0,0,12.9,5.36L10,8.26,7.1,5.36A1.23,1.23,0,0,0,5.36,7.1L8.26,10l-2.9,2.9a1.23,1.23,0,0,0,0,1.74,1.22,1.22,0,0,0,.87.36,1.24,1.24,0,0,0,.87-.36l2.9-2.9,2.9,2.9a1.24,1.24,0,0,0,.87.36,1.22,1.22,0,0,0,.87-.36,1.23,1.23,0,0,0,0-1.74Z"/>' +
        '</svg>';
    // button element
    removeButton.className = "createPostPreviewRemoveButton tabHighlightable zToolTipRelative";
    removeButton.tabIndex = 0;
    removeButton.ariaLabel = "Remove Image";
    removeButton.type = "button";
    removeButton.dataFilenameToRemove = file.name; // Important!
    removeButton.dataFileTimeProcessedToRemove = file.dataTimeProcessed; // Important!
    removeButton.innerHTML = '<span class="zToolTip">Remove Image</span>';
    removeButton.appendChild(removeButtonSpan);
    removeButton.addEventListener("click", removeImage);
    // div element
    imgWrapper.className = "createPostImagePreviewWrapper";
    imgWrapper.appendChild(removeButton);
    imgWrapper.appendChild(img);
    return imgWrapper;
}

// -------------------- Documents -------------------

// Function to set documentDropArea to Lvl2 highlight
function documentDropAreaToLevel2() {
    documentDropArea.className = "dropAreaHighlighted2";
}

// Function to handle a dropped document
function handleDocumentDrop(e) {
    // Extract file from data transfer event
    let files = e.dataTransfer.files;

    // Read files
    processIncomingDocumentFile(files[0], "dropping");
}

// Function to handle images selected via clicking
function handleDocumentClickSelect(input) {
    if (input.files) {
        // Read file
        processIncomingDocumentFile(input.files[0], "clicking");
    }
}

// Function to remove document from storedSingleDocumentFile and preview
function removeDocument() {
    // Remove the document from storedSingleDocumentFile
    let forConsoleLogName = storedSingleDocumentFile.name;
    storedSingleDocumentFile = undefined;
    // Delete the preview
    // Unneeded, because we simply reset the dropArea
    // If last item was deleted
    console.log("%cdocument " + forConsoleLogName + " successfully removed.", "color: orange");
    console.log("%cresetting document drop area", "color: orange");
    // Reset the imageDropArea to its original -- this does, however, remove event listeners
    documentDropArea.outerHTML = originalDocumentDropArea;
    documentDropArea = createPostContainer.querySelector("#createPostDocumentDropArea");
    // Reattach all the listeners
    documentDropArea.addEventListener('drop', preventDefault, false);
    documentDropArea.addEventListener('drop', dropAreasToLevel1, false);
    documentDropArea.addEventListener('drop', handleDocumentDrop, false);
    documentDropArea.addEventListener('dragover', preventDefaultAndStopPropagation, false);
    documentDropArea.addEventListener('dragover', documentDropAreaToLevel2, false);
    documentDropArea.addEventListener('dragleave', preventDefault, false);
    documentDropArea.addEventListener('dragleave', dropAreasToLevel1, false);
    // Enable click input
    documentDropArea.querySelector("input").disabled = false;
}

// Very important! Function to process a document file -- generate preview thumbnail, etc
function processIncomingDocumentFile(file, howDidItGetHere) {
    // Accept only PDFs
    if (file.type.match('application/pdf')) {
        // Store file
        file.dataTimeProcessed = Date.now();
        storedSingleDocumentFile = file;
        console.log("%cdocument " + file.name + " received and processed via " + howDidItGetHere + "!", "color: yellowgreen");
        // Generate image preview elements
        let docWrapper = createDocumentWrapper(file);
        // Then remove existing children
        while (documentDropArea.firstChild) {
            documentDropArea.removeChild(documentDropArea.firstChild);
        }
        documentDropArea.insertBefore(docWrapper, null);
    } else {
        // todo: make some kind of error message
        console.log("%cdocument " + file.name + " is not in an acceptable format. We currently support only PDFs.", "color: tomato");
    }
    console.log(storedSingleDocumentFile);
}

// Function to generate the actual HTML for the document preview
function createDocumentWrapper(file) {
    let docWrapper = document.createElement("div"),
        top = document.createElement("div"),
        topBar = document.createElement("div"),
        iconWrapper = document.createElement("div"),
        removeDocumentButton = document.createElement("button"),
        downloadButton = document.createElement("a"),
        togglePreviewButton = document.createElement("button"),
        iframe = document.createElement("iframe"),
        bottom = document.createElement("div");
    // removeButton element
    removeDocumentButton.className = "createPostDocumentPreviewElement removeDocumentButton postDocumentIconContainer tabHighlightable zToolTipRelative";
    removeDocumentButton.tabindex = "0";
    removeDocumentButton.type = "button";
    removeDocumentButton.innerHTML =
        '<span class="zToolTip">Remove Document</span>' +
        '<span class="insideTabHighlightable" tabindex="-1">' +
        '<svg class="removeDocumentSymbol postDocumentIcon" ' +
        'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">' +
        '<path d="M13.43,11,21.5,2.94A1.75,1.75,0,0,0,21.5.5a1.73,1.73,0,0,0-2.44,0L11,8.57,2.93.5A1.72,1.72,0,0,0,.5,2.94L8.57,11,.5,19.06a1.73,1.73,0,0,0,0,2.44,1.75,1.75,0,0,0,1.22.5,1.71,1.71,0,0,0,1.21-.5L11,13.43l8.06,8.07a1.73,1.73,0,1,0,2.44-2.44Z"/>' +
        '</svg> </span>';
    // downloadButton element
    downloadButton.className = "createPostDocumentPreviewElement downloadButton postDocumentIconContainer tabHighlightable zToolTipRelative";
    downloadButton.tabindex = "0";
    downloadButton.href = URL.createObjectURL(file);
    downloadButton.download = URL.createObjectURL(file);
    downloadButton.innerHTML =
        '<span class="zToolTip">Download</span>' +
        '<span class="insideTabHighlightable" tabindex="-1">' +
        '<svg class="downloadSymbol postDocumentIcon" ' +
        'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">' +
        '<path d="M19,15v4H3V15a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H20A1,1,0,0,0,19,15Z"/>' +
        '<path d="M17.59,8H14V1a1,1,0,0,0-1-1H9A1,1,0,0,0,8,1V8H4.41a1,1,0,0,0-.7,1.71l6.58,6.58a1,1,0,0,0,1.42,0l6.58-6.58A1,1,0,0,0,17.59,8Z"/>' +
        '</svg> </span>';
    // togglePreview element
    togglePreviewButton.className = "createPostDocumentPreviewElement togglePreviewButton postDocumentIconContainer tabHighlightable zToolTipRelative";
    togglePreviewButton.tabindex = "0";
    togglePreviewButton.type = "button";
    togglePreviewButton.innerHTML =
        '<span class="zToolTip">Open Preview</span>\n' +
        '<span class="insideTabHighlightable" tabindex="-1">' +
        '<svg class="openPreviewSymbol postDocumentIcon" ' +
        'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16">' +
        '<path d="M21.6,6.54C20.26,4.23,17,0,11,0S1.74,4.23.4,6.54a2.88,2.88,0,0,0,0,2.92C1.74,11.77,5,16,11,16s9.26-4.23,10.6-6.54A2.88,2.88,0,0,0,21.6,6.54ZM11,13a5,5,0,1,1,5-5A5,5,0,0,1,11,13Z"/>' +
        '<circle cx="11" cy="8" r="2.5"/> </svg> </span>';
    // icon wrapper div element
    iconWrapper.className = "postDocumentIconContainerWrapper";
    iconWrapper.appendChild(removeDocumentButton);
    iconWrapper.appendChild(downloadButton);
    iconWrapper.appendChild(togglePreviewButton);
    // top toolbar div element
    topBar.className = "postDocumentPreviewToolbar";
    topBar.innerHTML = file.name;
    topBar.appendChild(iconWrapper);
    // top div element
    top.className = "postDocumentPreviewTop";
    top.appendChild(topBar);
    // iframe element
    iframe.className = "postDocumentPreview";
    iframe.src = URL.createObjectURL(file);
    // bottom div element
    bottom.className = "postDocumentPreviewBottom";
    // div element
    docWrapper.className = "postDocumentPreviewWrapper";
    docWrapper.appendChild(top);
    docWrapper.appendChild(iframe);
    docWrapper.appendChild(bottom);
    // Attach listeners
    docWrapper.addEventListener("click", openDocumentPreview);
    removeDocumentButton.addEventListener("click", function (e) {
        e.stopPropagation();
        removeDocument();
    });
    downloadButton.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    return docWrapper;
}
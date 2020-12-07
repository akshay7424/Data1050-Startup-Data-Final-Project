// Some variables
let i, outerWrapper, ourSetMaxHeight = 400;

// Find every imagePost
let imagePosts = document.getElementsByClassName("imagePost");

// Get each imagePost's carouselOuterWrapper and size it, because absolutely-positioned children have no size
// Attach listeners for navigation too
for (i = 0; i < imagePosts.length; i++) {
    outerWrapper = imagePosts[i].querySelector(".postCarouselOuterWrapper");
    // Check for multiple images
    if (outerWrapper.querySelector(".postCarouselButtonNext")) { // Prepare carousel and navigation buttons
        sizeImageCarousel(outerWrapper);
        prepImageCarousel(outerWrapper);
        outerWrapper.querySelector(".postCarouselButtonNext").addEventListener("click", carouselNext);
        outerWrapper.querySelector(".postCarouselButtonPrev").addEventListener("click", carouselPrev);
    }
}

// Sizing function for multiple images
function sizeImageCarousel(suppliedOuterWrapper) {
    // Sizing
    let flagToAddListenerLater = false,
            topHtoWRatio = 0,
            topH = 0,
            limWidth = suppliedOuterWrapper.offsetWidth,
            images = suppliedOuterWrapper.getElementsByClassName("postCarouselImage");
    for (let j = 0; j < images.length; j++) {
        let imHeight = Number(images[j].naturalHeight),
                imWidth = Number(images[j].naturalWidth);
        if (imWidth > limWidth) {
            if ((imHeight * limWidth / imWidth) < ourSetMaxHeight) {
                flagToAddListenerLater = true;
            }
            topH = Math.max(imHeight * limWidth / imWidth, topH)
        } else {
            topH = Math.max(imHeight, topH);
        }
        topHtoWRatio = Math.max(imHeight / imWidth, topHtoWRatio);
    }
    suppliedOuterWrapper.querySelector(".postCarouselWrapper").style.paddingTop = (topHtoWRatio * 100).toString() + "%";
}

// Function to prepare an image carousel by moving its first image and filling pip
function prepImageCarousel(suppliedOuterWrapper) {
    // Prepping
    let firstImage = suppliedOuterWrapper.querySelector(".postCarouselSlideContainer");
    firstImage.style.transition = "all 0s";
    firstImage.className = firstImage.className.replace(" right", " middle");
    setTimeout(function () {
        firstImage.style = "";
    }, 10);
    suppliedOuterWrapper.querySelector(".postCarouselPips").className += " filled";
}

// Carousel navigation function
function carouselNext(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log("%cnext image in imagePost " + this.parentElement.parentElement.parentElement.id, "color: yellowgreen");
    outerWrapper = this.parentElement;
    // Move Images
    let currentImage = outerWrapper.querySelector(".middle");
    currentImage.className = currentImage.className.replace(" middle", " left");
    currentImage.nextElementSibling.className = currentImage.nextElementSibling.className.replace(" right", " middle");
    // Activate Pips
    let currentPip = outerWrapper.querySelector(".filled");
    currentPip.nextElementSibling.className += " filled";
    currentPip.className = currentPip.className.replace(" filled", "");
    // Show/Hide Buttons
    let prevButton = outerWrapper.querySelector(".postCarouselButtonPrev");
    prevButton.disabled = false;
    prevButton.firstElementChild.style = "";
    prevButton.style = "display: block";
    if (!outerWrapper.querySelector(".right")) { // Reached right end
        this.firstElementChild.style.mozBoxShadow = "none";
        this.firstElementChild.style.webkitBoxShadow = "none";
        this.firstElementChild.style.boxShadow = "none";
        // Slight delay to prevent Safari's box-shadow rendering remnant bug
        let thing = this;
        this.disabled = true;
        setTimeout(function () {
            thing.style.display = "none";
        }, 10);
    }
}

// Carousel navigation function
function carouselPrev(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log("%cprevious image in imagePost " + this.parentElement.parentElement.parentElement.id, "color: yellowgreen");
    outerWrapper = this.parentElement;
    // Move Images
    let currentImage = outerWrapper.querySelector(".middle");
    currentImage.className = currentImage.className.replace(" middle", " right");
    currentImage.previousElementSibling.className = currentImage.previousElementSibling.className.replace(" left", " middle");
    // Activate Pips
    let currentPip = outerWrapper.querySelector(".filled");
    currentPip.previousElementSibling.className += " filled";
    currentPip.className = currentPip.className.replace(" filled", "");
    // Show/Hide Buttons
    if (!outerWrapper.querySelector(".left")) { // Reached left end
        this.firstElementChild.style.mozBoxShadow = "none";
        this.firstElementChild.style.webkitBoxShadow = "none";
        this.firstElementChild.style.boxShadow = "none";
        // Slight delay to prevent Safari's box-shadow rendering remnant bug
        let thing = this;
        this.disabled = true;
        setTimeout(function () {
            thing.style.display = "none";
        }, 10);
    }
    let nextButton = outerWrapper.querySelector(".postCarouselButtonNext");
    nextButton.disabled = false;
    nextButton.firstElementChild.style = "";
    nextButton.style = "display: block";
}
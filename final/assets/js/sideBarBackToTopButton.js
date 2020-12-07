// Shows button only after past criticalScrollPoint
let previousPosition = 0, criticalScrollPoint = 90;
let backToTopButton = document.getElementById("backToTopButton");
document.addEventListener("scroll", showButtonAfterFirstScroll)
backToTopButton.addEventListener("click", linearScrollToLast)

// Function to check if scroll is past critical point, and first display button
function showButtonAfterFirstScroll() {
    if (document.scrollingElement.scrollTop > criticalScrollPoint) {
        console.log("%cbackToTop button appeared because you've scrolled past " + criticalScrollPoint + "px", "color: orange")
        backToTopButton.style.display = "block";
        document.removeEventListener("scroll", showButtonAfterFirstScroll)
    }
}

// Function to animate scroll. When the user clicks on the button:
// - if currently less than criticalScrollPoint and never clicked: button has "display: none"
// - if currently less than criticalScrollPoint and previously clicked: go to previousPosition
// - if currently more than criticalScrollPoint: go to top
function linearScrollToLast() {
    const duration = 250;
    document.removeEventListener("scroll", changeButtonDependingOnScrollPosition);
    const positionAtClick = document.scrollingElement.scrollTop;
    if (positionAtClick > criticalScrollPoint) {
        previousPosition = 0;
    }
    if (positionAtClick === previousPosition) {
        console.log("%calready there!", "color: orange");
    } else {
        const distUpToScroll = positionAtClick - previousPosition;
        let scrollY = positionAtClick, oldTimestamp = null;

        function step(newTimestamp) {
            if (oldTimestamp !== null) {
                // if duration is 0 scrollY will be -Infinity
                scrollY -= distUpToScroll * (newTimestamp - oldTimestamp) / duration;
                if ((distUpToScroll > 0 && previousPosition - scrollY > 0) ||
                        (distUpToScroll < 0 && previousPosition - scrollY < 0)) {
                    document.scrollingElement.scrollTop = previousPosition;
                    previousPosition = positionAtClick;
                    if (positionAtClick !== 0) {
                        backToTopButton.firstElementChild.innerHTML = "Back To Last Location";
                        console.log("%cback to top complete!", "color: yellowgreen");
                        document.addEventListener("scroll", changeButtonDependingOnScrollPosition);
                    } else {
                        backToTopButton.firstElementChild.innerHTML = "Back To Top";
                        console.log("%cback to last location complete!", "color: yellowgreen");
                    }
                    backToTopButton.disabled = false;
                    return;
                }
                document.scrollingElement.scrollTop = scrollY;
            }
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }

        backToTopButton.disabled = true;
        window.requestAnimationFrame(step);
    }
}

// Function to change innerHTML of button on scrolling
function changeButtonDependingOnScrollPosition() {
    if (document.scrollingElement.scrollTop > criticalScrollPoint) {
        backToTopButton.firstElementChild.innerHTML = "Back To Top";
    } else {
        backToTopButton.firstElementChild.innerHTML = "Back To Last Location";
    }
}
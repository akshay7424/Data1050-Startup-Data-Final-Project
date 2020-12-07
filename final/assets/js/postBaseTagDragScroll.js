// Implements drag-to-scroll, useful for mouse users
// Completely optional. Remove if site loads too slow.
let dragToScrollElements = document.querySelectorAll(".dragToScroll");
let isDown = false, startX, scrollLeft, activeTarget;

// Attach start-drag listeners
for (let i = 0; i < dragToScrollElements.length; i++) {
    let thing = dragToScrollElements[i];
    thing.addEventListener("mousedown", e => {
        console.log("mousedown");
        isDown = true;
        thing.classList.add("active");
        activeTarget = thing;
        startX = e.pageX - thing.offsetLeft;
        scrollLeft = thing.scrollLeft;
    });
}

// Attach end-drag listeners
document.addEventListener("mouseleave", () => {
    if (!isDown) return;
    console.log("mouseleave");
    isDown = false;
    activeTarget.classList.remove("active");
});
document.addEventListener("mouseup", () => {
    if (!isDown) return;
    isDown = false;
    activeTarget.classList.remove("active");
});

// Attach move-while-dragging listeners
document.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const walk = (e.pageX - activeTarget.offsetLeft) - startX;
    activeTarget.scrollLeft = scrollLeft - walk;
});
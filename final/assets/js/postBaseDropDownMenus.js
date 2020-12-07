// For postBase Dropdown Menu
let currentDropdownMenuActive = null;

// Keep dropdown menu open on clicking enter or space on the outer wrapper
function keepDropdownMenuOpenOnEnter(e) {
    let code = e.key;
    if (code === "Enter" || code === " ") {
        e.stopPropagation();
        e.preventDefault();
        this.removeEventListener("keydown", keepDropdownMenuOpenOnEnter);
        this.firstElementChild.removeEventListener("click", keepDropdownMenuOpenOnClick);
        let x = this.getAttribute("aria-expanded");
        if (x === "true") {
            console.log("%cclosing dropdown menu via keyboard", "color: orange");
            this.firstElementChild.className = this.firstElementChild.className.replace(" active", "");
            let nextEle = this.nextElementSibling;
            nextEle.className = nextEle.className.replace(" active", "");
            this.setAttribute("aria-expanded", "false");
            currentDropdownMenuActive = null;
            window.removeEventListener("click", closeDropdownMenu);
            this.addEventListener("keydown", keepDropdownMenuOpenOnEnter);
            this.firstElementChild.addEventListener("click", keepDropdownMenuOpenOnClick);
        } else {
            closeDropdownMenu(e);
            console.log("%copening dropdown menu via keyboard", "color: yellowgreen");
            this.firstElementChild.className += " active";
            let nextEle = this.nextElementSibling;
            nextEle.className += " active";
            this.setAttribute("aria-expanded", "true");
            currentDropdownMenuActive = nextEle;
            window.addEventListener("click", closeDropdownMenu);
        }
    }
}

// Keep dropdown menu open on mouse clicks
function keepDropdownMenuOpenOnClick(e) {
    e.stopPropagation();
    e.preventDefault();
    closeNavBarDropdownMenu(e);
    this.parentElement.removeEventListener("keydown", keepDropdownMenuOpenOnEnter);
    this.removeEventListener("click", keepDropdownMenuOpenOnClick);
    let x = this.parentElement.getAttribute("aria-expanded");
    if (x === "true") {
        console.log("%cclosing dropdown menu by click", "color: orange");
        this.className = this.className.replace(" active", "");
        let nextEle = this.parentElement.nextElementSibling;
        nextEle.className = nextEle.className.replace(" active", "");
        this.parentElement.setAttribute("aria-expanded", "false");
        currentDropdownMenuActive = null;
        window.removeEventListener("click", closeDropdownMenu);
        this.parentElement.addEventListener("keydown", keepDropdownMenuOpenOnEnter);
        this.addEventListener("click", keepDropdownMenuOpenOnClick);
    } else {
        closeDropdownMenu(e);
        console.log("%copening dropdown menu by click", "color: yellowgreen");
        this.className = this.className + " active";
        let nextEle = this.parentElement.nextElementSibling;
        nextEle.className += " active";
        this.parentElement.setAttribute("aria-expanded", "true");
        currentDropdownMenuActive = this.parentElement.nextElementSibling;
        window.addEventListener("click", closeDropdownMenu);
        this.parentElement.addEventListener("keydown", keepDropdownMenuOpenOnEnter);
        this.addEventListener("click", keepDropdownMenuOpenOnClick);
    }
}

// Helper function to close first open dropdown menu on page, if any, when clicking/entering elsewhere
function closeDropdownMenu(e) {
    let y = document.querySelector(".forJSDropdownClickClass.active");
    if (y && !currentDropdownMenuActive.contains(e.target)) {
        console.log("%cclosing dropdown menu by clicking elsewhere", "color: orange");
        y.className = y.className.replace(" active", "");
        let nextEle = y.parentElement.nextElementSibling;
        nextEle.className = nextEle.className.replace(" active", "");
        y.parentElement.setAttribute("aria-expanded", "false");
        currentDropdownMenuActive = null;
        window.removeEventListener("click", closeDropdownMenu);
        y.parentElement.addEventListener("keydown", keepDropdownMenuOpenOnEnter);
        y.addEventListener("click", keepDropdownMenuOpenOnClick);
    }
}

// Selecting dropdown menu outer wrappers
let dropdownMenuTabbableThings = document.querySelectorAll('.tabHighlightable.postDropdownIconContainer');
Array.from(dropdownMenuTabbableThings).forEach(element => {
    element.addEventListener("keydown", keepDropdownMenuOpenOnEnter);
});
let dropdownMenuClickableThings = document.querySelectorAll('.insideTabHighlightable.forJSDropdownClickClass');
Array.from(dropdownMenuClickableThings).forEach(element => {
    element.addEventListener("click", keepDropdownMenuOpenOnClick);
});
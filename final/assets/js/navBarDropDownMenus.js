// For navBar Dropdown Menus
let navBar = document.getElementById("navBar");

// Keep dropdown menu open on clicking enter or space on the outer wrapper
function keepNavBarDropdownMenuOpenOnEnter(e) {
    let code = e.key;
    if (code === "Enter" || code === " ") {
        e.stopPropagation();
        e.preventDefault();
        let x = this.getAttribute("aria-expanded");
        if (x === "true") {
            console.log("%cclosing navBar dropdown menu via keyboard", "color: orange");
            this.firstElementChild.className.replace(" active", "");
            let nextEle = this.parentElement.nextElementSibling;
            nextEle.className = nextEle.className.replace(" active", "");
            this.setAttribute("aria-expanded", "false");
            window.removeEventListener("click", closeNavBarDropdownMenu);
        } else {
            closeNavBarDropdownMenu(e);
            console.log("%copening navBar dropdown menu via keyboard", "color: yellowgreen");
            this.firstElementChild.className += " active";
            let nextEle = this.parentElement.nextElementSibling;
            nextEle.className += " active";
            this.setAttribute("aria-expanded", "true");
            window.addEventListener("click", closeNavBarDropdownMenu);
        }
    }
}

// Keep dropdown menu open on mouse clicks
function keepNavBarDropdownMenuOpenOnClick(e) {
    e.stopPropagation();
    e.preventDefault();
    if (typeof closeDropdownMenu == "function") {
        closeDropdownMenu(e);
    }
    let x = this.parentElement.getAttribute("aria-expanded");
    if (x === "true") {
        console.log("%cclosing navBar dropdown menu by click", "color: orange");
        this.className = this.className.replace(" active", "");
        let nextEle = this.parentElement.nextElementSibling;
        nextEle.className = nextEle.className.replace(" active", "");
        this.parentElement.setAttribute("aria-expanded", "false");
        window.removeEventListener("click", closeNavBarDropdownMenu);
    } else {
        closeNavBarDropdownMenu(e);
        console.log("%copening navBar dropdown menu by click", "color: yellowgreen");
        this.className = this.className + " active";
        let nextEle = this.parentElement.nextElementSibling;
        nextEle.className += " active";
        this.parentElement.setAttribute("aria-expanded", "true");
        window.addEventListener("click", closeNavBarDropdownMenu);
    }
}

// Helper function to close first open dropdown menu on page, if any, when clicking elsewhere
function closeNavBarDropdownMenu(e) {
    let y = document.querySelector(".forJSNavBarDropdownClickClass.active");
    if (y && !navBar.querySelector(".navBarDropdownMenu.active").contains(e.target)) {
        console.log("%cclosing navBar dropdown menu by clicking elsewhere", "color: orange");
        y.className = y.className.replace(" active", "");
        let nextEle = y.parentElement.nextElementSibling;
        nextEle.className = nextEle.className.replace(" active", "");
        y.parentElement.setAttribute("aria-expanded", "false");
        window.removeEventListener("click", closeNavBarDropdownMenu);
    }
}

// Selecting dropdown menu outer wrappers
let navBarDropdownMenuTabbableThings = navBar.querySelectorAll('.tabHighlightable.navBarDropdownIconContainer');
Array.from(navBarDropdownMenuTabbableThings).forEach(element => {
    element.addEventListener("keydown", keepNavBarDropdownMenuOpenOnEnter);
});
let navBarDropdownMenuClickableThings = navBar.querySelectorAll('.insideTabHighlightable.forJSNavBarDropdownClickClass');
Array.from(navBarDropdownMenuClickableThings).forEach(element => {
    element.addEventListener("click", keepNavBarDropdownMenuOpenOnClick);
});
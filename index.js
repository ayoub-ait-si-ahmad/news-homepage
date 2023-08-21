const hamburger = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuCloseIcon = document.querySelector(".menu-close-icon");
const backgroundColor = document.querySelector(".blur-background");
function openMobileMenu() {
    menu.style.display = "block";
    menuCloseIcon.style.display = "block";
    backgroundColor.style.display="block";
}

function closeMobileMenu() {
    menu.style.display = "none";
    menuCloseIcon.style.display = "none";
    backgroundColor.style.display="none";

}

function setMenuDisplay() {
    const viewportWidth = window.innerWidth;
    
    if (viewportWidth >= 1024) {
        menu.style.display = "block";
        hamburger.style.display = "none";
        menuCloseIcon.style.display = "none";
        backgroundColor.style.display="none";

    } else {
        menu.style.display = "none";
        hamburger.style.display = "block";
        menuCloseIcon.style.display = "none";
        backgroundColor.style.display="none";

    }
}

hamburger.addEventListener("click", openMobileMenu);
menuCloseIcon.addEventListener("click", closeMobileMenu);

window.addEventListener("resize", setMenuDisplay);

setMenuDisplay();

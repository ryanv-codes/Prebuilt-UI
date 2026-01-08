// Get elements
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");

// Open menu on mobile
openMenu.addEventListener("click", () => {
    menu.classList.add("open");
});

// Close menu on mobile
closeMenu.addEventListener("click", () => {
    menu.classList.remove("open");
});


// Hide category menu when clicking outside
document.addEventListener("click", (event) => {

    const menu = document.querySelector(".custom-menu");

    if (menu) {
        menu.className = 'hidden-menu';
    }
});
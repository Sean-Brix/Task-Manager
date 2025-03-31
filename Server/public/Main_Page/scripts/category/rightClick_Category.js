

function showMenu_Category(event, id){

    event.preventDefault();

    // Hide all other menus first
    document.querySelectorAll(".custom-menu").forEach(menu => {
        menu.className = 'hidden-menu'
    });

    // Default to selected div
    const targetDiv = document.getElementById(id);
    targetDiv.click();
    
    // Get the menu
    const menu = document.getElementById("menu_" + id);

    //! FIX: Right Clicking at the very bottom hides the category - menu (overflow error)
    // Position the menu below the div
    menu.className = 'custom-menu'
    menu.style.top = `${40}px`;
    menu.style.left = `${120}px`;
    
}
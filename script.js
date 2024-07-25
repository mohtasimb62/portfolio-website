const sideMenu = document.querySelector('#side-menu')

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)'
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)'
}
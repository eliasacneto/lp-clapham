const menu = document.querySelector('.showMenu');
const openMenu = document.querySelector('.open-menu');

openMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
}

const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop(){
    desktopMenu.classList.toggle('inactive');
};

const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobileIconBurguer = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleMenuDesktop);
menuMobileIconBurguer.addEventListener('click',toggleMenuMobile);

function toggleMenuDesktop(){
    desktopMenu.classList.toggle('inactive');
};

function toggleMenuMobile(){
    menuMobile.classList.toggle('inactive')
};
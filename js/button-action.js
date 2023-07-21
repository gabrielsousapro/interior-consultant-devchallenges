const navBtn = document.querySelector('.navbar__btn');
const burgerBtn = document.querySelector('.fa-solid');
const menuItem = document.querySelector('.menu__item');
const navMenu = document.querySelector('.navbar__menu');
let changeState = false;

(navBtn || menuItem).onclick = function() {
    if(changeState == false) {
        navMenu.classList.toggle('open');
        burgerBtn.classList.remove('fa-bars');
        burgerBtn.classList.toggle('fa-xmark');
        changeState = true;
    }
    else {
        navMenu.classList.remove('open');
        burgerBtn.classList.remove('fa-xmark');
        burgerBtn.classList.toggle('fa-bars');
        changeState = false;
    }
}
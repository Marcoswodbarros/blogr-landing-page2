let hamburguer = document.querySelector('#header__nav--hamburguer');
let close = document.querySelector('#header__nav--close');
let menu = document. querySelector('#header__mobile--menu');
let connect = document.querySelector('#menu__li--connect');
let subMenu = document.querySelector('#li__connect--ul');

hamburguer.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
connect.addEventListener("click", openSubMenu)

function openMenu () {
    hamburguer.style.display = "none";
    close.style.display = "flex";
    menu.style.display = "flex";
}

function closeMenu () {
    hamburguer.style.display = "flex";
    close.style.display = "none";
    menu.style.display = "none";
}

function openSubMenu () {
    subMenu.style.display = 'flex';
}

function closeSubMenu () {
    subMenu.style.display = 'none';
}
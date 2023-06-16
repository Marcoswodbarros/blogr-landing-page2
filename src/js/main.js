let hamburguer = document.querySelector('#header__nav--hamburguer');
let close = document.querySelector('#header__nav--close');
let menu = document. querySelector('#header__mobile--menu');
let connect = document.querySelector('#menu__li--connect');
let subMenu = document.querySelector('#li__connect--ul');
let arrowDown = document.querySelector('#li__connect--arrow');

hamburguer.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
arrowDown.addEventListener("click", openSubMenu)

function openMenu () {
    hamburguer.style.display = "none";
    close.style.display = "flex";
    menu.style.display = "flex";
}

function closeMenu () {
    hamburguer.style.display = "flex";
    close.style.display = "none";
    menu.style.display = "none";
    subMenu.style.display = "none";
    connect.style.color = "black";
}

function openSubMenu () {
    subMenu.style.display = "flex";
    connect.style.color = "hsl(207, 13%, 34%)";
}

function closeSubMenu () {
    subMenu.style.display = "none";
    connect.style.color = "black";
}
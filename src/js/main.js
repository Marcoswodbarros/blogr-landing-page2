// Mobile variables 
let header = document.querySelector('header');
let hamburguer = document.querySelector('#header__nav--hamburguer');
let close = document.querySelector('#header__nav--close');
let menu = document. querySelector('#header__mobile--menu');
let connect = document.querySelector('#menu__li--connect');
let subMenu = document.querySelector('#li__connect--ul');
let arrowDown = document.querySelector('#li__connect--arrow');
let arrowUp = document.querySelector('#li__connect--arrowTwo');
let line = document.querySelector('#menu__line');
let login = document.querySelector('#subMenu__login');

// Mobile Events
hamburguer.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
arrowDown.addEventListener("click", openSubMenu);
arrowUp.addEventListener("click", closeSubMenu);

// Mobile Functions
function openMenu () {
    header.style.marginBottom = "10rem";
    hamburguer.style.display = "none";
    close.style.display = "flex";
    menu.style.display = "flex";
    subMenu.style.display = "none";
}

function closeMenu () {
    header.style.marginBottom = "0";
    hamburguer.style.display = "flex";
    close.style.display = "none";
    menu.style.display = "none";
    subMenu.style.display = "none";
    connect.style.color = "black";
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
    line.style.marginTop = "0";
}

function openSubMenu () {
    subMenu.style.display = "flex";
    connect.style.color = "hsl(207, 13%, 34%)";
    arrowDown.style.display = "none";
    arrowUp.style.display = "block";
    line.style.marginTop = "200px";
}

function closeSubMenu () {
    subMenu.style.display = "none";
    connect.style.color = "black";
    arrowDown.style.display = "block";
    arrowUp.style.display = "none";
    line.style.marginTop = "0";
}


// Desktop variables
let desktopConnect = document.querySelector('#nav__desktop--connect');
let desktopSubMenu = document.querySelector('#nav__subMenu--ul');
let desktopArrowDown = document.querySelector('#nav__subMenu--img');
let desktopArrowUp = document.querySelector('#nav__subMenu--imgTwo');

// Desktop Events
desktopArrowDown.addEventListener("click", openDesktopSubMenu);
desktopArrowUp.addEventListener("click", closeDesktopSubMenu);

// Desktop functions
function openDesktopSubMenu () {
    desktopConnect.style.color = "white";
    desktopSubMenu.style.display = "flex";
    desktopArrowDown.style.display = "none";
    desktopArrowUp.style.display = "flex";
}

function closeDesktopSubMenu () {
    desktopConnect.style.color = "hsl(240, 2%, 79%)";
    desktopSubMenu.style.display = "none";
    desktopArrowDown.style.display = "flex";
    desktopArrowUp.style.display = "none";
}
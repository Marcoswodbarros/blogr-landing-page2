let hamburguer = document.querySelector('#header__nav--hamburguer');
let close = document.querySelector('#header__nav--close');

hamburguer.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);

function openMenu () {
    hamburguer.style.display = "none";
    close.style.display = "flex";
}

function closeMenu () {
    hamburguer.style.display = "flex";
    close.style.display = "none";
}
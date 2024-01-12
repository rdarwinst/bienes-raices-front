document.addEventListener('DOMContentLoaded', function () {

    eventListeners();
});

function eventListeners(e) {
    const menuResponsive = document.querySelector('.menu-responsive');

    menuResponsive.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar');
}
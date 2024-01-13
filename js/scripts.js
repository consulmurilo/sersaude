var buttonMenu = document.querySelector('#menu-icon')
var menu = document.querySelector('nav')

buttonMenu.addEventListener('click', function () {
    menu.classList.toggle('open');
});

document.addEventListener('click', function (event) {
    let clickInside = menu.contains(event.target);
    let clickMenu = (event.target === buttonMenu);

    if (!clickInside && !clickMenu) {
        menu.classList.remove('open')
    }
})
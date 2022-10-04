const menu = document.querySelector('.menu-bar');
const navItems = document.querySelector('.nav-items');

menu.addEventListener('click', function(e) {
    e.target.classList.toggle('menu-minus');
    navItems.classList.toggle('show-nav-items');
})
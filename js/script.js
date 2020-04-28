
const menuToggle = document.querySelector('.toggle');
const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-links');

let showMenu = false;

menuToggle.addEventListener('click', toggleMenu);

toggleMenu

function toggleMenu() {
    if(!showMenu) {
        menuToggle.classList.toggle('close');
        navItems.classList.add('show');
        navLinks.forEach(item => item.classList.add('show'));
        
        showMenu = true;
    } else {
        menuToggle.classList.remove('close');
        navItems.classList.remove('show');
        navLinks.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}
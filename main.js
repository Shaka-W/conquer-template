const mobileNavIcon = document.getElementsByClassName('mobile-nav-icon')[0];
const navBar = document.getElementsByClassName('nav-toggle')[0];

mobileNavIcon.addEventListener('click', () => {
    navBar.classList.toggle('nav-toggle');
});
const navToggleButton = document.getElementsByClassName('mobile-nav-icon')[0];
const navBar = document.getElementsByClassName('nav-toggle')[0];

navToggleButton.addEventListener('click', () => {
    if (navBar.style.display === 'none') {
        navBar.style.display = 'block';
    } else {
        navBar.style.display = 'none';
    }
});
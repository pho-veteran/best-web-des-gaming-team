const sidebarToggler = document.querySelector('.navbar__toggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const sidebarClose = document.querySelector('.sidebar__close');
sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});
sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});
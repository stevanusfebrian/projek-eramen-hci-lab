const burger_button = document.querySelector('#burger-button');
const close_button = document.querySelector('#close-button');
const sidebar_overlay = document.querySelector('.sidebar-overlay');
const nav_ul = document.querySelector('.nav-list');

burger_button.addEventListener('click', function() {
  nav_ul.classList.toggle('nav-slide');
  sidebar_overlay.classList.toggle('sidebar-overlay-active');
});

close_button.addEventListener('click', function() {
  nav_ul.classList.toggle('nav-slide');
  sidebar_overlay.classList.toggle('sidebar-overlay-active');
});

sidebar_overlay.addEventListener('click', function() {
  nav_ul.classList.toggle('nav-slide');
  sidebar_overlay.classList.toggle('sidebar-overlay-active');
});

if(window.screen.width > 768){
  nav_ul.classList.remove('nav-slide');
  sidebar_overlay.classList.remove('sidebar-overlay-active');
}
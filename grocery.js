let serach = document.querySelector('.form');
document.querySelector('#search-btn').onclick = () => {
    serach.classList.toggle('active');
    shopping.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');


}
let shopping = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shopping.classList.toggle('active');
    serach.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');


}
let loginform = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () => {
    loginform.classList.toggle('active');
    serach.classList.remove('active');
    shopping.classList.remove('active');
    navbar.classList.remove('active');


}

let navbar = document.querySelector('.navbar ');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    serach.classList.remove('active');
    shopping.classList.remove('active');
    loginform.classList.remove('active');

}  
window.onscroll = () => {
    serach.classList.remove('active');
    shopping.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');

}   
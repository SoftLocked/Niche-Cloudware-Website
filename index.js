/****************************************************************************************************
* Burger Menu
****************************************************************************************************/

let burgerIcon = document.getElementById('burger');
let navbarMenu = document.getElementById('nav-links');
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
})
var menuBtn = document.getElementsByClassName('menu-btn')[0];
var closeMenuBtn = document.getElementsByClassName('close-menu-btn')[0];
var navLinks =document.getElementsByClassName('nav-links')[0];

//Openning Menu
menuBtn.addEventListener('click', ()=>{
    navLinks.classList += ' nav-links-active';
})

//Closing Menu
closeMenuBtn.addEventListener('click', ()=>{
    navLinks.classList = 'nav-links';
})
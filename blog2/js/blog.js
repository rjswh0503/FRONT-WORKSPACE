var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn.line--1');
var lineTwo = document.querySelector('nav .menu-btn.line--2');
var lineTwo = document.querySelector('nav .menu-btn.line--3');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    listThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');

})
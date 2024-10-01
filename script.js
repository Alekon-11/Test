'use strict';

const btn = document.querySelector('.counter__btn');
const content = document.querySelector('.counter__content');
let count = 0;

btn.addEventListener('click',() => {
    count++;
    content.classList.add('rotateCounter');
    setTimeout(() => {
        content.textContent = count;
    }, 250);
    setTimeout(() => {
        content.classList.remove('rotateCounter');
    }, 500);
})
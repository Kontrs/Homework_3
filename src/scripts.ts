import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));
const divToMove = document.querySelector('.banner__box');
const movingLocation = document.querySelector('.orderboxing');
const initialLocation = document.querySelector('.main');
const divToMove2 = document.querySelector('.header__menu-box');
const initialLocation2 = document.querySelector('.header')

function moveDivBasedOnWindowSize(){
    if(window.innerWidth >=427 && window.innerWidth <=769) {
        movingLocation.appendChild(divToMove);
        initialLocation.appendChild(divToMove2)
     } else {
        initialLocation.appendChild(divToMove);
        initialLocation2.appendChild(divToMove2);
        }
    }

moveDivBasedOnWindowSize()

window.addEventListener('resize', moveDivBasedOnWindowSize)

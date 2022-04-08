import { getResistorOhms } from './resistor.js';


const answer = document.querySelector('.answer');

// console.log(answer);

const color0 = document.querySelector('#color0');

const colors0 = document.querySelectorAll('#color0 .box');

// console.log(colors0);

const colorsArray0 = Array.from(colors0);

console.log(colorsArray0);

colorsArray0.forEach((color) => {
    const band = color.innerText;
    color.addEventListener('click', () => {

        console.log(band);
    });
})
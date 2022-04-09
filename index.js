import { getResistorOhms } from './resistor.js';

let bands = ['red', 'green', 'violet', 'gold'];

const resistor = document.querySelector('.resistor');
const resistorBands = [];
resistorBands[0] = resistor.querySelector('#b0');
resistorBands[1] = resistor.querySelector('#b1');
resistorBands[2] = resistor.querySelector('#b2');
resistorBands[3] = resistor.querySelector('#b3');
// resistorBands.forEach((band, i) => {
//   console.log(band);
// });

const button = document.querySelector('.submit');
const colors = document.querySelector('.colors');

const answer = document.querySelector('.answer');

const band1 = document.querySelector('#color0');
const band2 = document.querySelector('#color1');
const multiplier = document.querySelector('#color2');
const tolerance = document.querySelector('#color3');

const bands1 = Array.from(band1.querySelectorAll('.box'));
const bands2 = Array.from(band2.querySelectorAll('.box'));
const multipliers = Array.from(multiplier.querySelectorAll('.box'));
const tolerances = Array.from(tolerance.querySelectorAll('.box'));

const replaceResistorBands = (pos, color) => {
    const className = resistorBands[pos].className;
    const classes = className.split(' ');
    resistorBands[pos].classList.remove(classes[1]);
    resistorBands[pos].classList.add(color);
};

const replaceColor = (pos, color, element) => {
    const newBands = [...bands];
    newBands[pos] = color;
    // const colorsStr = bands.join();
    // console.log({ colorsStr });
    // element.innerHTML = `Colors: ${colorsStr}`;
    replaceResistorBands(pos, color);
    bands = [...newBands];
    const answerStr = getResistorOhms({
        color1: bands[0],
        color2: bands[1],
        multiplier: bands[2],
        tolerance: bands[3],
    });
    answer.innerHTML = answerStr;
};

bands1.forEach((band) => {
    band.addEventListener('click', (e) => {
        // console.log(`classList  ${e.target.classList}`);
        const classes = `${band.classList}`;
        const select = classes.replace('box ', '');
        // console.log(`select ${select}`);
        replaceColor(0, select, colors);
    });
});

bands2.forEach((band) => {
    band.addEventListener('click', (e) => {
        const classes = `${band.classList}`;
        const select = classes.replace('box ', '');
        replaceColor(1, select, colors);
    });
});

multipliers.forEach((band) => {
    band.addEventListener('click', (e) => {
        const classes = `${band.classList}`;
        const select = classes.replace('box ', '');
        replaceColor(2, select, colors);
    });
});

tolerances.forEach((band) => {
    band.addEventListener('click', (e) => {
        const classes = `${band.classList}`;
        const select = classes.replace('box ', '');
        replaceColor(3, select, colors);
    });
});
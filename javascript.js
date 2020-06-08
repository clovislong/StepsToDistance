let body = document.querySelector('body');
let steps = document.querySelector('h1');
let distance = document.querySelector('h2');
let numSteps = 0;
let numFeet = 0;
let reset = document.querySelector('button');
let settingsButton = document.querySelectorAll('button')[1];
let doneButton = document.querySelectorAll('button')[2];
let settingsCard = document.querySelector('.settings');
let multiplier = 1.5;
let app = document.querySelector('section');

let tick = new Audio('tick.mp3');
const checkbox = document.querySelector("input[type='checkbox']");

body.addEventListener('click', function() {
	if (checkbox.checked) {
		tick.play();
	}
	numSteps++;
	steps.innerText = numSteps;
	distance.innerText = Math.floor(numSteps * multiplier);
});
reset.addEventListener('click', function() {
	numSteps = 0;
	numSteps--;
	steps.innerText = numSteps;
	distance.innerText = 0;
});
settingsButton.addEventListener('click', function() {
	numSteps -= 1;
	settingsCard.classList.toggle('hidden');
	app.classList.toggle('hidden');
});

settingsCard.addEventListener('click', function() {
	numSteps -= 1;
});

doneButton.addEventListener('click', function() {
	settingsCard.classList.toggle('hidden');
	app.classList.toggle('hidden');
	let stepsPer100 = document.querySelector('.stepsPer100');
	if (stepsPer100.value) {
		multiplier = 100 / stepsPer100.value;
	}
});

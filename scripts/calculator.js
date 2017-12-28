'use strict';

//----------------------- Retrieve DOM Elements -----------------------------//
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const clearButton = document.getElementById('clearScreen');
const display = document.getElementsByClassName('screen')[0];

// --------------------Event Listeners--------------------------------//
//Assumption: the 'buttons' do NOT include the Clear Screen "AC" button
//listen for clicks and update internal array and client display
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const characterInputted = e.target.innerHTML;

    calculator.updateDisplayArray(characterInputted);
    updateDisplay(characterInputted);
  });
});

clearButton.addEventListener('click', e => {
  calculator.clearScreen();
});


//---------------------- Calculator Object ------------------------------//

const calculator = {
  displayArray: [],
  clearScreen: function() {
    calculator.displayArray.length = 0;
    display.innerHTMl = '';
  },
  updateDisplayArray: function(characterInputted) {
    this.displayArray.push(characterInputted);
  }
};


function updateDisplay(characterInputted) {
  display.innerHTML = calculator.displayArray.join('');
}

// ----------------------Calculator functionality --------------------------//
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x*y;
}

function divide(x, y) {
  return x/y;
}

function operate(operator, x, y) {
  switch (operator) {
    case 'add':
      return add(x, y);
      break;
    case 'subtract':
      return subtract(x, y);
      break;
    case 'multiply':
      return multiply(x, y);
      break;
    case 'divide':
      return divide(x, y);
      break;
  }
}

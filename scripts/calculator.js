'use strict';
/*

Data Structure: Calculator Object
calculator: {
  userInput
}

Pseudo code for calculator logic:
1. Listen to button clicks -> on click add the value of the button click
    to the dipslay -> store the value into storage (input array)
      **accept no more than 26 character inputs for one number
2. Listen for button cliks that are operations (+/-/div/x) -> on click of
    these buttons -> move number currently in storage into another location (second Num)
    -> clear the display and listen for more inputs
3. Listen for more button clicks (same as step 1)
4. Once equal sign is clicked (OR one of the other four operations are clicked) ->
    take the two numbers in storage

*/

//----------------------- Retrieve DOM Elements -----------------------------//
const buttons = Array.from(document.querySelectorAll('.button:not(.clearScreen)'));
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

buttons.forEach(button => (
  button.addEventListener('mousedown', function(e) {
    animateButtonPress(e);
  })
));

buttons.forEach(button => (
  button.addEventListener('mouseup', function(e) {
    animateButtonRelease(e);
  })
));

buttons.forEach(button => (
  button.addEventListener('mouseleave', function(e) {
    handleMouseLeave(e);
  })
));

buttons.forEach(button => (
  button.addEventListener('mouseenter', function(e) {
    handleMouseEnter(e);
  })
));

function animateButtonPress(event) {
  const buttonPressed = event.target;
  buttonPressed.setAttribute('style', 'box-shadow: 0px 0px;');
}

function animateButtonRelease(e) {
  const buttonPressed = event.target;
  buttonPressed.setAttribute('style', 'box-shadow: 2px 4px #6b54d3')
}

function handleMouseLeave(e) {
  const buttonPressed = event.target;
  buttonPressed.setAttribute('style','box-shadow: 2px 4px rgba(0, 0, 0, 0.2);')
}

function handleMouseEnter(e) {
  const buttonPressed = event.target;
  buttonPressed.setAttribute('style','box-shadow: 2px 4px #6b54d3')
}

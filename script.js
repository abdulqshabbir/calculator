const buttons = Array.from(document.querySelectorAll('.button'));

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
  console.log(event.target);
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

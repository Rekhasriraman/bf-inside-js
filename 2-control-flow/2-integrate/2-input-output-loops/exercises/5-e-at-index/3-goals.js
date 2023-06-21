'use strict';

let validInput = '';

let index = 0;
let isValid = false;
while (!isValid) {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`,
  );

  /* -- BEGIN: validate input -- */
  // make sure the user 
if (userInput === '' || userInput === null) {
  alert ('enter something');
  continue;
}
if (userInput.length < index) {
  alert ('too short');
  continue;
}
if (userInput[index - 1] === 'e' || userInput[index - 1] === 'E') {
  validInput = userInput;
  isValid = true;
}else {
  alert ('input has no "e" or "E" as the ' + index + 'th character')
}

  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');

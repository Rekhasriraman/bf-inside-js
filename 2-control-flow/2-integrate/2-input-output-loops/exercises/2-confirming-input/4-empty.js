'use strict';

let userInput = null;
let isName = false;

while (!isName) {
  userInput = prompt('Enter your name');

  if (userInput === null || userInput === '') {
    alert('Input your name, please');
    continue;
  }

  const confirmName = `${userInput} this is your name`;
  let isConfirm = confirm(confirmName);

  if (isConfirm) {
    isName = true;
  }
}

alert(`Your name ${userInput}`);
import { readString, display } from '../../../lib/dom-io.js';

import reverseString from './utils/reverse-string-function.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userInput = readString('user-text');

  // use a for loop that counts down (i--) to reverse the input
  let output = reverseString(userInput);

  // display the reversed string
  display('reversed-output', output);
});
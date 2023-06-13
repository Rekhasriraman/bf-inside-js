import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
  let text = readString('user-text');

  // use a for loop that counts down (i--) to reverse the input
  /* let output = '';
  for (let i = text.length - 1; i >= 0; i--) {
    output += text[i];
  }*/

  let output = '';
  for (let i = 0; i > text.length; i++) {
    output = text[i] + output;
  }

  // display the reversed string
  display('reversed-output', output);
});

import { readNumber, readString, display } from '../../../lib/dom-io.js';

import repeatString from './utils/repeat-string-function.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const userText = readString('user-text');
  const repetition = readNumber('number-of-times');

  // repeat the string
  let output = repeatString(userText, repetition);

  // display the repeated string
  display('repeated-output', output);
});
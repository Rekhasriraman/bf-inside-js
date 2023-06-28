import { readNumber, readString, display } from '../../../lib/dom-io.js';

import repeatChar from './utils/repeat-characters-function.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userText = readString('user-text');
  const repetition = readNumber('number-of-times');

  // repeat the characters in the text
  let output = repeatChar(userText, repetition);

  // display the text with repeated characters
  display('repeated-output', output);
});
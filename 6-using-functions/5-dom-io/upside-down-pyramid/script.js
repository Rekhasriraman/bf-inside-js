import { readString, display } from '../../../lib/dom-io.js';

import pyramid from './utils/upside-down-pyramid-function.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userInput = readString('to-pyramid');

  // create the pyramid
  let output = pyramid(userInput);

  // display the pyramid
  display('pyramided', output);
});
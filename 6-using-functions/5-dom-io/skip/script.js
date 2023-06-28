import { readNumber, readString, display } from '../../../lib/dom-io.js';

import skip from './utils/skip-function.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  const skipNumber = readNumber('skip-size');
  const userInput = readString('user-text');

  // create a new string with skipped characters
  let output = skip(userInput, skipNumber);

  // display the skipped string
  display('skipped-output', output);
});
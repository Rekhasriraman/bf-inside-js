import { readNumber, display } from '../../../lib/dom-io.js';

import multiplication from './utils/multiplication-function.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  const firstNumber = readNumber('left');
  const secondNumber = readNumber('right');

  // use a function to multiply
  const output = multiplication(firstNumber, secondNumber);

  // display the product
  display('product', output);
});
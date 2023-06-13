import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  const leftNum = readNumber('left');
  const rightNum = readNumber('right');

  // multiply the two numbers

  const multiply = leftNum * rightNum;
  console.log(multiply);

  // display the product
  display('product', multiply);
});

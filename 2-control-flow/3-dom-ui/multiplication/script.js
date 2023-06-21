import { readNumber, display } from '../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  let leftNum = readNumber('left');
  let rightNum = readNumber('right');

  // multiply the two numbers
  let result = leftNum * rightNum;
  console.log(result);
  // display the product
  display('product', result);
});

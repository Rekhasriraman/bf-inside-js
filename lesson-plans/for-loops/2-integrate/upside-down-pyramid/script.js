import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  let text = readString('to-pyramid');

  // create the pyramid
 let output = '';
  let pyramid = '';

  for (let i = 0; i < text.length; i++) {
    for (let j = i; j < text.length; j++) {
      pyramid += text[j];
    }
    
    output += pyramid + '\n';
    pyramid = '';
  }

  // display the pyramid
  display('pyramided', output);
});
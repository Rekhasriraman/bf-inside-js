import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  let text = readString('user-text');
  let skipChar = readNumber('skip-size');

  // create a new string with skipped characters
  let output = '';
  for (let i = 0; i < text.length; i += skipChar) {
    output += text[i];
  }

  // display the skipped string
  display('skipped-output', output);
});

import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const text = readString('user-text');
  const numberOfRepetation = readNumber('number-of-times');

  // repeat the characters in the text
  let newString = '';
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < numberOfRepetation; j++) {
      newString += text[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', newString);
});

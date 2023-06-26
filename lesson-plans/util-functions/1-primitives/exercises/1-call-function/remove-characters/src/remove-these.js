import { readString, display } from '../../../../../../../lib/dom-io.js';

import { removeCharacters } from './utils/remove-characters.js';

const removeThese = () => {
  debugger;

  // --- read user input ---
  const userText = readString('user-text');
  const removeThese = readString('to-remove');

  // remove all the user's characters from the input

  const finalText = removeCharacters(userText, removeThese);

  // --- display the input with no consonants ---
  display('removified', finalText);
};

document.getElementById('these').addEventListener('click', removeThese);

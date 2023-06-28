/**
 * Shifts the characters in a given text by a specified amount.
 * 
 * @param {string} text - The text to be encoded.
 * @param {number} shift - The amount by which the characters should be shifted. Defaults to 0 if not provided.
 * @returns {string} - The encoded string where each character is shifted by the specified amount.
 */
export const shiftCharacters = (text = '', shift = 0) => {
  let newText = '';

  if (shift === 0) {
    return text;
  }

  for (const char of text) {
    const charCode = char.charCodeAt();
    const newCharCode = charCode + shift;
    const newChar = String.fromCharCode(newCharCode);
    newText += newChar;
  }

  return newText;
};
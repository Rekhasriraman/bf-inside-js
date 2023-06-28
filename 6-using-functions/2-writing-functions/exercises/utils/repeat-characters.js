/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {string} [str=''] - A string to repeat each character.
 * @param {number} [repeatations=1] - How many times to repeat each character.
 * @returns {string} The original text with each character repeated.
 */
export const repeatCharacters = (str = '', repeatations = 1) => {
  let newStr = '';
  for (const char of str) {
    newStr += char.repeat(repeatations);
  }

  return newStr;
};
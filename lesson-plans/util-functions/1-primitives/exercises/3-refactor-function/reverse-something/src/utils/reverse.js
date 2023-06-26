/**
 * Reverses a string.
 *
 * @param {string} text - The string to reverse.
 * @returns {string} The original string, backwards.
 */
export const reverse = (str) => {
  return str.split('').reverse().join('');
};
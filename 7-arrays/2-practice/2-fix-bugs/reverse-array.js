/**
 * Reverse an array
 *
 * @param {any[]} [arr=[]] - the array to reverse
 * @returns {any[]} the reversed arr
 */
export const reverseArray = (arr = []) => {
  const backwards = [...arr].reverse();
  return backwards;
};
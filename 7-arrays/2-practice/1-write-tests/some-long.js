/**
 * check if an array of a sting has at least one item long
 *
 * @param {string[]} [strings=[]] - the array of strings to check
 * @param {number} [lomg=5] - the value to check if a sting is long or not
 * @retuns {boolean} - if the array has at least one string long
 */
export const someLong = (strings = [], long = 5) => {
  let someAreLong = false;
  for (const string of strings) {
    if (string.length >= long) {
      someAreLong = true;
      break;
    }
  }
  return someAreLong;
};

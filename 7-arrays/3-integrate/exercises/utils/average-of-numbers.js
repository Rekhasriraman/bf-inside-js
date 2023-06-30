/**
 * get the average of array of numbers
 * @param {number[]} [arr=[]] - an array of number
 * @returns {number} the average of all number items in the arr
 */

export const average = (arr) => {
  let sum = 0;
  const length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / length;
};
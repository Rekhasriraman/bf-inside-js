/**
 *  remove charchters from a string
 * @param {string} toFilter- the text to remove from
 * @param {string} removeThese - the charachters to remove
 * @returns {string} the filtered string
 */
export const filter = (toFilter, removeThese) => {
  if (!removeThese) {
    return toFilter;
  }
  let filteredString = '';
  for (const char of toFilter) {
    if (removeThese.toLowerCase().indexOf(char.toLowerCase()) === -1) {
      filteredString += char;
    }
  }

  return filteredString;
};
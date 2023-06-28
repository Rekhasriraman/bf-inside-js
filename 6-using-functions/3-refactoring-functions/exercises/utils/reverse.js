/**
 *
 */
export const reverse = (text = '') => {
  text = text.split('').reverse().join('');
  return text;
};

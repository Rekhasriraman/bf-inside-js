import { average } from './average-of-numbers.js';

describe('get the average of arrays of numbers', () => {
  it('retun NaN if array is empty', () => {
    const returned = average([]);
    expect(returned).toEqual(NaN);
  });
  it('positve numbers', () => {
    const returned = average([2, 3, 4]);
    expect(returned).toEqual(3);
  });
  it('negative numbers', () => {
    const returned = average([-1.5, -2, -20]);
    expect(returned).toEqual(-7.833333333333333);
  });
  it('mixed numbers ', () => {
    const returned = average([-10, -2, 5, 3]);
    expect(returned).toEqual(-1);
  });
});
import { keepLongStrings } from './keep-long-strings.js';

describe('filter array of strings and keep only the long string', () => {
  it('with only long string', () => {
    const actual = keepLongStrings(['fruits', 'banana', 'orange'], 3);
    const expected = ['fruits', 'banana', 'orange'];
    expect(actual).toEqual(expected);
  });
  it('with one item long string', () => {
    const actual = keepLongStrings(['hi', '1', 'january'], 3);
    const expected = ['january'];
    expect(actual).toEqual(expected);
  });
  it('empty string', () => {
    const actual = keepLongStrings(['']);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

import {nextBigger} from './challenge';

describe('#nextBigger', () => {
  test('returns -1 if the number can not be rearranged', () => {
    expect(nextBigger(22)).toEqual(-1);
  });
});

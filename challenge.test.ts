import { trap } from './challenge';

describe('#isValidSet', () => {
  test('returns true if every property is the same', () => {
    expect(trap([1,0,1])).toEqual(1);
  });
});

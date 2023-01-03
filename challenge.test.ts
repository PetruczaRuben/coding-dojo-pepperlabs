import {extractRanges} from './challenge';

describe('#extractRanges', () => {
  test('test', () => {
    expect(extractRanges([1, 2, 3, 5])).toEqual('test');
  });
});

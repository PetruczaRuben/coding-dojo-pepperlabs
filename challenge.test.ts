import {twoSum} from './challenge';

describe('#twoSum', () => {
  test('returns the only possible solution in case of two-element array', () => {
    expect(twoSum([0, 0], 0).sort()).toEqual([0, 1]);

    const numbers = [0, 0];
    const target = 0;
    const solution = twoSum(numbers, target);
    expect(solution.reduce((sum, index) => sum + numbers[index]!, 0)).toEqual(target);
  });

  test('works for three-element array', () => {
    expect(twoSum([0, 1, 2], 3).sort()).toEqual([1, 2]);
  });

  test('works for four-element array', () => {
    expect(twoSum([0, 1, 2, 3], 5).sort()).toEqual([2, 3]);
  });

  test('works for every four element array', () => {
    expect(twoSum([0, 1, 2, 3], 3).sort()).toEqual([1, 2]);
  });

  test.skip("doesn't use the same element twice and it's still gives a valid solution", () => {
    const numbers = [0, 1, 0];
    const target = 0;
    const solution = twoSum(numbers, target);
    expect(solution.reduce((sum, index) => sum + numbers[index]!, 0)).toEqual(target);

    expect(solution.sort()).not.toEqual([0, 0]);
  });
});

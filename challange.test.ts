import { sum } from './challange';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('adds 5 + 12 to equal 17', () => {
    expect(sum(5, 12)).toBe(17);
});
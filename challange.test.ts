import { parenthesesValidator } from './challange';

test('return hardcoded true', () => {
    expect(parenthesesValidator('')).toBe(true);
});
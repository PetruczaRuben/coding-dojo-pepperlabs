import { rot13 } from './challange';

describe('rot13', () => {
    test.each([
        { input: 'test', cipher: 'grfg' }
    ])('"$input" should return $isValid', ({ input, cipher}) => {
        expect(rot13(input)).toBe(cipher);
    });
});




















//
// // FINAL TESTS
// test('return hardcoded true', () => {
//     expect(parenthesesValidator("()")).toBe(true);
// });
// test('return hardcoded true', () => {
//     expect(parenthesesValidator(")([])]")).toBe(false);
// });
// test('return hardcoded true', () => {
//     expect(parenthesesValidator("]")).toBe(false);
// });
// test('return hardcoded true', () => {
//     expect(parenthesesValidator("(]")).toBe(false);
// });
// test('return hardcoded true', () => {
//     expect(parenthesesValidator("[())((()[])()]")).toBe(false);
// });


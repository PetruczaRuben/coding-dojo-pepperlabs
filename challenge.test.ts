import {firstNonRepeatingLetter} from './challenge';

describe('#formatDuration', () => {
    test.each([
      { input: 'stress', letter: 't' }
    ])('returns \'$readableFormat\' for \'$input\' seconds', ({ input, letter}) => {
      expect(firstNonRepeatingLetter(input)).toEqual(letter);
    });
});

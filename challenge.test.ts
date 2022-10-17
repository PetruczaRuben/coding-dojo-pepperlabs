import {formatDuration} from './challenge';

describe('#formatDuration', () => {
    test.each([
      { input: 0, readableFormat: 'now' }
    ])('returns \'$readableFormat\' for \'$input\' seconds', ({ input, readableFormat}) => {
      expect(formatDuration(input)).toEqual(readableFormat);
    });
});

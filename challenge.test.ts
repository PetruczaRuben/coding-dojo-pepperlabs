import {scramble} from './challenge';

describe('rot13', () => {
  test('expect true', () => {
    expect(scramble('pepper', 'labs')).toEqual(true);
  });
});

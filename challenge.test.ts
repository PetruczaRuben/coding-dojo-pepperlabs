import {scramble} from './challange';

describe('rot13', () => {
  test('expect true', () => {
    expect(scramble('pepper', 'labs')).toEqual(true);
  });
});

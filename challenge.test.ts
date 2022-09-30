import {snail, SnailIterator} from './challenge';

describe.skip('snail', () => {
  test('works with 2x2 matrix', () => {
    expect(snail([
      [1, 2],
      [3, 4]
    ])).toEqual([1, 2, 4, 3]);

    expect(snail([
      [2, 3],
      [4, 5]
    ])).toEqual([2, 3, 5, 4]);
  });

  test('works with 3x3 matrix', () => {
    expect(snail([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
});

describe('SnailIterator', () => {
  test('returns the upper left element first', () => {
    const subject = new SnailIterator([
      [1, 2],
      [3, 4]
    ]);

    expect(subject.next()).toEqual(1);
  });

  test('returns the top right element for the second time', () => {
    const subject = new SnailIterator([
      [1, 2],
      [3, 4]
    ]);

    subject.next();
    expect(subject.next()).toEqual(2);
  });

  test('returns the last element of the second array for the third time', () => {
    const subject = new SnailIterator([
      [1, 2],
      [3, 4]
    ]);

    subject.next();
    subject.next();
    expect(subject.next()).toEqual(4);
  });

  test('returns the first element of the second array for the fourth time', () => {
    const subject = new SnailIterator([
      [1, 2],
      [3, 4]
    ]);

    subject.next();
    subject.next();
    subject.next();
    expect(subject.next()).toEqual(3);
  });

  test('returns the last element of the first array for the third time', () => {
    const subject = new SnailIterator([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);

    subject.next();
    subject.next();
    expect(subject.next()).toEqual(3);
  });

  test('returns the first element of the third array for the 7th time', () => {
    const subject = new SnailIterator([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);

    expect(subject.next()).toEqual(1);
    expect(subject.next()).toEqual(2);
    expect(subject.next()).toEqual(3);
    expect(subject.next()).toEqual(6);
    expect(subject.next()).toEqual(9);
    expect(subject.next()).toEqual(8);
    expect(subject.next()).toEqual(7);
    expect(subject.next()).toEqual(4);
  });

  test('returns the middle element of the second array for the 8th time', () => {
    const subject = new SnailIterator([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);

    expect(subject.next()).toEqual(1);
    expect(subject.next()).toEqual(2);
    expect(subject.next()).toEqual(3);
    expect(subject.next()).toEqual(6);
    expect(subject.next()).toEqual(9);
    expect(subject.next()).toEqual(8);
    expect(subject.next()).toEqual(7);
    expect(subject.next()).toEqual(4);
    expect(subject.next()).toEqual(5);
  });
});

/*
Ruben
Sanyo
Balazs
Dobi
Tomi
 */
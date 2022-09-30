export const snail = (matrix: number[][]): number[] => {
  const iter = new SnailIterator(matrix);
  const result: number[] = [];

  while (true) {
    const next = iter.next();
    if (!next) return result;
    result.push(next);
  }
};

export class SnailIterator {
  private readonly size: number;
  private x = -1;
  private y = 0;

  constructor(private readonly matrix: number[][]) {
    this.size = matrix.length - 1;
  }

  next(): number | null {
    if (this.cannotGoLeftAnymore() && !this.cannotGoUpAnymore()) {
      this.stepUp();
    } else if (this.cannotGoDownAnymore()) {
      this.stepLeft();
    } else if (this.cannotGoRightAnymore()) {
      this.stepDown();
    } else if (this.cannotGoUpAnymore()) {
      this.stepRight();
    }

    return this.matrix[this.y][this.x]
  }

  private stepDown() {
    this.y++;
  }

  private stepUp() {
    this.y--;
  }

  private stepRight() {
    this.x++;
  }

  private stepLeft() {
    this.x--;
  }

  private cannotGoRightAnymore() {
    return this.x === this.size;
  }

  private cannotGoDownAnymore() {
    return this.y === this.size;
  }

  private cannotGoLeftAnymore() {
    return this.x === 0;
  }

  private cannotGoUpAnymore() {
    return this.y === 0;
  }
}
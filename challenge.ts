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
  private size: number;
  private x = -1;
  private y = 0;

  constructor(private matrix: number[][]) {
    this.size = matrix.length - 1;
  }

  next(): number | null {
    if (this.areWeDone()) {
      this.shrinkMatrix();
      return this.matrix[this.y][this.x];
    }
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

  private areWeDone() {
    return (this.x === 0 && this.y === 1);
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

  //   . . . . . .
  //   . X X X X .
  //   . X X X X .
  //   . X X X X .
  //   . X X X X .
  //   . . . . . .
  private shrinkMatrix() {
    let newMatrix = this.matrix.slice(1, - 1);
    newMatrix = newMatrix.map(row => row.slice(1, - 1));
    this.matrix = newMatrix;
    this.size = this.matrix.length - 1;
    this.x = 0;
    this.y = 0;
  }
}
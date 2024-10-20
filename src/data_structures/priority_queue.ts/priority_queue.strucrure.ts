export class Heap<T> {
  protected cmpr: (a: T, b: T) => boolean;
  private data: T[] = [];

  constructor(comparator?: (a: T, b: T) => boolean) {
    this.cmpr = comparator ?? ((a: T, b: T) => a > b);
  }

  private swap = (i: number, j: number): void => {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }

  private parent = (index: number): number => {
    return Math.floor((index - 1) / 2);
  }

  private left = (index: number): number => {
    return 2 * index + 1;
  }

  private right = (index: number): number => {
    return 2 * index + 2;
  }

  private heapifyUp(index: number): void {
    let curr = index;

    const cmpr = this.cmpr;
    const parent = this.parent;
    const swap = this.swap;

    const data = this.data;

    while (curr > 0 && cmpr(data[curr], data[parent(curr)])) {
      const parentIx = parent(curr);
      swap(curr, parentIx);
      curr = parentIx;
    }
  }

  private heapifyDown(index: number): void {
    let curr = index;

    const data = this.data;

    const swap = this.swap;
    const left = this.left;
    const right = this.right;
    const cmpr = this.cmpr;
    
    while (left(curr) < data.length) {
      let child = left(curr);

      if (
        right(curr) < data.length && 
        cmpr(data[right(curr)], data[child])
      ) {
        child = right(curr);
      }
      if (cmpr(data[curr], data[child])) {
        break;
      }
      swap(curr, child);
      curr = child;
    }
  }

  public pushMany(arr: T[]): void {
    for (const elem of arr) {
      this.push(elem);
    }
  }

  public push(value: T): void {
    this.data.push(value);
    this.heapifyUp(this.data.length - 1);
  }

  public pop(): T | null {
    if (this.data.length === 0) {
      return null;
    }
    const root = this.data[0];
    const last = this.data.pop();

    if (last !== undefined) {
      this.data[0] = last;
      this.heapifyDown(0);
    }
    return root;
  }

  public top(): T | undefined {
    return this.data.length === 0 ? undefined : this.data[0];
  }

  public size(): number {
    return this.data.length;
  }
}

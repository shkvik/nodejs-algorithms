export abstract class IPriorityQueue<T> {
  protected cmpr: (a: T, b: T) => boolean;
  
  constructor(comparator?: (a: T, b: T) => boolean) {
    this.cmpr = comparator ?? null;
  };
  
  abstract push(value: T): void;
  abstract pop(): T | undefined;
  abstract top(): T | undefined;
  abstract size(): number;
}
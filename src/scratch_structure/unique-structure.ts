export class UniqueStructure<E> {

  private elementCount: Map<E, number>;
  private uniqueElements: Set<E>;

  constructor() {
    this.elementCount = new Map<E, number>();
    this.uniqueElements = new Set<E>();
  }

  public add(element: E) {
    const count = this.elementCount.get(element) || 0;
    this.elementCount.set(element, count + 1);

    if (count === 0) {
      this.uniqueElements.add(element);
    } else {
      this.uniqueElements.delete(element);
    }
  }

  public delete(element: E) {
    const count = this.elementCount.get(element);

    if (count === 1) {
      this.elementCount.delete(element);
      this.uniqueElements.delete(element);
    } else {
      this.elementCount.set(element, count - 1);
      if (count === 2) {
        this.uniqueElements.add(element);
      }
    }
  }

  public getUnique() {
    const uniqueIterator = this.elementCount.keys();
    const firstUnique = uniqueIterator.next().value;

    return firstUnique ? firstUnique : null;
  }
}
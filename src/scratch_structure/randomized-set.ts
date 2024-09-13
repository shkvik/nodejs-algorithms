class RandomizedSet {
  private map: Map<number, number>;
  private values: number[];

  constructor() {
    this.map = new Map();
    this.values = [];
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }
    this.map.set(val, this.values.length);
    this.values.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) {
      return false;
    }
    const idx = this.map.get(val)!;
    const lastVal = this.values[this.values.length - 1];

    // Меняем местами удаляемый элемент с последним
    this.values[idx] = lastVal;
    this.map.set(lastVal, idx);

    // Удаляем последний элемент
    this.values.pop();
    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.values.length);
    return this.values[randomIndex];
  }
}

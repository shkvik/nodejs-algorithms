class ZigzagIterator {
  private queues: number[][];
  private currentQueue: number;

  constructor(v1: number[], v2: number[]) {
    this.queues = [];
    if (v1.length > 0) this.queues.push(v1);
    if (v2.length > 0) this.queues.push(v2);
    this.currentQueue = 0;
  }

  next(): number {
    if (!this.hasNext()) {
      throw new Error("No more elements");
    }

    const queue = this.queues[this.currentQueue];
    const value = queue.shift()!; // Извлекаем первый элемент из текущей очереди

    // Если очередь не пуста после извлечения, перемещаемся к следующей
    if (queue.length === 0) {
      this.queues.splice(this.currentQueue, 1);
      if (this.currentQueue >= this.queues.length) {
        this.currentQueue = 0;
      }
    } else {
      this.currentQueue = (this.currentQueue + 1) % this.queues.length;
    }

    return value;
  }

  hasNext(): boolean {
    return this.queues.length > 0;
  }
}
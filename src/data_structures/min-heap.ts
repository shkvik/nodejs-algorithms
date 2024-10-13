/**
 * MinHeap (минимальная куча) — это структура данных, которая позволяет быстро находить
 * минимальный элемент в наборе данных. В MinHeap корневой узел всегда содержит минимальное 
 * значение, а каждый родительский узел меньше или равен своим дочерним узлам.
 */
class MinHeap<T> {

  public heap: Array<T>;

  constructor() {
    this.heap = [];
  }

  public enqueue(value: T): void {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  public dequeue(): T | undefined {
    [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
    const min = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  public size(): number {
    return this.heap.length;
  }

  public front(): T | undefined {
    return this.heap[0];
  }

  private heapifyUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index][0] < this.heap[parentIndex][0]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  private heapifyDown(index: number): void {
    while (index < this.heap.length) {
      const left = (index * 2) + 1;
      const right = (index * 2) + 2;
      let smallest = index;
      if (this.heap[left] && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }
      if (this.heap[right] && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }
      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      } else {
        break;
      }
    }
  }
}
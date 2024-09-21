class MyQueue {
  private stackIn: number[];
  private stackOut: number[];

  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  enqueue(x: number): void {
    this.stackIn.push(x);
  }

  dequeue(): number | null {
    if (this.isEmpty()) return null;
    this.moveInToOut();
    return this.stackOut.pop() ?? null;
  }

  front(): number | null {
    if (this.isEmpty()) return null;
    this.moveInToOut();
    return this.stackOut[this.stackOut.length - 1] ?? null;
  }

  isEmpty(): boolean {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
  }

  private moveInToOut(): void {
    if (this.stackOut.length === 0) {
      while (this.stackIn.length > 0) {
        this.stackOut.push(this.stackIn.pop()!);
      }
    }
  }
}

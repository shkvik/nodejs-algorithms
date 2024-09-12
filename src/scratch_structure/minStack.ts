class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const removed = this.stack.pop();
    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}


export function testMinStack() {
  const commands = ['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'top', 'getMin'];
  const values = [[], [-2], [0], [-3], [], [], [], []];
  const expected = [null, null, null, null, -3, null, 0, -2];

  const stack = new MinStack();
  const results = commands.map((command, index) => {
    if (command === 'push') {
      stack.push(values[index][0]);
      return null;
    } else if (command === 'pop') {
      stack.pop();
      return null;
    } else if (command === 'top') {
      return stack.top();
    } else if (command === 'getMin') {
      return stack.getMin();
    }
  });

  console.log(results);
}
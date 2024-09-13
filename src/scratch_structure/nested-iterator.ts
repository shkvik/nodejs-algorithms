class NestedInteger {
  private value: number | NestedInteger[] | null;

  constructor(value: number | NestedInteger[] | null = null) {
    this.value = value;
  }

  isInteger(): boolean {
    return typeof this.value === 'number';
  }

  getInteger(): number | null {
    return this.isInteger() ? (this.value as number) : null;
  }

  getList(): NestedInteger[] {
    return !this.isInteger() ? (this.value as NestedInteger[]) : [];
  }
}


class NestedIterator {
  private stack: NestedInteger[] = [];

  constructor(nestedList: NestedInteger[]) {
    this.stack = [...nestedList.reverse()];
  }

  hasNext(): boolean {
    while (this.stack.length > 0) {
      const top = this.stack[this.stack.length - 1];
      if (top.isInteger()) {
        return true;
      } else {
        this.stack.pop();
        this.stack.push(...top.getList().reverse());
      }
    }
    return false;
  }

  next(): number {
    return this.stack.pop()!.getInteger()!;
  }
}


function testNestedIterator() {
  // Пример 1: [1, [4, [6]]]
  const nestedList1 = [
    new NestedInteger(1),
    new NestedInteger([
      new NestedInteger(4),
      new NestedInteger([
        new NestedInteger(6)
      ])
    ])
  ];

  const iterator1 = new NestedIterator(nestedList1);
  const result1: number[] = [];
  while (iterator1.hasNext()) {
    result1.push(iterator1.next());
  }
  console.log(result1); // Ожидаемый результат: [1, 4, 6]

  // Пример 2: [[1, 1], 2, [1, 1]]
  const nestedList2 = [
    new NestedInteger([
      new NestedInteger(1),
      new NestedInteger(1)
    ]),
    new NestedInteger(2),
    new NestedInteger([
      new NestedInteger(1),
      new NestedInteger(1)
    ])
  ];

  const iterator2 = new NestedIterator(nestedList2);
  const result2: number[] = [];
  while (iterator2.hasNext()) {
    result2.push(iterator2.next());
  }
  console.log(result2); // Ожидаемый результат: [1, 1, 2, 1, 1]
}

// Запуск тестов
testNestedIterator();
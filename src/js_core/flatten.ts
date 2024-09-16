function flat(arr: any[], depth: number): any[] {
  const result: any[] = [];

  const flattenHelper = (subArray: any[], currentDepth: number) => {
    for (const el of subArray) {
      if (Array.isArray(el) && currentDepth < depth) {
        flattenHelper(el, currentDepth + 1);
      } else {
        result.push(el);
      }
    }
  }
  flattenHelper(arr, 0);
  return result;
}

export function flatDBG() {
  const tests = [
    {
      input: { arr: [1, [2, [3, [4]], 5]], n: 1 },
      result: [1, 2, [3, [4]], 5] // Сплющено до глубины 1
    },
    {
      input: { arr: [1, [2, [3, [4]], 5]], n: 2 },
      result: [1, 2, 3, [4], 5] // Сплющено до глубины 2
    },
    {
      input: { arr: [1, [2, [3, [4]], 5]], n: 3 },
      result: [1, 2, 3, 4, 5] // Сплющено до глубины 3
    }
  ];

  tests.forEach((test, index) => {
    const result = flat(test.input.arr, test.input.n);
    const success = JSON.stringify(result) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}


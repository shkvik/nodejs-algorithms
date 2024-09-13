function isReflected(points: number[][]): boolean {
  const pointSet = new Set<string>();
  let minX = Infinity;
  let maxX = -Infinity;

  for (const [x, y] of points) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    pointSet.add(`${x},${y}`);
  }

  const midX = (minX + maxX) / 2;

  for (const [x, y] of points) {
    const reflectedX = 2 * midX - x;
    if (!pointSet.has(`${reflectedX},${y}`)) {
      return false;
    }
  }

  return true;
}

export function isReflectedDBG(){
  const tests = [
    {
      input: [[1, 1], [-1, 1]],
      result: true
    },
    {
      input: [[1, 1], [-1, -1]],
      result: false
    }
  ];
  
  tests.forEach((test, index) => {
    const result = isReflected(test.input);
    const success = result === test.result;
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}
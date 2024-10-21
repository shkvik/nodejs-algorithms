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
  const cmpr = midX * 2;

  for (const [x, y] of points) {
    const reflectedX = cmpr - x;
    if (!pointSet.has(`${reflectedX},${y}`)) {
      return false;
    }
  }

  return true;
}

export function isReflectedDBG() {
  const tests = [
    {
      // Ожидаемый результат: false
      // Нет симметрии, так как точка (-2, 1) не имеет "зеркальной" пары
      input: [[1, 1], [-2, 1], [1, -1], [-1, -1]],
      result: false
    },
    {
      // Ожидаемый результат: true
      // Точки симметричны относительно оси X = 0
      input: [[1, 1], [-1, 1], [1, -1], [-1, -1]],
      result: true
    },
    {
      input: [[1, 1], [-1, 1]],
      result: true
    },
    {
      input: [[1, 1], [-1, -1]],
      result: false
    },
    {
      // Ожидаемый результат: true
      // Точки симметричны относительно оси X = 0, включая точку на самой оси
      input: [[1, 2], [-1, 2], [1, 3], [-1, 3], [0, 4]],
      result: true
    },
    
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
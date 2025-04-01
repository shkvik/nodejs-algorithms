function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  for (const val of asteroids) {
    let isAlive: boolean = true;

    while (stack.length > 0 && stack[stack.length - 1] > 0 && val < 0 && isAlive) {
      const head = stack[stack.length - 1];
      if (Math.abs(val) > head) {
        stack.pop();
      }
      if (Math.abs(val) === head) {
        stack.pop();
        isAlive = false;
      }
      if (Math.abs(val) < head) {
        isAlive = false;
      }
    }
    if (isAlive) {
      stack.push(val);
    }
  }
  return stack;
};

export function checkAsteroidCollisionDBG() {
  const tests = [
    {
      input: [5, 10, -5],
      result: [5, 10]
    },
    {
      input: [8, -8],
      result: []
    },
    {
      input: [10, 2, -5],
      result: [10]
    },
    {
      input: [-2, -1, 1, 2],
      result: [-2, -1, 1, 2]
    },
    {
      input: [1, -1, -2, 2],
      result: [-2, 2]
    },
    {
      input: [1, 2, 3, -3, -2, -1],
      result: []
    }
  ];

  tests.forEach((test, index) => {
    const result = asteroidCollision(test.input);
    const success = JSON.stringify(result) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(result)}`);
    }
  });
}

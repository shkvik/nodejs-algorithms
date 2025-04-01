function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  for (let i = 0; i < asteroids.length; i++) {
    let remain = asteroids[i]
    while (stack.length > 0 && remain < 0 && stack[stack.length - 1] > 0) {
      const asteroid = stack.pop()
      if (asteroid + remain === 0) {
        remain = 0;
      } else {
        remain = asteroid + remain > 0 ? asteroid : remain
      }
    }
    if (remain) {
      stack.push(remain)
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

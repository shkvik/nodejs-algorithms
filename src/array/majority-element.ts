function majorityElement(nums: number[]): number {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }
  return candidate!;
}

export function majorityElementDBG() {
  const tests = [
    {
      input: [3, 2, 3],
      result: 3
    },
    {
      input: [1, 2, 2, 1, 1, 2, 2],
      result: 2
    }
  ];

  tests.forEach((test, index) => {
    const result = majorityElement(test.input);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}
function minEatingSpeed(piles: number[], h: number): number {
  const timeToEat = (k: number) => {
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / k);
    }
    return hours
  }
  let l = 1, r = Math.max(...piles) - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const time = timeToEat(mid);
    if (time <= h) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};


export function minEatingSpeedDBG() {
  const tests = [
    {
      input: { piles: [3, 6, 7, 11], h: 8 },
      expected: 4 // Минимальная скорость 4 банана в час
    },
    {
      input: { piles: [30, 11, 23, 4, 20], h: 5 },
      expected: 30 // Минимальная скорость 30 бананов в час
    },
    {
      input: { piles: [30, 11, 23, 4, 20], h: 6 },
      expected: 23 // Минимальная скорость 23 банана в час
    }
  ];

  tests.forEach((testCase, index) => {
    const result = minEatingSpeed(testCase.input.piles, testCase.input.h);
    const success = result === testCase.expected;
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected: ${testCase.expected}`);
      console.log(`got: ${result}`);
    }
  });

}
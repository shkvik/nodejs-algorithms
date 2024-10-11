function mergeIntervals(intervals: [number, number][]): [number, number][] {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result: [number, number][] = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (currentInterval[1] >= intervals[i][0]) {
      currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
    } else {
      result.push(currentInterval);
      currentInterval = intervals[i];
    }
  }
  result.push(currentInterval);
  return result;
}

export function mergeDBG() {
  const tests = [
    {
      input: [[1, 3], [2, 6], [8, 10], [15, 18]],
      result: [[1, 6], [8, 10], [15, 18]]
    },
    {
      input: [[1, 4], [4, 5]],
      result: [[1, 5]]
    },
    {
      input: [[1, 4], [2, 3]],
      result: [[1, 4]]
    }
  ];

  tests.forEach((test, index) => {
    const intr: [number, number][] = [[1,2]];

    const result = mergeIntervals(test.input as [number, number][]);

    const success = JSON.stringify(result.sort()) === JSON.stringify(test.result.sort());
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(result)}`);
    }
  });
}



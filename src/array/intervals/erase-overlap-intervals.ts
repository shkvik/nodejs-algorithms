function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      count++;
    } else {
      prevEnd = intervals[i][1];
    }
  }
  return count;
}

export function eraseOverlapIntervalsDBG() {
  const tests = [
    {
      input: [[1, 2], [2, 3], [3, 4], [1, 3]],
      expected: 1 // Удаляем [1, 3], чтобы интервалы не пересекались
    },
    {
      input: [[1, 2], [1, 2], [1, 2]],
      expected: 2 // Нужно удалить 2 интервала
    },
    {
      input: [[1, 2], [2, 3]],
      expected: 0 // Интервалы не пересекаются
    }
  ];

  tests.forEach((testCase, index) => {
    const result = eraseOverlapIntervals(testCase.input);
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
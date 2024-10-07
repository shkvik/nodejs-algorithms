function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  let i = 0;
  const n = intervals.length;

  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  while (i < n) {
    result.push(intervals[i]);
    i++;
  }
  return result;
};


export function insertDBG() {
  const tests = [
    {
      input: { intervals: [[1, 3], [6, 9]], newInterval: [2, 5] },
      expected: [[1, 5], [6, 9]] // Новый интервал перекрывает первый интервал, нужно объединить их.
    },
    {
      input: { intervals: [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval: [4, 8] },
      expected: [[1, 2], [3, 10], [12, 16]] // Новый интервал перекрывает три существующих интервала, нужно объединить.
    },
    {
      input: { intervals: [], newInterval: [5, 7] },
      expected: [[5, 7]] // Пустой список интервалов, добавляем новый интервал.
    },
    {
      input: { intervals: [[1, 5]], newInterval: [2, 3] },
      expected: [[1, 5]] // Новый интервал полностью содержится в первом интервале, ничего не изменяется.
    }
  ];

  tests.forEach((testCase, index) => {
    const result = insert(testCase.input.intervals, testCase.input.newInterval);
    const success = JSON.stringify(result) === JSON.stringify(testCase.expected);
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected: ${testCase.expected}`);
      console.log(`got: ${result}`);
    }
  });
}
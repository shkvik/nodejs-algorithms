/**
 * @problem [1288. Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals)
 * 
 * ### Как решается
 * Задачу можно решить, обрабатывая каждый интервал и проверяя его пересечение 
 * с интервалом toBeRemoved. Для каждого интервала возможны три случая: 
 * 1. Интервал полностью лежит вне toBeRemoved: В этом случае интервал остается неизменным.
 * 2. Интервал полностью лежит внутри toBeRemoved: В этом случае интервал удаляется.
 * 3. Интервал частично пересекается с toBeRemoved: В этом случае мы разделяем интервал на 
 * две части — до и после пересечения с toBeRemoved.
 */
function removeInterval(intervals: number[][], toBeRemoved: number[]): number[][] {
  const result: number[][] = [];
  const [removeStart, removeEnd] = toBeRemoved;

  for (const [start, end] of intervals) {
    if (end <= removeStart || start >= removeEnd) {
      result.push([start, end]);
    } else {
      if (start < removeStart) {
        result.push([start, removeStart]);
      }
      if (end > removeEnd) {
        result.push([removeEnd, end]);
      }
    }
  }

  return result;
}














function removeIntervalDBG(){
  const tests = [
    {
      input: {
        intervals: [[0, 2], [3, 4], [5, 7]],
        toBeRemoved: [1, 6]
      },
      expected: [[0, 1], [6, 7]]
    },
    {
      input: {
        intervals: [[0, 5]],
        toBeRemoved: [2, 3]
      },
      expected: [[0, 2], [3, 5]]
    },
    {
      input: {
        intervals: [[0, 100]],
        toBeRemoved: [50, 60]
      },
      expected: [[0, 50], [60, 100]]
    }
  ];
  
  tests.forEach((testCase, index) => {
    const result = removeInterval(testCase.input.intervals, testCase.input.toBeRemoved);
    const success = JSON.stringify(result) === JSON.stringify(testCase.expected);
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected: ${JSON.stringify(testCase.expected)}`);
      console.log(`got: ${JSON.stringify(result)}`);
    }
  });
  
}
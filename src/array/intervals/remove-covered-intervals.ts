/**
 * @problem 1288. Remove Covered Intervals
 * @link https://leetcode.com/problems/remove-covered-intervals
 */
function removeCoveredIntervals(intervals: number[][]): number {
  intervals.sort((a, b) =>
    a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]
  );
  let count = 0;
  let maxEnd = 0;

  for (const [start, end] of intervals) {
    if (end > maxEnd) {
      count++;
      maxEnd = end;
    }
  }
  return count;
};
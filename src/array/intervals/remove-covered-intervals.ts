/**
 * @problem [1288. Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals)
 * 
 * ### Задача тупорылая на самом LeetCode
 * Схуяли он считает, что если прилетает 1 интервал, то ответ 1? Задача проверяется тупорыло
 * Если прилетает на собесе, то обязательно надо уточнять условия, иначае такой алгос в реале
 * не будет работать
 *
 * ### Чтобы решить задаччу
 * В этом решении нет необходимости обращать внимание на начало интервала после сортировки, 
 * потому что мы уже гарантировали правильный порядок интервалов. Теперь можно просто 
 * отслеживать максимальный конец и игнорировать покрытые интервалы.
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
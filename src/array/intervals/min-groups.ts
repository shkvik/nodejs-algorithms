/**
 * @problem 
 * [2406. Divide Intervals Into Minimum Number of Groups](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups)
 * ### Решение с использованием событий:
 * 1. Разделяем каждый интервал на два события: начало интервала и конец интервала.
 * 2. Сортируем все события: сначала по времени, если времена одинаковые — приоритет у конца интервала.
 * 3. Проходим по всем событиям и считаем количество активных интервалов (групп). 
 * Максимальное количество активных интервалов в любой момент времени — это и есть минимальное количество групп.
 */
function minGroupsEvents(intervals: number[][]): number {
  const events: [number, number][] = [];

  for (const [start, end] of intervals) {
    events.push([start, 1]);
    events.push([end + 1, -1]);
  }
  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let maxGroups = 0;
  let activeIntervals = 0;

  for (const [time, type] of events) {
    activeIntervals += type;
    maxGroups = Math.max(maxGroups, activeIntervals);
  }

  return maxGroups;
}



/**
 * @problem 
 * [2406. Divide Intervals Into Minimum Number of Groups](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups)
 * ### Решение с использованием дифференциального массива или разметки точек:
 * Идея в том, чтобы ускорить время, пожертвовав памятью. Массив Point может быть огромным, если maxEnd
 * тоже огромный. Но благодаря этому мы может получить доступ по индексу без проверок на существование
 * что, как оказалось, достаточно сильно есть CPU. Это идеальный пример, как жертвуется память ради 
 * скорости
 */
function minGroupsLSA(intervals: number[][]): number {
  let [minStart, maxEnd] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  for (const [start, end] of intervals) {
    minStart = Math.min(minStart, start);
    maxEnd = Math.max(maxEnd, end);
  }

  const points = new Array<number>(maxEnd + 2).fill(0);

  for (const [start, end] of intervals) {
    points[start] += 1; 
    points[end + 1] -= 1;
  }

  let concurrentIntervals = 0;
  let maxConcurrentIntervals = 0;

  for (let i = minStart; i <= maxEnd; i++) {
    concurrentIntervals += points[i]; 
    maxConcurrentIntervals = Math.max(maxConcurrentIntervals, concurrentIntervals); 
  }

  return maxConcurrentIntervals;
}



export function minGroupsDBG() {
  const tests = [
    {
      input: [[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]],
      expected: 3 // Минимум 3 группы
    },
    {
      input: [[1, 3], [5, 6], [8, 10], [11, 13]],
      expected: 1
    },
    {
      input: [[1, 2], [2, 4], [4, 6]],
      expected: 2
    }
  ];

  tests.forEach((testCase, index) => {
    const result = minGroupsLSA(testCase.input);
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
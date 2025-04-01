/**
 * @problem [2352. Equal Row and Column Pairs](https://leetcode.com/problems/equal-row-and-column-pairs)
 * 
 * ### Решаем с помощью хеширования
 * 
 */
function equalPairs(grid: number[][]): number {
  const n = grid.length;
  const hash = new Map<string, number>();
  let pairs = 0;

  for (let i = 0; i < n; i++) {
    const row = grid[i].join(',');
    hash.set(row, (hash.get(row) || 0) + 1);
  }
  for (let j = 0; j < n; j++) {
    const column = [];
    for (let i = 0; i < n; i++) {
      column.push(grid[i][j]);
    }
    const colKey = column.join(',');
    if (hash.has(colKey)) {
      pairs += hash.get(colKey);
    }
  }
  return pairs;
};


export function checkEqualPairsDBG() {
  const tests = [
    {
      input: {
        grid: [
          [3, 2, 1],
          [1, 7, 6],
          [2, 7, 7]
        ]
      },
      result: 1 // Столбец [3,1,2] совпадает со строкой [3,2,1] => 1 пара
    },
    {
      input: {
        grid: [
          [3, 1, 2, 2],
          [1, 4, 4, 5],
          [2, 4, 2, 2],
          [2, 4, 2, 2]
        ]
      },
      result: 3 // Строки [2,4,2,2] дважды совпадают со столбцом [2,4,2,2]
    },
    {
      input: {
        grid: [
          [1, 2],
          [2, 1]
        ]
      },
      result: 0 // Нет совпадений строк и столбцов
    },
    {
      input: {
        grid: [
          [1, 1],
          [1, 1]
        ]
      },
      result: 4 // Все строки равны столбцам
    }
  ];

  tests.forEach((test, index) => {
    const result = equalPairs(test.input.grid);
    const success = result === test.result;
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}

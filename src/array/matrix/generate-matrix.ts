function generateMatrix(n: number): number[][] {
  const matrix: number[][] = new Array(n)
    .map(() => Array(n).fill(0));

  let num = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    // Заполнение верхней строки слева направо
    for (let j = left; j <= right; j++) {
      matrix[top][j] = num++;
    }
    top++;
    // Заполнение правого столбца сверху вниз
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;
    if (top <= bottom) {
      // Заполнение нижней строки справа налево
      for (let j = right; j >= left; j--) {
        matrix[bottom][j] = num++;
      }
      bottom--;
    }
    if (left <= right) {
      // Заполнение левого столбца снизу вверх
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }

  return matrix;
}

export function generateMatrixDBG() {
  const tests = [
    {
      input: 3,
      result: [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]
      ]
    },
    {
      input: 1,
      result: [
        [1]
      ]
    },
    {
      input: 4,
      result: [
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7]
      ]
    }
  ];

  tests.forEach((test, index) => {
    const result = generateMatrix(test.input);
    const success = JSON.stringify(result) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(result)}`);
    }
  });
}
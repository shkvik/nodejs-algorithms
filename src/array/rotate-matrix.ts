function rotate(matrix: number[][]): void {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}


function testRotate() {
  const tests = [
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ],
      expected: [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
      ]
    },
    {
      input: [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16]
      ],
      expected: [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11]
      ]
    },
    {
      input: [
        [1]
      ],
      expected: [
        [1]
      ]
    }
  ];

  // Функция для сравнения двух матриц
  function matricesAreEqual(mat1: number[][], mat2: number[][]): boolean {
    if (mat1.length !== mat2.length) return false;
    for (let i = 0; i < mat1.length; i++) {
      if (mat1[i].length !== mat2[i].length) return false;
      for (let j = 0; j < mat1[i].length; j++) {
        if (mat1[i][j] !== mat2[i][j]) return false;
      }
    }
    return true;
  }

  tests.forEach((test, index) => {
    rotate(test.input);
    const success = matricesAreEqual(test.input, test.expected);
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected: ${JSON.stringify(test.expected)}`);
      console.log(`got: ${JSON.stringify(test.input)}`);
    }
  });
}
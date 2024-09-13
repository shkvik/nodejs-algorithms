function diagonalSort(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  // Функция для сортировки одной диагонали
  const sortDiagonal = (row: number, col: number): void => {
    const diagonal: number[] = [];
    let r = row;
    let c = col;

    // Собираем диагональные элементы
    while (r < m && c < n) {
      diagonal.push(mat[r][c]);
      r++;
      c++;
    }

    // Сортируем диагональные элементы
    diagonal.sort((a, b) => a - b);

    // Записываем отсортированные элементы обратно в диагональ
    r = row;
    c = col;
    let i = 0;
    while (r < m && c < n) {
      mat[r][c] = diagonal[i];
      r++;
      c++;
      i++;
    }
  };

  // Сортируем диагонали, начинающиеся с каждого элемента первой строки
  for (let col = 0; col < n; col++) {
    sortDiagonal(0, col);
  }

  // Сортируем диагонали, начинающиеся с каждого элемента первого столбца
  for (let row = 1; row < m; row++) {
    sortDiagonal(row, 0);
  }

  return mat;
}


export function diagonalSortDBG(){
  const tests = [
    {
      input: [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]],
      result: [[1, 1, 1, 1], [1, 2, 2, 2], [1, 2, 3, 3]]
    },
    {
      input: [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]],
      result: [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]
    }
  ];
  
  tests.forEach((test, index) => {
    const result = diagonalSort(test.input);
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
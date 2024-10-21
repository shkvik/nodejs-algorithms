function numSquares(n: number): number {
  // Инициализируем массив dp, где dp[i] будет хранить наименьшее количество квадратов, сумма которых равна i
  const dp: number[] = new Array(n + 1).fill(Infinity);
  dp[0] = 0; // База: сумма 0 требует 0 чисел

  // Предварительно вычисляем все возможные квадратные числа меньше или равные n
  const squares: number[] = [];
  for (let i = 1; i * i <= n; i++) {
    squares.push(i * i);
  }

  // Заполняем массив dp
  for (let i = 1; i <= n; i++) {
    for (const square of squares) {
      if (square > i) break;
      dp[i] = Math.min(dp[i], dp[i - square] + 1);
    }
  }

  return dp[n];
}
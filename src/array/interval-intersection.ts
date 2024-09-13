function intervalIntersection(A: number[][], B: number[][]): number[][] {
  const result: number[][] = [];
  let i = 0;
  let j = 0;

  while (i < A.length && j < B.length) {
    const startMax = Math.max(A[i][0], B[j][0]);
    const endMin = Math.min(A[i][1], B[j][1]);

    // Если интервалы пересекаются
    if (startMax <= endMin) {
      result.push([startMax, endMin]);
    }

    // Двигаем указатель того интервала, который заканчивается раньше
    if (A[i][1] < B[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}

function findPrefixCommonArray(A: number[], B: number[]): number[] {
  const n = A.length;
  const setA = new Set<number>();
  const setB = new Set<number>();
  const result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    setA.add(A[i]);
    setB.add(B[i]);

    let commonCount = 0;
    for (let num of setA) {
      if (setB.has(num)) {
        commonCount++;
      }
    }
    result[i] = commonCount;
  }
  return result;
}

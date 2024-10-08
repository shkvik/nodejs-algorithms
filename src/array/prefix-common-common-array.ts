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

function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const res = [];
  const counts = new Array(A.length + 1).fill(0);
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    const a = A[i];
    const b = B[i];
    if (a === b) {
      count += 1;
    } else {
      count += counts[a] + counts[b];
      counts[a] += 1;
      counts[b] += 1;
    }
    res.push(count);
  }

  return res;
};


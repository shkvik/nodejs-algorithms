function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i of matrix) {
    let l = 0, r = i.length - 1, mid = 0;
    while (l <= r) {
      mid = Math.floor((l + r) / 2)
      if (i[mid] === target)
        return true;
      else if (i[mid] > target)
        r = mid - 1;
      else
        l = mid + 1
    }
  }
  return false
};
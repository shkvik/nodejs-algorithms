export function splitToIntervals(nums: number[], limit: number): number[][] {
  const result: number[][] = [];
  let currInterval: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];

    if (curr === prev + 1) {
      currInterval.push(curr);
    } else {
      result.push(currInterval);
      currInterval = [curr];
    }
  }
  result.push(currInterval);
  const final: number[][] = [];
  for (const group of result) {
    for (let i = 0; i < group.length; i += limit) {
      final.push(group.slice(i, i + limit));
    }
  }
  return final;
}

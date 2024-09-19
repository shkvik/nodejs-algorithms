function twoSum(nums: number[], target: number): number[] | null {
  // number -> index
  const numToIndex = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement)!, i];
    }
    numToIndex.set(nums[i], i);
  }
  return null;
}

function twoSumSorted(nums: number[], target: number): number[] | null {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

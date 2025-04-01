function findMaxAverage(nums: number[], k: number): number {
  let windowSum = 0;

  for (let i = 0; i < k; ++i) {
    windowSum += nums[i]
  }
  let pos1 = 0, highestSum = windowSum;

  for (let i = k; i < nums.length; ++i) {
    windowSum = windowSum - nums[pos1++] + nums[i]
    highestSum = Math.max(highestSum, windowSum)
  }
  return highestSum / k
};
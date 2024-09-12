function search(nums: number[], target: number): number {
  let left = 0, right = nums.length-1;
  while(left <= right){
    const mid = Math.floor((left+right)/2);
    const num = nums[mid];
    if(target == num){
      return mid;
    }
    if(nums[left] <= num){
      if(nums[left] <= target && target <= num){
        right = mid-1;
      } else{
        left = mid+1;
      }
    } else{
      if(nums[right] >= target && target >= num){
        left = mid+1;
      } else{
        right = mid-1;
      }
    }
  }
  return -1;
};
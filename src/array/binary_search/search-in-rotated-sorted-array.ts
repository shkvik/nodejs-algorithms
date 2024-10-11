function search(nums: number[], target: number): number {
  let left = 0, right = nums.length-1;
  while(left <= right){
    const mid = Math.floor((left+right)/2);
    const num = nums[mid];
    if(target == num){
      return mid;
    }
    if(nums[left] <= num){
      if(target >= nums[left] && target <= num){
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

export function searchDBG() {
  const tests = [
    {
      input: { nums: [4,5,6,7,0,1,2], target: 0 },
      result: 4
    },
    {
      input: { nums: [4,5,6,7,0,1,2], target: 3 },
      result: -1
    },
    {
      input: { nums: [1], target: 0 },
      result: -1
    },
    {
      input: { nums: [1], target: 1 },
      result: 0
    }
  ];
  
  tests.forEach((test, index) => {
    const result = search(test.input.nums, test.input.target);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}


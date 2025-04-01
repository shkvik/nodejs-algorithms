function productExceptSelf(nums: number[]): number[] {
  const answer = new Array<number>(nums.length);
  answer[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = nums.length - 1; i > -1; i--) {
    answer[i] = answer[i] * right;
    right *= nums[i];
  }
  return answer;
};


export function productExceptSelfDBG(){
  const tests = [
    {
      input: [1, 2, 3, 4],
      result: [24, 12, 8, 6]
    },
    {
      input: [-1, 1, 0, -3, 3],
      result: [0, 0, 9, 0, 0]
    }
  ];
  
  tests.forEach((test, index) => {
    const result = productExceptSelf(test.input);
    const success = JSON.stringify(result) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(result)}`);
    }
  });

}

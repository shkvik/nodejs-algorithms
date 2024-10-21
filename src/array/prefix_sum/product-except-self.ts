function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;
  const result = new Array(length).fill(1);

  let prefix = 1;
  for (let i = 0; i < length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
}


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

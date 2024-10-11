function moveZeroes(nums: number[]): void {
  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt] = nums[i];
      lastNonZeroFoundAt++;
    }
  }

  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
}

function moveZeroesDBG(){
  const tests = [
    {
      input: [0, 1, 0, 3, 12],
      result: [1, 3, 12, 0, 0]
    },
    {
      input: [0, 0, 1],
      result: [1, 0, 0]
    }
  ];
  
  tests.forEach((test, index) => {
    moveZeroes(test.input);
    const success = JSON.stringify(test.input) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(test.input)}`);
    }
  });
}

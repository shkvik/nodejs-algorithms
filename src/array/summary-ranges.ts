function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return [];
	const result: string[] = [];
  let start = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      if (start === nums[i - 1]) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${nums[i - 1]}`);
      }
      if (i < nums.length) {
        start = nums[i];
      }
    }
  }
  return result;
}

function summaryRangesDBG(){
  const tests = [
    {
      input: [0, 1, 2, 4, 5, 7],
      result: ["0->2", "4->5", "7"]
    },
    {
      input: [0, 2, 3, 4, 6, 8, 9],
      result: ["0", "2->4", "6", "8->9"]
    },
    {
      input: [],
      result: []
    },
    {
      input: [-1],
      result: ["-1"]
    },
    {
      input: [0],
      result: ["0"]
    }
  ];
  
  tests.forEach((test, index) => {
    const result = summaryRanges(test.input);
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
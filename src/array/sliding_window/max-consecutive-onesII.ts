function findMaxConsecutiveOnesII(nums: number[]): number {
  let left = 0;
  let right = 0;
  let zeroCount = 0; 
  let maxConsecutiveOnes = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    maxConsecutiveOnes = Math.max(maxConsecutiveOnes, right - left + 1);
    right++;
  }

  return maxConsecutiveOnes;
}


function findMaxConsecutiveOnesIIDBG(){
  const tests = [
    {
      input: [1, 0, 1, 1, 0],
      result: 4 // После замены: [1, 1, 1, 1, 0] -> последовательность из 4 единиц
    },
    {
      input: [1, 0, 1, 1, 0, 1],
      result: 4 // После замены: [1, 1, 1, 1, 0, 1] или [1, 0, 1, 1, 1, 1]
    },
    {
      input: [0, 0, 0],
      result: 1 // После замены одного 0 на 1: [1, 0, 0] -> последовательность из 1 единицы
    }
  ];
  
  tests.forEach((test, index) => {
    const result = findMaxConsecutiveOnes(test.input);
    const success = result === test.result;
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}
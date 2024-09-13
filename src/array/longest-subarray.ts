function longestSubarray(nums: number[]): number {
  let left = 0;
  let right = 0;
  let zeroCount = 0;
  let maxLen = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    // Сдвигаем левую границу окна, если количество нулей больше одного
    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // Обновляем максимальную длину подмассива, исключив ровно один элемент
    maxLen = Math.max(maxLen, right - left);
    right++;
  }

  return maxLen;
}


function longestSubarrayDBG(){
  const tests = [
    {
      input: [1, 1, 0, 1],
      result: 3 // Удаляем 0, получаем последовательность из трех единиц [1, 1, 1]
    },
    {
      input: [0, 1, 1, 1, 0, 1, 1, 0, 1],
      result: 5 // Удаляем 0 между двумя группами единиц
    },
    {
      input: [1, 1, 1],
      result: 2 // Удаляем одну 1, оставляем две единицы
    }
  ];
  
  tests.forEach((test, index) => {
    const result = longestSubarray(test.input);
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
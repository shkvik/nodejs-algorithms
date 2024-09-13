function findMaxConsecutiveOnesIII(nums: number[], k: number): number {
  let left = 0; 
  let right = 0;
  let zeroCount = 0;
  let maxLen = 0;

  while (right < nums.length) {
    // Если встречаем 0, увеличиваем счетчик нулей
    if (nums[right] === 0) {
      zeroCount++;
    }

    // Если количество нулей больше k, сдвигаем левую границу окна
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    // Обновляем максимальную длину подмассива
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }

  return maxLen;
}


function findMaxConsecutiveOnesIIIDBG(){
  const tests = [
    {
      input: { nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2 },
      result: 6 // Максимальная длина подмассива после переворота 2 нулей в единицы
    },
    {
      input: { nums: [0, 0, 1, 1, 1, 0, 0], k: 0 },
      result: 3 // Максимальная длина подмассива: [1, 1, 1]
    }
  ];
  
  tests.forEach((test, index) => {
    const result = findMaxConsecutiveOnesIII(test.input.nums, test.input.k);
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
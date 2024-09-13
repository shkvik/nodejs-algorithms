function subarraySum(nums: number[], k: number): number {
  const prefixSums = new Map<number, number>();
  prefixSums.set(0, 1); // Инициализируем, чтобы учитывать сумму от начала массива
  
  let count = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]; // Текущая сумма от начала массива

    // Если существует такая сумма, что sum - k 
    // есть в prefixSums, значит найден подмассив
    if (prefixSums.has(sum - k)) {
      count += prefixSums.get(sum - k)!;
    }

    // Обновляем количество префиксных сумм
    prefixSums.set(sum, (prefixSums.get(sum) || 0) + 1);
  }

  return count;
}

function subarraySumDBG(){
  const tests = [
    {
      input: { nums: [1, 1, 1], k: 2 },
      result: 2 // Два подмассива: [1,1] (индексы 0-1) и [1,1] (индексы 1-2)
    },
    {
      input: { nums: [1, 2, 3], k: 3 },
      result: 2 // Два подмассива: [1,2] (индексы 0-1) и [3] (индекс 2)
    }
  ];
  
  tests.forEach((test, index) => {
    const result = subarraySum(test.input.nums, test.input.k);
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
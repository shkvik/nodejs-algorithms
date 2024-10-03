function lengthOfLIS(nums: number[]): number {
  const sub: number[] = [];

  for (let num of nums) {
    let left = 0, right = sub.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (sub[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left < sub.length) {
      sub[left] = num;
    } else {
      sub.push(num);
    }
  }

  return sub.length;
}


export function lengthOfLISDBG(){
  const tests = [
    {
      input: [10, 9, 2, 5, 3, 7, 101, 18],
      expected: 4 // Длина LIS: [2, 3, 7, 101]
    },
    {
      input: [0, 1, 0, 3, 2, 3],
      expected: 4 // Длина LIS: [0, 1, 2, 3]
    },
    {
      input: [7, 7, 7, 7, 7, 7, 7],
      expected: 1 // Все числа одинаковы, длина LIS: 1
    }
  ];
  
  tests.forEach((test, index) => {
    const result = lengthOfLIS(test.input);
    const success = result === test.expected;
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected: ${test.expected}`);
      console.log(`got: ${result}`);
    }
  });
}
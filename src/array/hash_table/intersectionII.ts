function intersectII(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  const result: number[] = [];

  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    if (map.has(num) && map.get(num)! > 0) {
      result.push(num);
      map.set(num, map.get(num)! - 1);
    }
  }
  return result;
}

function intersectIIDBG(){
  const tests = [
    {
      input: { nums1: [1, 2, 2, 1], nums2: [2, 2] },
      result: [2, 2]
    },
    {
      input: { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4] },
      result: [4, 9]
    }
  ];
  
  tests.forEach((test, index) => {
    const result = intersectII(test.input.nums1, test.input.nums2);
    const success = JSON.stringify(result.sort()) === JSON.stringify(test.result.sort());
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(result)}`);
    }
  });
}


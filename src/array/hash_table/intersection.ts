

function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result: number[] = [];
  set1.forEach(value => {
    if (set2.has(value)) {
      result.push(value);
    }
  });

  return result;
}


export function intersectionDBG() {
  const tests = [
    {
      input: { nums1: [1, 2, 2, 1], nums2: [2, 2] },
      result: [2]
    },
    {
      input: { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4] },
      result: [4, 9]
    }
  ];

  tests.forEach((test, index) => {
    const result = intersection(test.input.nums1, test.input.nums2);
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



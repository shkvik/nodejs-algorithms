function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

function mergeDBG() {
  const tests = [
    {
      input: { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 },
      result: [1, 2, 2, 3, 5, 6]
    },
    {
      input: { nums1: [1], m: 1, nums2: [], n: 0 },
      result: [1]
    },
    {
      input: { nums1: [0], m: 0, nums2: [1], n: 1 },
      result: [1]
    }
  ];

  tests.forEach((test, index) => {
    merge(test.input.nums1, test.input.m, test.input.nums2, test.input.n);
    const success = JSON.stringify(test.input.nums1) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(test.input.nums1)}`);
    }
  });
}
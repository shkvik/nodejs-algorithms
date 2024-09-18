function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let waterTrapped = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        waterTrapped += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        waterTrapped += rightMax - height[right];
      }
      right--;
    }
  }

  return waterTrapped;
}


export function trapDBG() {
  const tests = [
    {
      // picture
      input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
      result: 6
    },
    {
      input: [4, 2, 0, 3, 2, 5],
      result: 9
    },
    {
      input: [1, 1],
      result: 0
    }
  ];

  tests.forEach((test, index) => {
    const result = trap(test.input);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}
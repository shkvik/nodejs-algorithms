

function findClosestElements(arr: number[], k: number, x: number): number[] {
  let left = 0;
  let right = arr.length - 1;

  while (right - left >= k) {
    if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
      left++;
    } else {
      right--;
    }
  }
  return arr.slice(left, left + k);
}

export function findClosestElementsDBG(){
  const tests = [
    {
      input: { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9], k: 4, x: 3 },
      result: [1, 2, 3, 4]
    },
    {
      input: { arr: [1, 2, 3, 4, 5], k: 4, x: -1 },
      result: [1, 2, 3, 4]
    }
  ];
  
  tests.forEach((test, index) => {
    const result = findClosestElements(test.input.arr, test.input.k, test.input.x);
    const success = JSON.stringify(result) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}
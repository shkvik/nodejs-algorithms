Array.prototype.radixSort = function(): number[] {
  const arr = this as number[];

  const getMax = (arr: number[]): number => Math.max(...arr);

  const countingSort = (arr: number[], exp: number): void => {
    const output = new Array(arr.length).fill(0);
    const count = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
      const index = Math.floor(arr[i] / exp) % 10;
      count[index]++;
    }

    for (let i = 1; i < 10; i++) {
      count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      const index = Math.floor(arr[i] / exp) % 10;
      output[count[index] - 1] = arr[i];
      count[index]--;
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
    }
  };

  const max = getMax(arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }

  return arr;
};

export {}
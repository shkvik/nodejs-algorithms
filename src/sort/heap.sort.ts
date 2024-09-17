import { defaultComparator } from "./utilities";

Array.prototype.heapSort = function<T>(
  compareFn: (a: T, b: T) => number = defaultComparator
): T[] {
  const arr = this as T[];
  const len = arr.length;

  const heapify = (n: number, i: number) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && compareFn(arr[left], arr[largest]) > 0) {
      largest = left;
    }
    if (right < n && compareFn(arr[right], arr[largest]) > 0) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(n, largest);
    }
  };

  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(len, i);
  }

  for (let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(i, 0);
  }

  return arr;
};
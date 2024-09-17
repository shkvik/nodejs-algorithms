import { defaultComparator } from "./utilities";

Array.prototype.insertionSort = function<T>(
  compareFn: (a: T, b: T) => number = defaultComparator
): T[] {
  const arr = this as T[];
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && compareFn(arr[j], current) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
};
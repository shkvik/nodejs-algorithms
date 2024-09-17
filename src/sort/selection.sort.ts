import { defaultComparator } from "./utilities";

Array.prototype.selectionSort = function<T>(
  compareFn: (a: T, b: T) => number = defaultComparator
): T[] {
  const arr = this as T[];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i; 
    for (let j = i + 1; j < len; j++) {
      if (compareFn(arr[j], arr[minIndex]) < 0) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
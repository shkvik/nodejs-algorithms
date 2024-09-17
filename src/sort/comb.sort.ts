import { defaultComparator } from "./utilities";

Array.prototype.combSort = function<T>(
  compareFn: (a: T, b: T) => number = defaultComparator
): T[] {
  const arr = this as T[];
  const len = arr.length;
  let gap = len;
  let swapped = true;

  while (gap !== 1 || swapped) {
    gap = Math.floor(gap / 1.3);
    if (gap < 1) gap = 1;

    swapped = false;
    for (let i = 0; i < len - gap; i++) {
      if (compareFn(arr[i], arr[i + gap]) > 0) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        swapped = true;
      }
    }
  }

  return arr;
};
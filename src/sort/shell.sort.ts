import { defaultComparator } from "./utilities";

Array.prototype.shellSort = function<T>(
  compareFn: (a: T, b: T) => number = defaultComparator
): T[] {
  const arr = this as T[];
  const len = arr.length;

  let gap = Math.floor(len / 2);
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      const current = arr[i];
      let j = i;

      while (j >= gap && compareFn(arr[j - gap], current) > 0) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = current;
    }
    gap = Math.floor(gap / 2);
  }

  return arr;
};
export {}
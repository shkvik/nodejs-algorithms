import { defaultComparator } from "./utilities";

Array.prototype.quickSort = function<T>(
  compareFn: (a: T, b: T) => number = defaultComparator
): T[] {
  const arr = this as T[];

  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => compareFn(x, pivot) < 0);
  const right = arr.filter((x) => compareFn(x, pivot) > 0);
  const middle = arr.filter((x) => compareFn(x, pivot) === 0);

  return left.quickSort(compareFn).concat(middle, right.quickSort(compareFn));
};
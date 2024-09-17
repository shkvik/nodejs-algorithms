import { defaultComparator } from "./utilities";

Array.prototype.mergeSort = function<T>(
  compareFn: (a: T, b: T) => number = defaultComparator
): T[] {
  const arr = this as T[];

  const merge = (left: T[], right: T[]): T[] => {
    const result: T[] = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (compareFn(left[i], right[j]) <= 0) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  };

  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid).mergeSort(compareFn);
  const right = arr.slice(mid).mergeSort(compareFn);

  return merge(left, right);
};
import { defaultComparator } from "./utilities";

Array.prototype.cocktailSort = function<T>(
  compareFn: (a: T, b: T) => number = defaultComparator
): T[] {
  const arr = this as T[];
  let swapped = true;
  let start = 0;
  let end = arr.length;

  while (swapped) {
    swapped = false;
    for (let i = start; i < end - 1; i++) {
      if (compareFn(arr[i], arr[i + 1]) > 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    if (!swapped) break;

    swapped = false;
    end--;

    for (let i = end - 1; i >= start; i--) {
      if (compareFn(arr[i], arr[i + 1]) > 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    start++;
  }

  return arr;
};
export {}
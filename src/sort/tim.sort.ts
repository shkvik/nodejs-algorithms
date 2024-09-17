import { defaultComparator } from "./utilities";

// Минимальный размер подмассива, который сортируется с помощью Insertion Sort
const RUN = 32;

/**
 * Выполняет сортировку вставками для подмассива arr[start...end]
 */
function insertionSort<T>(
  arr: T[],
  start: number,
  end: number,
  compareFn: (a: T, b: T) => number
): void {
  for (let i = start + 1; i <= end; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= start && compareFn(arr[j], temp) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}

/**
 * Объединяет два подмассива arr[left...mid] и arr[mid+1...right]
 */
function merge<T>(
  arr: T[],
  left: number,
  mid: number,
  right: number,
  compareFn: (a: T, b: T) => number
): void {
  const len1 = mid - left + 1;
  const len2 = right - mid;
  const leftArr = new Array(len1);
  const rightArr = new Array(len2);

  for (let i = 0; i < len1; i++) leftArr[i] = arr[left + i];
  for (let i = 0; i < len2; i++) rightArr[i] = arr[mid + 1 + i];

  let i = 0, j = 0, k = left;

  while (i < len1 && j < len2) {
    if (compareFn(leftArr[i], rightArr[j]) <= 0) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  // Копируем оставшиеся элементы, если такие есть
  while (i < len1) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < len2) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

Array.prototype.timSort = function<T>(
  compareFn: (a: T, b: T) => number = defaultComparator
): T[] {
  const arr = this as T[];
  const n = arr.length;

  // Сортируем каждый подмассив длиной RUN с помощью Insertion Sort
  for (let i = 0; i < n; i += RUN) {
    insertionSort(arr, i, Math.min(i + RUN - 1, n - 1), compareFn);
  }

  // Сливаем отсортированные подмассивы с помощью Merge
  for (let size = RUN; size < n; size = 2 * size) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = Math.min(left + size - 1, n - 1);
      const right = Math.min(left + 2 * size - 1, n - 1);

      if (mid < right) {
        merge(arr, left, mid, right, compareFn);
      }
    }
  }

  return arr;
};

export {}
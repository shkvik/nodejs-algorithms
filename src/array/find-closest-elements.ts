function findClosestElements(arr: number[], k: number, x: number): number[] {
  let left = 0;
  let right = arr.length - 1;
  // Уменьшаем диапазон, пока не останется k элементов
  while (right - left >= k) {
    if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
      left++;
    } else {
      right--;
    }
  }
  // Возвращаем k ближайших элементов
  return arr.slice(left, left + k);
}

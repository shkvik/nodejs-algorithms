/**
 * @problem [744. Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target)
 * 
 * ### Решаем бинарным поиском
 * 1. по условию задачи надо понять, что можно сразу отдать первый символ,
 * если target больше или равен последнему
 * 2. ну а если так нельзя, то bs'ом двигаем left и right до талого и возвращаем
 * и возвращаем left (самый маленький)
 * 
 * Ключевой момент в том, чтобы двигать левый указатель, когда символы равны
 * ```
 * if (letters[mid] <= target) {
 *   left = mid + 1;
 * }
 * ```
 */
function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0, right = letters.length - 1;

  if (target >= letters[right]) {
    return letters[0];
  }
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return letters[left];
};
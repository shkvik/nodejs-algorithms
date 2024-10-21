import { Heap } from "./utilities/heap";

/**
 * @problem 
 * [239. Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum)
 * ### Решение с использованием кучи:
 * Эта задача решается с использованием кучи, потому что она позволяет эффективно 
 * поддерживать и извлекать максимум для текущего окна, обеспечивая оптимальную 
 * сложность O(n log k) вместо медленного перебора.
 * 
 * Ключевой момент, чтобы выкинуть элементы, у которых индекс вышел
 * за пределы окна
 * ```
 * while (heap.top()[1] < i - k + 1) {
 *   heap.pop();
 * }
 * ```
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const heap = new Heap<[number, number]>((a, b) => a[0] > b[0]);
  const result: number[] = [];

  for (let i = 0; i < k; i++) {
    heap.push([nums[i], i]);
  }
  for (let i = k - 1; i < nums.length; i++) {
    heap.push([nums[i], i]);
    while (heap.top()[1] < i - k + 1) {
      heap.pop();
    }
    result.push(heap.top()[0]);
  }
  return result;
}
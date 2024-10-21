import { minGroupsDBG } from "./array/intervals/min-groups";
import { isReflectedDBG } from "./array/is-reflected";
import { Heap } from "./heap/utilities/heap";


function maxSlidingWindow(nums: number[], k: number): number[] {
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

const nums = [1,-1], k = 1;

console.log(maxSlidingWindow(nums, k));
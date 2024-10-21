function subarraysDivByK(nums: number[], k: number): number {
  let count = 0;
  let prefixSum = 0;
  const modCount = new Map<number, number>();
  modCount.set(0, 1);

  for (const num of nums) {
    prefixSum += num;
    let mod = prefixSum % k;
    if (mod < 0) mod += k;

    if (modCount.has(mod)) {
      count += modCount.get(mod)!;
      modCount.set(mod, modCount.get(mod)! + 1);
    } else {
      modCount.set(mod, 1);
    }
  }

  return count;
}

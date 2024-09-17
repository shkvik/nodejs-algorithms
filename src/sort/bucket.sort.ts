Array.prototype.bucketSort = function(): number[] {
  const arr = this as number[];
  const bucketSize = 5;

  if (arr.length === 0) {
    return arr;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets: number[][] = new Array(bucketCount).fill(null).map(() => []);

  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }

  return buckets.reduce((sortedArr, bucket) => {
    bucket.sort((a, b) => a - b);
    return sortedArr.concat(bucket);
  }, []);
};

export {};
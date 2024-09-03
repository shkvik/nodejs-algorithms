export function removeZeros(arr: number[]): number[] {
  let writeIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[writeIndex] = arr[i];
      writeIndex++;
    }
  }
  arr.length = writeIndex;
  return arr;
}
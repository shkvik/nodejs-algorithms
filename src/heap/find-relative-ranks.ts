import { Heap } from "./utilities/heap";

export function findRelativeRanks(score: number[]): string[] {
  const result = new Array(score.length).fill(null);
  const placements = {
    1: "Gold Medal",
    2: "Silver Medal",
    3: "Bronze Medal",
  }
  const pq = new Heap<[number, number]>((a, b) => {
    return a[1] > b[1]
  });
  for (const [index, value] of score.entries()) {
    pq.push([index, value]);
  }
  for (let i = 0; i < score.length; i++) {
    const offset = i + 1;
    const [index, value] = pq.pop()
    result[index] = placements[offset] || String(offset);
  }

  return result;
};

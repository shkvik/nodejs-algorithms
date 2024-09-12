export function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let right = 0;
  const charIndexMap = new Map<string, number>();

  for (let left = 0; left < s.length; left++) {
    const char = s[left];

    if (charIndexMap.has(char) && charIndexMap.get(char) >= right) {
      right = charIndexMap.get(char)! + 1;
    }
    charIndexMap.set(char, left);
    maxLength = Math.max(maxLength, left - right + 1);
  }
  return maxLength;
}
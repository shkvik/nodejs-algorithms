export function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let left = 0;
  const charIndexMap = new Map<string, number>();

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (charIndexMap.has(char) && charIndexMap.get(char) >= left) {
      left = charIndexMap.get(char)! + 1;
    }
    charIndexMap.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}


export const lengthOfLongestSubstringDBG = () => {
  const tests = [
    {
      input: "abcabcdbb",
      result: 4, // "abc"
    },
    {
      input: "bbbbb",
      result: 1, // "b"
    },
    {
      input: "pwwkew",
      result: 3, // "wke"
    },
    {
      input: "",
      result: 0, // пустая строка
    }
  ];
  
  tests.forEach((test, index) => {
    const result = lengthOfLongestSubstring(test.input);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}
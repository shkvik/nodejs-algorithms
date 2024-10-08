function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
  if (k === 0 || s.length === 0) return 0;

  const map: { [key: string]: number } = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    map[char] = (map[char] || 0) + 1;

    while (Object.keys(map).length > k) {
      const leftChar = s[left];
      map[leftChar]--;
      if (map[leftChar] === 0) {
        delete map[leftChar];
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}


export function lengthOfLongestSubstringKDistinctDBG(){
  const tests = [
    {
      input: { s: "eceba", k: 2 },
      result: 3 // "ece"
    },
    {
      input: { s: "aa", k: 1 },
      result: 2 // "aa"
    }
  ];
  
  tests.forEach((test, index) => {
    const result = lengthOfLongestSubstringKDistinct(test.input.s, test.input.k);
    const success = result === test.result;
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}


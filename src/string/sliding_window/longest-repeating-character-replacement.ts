function characterReplacement(s: string, k: number): number {
  const count = new Array(26).fill(0);
  const charCodeA = 'A'.charCodeAt(0);
  let maxCount = 0;
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const index = s.charCodeAt(right) - charCodeA;
    count[index]++;
    maxCount = Math.max(maxCount, count[index]);

    if (right - left + 1 - maxCount > k) {
      const leftIndex = s.charCodeAt(left) - charCodeA;
      count[leftIndex]--;
      left++;
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

export function characterReplacementDBG() {
  const tests = [
    {
      input: { s: "ABAB", k: 2 },
      expected: 4 // Можно заменить 2 символа 'A' на 'B' или наоборот, длина подстроки 4
    },
    {
      input: { s: "AABABBA", k: 1 },
      expected: 4 // После одной замены можно получить подстроку длиной 4 (например, "AABA" или "BBBA")
    }
  ];

  tests.forEach((testCase, index) => {
    const result = characterReplacement(testCase.input.s, testCase.input.k);
    const success = result === testCase.expected;
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected: ${testCase.expected}`);
      console.log(`got: ${result}`);
    }
  });
}
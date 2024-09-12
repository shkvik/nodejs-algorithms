function minWindow(s: string, t: string): string {
  if (s.length === 0 || t.length === 0) return "";

  const tFreq: { [char: string]: number } = {};
  for (let char of t) {
    tFreq[char] = (tFreq[char] || 0) + 1;
  }

  let required = Object.keys(tFreq).length;
  let left = 0, right = 0;
  let formed = 0;
  const windowCounts: { [char: string]: number } = {};

  let minLength = Infinity;
  let minLeft = 0;

  while (right < s.length) {
    const char = s[right];
    windowCounts[char] = (windowCounts[char] || 0) + 1;

    if (tFreq[char] && windowCounts[char] === tFreq[char]) {
      formed++;
    }
    while (left <= right && formed === required) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minLeft = left;
      }
      const leftChar = s[left];
      windowCounts[leftChar]--;
      if (tFreq[leftChar] && windowCounts[leftChar] < tFreq[leftChar]) {
        formed--;
      }
      left++;
    }
    right++;
  }
  return minLength === Infinity ? "" : s.substring(minLeft, minLeft + minLength);
}

export function minWindowDBG(){
  const tests = [
    {
      input: { s: "ADOBECODEBANC", t: "ABC" },
      result: "BANC"
    },
    {
      input: { s: "a", t: "a" },
      result: "a"
    },
    {
      input: { s: "a", t: "aa" },
      result: ""
    }
  ];
  
  tests.forEach((test, index) => {
    const result = minWindow(test.input.s, test.input.t);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}

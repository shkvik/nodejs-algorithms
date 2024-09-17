function isOneEditDistance(s: string, t: string): boolean {
  const lenS = s.length;
  const lenT = t.length;

  if (Math.abs(lenS - lenT) > 1) {
    return false;
  }
  if (lenS > lenT) {
    return isOneEditDistance(t, s);
  }
  for (let i = 0; i < lenS; i++) {
    if (s[i] !== t[i]) {
      if (lenS === lenT) {
        return s.slice(i + 1) === t.slice(i + 1);
      } else {
        return s.slice(i) === t.slice(i + 1);
      }
    }
  }
  return true;
}

export const isOneEditDistanceDBG = () => {
  const tests = [
    {
      input: { s: "120031", t: "120032" },
      result: true
    },
    {
      input: { s: "ab", t: "acb" },
      result: true
    },
    {
      input: { s: "cab", t: "ad" },
      result: false
    },
    {
      input: { s: "1203", t: "1213" },
      result: true
    },
    
  ];

  tests.forEach((test, index) => {
    const result = isOneEditDistance(test.input.s, test.input.t);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
} 
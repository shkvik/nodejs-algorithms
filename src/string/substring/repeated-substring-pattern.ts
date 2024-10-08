namespace RepeatedSubstringPattern {
  export function brutForce(s: string): boolean {
    const n = s.length;

    for (let len = 1; len <= Math.floor(n / 2); len++) {
      if (n % len === 0) {
        const substring = s.slice(0, len);
        const repeated = substring.repeat(n / len);
        if (repeated === s) {
          return true;
        }
      }
    }

    return false;
  }
  
  export function multiplyTwice(s: string): boolean {
    return (s + s).slice(1, -1).includes(s);
  }
}

export function repeatedSubstringPatternDBG() {
  const tests = [
    {
      input: "abab",
      expected: true // Строка "abab" состоит из повторяющейся подстроки "ab"
    },
    {
      input: "aba",
      expected: false // Строка "aba" не может быть построена из повторяющейся подстроки
    },
    {
      input: "abcabcabcabc",
      expected: true // Строка "abcabcabcabc" состоит из повторяющейся подстроки "abc"
    }
  ];

  tests.forEach((testCase, index) => {
    const result = RepeatedSubstringPattern.multiplyTwice(testCase.input);
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

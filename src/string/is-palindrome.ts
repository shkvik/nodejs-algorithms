function isPalindrome(s: string): boolean {
  const cleanedString = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
  return cleanedString === cleanedString.split('').reverse().join('');
}

export function isPalindromeDBG() {
  const tests = [
    {
      input: "A man, a plan, a canal: Panama",
      result: true
    },
    {
      input: "race a car",
      result: false
    },
    {
      input: " ",
      result: true
    }
  ];
  
  tests.forEach((test, index) => {
    const result = isPalindrome(test.input);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}



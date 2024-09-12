import { findPanagram } from "./string/find-panagrams.string";


function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  const backtrack = (current: string, open: number, close: number) => {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }

    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  };

  backtrack('', 0, 0);
  return result;
}

const tests = [
  {
    input: 12222522221,
    result: true
  },
  {
    input: -121,
    result: false // читается как "121-", что не является палиндромом
  },
  {
    input: 10,
    result: false // читается как "01", что не является палиндромом
  },
  {
    input: 0,
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
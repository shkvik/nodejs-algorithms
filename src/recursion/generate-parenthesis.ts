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

export function generateParenthesisDBG(){
  const tests = [
    {
      input: 3,
      result: ["((()))", "(()())", "(())()", "()(())", "()()()"]
    },
    {
      input: 1,
      result: ["()"]
    }
  ];
  
  tests.forEach((test, index) => {
    const result = generateParenthesis(test.input);
    const success = JSON.stringify(result.sort()) === JSON.stringify(test.result.sort());
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}
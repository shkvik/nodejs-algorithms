function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let token of tokens) {
    if (!isNaN(Number(token))) {
      stack.push(Number(token));
    } else {
      const b = stack.pop()!;
      const a = stack.pop()!;
      switch (token) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break; 
        case '/': stack.push(a / b); break; 
      }
    }
  }
  return stack.pop()!;
}

export function evalRPNDBG(){
  const tests = [
    {
      input: ["2", "1", "+", "3", "*"],
      result: 9
    },
    {
      input: ["4", "13", "5", "/", "+"],
      result: 6
    },
    {
      input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"],
      result: 22
    }
  ];
  
  tests.forEach((test, index) => {
    const result = evalRPN(test.input);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}
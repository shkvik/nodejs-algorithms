function removeInvalidParentheses(s: string): string[] {

  const isValid = (str: string): boolean => {
    let count = 0;
    for (let char of str) {
      if (char === '(') count++;
      if (char === ')') count--;
      if (count < 0) return false;
    }
    return count === 0;
  };

  const result: string[] = [];
  const queue = [s];
  const visited = new Set<string>();
  let found = false;

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (isValid(current)) {
      result.push(current);
      found = true;
    }
    if (found) continue;

    for (let i = 0; i < current.length; i++) {
      if (current[i] !== '(' && current[i] !== ')') continue;
      const next = current.slice(0, i) + current.slice(i + 1);
      if (!visited.has(next)) {
        queue.push(next);
        visited.add(next);
      }
    }
  }

  return result.length ? result : [""];
}



function removeInvalidParenthesesDBG(){
  const tests = [
    {
      input: "()())()",
      result: ["()()()", "(())()"]
    },
    {
      input: "(a)())()",
      result: ["(a)()()", "(a())()"]
    },
    {
      input: ")(",
      result: [""]
    }
  ];
  
  tests.forEach((test, index) => {
    const result = removeInvalidParentheses(test.input);
    const success = JSON.stringify(result.sort()) === JSON.stringify(test.result.sort());
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(result)}`);
    }
  });
}

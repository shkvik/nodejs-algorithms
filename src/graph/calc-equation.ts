function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const graph = new Map<string, Map<string, number>>();
  const result: number[] = [];
  
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];
  
    if (!graph.has(a)) graph.set(a, new Map());
    if (!graph.has(b)) graph.set(b, new Map());
  
    graph.get(a).set(b, value);
    graph.get(b).set(a, 1/value);
  }
  
  const dfs = (start: string, end: string, visited: Set<string>): number => {
    if (!graph.has(start) || !graph.has(end)) {
      return -1.0;
    }
    if (start === end) {
      return 1.0;
    }
    visited.add(start);

    for (const [neighbor, neighborVal] of graph.get(start)) {
      if (!visited.has(neighbor)) {
        const result = dfs(neighbor, end, visited);
        if (result !== -1.0) {
          return result * neighborVal
        }
      }
    }
    return -1.0;
  }

  for (const [d, c] of queries) {
    const visited = new Set<string>();
    result.push(dfs(d, c, visited));
  }

  return result;
};

export function calcEquationDBG() {
  const tests = [
    {
      input: {
        equations: [["a", "b"], ["b", "c"]],
        values: [2.0, 3.0],
        queries: [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
      },
      expected: [6.0, 0.5, -1.0, 1.0, -1.0]
    },
    {
      input: {
        equations: [["a", "b"], ["b", "c"], ["bc", "cd"]],
        values: [1.5, 2.5, 5.0],
        queries: [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]]
      },
      expected: [3.75, 0.4, 5.0, 0.2]
    },
    {
      input: {
        equations: [["a", "b"]],
        values: [0.5],
        queries: [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]]
      },
      expected: [0.5, 2.0, -1.0, -1.0]
    }
  ];
  
  tests.forEach((test, index) => {
    const result = calcEquation(test.input.equations, test.input.values, test.input.queries);
    const success = JSON.stringify(result) === JSON.stringify(test.expected);
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected: ${JSON.stringify(test.expected)}`);
      console.log(`got: ${JSON.stringify(result)}`);
    }
  });
  
}

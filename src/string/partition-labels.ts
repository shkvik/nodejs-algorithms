function partitionLabels(s: string): number[] {
  const last: Record<string, number> = {};
  const result: number[] = [];

  for (let i = 0; i < s.length; i++) {
    last[s[i]] = i;
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s[i]]);
    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
};

export function partitionLabelsDBG(){
  const tests = [
    {
      input: "ababcbacadefegdehijhklij",
      expected: [9, 7, 8]
    },
    {
      input: "eccbbbbdec",
      expected: [10]
    }
  ];
  
  tests.forEach((testCase, index) => {
    const result = partitionLabels(testCase.input);
    const success = JSON.stringify(result) === JSON.stringify(testCase.expected);
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected: ${testCase.expected}`);
      console.log(`got: ${result}`);
    }
  });
}
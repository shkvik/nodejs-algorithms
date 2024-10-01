function alienOrder(words: string[]): string {
  const graph: Record<string, Set<string>> = Object.create(null); 
  const inDegree: Record<string, number> = Object.create(null);

  for (const word of words) {
    for (const char of word) {
      if (!graph[char]) {
        graph[char] = new Set();
        inDegree[char] = 0;
      }
    }
  }
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];

    const minLength = Math.min(word1.length, word2.length);
    let foundDifference = false;

    for (let j = 0; j < minLength; j++) {
      if (word1[j] !== word2[j]) {
        if (!graph[word1[j]].has(word2[j])) {
          graph[word1[j]].add(word2[j]);
          inDegree[word2[j]]++;
        }
        foundDifference = true;
        break;
      }
    }
    if (!foundDifference && word1.length > word2.length) {
      return "";
    }
  }
  const queue: string[] = [];
  const order: string[] = [];
  for (const char in inDegree) {
    if (inDegree[char] === 0) {
      queue.push(char);
    }
  }
  while (queue.length > 0) {
    const char = queue.shift()!;
    order.push(char);
    for (const neighbor of graph[char]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  if (order.length === Object.keys(inDegree).length) {
    return order.join("");
  } else {
    return "";
  }
}


export function alienOrderDBG(){
  const tests = [
  {
    input: ["wrt", "wrf", "er", "ett", "rftt"],
    expected: "wertf"
  },
  {
    input: ["z", "x"],
    expected: "zx"
  },
  {
    input: ["z", "x", "z"],
    expected: "" // Цикл в графе — нет корректного порядка
  }
];

tests.forEach((test, index) => {
  const result = alienOrder(test.input);
  const success = result === test.expected;
  if (success) {
    console.log(`Test ${index} success`);
  } else {
    console.log(`Test ${index} fail`);
    console.log(`expected: ${test.expected}`);
    console.log(`got: ${result}`);
  }
});

}
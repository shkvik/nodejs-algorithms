function findItinerary(tickets: string[][]): string[] {
  const adjList: { [key: string]: string[] } = {};

  for (let [from, to] of tickets) {
    if (!adjList[from]) adjList[from] = [];
    adjList[from].push(to);
  }

  for (let city in adjList) {
    adjList[city].sort().reverse();
  }

  const result: string[] = [];
  
  const dfs = (node: string) => {
    const destinations = adjList[node];
    while (destinations && destinations.length > 0) {
      dfs(destinations.pop()!);
    }
    result.push(node);
  };

  dfs("JFK");

  return result.reverse();
}


export function findItineraryDBG(){
  const tests = [
    {
      input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]],
      result: ["JFK", "MUC", "LHR", "SFO", "SJC"]
    },
    {
      input: [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]],
      result: ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]
    }
  ];
  
  tests.forEach((test, index) => {
    const result = findItinerary(test.input);
    const success = JSON.stringify(result) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(result)}`);
    }
  });
}


function criticalConnectionsEZ(n: number, connections: number[][]): number[][] {
  const graph: number[][] = Array.from({ length: n }, () => []);
  const result: number[][] = [];

  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const isConnected = (removedEdge: [number, number]) => {
    const visited: boolean[] = new Array(n).fill(false);
    let count = 0;
    const dfs = (u: number) => {
      visited[u] = true;
      count++;
      for (const v of graph[u]) {
        if (!visited[v] 
            && !(u === removedEdge[0] && v === removedEdge[1]) 
            && !(u === removedEdge[1] && v === removedEdge[0])
        ) {
          dfs(v);
        }
      }
    };
    dfs(0);
    return count === n;
  };

  for (const [u, v] of connections) {
    if (!isConnected([u, v])) {
      result.push([u, v]);
    }
  }

  return result;
}

function criticalConnections(n: number, connections: number[][]): number[][] {
  const graph: number[][] = Array.from({ length: n }, () => []);
  const result: number[][] = [];
  const disc: number[] = new Array(n).fill(-1);
  const low: number[] = new Array(n).fill(-1);
  let time = 0;

  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }
  const dfs = (u: number, parent: number) => {
    disc[u] = low[u] = time++;
    for (const v of graph[u]) {
      if (v === parent){
        continue;
      }; 
      if (disc[v] === -1) {
        dfs(v, u); 
        low[u] = Math.min(low[u], low[v]);
        if (low[v] > disc[u]) {
          result.push([u, v]);
        }
      } else {
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    if (disc[i] === -1) {
      dfs(i, -1);
    }
  }
  return result;
}


export function criticalConnectionsDBG(){

  const tests = [
    {
      input: { n: 4, connections: [[0, 1], [1, 2], [2, 0], [1, 3]] },
      result: [[1, 3]]
    },
    {
      input: { n: 2, connections: [[0, 1]] },
      result: [[0, 1]] 
    },
    {
      input: { n: 6, connections: [[0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [2, 5]] },
      result: [[0, 1]] 
    }
  ];
  
  tests.forEach((test, index) => {
    const result = criticalConnections(test.input.n, test.input.connections);
    const success = JSON.stringify(result) === JSON.stringify(test.result);
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected: ${JSON.stringify(test.result)}`);
      console.log(`got: ${JSON.stringify(result)}`);
    }
  });
  
}
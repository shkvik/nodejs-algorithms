
const connections = [
  [0,1],
  [1,2],
  [2,0],
  [1,3]
]

function criticalConnections(n: number, connections: number[][]): number[][] {
  const graph: number[][] = Array.from({ length: n }, () => []);
  const result: number[][] = [];
  const disc: number[] = new Array(n).fill(-1); // Время открытия вершины
  const low: number[] = new Array(n).fill(-1);  // Минимальное время посещения
  let time = 0;

  // Построение графа
  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
  }

  // Основная функция DFS
  const dfs = (u: number, parent: number) => {
    disc[u] = low[u] = time++; // Инициализация времени открытия и low
    for (const v of graph[u]) {
      if (v === parent) continue; // Игнорируем родительскую вершину

      if (disc[v] === -1) { // Если вершина v еще не посещена
        dfs(v, u); // Рекурсивный DFS

        // Обновляем low[u] на основе дочерней вершины v
        low[u] = Math.min(low[u], low[v]);

        // Если low[v] > disc[u], то (u, v) — критическое соединение
        if (low[v] > disc[u]) {
          result.push([u, v]);
        }
      } else {
        // Обратное ребро, обновляем low[u]
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  };

  // Запуск DFS для всех вершин
  for (let i = 0; i < n; i++) {
    if (disc[i] === -1) {
      dfs(i, -1); // -1 означает, что у начальной вершины нет родителя
    }
  }

  return result;
}


export function criticalConnectionsDBG(){

  const tests = [
    {
      input: { n: 4, connections: [[0, 1], [1, 2], [2, 0], [1, 3]] },
      result: [[1, 3]] // Соединение [1, 3] является критическим
    },
    {
      input: { n: 2, connections: [[0, 1]] },
      result: [[0, 1]] // Единственное соединение [0, 1] является критическим
    },
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
function networkDelayTime(
  times: number[][], 
  n: number, 
  k: number
): number {
  // Граф: узел -> список [сосед, вес]
  const graph: Record<number, [number, number][]> = {}; 
  
  // Построение графа
  for (const [u, v, w] of times) {
    if (!graph[u]) graph[u] = [];
    graph[u].push([v, w]);
  }

  // Инициализация расстояний
  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;

  // Очередь для обработки узлов (минимальная куча)
  // [время, узел]
  const pq: [number, number][] = [[0, k]]; 

  while (pq.length > 0) {
    // Сортировка по времени
    pq.sort((a, b) => a[0] - b[0]); 
    const [time, node] = pq.shift()!;

    // Если время больше уже вычисленного, пропускаем
    if (time > dist[node]) continue;

    // Обработка всех соседей
    if (graph[node]) {
      for (const [neighbor, weight] of graph[node]) {
        const d = time + weight;
        if (d < dist[neighbor]) {
          dist[neighbor] = d;
          pq.push([d, neighbor]);
        }
      }
    }
  }
  // Вычисляем максимальное время до всех узлов
  // Игнорируем 0-й узел
  const maxTime = Math.max(...dist.slice(1));
  return maxTime === Infinity ? -1 : maxTime;
}


export function networkDelayTimeDBG(){
  const tests = [
    {
      input: { times: [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n: 4, k: 2 },
      expected: 2 // Сигнал доходит до всех узлов за 2 единицы времени
    },
    {
      input: { times: [[1, 2, 1]], n: 2, k: 1 },
      expected: 1 // Сигнал доходит до узла 2 за 1 единицу времени
    },
    {
      input: { times: [[1, 2, 1]], n: 2, k: 2 },
      expected: -1 // Узел 1 не может быть достигнут из узла 2
    }
  ];
  
  tests.forEach((test, index) => {
    const result = networkDelayTime(test.input.times, test.input.n, test.input.k);
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
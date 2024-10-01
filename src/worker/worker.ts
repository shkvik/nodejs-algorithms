import workerpool from 'workerpool';

// Задача с задержкой, которая симулирует долгую операцию
function longComputationTask(input: number): Promise<string> {
  console.log(`Task ${input} started`);

  return new Promise((resolve) => {
    setTimeout(() => {
      const result = `Task ${input} completed`;
      console.log(result);
      resolve(result);
    }, 5000); // Задержка 5 секунд для демонстрации параллельной работы
  });
}

// Экспортируем задачу через workerpool
workerpool.worker({
  longComputationTask: longComputationTask
});

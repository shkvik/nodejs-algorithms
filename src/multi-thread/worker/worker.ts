import { parentPort, threadId } from 'worker_threads';

export default ({ taskId, duration }: { taskId: number; duration: number }) => {
  const start = Date.now();
  const end = start + duration;

  // "Тяжёлая" задача — имитация загрузки CPU
  while (Date.now() < end) {
    // Пустой цикл для загрузки процессора
  }

  const actualDuration = Date.now() - start;
  return `Task ${taskId} completed after ${actualDuration} ms (on thread: ${threadId})`;
};
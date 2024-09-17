import { Presets, SingleBar } from "cli-progress";

export const defaultComparator = <T>(a: T, b: T) => (a > b ? 1 : a < b ? -1 : 0);



export function testSortingPerformance<T>(sortMethod: keyof Array<T>, arr: T[]): void {

  const uploadingBar = new SingleBar({
    format: `progress |{bar}| {percentage}% | operations {value}/{total}`,
  }, Presets.legacy);
  
  uploadingBar.start(Math.floor(arr.length * Math.log(arr.length)), 0);
  
  const progressComparator = <T>(a: T, b: T) => {
    uploadingBar.increment();
    return (a > b ? 1 : a < b ? -1 : 0)
  };

  // Копируем массив, чтобы сортировки не влияли друг на друга
  const arrayToSort = [...arr];

  // Измеряем время выполнения
  console.time(`${String(sortMethod)} time`);
  const startMemory = process.memoryUsage().heapUsed;
  
  // Вызываем метод сортировки, определенный в Array.prototype
  (arrayToSort as any)[sortMethod](progressComparator);
  
  const endMemory = process.memoryUsage().heapUsed;

  uploadingBar.stop();
  console.timeEnd(`${String(sortMethod)} time`);
  
  

  // Измеряем память
  const memoryUsed = (endMemory - startMemory) / 1024 / 1024;
  console.log(`${String(sortMethod)} memory usage: ${memoryUsed.toFixed(2)} MB`);
}
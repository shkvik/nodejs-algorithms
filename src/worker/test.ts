import workerpool from 'workerpool';

function longComputationTask(input: number): number {
  let result = 0;
  for (let i = 0; i < 1e9; i++) {
    result += Math.sin(input + i);
  }
  return result;
}

workerpool.worker({
  longComputationTask: longComputationTask
});

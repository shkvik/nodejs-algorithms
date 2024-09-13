async function promisePool(functions: (() => Promise<any>)[], n: number): Promise<void> {
  const pool = new Array(n).fill(null).map(() => Promise.resolve());

  const executeNext = async (index: number): Promise<void> => {
    if (index >= functions.length) return;
    await functions[index]().finally(() => executeNext(index + n));
  }

  await Promise.all(pool.map((_, i) => executeNext(i)));
}

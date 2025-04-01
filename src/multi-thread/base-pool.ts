import { Piscina } from "piscina";
import { join } from 'path'

const piscina = new Piscina({
  filename: join(__dirname, 'worker/worker.js'),
  maxThreads: 12
});

async function main() {
  const now = Date.now();

  const tasks = Array.from({ length: 24 }, (_, idx) => idx).map((id) =>
    piscina.run({ taskId: id, duration: 3000 })
  );

  const results = await Promise.all(tasks);
  const totalTime = Date.now() - now;

  results.forEach((res) => console.log(res));
  console.log(`Total time elapsed: ${totalTime} ms`);
}
function maxDistToClosest(seats: number[]): number {
  let maxDistance = 0;
  let lastOccupied = -1;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      if (lastOccupied === -1) {
        maxDistance = i;
      } else {
        maxDistance = Math.max(maxDistance, Math.floor((i - lastOccupied) / 2));
      }
      lastOccupied = i;
    }
  }
  maxDistance = Math.max(maxDistance, seats.length - 1 - lastOccupied);
  return maxDistance;
}


function maxDistToClosestDBG(){
  const tests = [
    {
      input: [1, 0, 0, 0, 1, 0, 1],
      result: 2 // Максимальное расстояние до ближайшего человека: 2 (место 2 или 3)
    },
    {
      input: [1, 0, 0, 0],
      result: 3 // Максимальное расстояние до ближайшего человека: 3 (место 3)
    },
    {
      input: [0, 1],
      result: 1 // Максимальное расстояние до ближайшего человека: 1 (место 0)
    }
  ];
  
  tests.forEach((test, index) => {
    const result = maxDistToClosest(test.input);
    const success = result === test.result;
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}
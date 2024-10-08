function minMeetingRooms(intervals: number[][]): number {
  if (intervals.length === 0) return 0;

  const startTimes = intervals.map(i => i[0]).sort((a, b) => a - b);
  const endTimes = intervals.map(i => i[1]).sort((a, b) => a - b);

  let startPointer = 0;
  let endPointer = 0;
  let roomsNeeded = 0;
  let maxRooms = 0;

  while (startPointer < intervals.length) {
    if (startTimes[startPointer] < endTimes[endPointer]) {
      roomsNeeded++;
      startPointer++;
    } else {
      roomsNeeded--;
      endPointer++;
    }
    maxRooms = Math.max(maxRooms, roomsNeeded);
  }

  return maxRooms;
}

export function minMeetingRoomsDBG(){
  const tests = [
    {
      input: [[0, 30], [5, 10], [15, 20]],
      result: 2
    },
    {
      input: [[7, 10], [2, 4]],
      result: 1
    }
  ];
  
  tests.forEach((test, index) => {
    const result = minMeetingRooms(test.input);
    if (result === test.result) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${test.result}`);
      console.log(`got ${result}`);
    }
  });
}


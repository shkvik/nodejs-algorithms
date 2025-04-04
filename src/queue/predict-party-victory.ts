/**
 * @problem 
 * [649. Dota2 Senate](https://leetcode.com/problems/dota2-senate)
 */
function predictPartyVictory(senate: string): string {
  const n = senate.length;

  const rQueue: number[] = [];
  const dQueue: number[] = [];

  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      rQueue.push(i);
    } else {
      dQueue.push(i);
    }
  }

  while (rQueue.length > 0 && dQueue.length > 0) {
    const rTurn = rQueue.shift();
    const dTurn = dQueue.shift();
    
    if (dTurn < rTurn) {
      dQueue.push(dTurn + n);
    } else {
      rQueue.push(rTurn + n);
    }
  }
  return rQueue.length === 0 
    ? "Dire"
    : "Radiant"
};



export function dota2SenateDBG() {
  const tests = [
    {
      input: 'DDRRR',
      result: 'Dire'
    },
    {
      input: 'DRRDRDRDRDDRDRDRRDR',
      result: 'Radiant'
    },
    {
      input: 'RRDDD',
      result: 'Radiant'
    }, 
    {
      input: 'RRRRRDDDD',
      result: 'Radiant'
    },
  ];

  tests.forEach((test, index) => {
    const result = predictPartyVictory(test.input);
    const success = result === test.result;
    if (success) {
      console.log(`Test ${index} success`);
    } else {
      console.log(`Test ${index} fail`);
      console.log(`expected "${test.result}"`);
      console.log(`got "${result}"`);
    }
  });
}
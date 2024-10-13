import { checkInclusionDBG } from "./string/two_pointers/check-inclusion";


const queries = [2,3,4,5]
const input = [[1,4],[2,4],[3,6],[4,4]]


function minInterval(intervals: number[][], queries: number[]): number[] {
  const responses = new Array(queries.length).fill(-1);
  const getResult = (query: number) => {
    let c = -1;
    for (let i = 0; i < intervals.length; i++) {
      if (query >= intervals[i][0] && query <= intervals[i][1]) {
        if (c !== -1) {
          const diffStart = Math.abs(intervals[i][0] - query) <= Math.abs(intervals[c][0] - query);
          const diffEnd = Math.abs(intervals[i][1] - query) <= Math.abs(intervals[c][1] - query);
          if (diffStart && diffEnd) {
            c = i;
          }
        } else {
          c = i;
        }
      }
    }
    return c !== -1 ? intervals[c][1] - intervals[c][0] + 1 : -1;
  }

  for (let i = 0; i < queries.length; i++) {
    responses[i] = getResult(queries[i]);
  }

  return responses;
};


//[3,3,1,4]
console.log(minInterval(input, queries));
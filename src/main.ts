import { bfsAllPaths } from "./bst/problems/bfs-all-paths.task";
import { Graph } from "./graph";

const graph3: Graph = {
  A: ['B', 'C'],
  B: ['C', 'D'],
  C: ['D'],
  D: ['E'],
  E: []
};
const start3 = 'A';
const end3 = 'D';
// Ожидаемый результат: [['A', 'B', 'D'], ['A', 'B', 'C', 'D'], ['A', 'C', 'D']]

console.log(bfsAllPaths(graph3, start3, end3));
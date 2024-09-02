import { bfsAllPaths } from "./bst/problems/bfs-all-paths.task";

const graph: { [key: string]: string[] } = {
  A: ['B', 'C'],
  B: ['C', 'D'],
  C: ['D'],
  D: ['E'],
  E: []
};
const start = 'A';
const end = 'D';

[['A', 'B', 'C', 'D'], ['A', 'B', 'D'], ['A', 'C', 'D']]

console.log(bfsAllPaths(graph, start, end));
import { Graph } from "src/graph";

export function bfsAllPaths(graph: Graph, start: string, end: string): string[][]{
  const paths: string[][] = [];
  const queue: string[][] = [[start]];

  while(queue.length > 0){
    const path = queue.shift();
    const node = path[path.length-1];
    
    if(node === end){
      paths.push(path);
    } else {
      const neighbors = graph[node];
      for(const neighbor of neighbors){
        queue.push([...path, neighbor]);
      }
    }
  }

  return paths;
}
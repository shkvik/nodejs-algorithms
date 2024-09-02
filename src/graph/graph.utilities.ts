import { Graph } from "./graph.structure";

function graphToAdjacencyMatrix(graph: Graph): number[][] {
  const nodes = Object.keys(graph);
  const n = nodes.length;
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  const nodeIndex: { [key: string]: number } = {};
  nodes.forEach((node, index) => {
    nodeIndex[node] = index;
  });
  nodes.forEach((node, i) => {
    graph[node].forEach(neighbor => {
      const j = nodeIndex[neighbor];
      matrix[i][j] = 1;
    });
  });
  return matrix;
}

function printFormattedMatrix(matrix: number[][], nodes: string[]): void {
  const cellWidth = 3;
  const formatCell = (value: string | number) => value.toString().padStart(cellWidth);
  const header = " ".repeat(cellWidth) + nodes.map(node => formatCell(node)).join("");
  console.log(header);
  console.log(" ".repeat(cellWidth) + "-".repeat(nodes.length * cellWidth));
  for (let i = 0; i < matrix.length; i++) {
    const row = nodes[i] + " |" + matrix[i].map(value => formatCell(value)).join("");
    console.log(row);
  }
}

export function printGraph(graph: Graph): void {
  const adjacencyMatrix = graphToAdjacencyMatrix(graph);
  printFormattedMatrix(adjacencyMatrix, Object.keys(graph));
}
import { bfsAllPaths } from "./bfs-all-paths.task";


describe('DFS', () => {
  it(`Simple straight path`, () => {


    const graph = {
      A: ['B'],
      B: ['C'],
      C: ['D'],
      D: []
    };
    const start = 'A';
    const end = 'D';
    const expectedResult = [['A', 'B', 'C', 'D']];

    const result = bfsAllPaths(graph, start, end);
    expect(result).toStrictEqual(expectedResult)
  });

  it(`Two possible paths`, () => {
    // Test: Two possible paths
    const graph = {
      A: ['B', 'C'],
      B: ['D'],
      C: ['D'],
      D: []
    };
    const start = 'A';
    const end = 'D';
    // Test Name: "Two different paths from A to D"
    const expectedResult = [['A', 'B', 'D'], ['A', 'C', 'D']]; // Ожидаемый результат
    console.time('Simple straight path');
    const result = bfsAllPaths(graph, start, end);
    console.timeEnd('Simple straight path');

    expect(result).toStrictEqual(expectedResult)
  });

  it(`Multiple branches`, () => {
    const graph = {
      A: ['B', 'C', 'D'],
      B: ['E'],
      C: ['E'],
      D: ['E'],
      E: []
    };
    const start = 'A';
    const end = 'E';
    // Test Name: "Multiple branches from A to E"
    const expectedResult = [['A', 'B', 'E'], ['A', 'C', 'E'], ['A', 'D', 'E']]; // Ожидаемый результат


    const result = bfsAllPaths(graph, start, end);

    expect(result).toStrictEqual(expectedResult)
  });

  it(`Circular path`, () => {
    // Test: Circular path
    const graph = {
      A: ['B'],
      B: ['C'],
      C: ['A', 'D'],
      D: []
    };
    const start = 'A';
    const end = 'D';
    // Test Name: "Circular path from A to D"
    const expectedResult = [['A', 'B', 'C', 'D']]; // Ожидаемый результат

    const result = bfsAllPaths(graph, start, end);

    expect(result).toStrictEqual(expectedResult)
  });

  it(`No path available`, () => {
    const graph = {
      A: ['B'],
      B: ['C'],
      C: [],
      D: ['E'],
      E: []
    };
    const start = 'A';
    const end = 'D';
    // Test Name: "No path from A to D"
    const expectedResult: string[][] = []; // Ожидаемый результат: пустой массив, поскольку пути нет

    const result = bfsAllPaths(graph, start, end);

    expect(result).toStrictEqual(expectedResult)
  });

  it(`Disconnected components`, () => {

    const graph = {
      A: ['B', 'C'],
      B: ['D'],
      C: ['E'],
      D: [],
      E: [],
      F: ['G'],
      G: []
    };
    const start = 'A';
    const end = 'E';
    // Test Name: "Disconnected components, path from A to E"
    const expectedResult = [['A', 'C', 'E']]; // Ожидаемый результат

    const result = bfsAllPaths(graph, start, end);

    expect(result).toStrictEqual(expectedResult)
  });

});
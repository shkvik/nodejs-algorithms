/** 
 * Пример использования:
 * @default 
 * const graph: Graph = {
 *   A: ['B', 'C'],
 *   B: ['A', 'D'],
 *   C: ['A', 'D'],
 *   D: ['B', 'C', 'E'],
 *   E: ['D'],
 * };
 */
export type Graph = {
  [key: string]: string[]
} 
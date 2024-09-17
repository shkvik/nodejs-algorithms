export declare global {
  interface Array<T> {
    /**
     * @default runtime: O(n^2) memory: O(1)
     */
    bubbleSort(compareFn?: (a: T, b: T) => number): this;
    /**
     * @default runtime: O(n^2) memory: O(1)
     */
    selectionSort(compareFn?: (a: T, b: T) => number): this;
    /**
     * @default runtime: O(n^2) memory: O(1)
     */
    insertionSort(compareFn?: (a: T, b: T) => number): this;
    /**
     * @default runtime: O(n log n) memory: O(n)
     */
    mergeSort(compareFn?: (a: T, b: T) => number): this;
    /**
     * @default
     * runtime: O(n log n) (average case), O(n^2) (worst case) 
     * memory: O(log n) (for recursion stack)
     */
    quickSort(compareFn?: (a: T, b: T) => number): this;
    /**
     * @default runtime: O(n log n) memory: O(1)
     */
    heapSort(compareFn?: (a: T, b: T) => number): this;
    /**
     * @default runtime: O(n * k) memory: O(n)
     */
    radixSort(): this;
    /**
     * @default runtime: O(n * k) memory: O(n)
     */
    countingSort(): this;
    /**
     * @default runtime: O(n + k) memory: O(n + k)
     */
    bucketSort(): this;
    /**
     * @default 
     * runtime: O(n log n) (average case), O(n^2) (worst case) 
     * memory: O(1) (for recursion stack)
     */
    shellSort(compareFn?: (a: T, b: T) => number): this;
    /**
     * @default runtime: O(n ^ 2) memory: O(1)
     */
    cocktailSort(compareFn?: (a: T, b: T) => number): this;
    /**
     * @default runtime: O(n ^ 2) memory: O(1)
     */
    combSort(compareFn?: (a: T, b: T) => number): this;
    /**
     * @default runtime: O(n log n) memory: O(n)
     */
    timSort(compareFn?: (a: T, b: T) => number): this; 
  }
}


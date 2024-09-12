class LRUCache {
  private cache: Map<number, number>;
  private capacity: number;

  constructor(capacity: number) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const leastUsedKey = this.cache.keys().next().value;
      this.cache.delete(leastUsedKey);
    }

    this.cache.set(key, value);
  }
}


export function testLRU(){
  const tests = [
    {
      input: [
        ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'],
        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
      ],
      result: [null, null, 1, null, -1, null, -1, 3, 4]
    }
  ];
  
  tests.forEach((test, index) => {
    const [commands, values] = test.input;
    const cache = new LRUCache(values[0][0] as number);
    const result = [];
    
    for (let i = 1; i < commands.length; i++) {
      if (commands[i] === 'get') {
        result.push(cache.get(values[i][0] as number));
      } else if (commands[i] === 'put') {
        cache.put(values[i][0] as number, values[i][1] as number);
        result.push(null);
      }
    }
  
    const success = JSON.stringify(result) === JSON.stringify(test.result);
    if (success) {
      console.log(`${index} success`);
    } else {
      console.log(`${index} fail`);
      console.log(`expected ${JSON.stringify(test.result)}`);
      console.log(`got ${JSON.stringify(result)}`);
    }
  });
}
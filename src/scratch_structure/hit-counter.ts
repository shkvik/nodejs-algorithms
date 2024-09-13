class HitCounter {
  private hits: [number, number][];

  constructor() {
    this.hits = [];
  }

  hit(timestamp: number): void {
    if (this.hits.length > 0 && this.hits[this.hits.length - 1][0] === timestamp) {
      this.hits[this.hits.length - 1][1]++;
    } else {
      this.hits.push([timestamp, 1]);
    }
  }

  getHits(timestamp: number): number {
    while (this.hits.length > 0 && this.hits[0][0] <= timestamp - 300) {
      this.hits.shift();
    }
    let totalHits = 0;
    for (const [time, count] of this.hits) {
      totalHits += count;
    }
    return totalHits;
  }
}


const hitCounter = new HitCounter();
hitCounter.hit(1);
hitCounter.hit(2);
hitCounter.hit(3);
console.log(hitCounter.getHits(4)); // Ожидаемый результат: 3
hitCounter.hit(300);
console.log(hitCounter.getHits(300)); // Ожидаемый результат: 4
console.log(hitCounter.getHits(301)); // Ожидаемый результат: 3
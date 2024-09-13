class RecentCounter {
  private queue: number[];

  constructor() {
    this.queue = [];
  }

  ping(t: number): number {
    this.queue.push(t);

    while (this.queue.length > 0 && this.queue[0] < t - 3000) {
      this.queue.shift();
    }
    return this.queue.length;
  }
}

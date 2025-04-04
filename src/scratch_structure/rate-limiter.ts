class RateLimiter {
  private last: number;
  
  constructor() {
    this.last = 0;
  }

  public async wait(interval: number): Promise<void> {
    const curr = new Date().getTime();
    const diff = this.last - curr;

    if (diff >= 0) {
      this.last = this.last + interval;
      await new Promise(res => setTimeout(res, diff))
    } else {
      this.last = curr + interval;
    }
  }
}

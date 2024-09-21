
/**
 * @default
 * const emitter = new EventEmitterScratch();
 * 
 * const sub1 = emitter.subscribe('event1', (x: number) => x + 1);
 * const sub2 = emitter.subscribe('event2', (x: number) => x * 2);
 * 
 * sub1.unsubscribe()
 */
export class EventEmitterScratch {
  private events: Map<string, Function[]>;

  constructor() {
    this.events = new Map();
  }

  subscribe(eventName: string, callback: Function) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    this.events.get(eventName)!.push(callback);

    return {
      unsubscribe: function() {
        const callbacks = this.events.get(eventName);
        if (callbacks) {
          const index = callbacks.indexOf(callback);
          if (index !== -1) {
            callbacks.splice(index, 1);
          }
        }
      }
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    const callbacks = this.events.get(eventName);
    if (!callbacks) {
      return [];
    }

    return callbacks.map(callback => callback(...args));
  }
}
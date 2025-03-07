import Counter from './counter';

class MetricsRegistry {
  private counters: { [name: string]: Counter };

  constructor() {
    this.counters = {};
  }

  getCounter(name: string) {
    if (!this.counters[name]) {
      this.counters[name] = new Counter(name);
    }
    return this.counters[name];
  }

  reportAll() {
    Object.values(this.counters).forEach(counter => counter.report());
  }
}

const metricsRegistry = new MetricsRegistry();
export default metricsRegistry;

class Counter {
  private name: string;
  private count: number;

  constructor(name: string) {
    this.name = name;
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  report() {
    console.log(`Counter: ${this.name}`);
    console.log(`Value: ${this.count}`);
  }
}

export default Counter;

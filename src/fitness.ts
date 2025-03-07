const FITNESS_FACTOR = 1073741823.0;

export default function fitness(x: number): number {
  return Math.pow(x / FITNESS_FACTOR, 10);
}
import bernoulli from '@stdlib/random/base/bernoulli';

export default function flip(probability: number): boolean {
  return bernoulli(probability) > 0;
}
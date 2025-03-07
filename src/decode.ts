import { Chromosome } from "./types";

export default function decode(chromosome: Chromosome, chromosomeLength: number): number {
  let x = 0;
  for (let i = 0; i < chromosomeLength; i++) {
    x = x * 2 + (chromosome[i] ? 1 : 0);
  }
  return x;
}

import flip from "./flip";
import metricsRegistry from "./metrics_registry";
import mutate from "./mutate";
import { Chromosome } from "./types";

export default function crossover(parent1: Chromosome, parent2: Chromosome, chromosomeLength: number, crossoverProbability: number, mutationProbability: number): [Chromosome, Chromosome, number] {
  let crossoverPoint: number;
  if (flip(crossoverProbability)) {
    crossoverPoint = Math.floor(Math.random() * chromosomeLength);
    metricsRegistry.getCounter('crossovers').increment();
  } else {
    crossoverPoint = chromosomeLength;
  }

  let child1: Chromosome = [];
  let child2: Chromosome = [];

  for (let i = 0; i < crossoverPoint; i++) {
    child1.push(mutate(parent1[i], mutationProbability));
    child2.push(mutate(parent2[i], mutationProbability));
  }

  if (crossoverPoint !== chromosomeLength) {
    for (let i = crossoverPoint; i < chromosomeLength; i++) {
      child1.push(mutate(parent2[i], mutationProbability));
      child2.push(mutate(parent1[i], mutationProbability));
    }
  }

  return [child1, child2, crossoverPoint];
}
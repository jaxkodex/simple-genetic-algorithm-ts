import crossover from "./crossover";
import decode from "./decode";
import fitness from "./fitness";
import select from "./select";
import { Population } from "./types";

export default function generate(populationSize: number, fitnessSum: number, oldPopulation: Population, newPopulation: Population, chromosomeLength: number, crossoverProbability: number, mutationProbability: number) {
  let mate1: number;
  let mate2: number;
  for (let i = 0; i < populationSize; i++) {
    mate1 = select(populationSize, fitnessSum, oldPopulation);
    mate2 = select(populationSize, fitnessSum, oldPopulation);

    let [child1, child2, crossoverPoint] = crossover(oldPopulation[mate1].chromosome, oldPopulation[mate2].chromosome, chromosomeLength, crossoverProbability, mutationProbability);

    newPopulation[i].chromosome = child1
    newPopulation[i].x = decode(child1, chromosomeLength)
    newPopulation[i].fitness = fitness(newPopulation[i].x)
    newPopulation[i].parent1 = mate1
    newPopulation[i].parent2 = mate2
    newPopulation[i].crossoverPoint = crossoverPoint

    newPopulation[++i].chromosome = child2
    newPopulation[i].x = decode(child2, chromosomeLength)
    newPopulation[i].fitness = fitness(newPopulation[i].x)
    newPopulation[i].parent1 = mate1
    newPopulation[i].parent2 = mate2
    newPopulation[i].crossoverPoint = crossoverPoint
  }
}
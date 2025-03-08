import flip from "./flip";
import generate from "./generate";
import { Population } from "./types";

export function initialize(oldPopulation: Population, newPopulation: Population, chromosomeLength: number, populationSize: number) {
  for (let i = 0; i < populationSize; i++) {
    oldPopulation[i] = {
      chromosome: new Array(chromosomeLength),
      x: 0,
      fitness: 0.0,
      parent1: 0,
      parent2: 0,
      crossoverPoint: 0
    }
    newPopulation[i] = {
      chromosome: new Array(chromosomeLength),
      x: 0,
      fitness: 0.0,
      parent1: 0,
      parent2: 0,
      crossoverPoint: 0
    }
    for (let j = 0; j < chromosomeLength; j++) {
      oldPopulation[i].chromosome[i] = flip(0.5);
      newPopulation[i].chromosome[i] = false;
    }
  }
}

export default function compute(chromosomeLength: number, populationSize: number, crossoverProbability: number, mutationProbability: number): number {
  let generations = 0
  let oldPopulation: Population = []
  let newPopulation: Population = []
  let best = 0;
  let bestGeneration = 0
  let fitnessSum = 0.0
  let maxGenerations = 1000

  initialize(oldPopulation, newPopulation, chromosomeLength, populationSize)

  do {
    generate(populationSize, fitnessSum, oldPopulation, newPopulation, chromosomeLength, crossoverProbability, mutationProbability)
    generations++
    oldPopulation = newPopulation

    let j = 0
    for (let i = 1; i < populationSize-1; i++) {
      if (oldPopulation[i].fitness > oldPopulation[j].fitness) {
        j = i
      }
    }
    if (best < oldPopulation[j].x) {
      best = oldPopulation[j].x
      bestGeneration = generations
    }
  } while (generations < maxGenerations)

  return best
}

export interface StepRequest {
  chromosomeLength: number
  oldPopulation: Population
  newPopulation: Population
  populationSize: number
  fitnessSum: number
  crossoverProbability: number
  mutationProbability: number
}

export function step(props: StepRequest) {
  const { chromosomeLength, oldPopulation, newPopulation, populationSize, fitnessSum, crossoverProbability, mutationProbability } = props
  generate(populationSize, fitnessSum, oldPopulation, newPopulation, chromosomeLength, crossoverProbability, mutationProbability)
}
import { Population } from "./types";

export default function select(populationSize: number, fitnessSum: number, population: Population): number {
  let random: number;
  let partialSum = 0.0;
  let i = 0;

  random = Math.random() * fitnessSum;

  do {
    partialSum += population[i].fitness;
    i++;
  } while (partialSum < random && i < populationSize-1);

  return i;
}
import flip from "./flip";
import metricsRegistry from "./metrics_registry";
import { Allele } from "./types";

export default function mutate(allele: Allele, mutationProbability: number): Allele {
  let mutate = flip(mutationProbability);
  if (mutate) {
    metricsRegistry.getCounter('mutations').increment();
    return !allele;
  }
  return allele;
}
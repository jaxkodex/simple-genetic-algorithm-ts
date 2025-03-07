export type Allele = boolean;
export type Chromosome = Allele[];

export interface Individual {
  chromosome: Chromosome;
  x: number;
  fitness: number;
  parent1: number;
  parent2: number;
  crossoverPoint: number;
}

export type Population = Individual[];
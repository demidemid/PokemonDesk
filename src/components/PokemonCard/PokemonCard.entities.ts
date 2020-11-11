export interface IPokemonStat {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface IPokemonCard {
  id: number;
  nameClean: string;
  abilities: string[];
  stats: IPokemonStat;
  types: string[];
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  isDefault: boolean;
  order: 1;
  weight: 69;
}

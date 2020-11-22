/* eslint-disable camelcase */
export interface IPokemonStat {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface IPokemonCard {
  id: number;
  name: string;
  types: string[];
  img: string;
  stats: IPokemonStat;
  name_clean?: string;
  abilities?: string[];
  base_experience?: number;
  height?: number;
  is_default?: boolean;
  order?: 1;
  weight?: 69;
}

export interface IColorCodeByType {
  types: string[];
  colorCode: string;
}

export const colorTypes: IColorCodeByType[] = [
  {
    types: [`stile`, `dark`, `rock`],
    colorCode: `#A1A1A1`,
  },
  {
    types: [`grass`, `bug`],
    colorCode: `#70A83B`,
  },
  {
    types: [`ice`, `water`],
    colorCode: `#A2CFF0`,
  },
  {
    types: [`fire`, `fighting`, `dragon`],
    colorCode: `#F76545`,
  },
  {
    types: [`normal`, `gosth`],
    colorCode: `#76AADB`,
  },
  {
    types: [`posion`, `psychic`, `fairy`, `ghost`],
    colorCode: `#A974BC`,
  },
  {
    types: [`ground`],
    colorCode: `#9B897B`,
  },
  {
    types: [`electric`],
    colorCode: `#F7C545`,
  },
];

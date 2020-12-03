import { IColorCodeByType } from '../components/PokemonCard/PokemonCard.entities';
import getColorCode from './getColorCode';

const colorTypes: IColorCodeByType[] = [
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

describe(`getColorCode`, () => {
  test(`Должен вернуть цвет #9B897B на тип ground`, () => {
    const color = getColorCode(`ground`, colorTypes);
    expect(color).toBe(`#9B897B`);
  });

  test(`Должен вернуть первый цвет если тип не указан`, () => {
    const color = getColorCode(``, colorTypes);
    expect(color).toBe(`#A1A1A1`);
  });
});

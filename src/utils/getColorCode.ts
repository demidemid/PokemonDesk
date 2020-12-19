import { IColorCodeByType } from '../components/PokemonCard/PokemonCard.entities';

const getColorCode = (type: string, colorTypes: IColorCodeByType[]): string => {
  let res: string = ``;

  for (const colorType of colorTypes) {
    if (colorType.types.includes(type)) {
      res = colorType.colorCode;
    }
  }

  return res || colorTypes[0].colorCode;
};

export default getColorCode;

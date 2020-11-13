import React from 'react';
import Heading from '../Heading';
import { IPokemonStat, IColorCodeByType, colorTypes } from './PokemonCard.entities';

import s from './PokemonCard.module.scss';

interface IPokemonProps {
  name: string;
  types: string[];
  img: string;
  stats: IPokemonStat;
}

const PokemonCard: React.FC<IPokemonProps> = ({ name, types, img, stats }) => {
  // eslint-disable-next-line no-shadow
  const getColorCode = (type: string, colorTypes: IColorCodeByType[]): string => {
    let res: string = ``;

    for (const colorType of colorTypes) {
      if (colorType.types.includes(type)) {
        res = colorType.colorCode;
      }
    }

    return res;
  };

  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading level={5}>{name}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats['special-attack']}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats['special-defense']}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type: any) => (
            <span key={type} className={s.label} style={{ background: getColorCode(type, colorTypes) }}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap} style={{ background: getColorCode(types[0], colorTypes) }}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;

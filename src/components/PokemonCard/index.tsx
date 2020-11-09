import React from 'react';
import Heading from '../Heading';
import { IPokemonStat } from './PokemonCard.entities';

import s from './PokemonCard.module.scss';

interface IPokemonProps {
  name: string;
  types: string[];
  img: string;
  stats: IPokemonStat;
}

const PokemonCard: React.FC<IPokemonProps> = ({ name, types, img, stats }) => {
  const { specialAttack, specialDefense } = stats;
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading level={5}>{name}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{specialAttack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{specialDefense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type: any) => (
            <span key={type} className={s.label}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;

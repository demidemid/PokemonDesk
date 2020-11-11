import React from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';
import POKEMONS from './data';
import s from './Pokedex.module.scss';

const Pokedex = () => {
  return (
    <section className={s.root}>
      <Heading level={4}>
        800 <strong className={s.strongWord}>Pokemons</strong> for you to choose your favorite
      </Heading>
      <ul className={s.cardBlock}>
        {POKEMONS.map(({ id, name, types, img, stats }) => (
          <li key={id} className={s.cardWrapper}>
            <PokemonCard name={name} types={types} img={img} stats={stats} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pokedex;

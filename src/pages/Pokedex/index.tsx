import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import Loader from '../../components/Loader';
import PokemonCard from '../../components/PokemonCard';
import s from './Pokedex.module.scss';

const usePokemons = () => {
  // Не могу сказать, что способо на Хуках тут получился более
  // лаконичный, чем на async/await
  // может как то можно это упростить?
  const [data, setData] = useState({
    count: null,
    limit: null,
    offset: null,
    pokemons: [
      {
        id: null,
        name: ``,
        types: [``],
        img: ``,
        stats: {
          hp: 1,
          attack: 1,
          defense: 1,
          'special-attack': 1,
          'special-defense': 1,
          speed: 1,
        },
      },
    ],
    total: null,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://zar.hosthot.ru/api/v1/pokemons`);
        const result = await response.json();

        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <Loader>Loading...</Loader>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <section className={s.root}>
      <Heading level={4}>
        {data?.total} <strong className={s.strongWord}>Pokemons</strong> for you to choose your favorite
      </Heading>
      <ul className={s.cardBlock}>
        {data?.pokemons.map(({ id, name, types, img, stats }) => (
          <li key={id} className={s.cardWrapper}>
            <PokemonCard name={name} types={types} img={img} stats={stats} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pokedex;

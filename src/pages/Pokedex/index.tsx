import React, { useState } from 'react';
// import Filter from '../../components/Filter';
import Heading from '../../components/Heading';
import Loader from '../../components/Loader';
import PokemonCard from '../../components/PokemonCard';
import { IPokemonCard } from '../../components/PokemonCard/PokemonCard.entities';
import useData from '../../hooks/getData';
import s from './Pokedex.module.scss';

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState(``);
  const [query, setQuery] = useState({});
  const { data, isLoading, isError } = useData(`getPokemons`, query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((search) => ({
      ...search,
      name: e.target.value,
    }));
  };

  const isHasQueryParams: boolean = Object.keys(query).length > 0;

  if (isLoading && !isHasQueryParams) {
    return <Loader>Loading...</Loader>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  // <Filter />
  return (
    <section className={s.root}>
      <Heading level={4}>
        {data?.total || 0} <strong className={s.strongWord}>Pokemons</strong> for you to choose your favorite
      </Heading>
      <div className={s.filterWrapper}>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
      </div>
      <ul className={s.cardBlock}>
        {isLoading && isHasQueryParams ? (
          <Loader>Loading...2</Loader>
        ) : (
          data?.pokemons.map((pokemonCard: IPokemonCard) => {
            const { id, name, types, img, stats } = pokemonCard;

            return (
              <li key={id} className={s.cardWrapper}>
                <PokemonCard name={name} types={types} img={img} stats={stats} />
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
};

export default PokedexPage;

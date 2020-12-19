import React, { useState } from 'react';
import { A } from 'hookrouter';
import Filter from '../../components/Filter';
import Heading from '../../components/_common/Heading';
import Loader from '../../components/Loader';
import PokemonCard from '../../components/PokemonCard';
import { IPokemonCard } from '../../components/PokemonCard/PokemonCard.entities';
import useData from '../../hooks/getData';
import useDebounce from '../../hooks/useDebounce';
import { IPokemons } from '../../interface/pokemons';
import s from './Pokedex.module.scss';
import { LinkRoutes } from '../../routes';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState(``);
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 500);
  const { data, isLoading, isError } = useData<IPokemons>(`getPokemons`, query, [debouncedValue]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    setQuery((stateQuery: IQuery) => ({
      ...stateQuery,
      name: value,
    }));
  };

  const setInputSearchValue = (value: string) => {
    handleSearchChange(value);
  };

  const isHasQueryParams: boolean = Object.keys(query).length > 0;

  if (isLoading && !isHasQueryParams) {
    return <Loader>Loading...</Loader>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <section className={s.root}>
      <Heading level={4}>
        {(data && data?.total) || 0} <strong className={s.strongWord}>Pokemons</strong> for you to choose your favorite
      </Heading>
      <div className={s.filterWrapper}>
        <Filter ssValue={setInputSearchValue} />
      </div>
      <ul className={s.cardBlock}>
        {isLoading && isHasQueryParams ? (
          <Loader>Loading...2</Loader>
        ) : (
          data?.pokemons.map((pokemonCard: IPokemonCard) => {
            const { id, name, types, img, stats } = pokemonCard;

            return (
              <li key={id} className={s.cardWrapper}>
                <A href={`${LinkRoutes.POKEDEX}/${id}`}>
                  <PokemonCard name={name} types={types} img={img} stats={stats} />
                </A>
              </li>
            );
          })
        )}
      </ul>
    </section>
  );
};

export default PokedexPage;

import React from 'react';
import Loader from '../../components/Loader';
import { IPokemonCard } from '../../components/PokemonCard/PokemonCard.entities';
import useData from '../../hooks/getData';

export interface IPokemonPageProps {
  id: string | number;
}

const PokemonPage: React.FC<IPokemonPageProps> = ({ id }) => {
  const { data, isLoading } = useData<IPokemonCard>('getPokemon', { id });

  if (isLoading) {
    return <Loader />;
  }

  return <div>{data?.name}</div>;
};

export default PokemonPage;

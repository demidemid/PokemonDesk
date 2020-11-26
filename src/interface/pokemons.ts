import { IPokemonCard } from '../components/PokemonCard/PokemonCard.entities';

export interface IPokemons {
  count: number;
  limit: number;
  offset: number;
  pokemons: IPokemonCard[];
  total: number;
}

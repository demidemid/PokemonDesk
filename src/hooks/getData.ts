import { useEffect, useState } from 'react';
import { IPokemonCard } from '../components/PokemonCard/PokemonCard.entities';
import req from '../utils/request';

interface IData {
  count: number;
  limit: number;
  offset: number;
  pokemons: IPokemonCard[];
  total: number;
}

interface IUseDate {
  data: IData | null;
  isLoading: boolean;
  isError: boolean;
}

const useData = (endpoint: string, query: object, deps: any[] = []): IUseDate => {
  const [data, setData] = useState<IData | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const result = await req(endpoint, query);
        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;

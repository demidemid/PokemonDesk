import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe(`getUrlWithParamsConfig`, () => {
  test(`должна принимать два аргумента "getPokemons" и пустой объект, на выходе получать объект с полями pathname, protocol, host и пустым query`, () => {
    const url = getUrlWithParamsConfig(`getPokemons`, {});

    expect(url).toEqual({
      pathname: `/api/v1/pokemons`,
      protocol: `http`,
      host: `zar.hosthot.ru`,
      query: {},
    });
  });

  test(`должна принимать два аргумента "getPokemons" и объект {name: 'Pikachu'}, на выходе получать объект с полями pathname, protocol, host и query равное 'Pikachu'`, () => {
    const url = getUrlWithParamsConfig(`getPokemons`, { name: `Pikachu` });

    expect(url).toEqual({
      pathname: `/api/v1/pokemons`,
      protocol: `http`,
      host: `zar.hosthot.ru`,
      query: { name: `Pikachu` },
    });
  });

  test(`должна принимать два аргумента "getPokemon" и {id: 25}, на выходе получать объект с полями pathname, protocol, host и пустым query`, () => {
    const url = getUrlWithParamsConfig(`getPokemon`, { id: 25 });

    expect(url).toEqual({
      pathname: `/api/v1/pokemon/25`,
      protocol: `http`,
      host: `zar.hosthot.ru`,
      query: {},
    });
  });
});

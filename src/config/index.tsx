export interface IEndpoint {
  [key: string]: {
    method: string;
    url: {
      pathname: string;
    };
  };
}

export interface IServer {
  protocol: string;
  host: string;
}

interface IConfig {
  client: {
    server: IServer;
    endpoint: IEndpoint;
  };
}

const config: IConfig = {
  client: {
    server: {
      protocol: `http`,
      host: `zar.hosthot.ru`,
    },
    endpoint: {
      getPokemons: {
        method: `GET`,
        url: {
          pathname: `/api/v1/pokemons`,
        },
      },
      getPokemon: {
        method: `GET`,
        url: {
          pathname: `/api/v1/pokemon/{id}`,
        },
      },
    },
  },
};

export default config;

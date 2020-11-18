import config from '../config';

interface IUrlWithParamsConfig {
  query: any;
  pathname: string;
  protocol: string;
  host: string;
}

function getUrlWithParamsConfig(endpointConfig: string, query: object): IUrlWithParamsConfig {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].url,
    query,
  };
}

export default getUrlWithParamsConfig;

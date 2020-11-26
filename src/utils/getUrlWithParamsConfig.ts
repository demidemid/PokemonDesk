import config from '../config';

interface IUrlWithParamsConfig {
  query: any;
  pathname: string;
  protocol: string;
  host: string;
}

function getUrlWithParamsConfig(endpointConfig: string, query: any): IUrlWithParamsConfig {
  const url: IUrlWithParamsConfig = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].url,
    query: {},
  };

  const queryValue = { ...query };

  const pathname = Object.keys(query).reduce((acc: any, val: string) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, queryValue[val]);
      delete queryValue[val];
      return result;
    }

    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = {
    ...queryValue,
  };

  return url;
}

export default getUrlWithParamsConfig;

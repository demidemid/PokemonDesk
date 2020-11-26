import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string, query: object): Promise<void> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const result = await fetch(uri).then((res) => res.json());

  return result;
}

export default req;

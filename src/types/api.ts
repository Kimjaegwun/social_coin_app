const BASE_URL = "https://api.coinpaprika.com/v1";
const COINS_URL = `${BASE_URL}/coins`;

type QueryKey = {
  queryKey: string | number[];
};
export const coins = () => fetch(COINS_URL).then((response) => response.json());

export const info = ({ queryKey }: QueryKey | any) =>
  fetch(`${COINS_URL}/${queryKey[1]}`).then((response) => response.json());

export const history = ({ queryKey }: QueryKey | any) =>
  fetch(
    `${BASE_URL}/tickers/${queryKey[1]}/historical?start=${
      new Date().toISOString().split("T")[0]
    }&interval=30m`
  ).then((response) => {
    return response.json();
  });

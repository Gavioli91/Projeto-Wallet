const URL_API = 'https://economia.awesomeapi.com.br/json/all';

const showAllCoins = async () => {
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

const fetchCoins = async () => {
  const coins = await showAllCoins();
  const keys = Object.keys(coins);
  const currencies = keys.filter((key) => key !== 'USDT');
  return { currencies };
};

export default fetchCoins;
